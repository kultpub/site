/* Mitt Julstök – personlig, läsande mobilvy för Kulturens bemanning.
   Samma Firebase-projekt och datamodell som Planera julstök.
   Inga skrivoperationer mot Firebase görs här. */
"use strict";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyChzE-zRA9__F5Z31MM_oiFlbX3k3uCZ3U",
  authDomain: "julstoket.firebaseapp.com",
  projectId: "julstoket",
  storageBucket: "julstoket.firebasestorage.app",
  messagingSenderId: "897956350339",
  appId: "1:897956350339:web:82d6aac614e94f31644eb6"
};
const STORE = {person:"mitt-julstok-person-v1",personMeta:"mitt-julstok-person-meta-v1",cache:"mitt-julstok-cache-v1-"};
const DAY_NAMES=["Fredag","Lördag","Söndag"];
const TZ="Europe/Stockholm";
const $=id=>document.getElementById(id);
const esc=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const icon=(id,cls="")=>`<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${id}"></use></svg>`;
// Sökning: å, ä och ö är egna bokstäver och behålls. Övriga accenter (t.ex. é) tas bort.
const norm=str=>String(str??"").normalize("NFC").toLocaleLowerCase("sv-SE").replace(/[^åäö]/gu,ch=>ch.normalize("NFD").replace(/[\u0300-\u036f]/g,"")).trim();
const validTime=str=>typeof str==="string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(str);
const minutes=str=>validTime(str)?Number(str.slice(0,2))*60+Number(str.slice(3)):NaN;
const intersects=(a,b)=>validTime(a?.start)&&validTime(a?.end)&&validTime(b?.start)&&validTime(b?.end) && a.start<b.end && b.start<a.end;
const unique=values=>[...new Set(values.filter(Boolean))];
const firstLetters=str=>String(str||"").trim().split(/\s+/).map(x=>x[0]||"").slice(0,2).join("").toUpperCase();
function storeGet(key){try{return localStorage.getItem(key);}catch{return null;}}
function storeSet(key,value){try{localStorage.setItem(key,value);}catch{}}
function storeDel(key){try{localStorage.removeItem(key);}catch{}}
function realToday(){return new Intl.DateTimeFormat("sv-SE",{timeZone:TZ,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());}
function realMinute(){const parts=new Intl.DateTimeFormat("sv-SE",{timeZone:TZ,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());return Number(parts.find(p=>p.type==="hour")?.value||0)*60+Number(parts.find(p=>p.type==="minute")?.value||0);}
// Testläge (endast i demoläget): ?demo=1&dag=1&nu=14:30
// dag = 0 (fredag), 1 (lördag) eller 2 (söndag); nu = starttid för testklockan, som sedan går som vanligt.
// Om bara nu anges används fredag. Utan demo=1 påverkas aldrig riktiga användare.
const TEST=(()=>{try{
  const q=new URLSearchParams(location.search);
  if(q.get("demo")!=="1")return null;
  const m=/^(\d{1,2}):(\d{2})$/.exec(q.get("nu")||"");
  const d=q.get("dag");
  let day=/^[0-2]$/.test(d||"")?Number(d):null;
  let start=null;
  if(m&&Number(m[1])<24&&Number(m[2])<60)start=Number(m[1])*60+Number(m[2]);
  if(start===null&&day===null)return null;
  if(day===null)day=0;
  return {day,start,offset:start===null?0:start-realMinute()};
}catch{return null;}})();
function stockholmToday(){return TEST?eventDates(Number(realToday().slice(0,4)))[TEST.day]:realToday();}
function stockholmMinute(){const m=realMinute();return TEST?((m+TEST.offset)%1440+1440)%1440:m;}
function stockholmYear(){return Number(stockholmToday().slice(0,4));}
function addDays(iso,days){const d=new Date(iso+"T12:00:00Z");d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10);}
function eventDates(year){const date=new Date(Date.UTC(year,11,24));date.setUTCDate(date.getUTCDate()-date.getUTCDay()-21);return [-2,-1,0].map(offset=>{let d=new Date(date);d.setUTCDate(d.getUTCDate()+offset);return d.toISOString().slice(0,10);});}
function dateLabel(iso){return new Date(iso+"T12:00:00Z").toLocaleDateString("sv-SE",{day:"numeric",month:"long",timeZone:"UTC"});}
function compactDate(iso){return new Date(iso+"T12:00:00Z").toLocaleDateString("sv-SE",{day:"numeric",month:"short",timeZone:"UTC"});}
function currentSeason(){
  const today=stockholmToday();
  const currentYear=stockholmYear();
  const nov1=`${currentYear}-11-01`;
  const sunday=eventDates(currentYear)[2];
  const thanksEnd=addDays(sunday,7);
  if(today < nov1) return {mode:"planning",year:currentYear};
  if(today <= sunday) return {mode:"active",year:currentYear};
  if(today <= thanksEnd) return {mode:"thanks",year:currentYear};
  return {mode:"planning",year:currentYear+1};
}
function dayIndexNow(){return eventDates(state.year).indexOf(stockholmToday());}
function initialDay(year){const dates=eventDates(year),today=stockholmToday();return today<=dates[0]?0:today>=dates[2]?2:dates.indexOf(today);}
function clockLabel(value){return validTime(value)?value:"–";}
function formatTel(raw){const original=String(raw||"").trim();const match=original.match(/(?:\+46|0046|0)[\d\s()\-]{6,}/);if(!match)return null;let number=match[0].replace(/[^\d+]/g,"");if(number.startsWith("0046"))number="+46"+number.slice(4);else if(number.startsWith("0"))number="+46"+number.slice(1);if(!/^\+?\d{7,15}$/.test(number))return null;return number;}
function googleMapsLink(input){const raw=String(input??"").trim();if(!raw)return "";const search=str=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(str);const coord=raw.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*[,;]\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))$/);if(coord){const [lat,lng]=[Number(coord[1]),Number(coord[2])];if(Math.abs(lat)<=90&&Math.abs(lng)<=180)return search(lat+","+lng);}
  const value=/^(?:maps\.app\.goo\.gl|goo\.gl\/maps|(?:www\.|maps\.)?google\.[a-z.]+)\//i.test(raw)?"https://"+raw:raw;
  try{const u=new URL(value);const host=u.hostname.toLowerCase();const google=/^(?:[a-z0-9-]+\.)*google\.(?:com(?:\.[a-z]{2})?|[a-z]{2,3}(?:\.[a-z]{2})?)$/.test(host);const valid=(google&&(host.startsWith("maps.")||u.pathname.startsWith("/maps")))||host==="maps.app.goo.gl"||(host==="goo.gl"&&u.pathname.startsWith("/maps"));if(["http:","https:"].includes(u.protocol)&&valid){u.protocol="https:";return u.href;}const point=u.searchParams.get("ll")||u.searchParams.get("center")||u.searchParams.get("query")||u.searchParams.get("q");if(point)return googleMapsLink(point);const coords=u.href.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);if(coords)return googleMapsLink(coords[1]+","+coords[2]);if(/^[a-z]+:/i.test(value))return "";}catch{}
  if(/^\w+:\/\//.test(raw))return "";return search(raw);
}
function mapButton(place){const url=googleMapsLink(place?.mapsUrl);return url?`<a class="map-button" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="Öppna ${esc(place.name)} i Google Maps">Google Maps ${icon("external","sm")}</a>`:"";}
function phoneLink(person){const raw=phoneOf(person);const number=formatTel(raw);return number?`<a class="phone-link" href="tel:${esc(number)}" aria-label="Ring ${esc(person.name)} på ${esc(raw)}">${icon("phone","sm")}${esc(raw)}</a>`:raw?`<span class="smallmuted">Telefon: ${esc(raw)}</span>`:"";}
function nameButton(person){return `<button class="name-link" type="button" data-action="person" data-id="${esc(person.id)}">${esc(person.name)}</button>`;}
const season=currentSeason();
const state={year:season.year,seasonMode:season.mode,day:0,view:"home",personId:storeGet(STORE.person)||"",detailPersonId:null,search:"",query:"",personFrom:null,searchScroll:0,nameSearch:"",placeSearch:"",plan:null,registerPeople:[],registerPlaces:[],loadedAt:null,status:"loading",error:"",demo:false,cached:false,shareMessage:""};
state.day=initialDay(state.year);
let firestore=null,stopPlan=null,stopPeople=null,stopPlaces=null,minuteTimer=null,toastTimer=null;
function planPeople(){return (state.plan?.people||[]).filter(p=>p&&p.id&&p.name).sort((a,b)=>a.name.localeCompare(b.name,"sv"));}
function namedPerson(id){return planPeople().find(p=>p.id===id)||null;}
function currentPerson(){return namedPerson(state.personId);}
function rememberPerson(person){if(!person)return;state.personId=person.id;storeSet(STORE.person,person.id);storeSet(STORE.personMeta,JSON.stringify({directoryId:person.directoryId||person.id,name:person.name}));}
function reconcilePerson(){if(!state.plan)return;if(currentPerson())return;let meta=null;try{meta=JSON.parse(storeGet(STORE.personMeta)||"null");}catch{}const found=meta?planPeople().find(p=>(p.directoryId||p.id)===meta.directoryId)||planPeople().find(p=>norm(p.name)===norm(meta.name)):null;if(found)rememberPerson(found);else{state.personId="";storeDel(STORE.person);}}
function namedActivity(id){return (state.plan?.activities||[]).find(a=>a.id===id)||null;}
function registeredPerson(person){if(!person)return null;const dir=state.registerPeople;return dir.find(p=>p.id===person.directoryId)||dir.find(p=>p.id===person.id)||dir.find(p=>norm(p.name)===norm(person.name))||null;}
function phoneOf(person){return String(person?.phone||registeredPerson(person)?.phone||"").trim();}
// Kartlänken ska komma från just den platsens ID. Platsregistrets aktuella
// värde har företräde framför årsplanens eventuellt äldre kopia.
// Vi försöker aldrig gissa en position från platsnamnet eller återanvända en annan plats koordinater.
function locationOf(id){
  if(id===null||id===undefined||id==="")return {id:null,name:"Allmänt",description:"",mapsUrl:""};
  const registered=state.registerPlaces.find(p=>p.id===id);
  const planned=(state.plan?.places||[]).find(p=>p.id===id);
  if(registered)return {...(planned||{}),...registered,mapsUrl:registered.mapsUrl||""};
  if(planned)return {...planned,mapsUrl:planned.mapsUrl||""};
  return {id,name:"Plats ej angiven",description:"",mapsUrl:""};
}
function isGeneral(place){return !place||place.name==="Allmänt"||norm(place.name)==="allmänt"||norm(place.name)==="ej platsspecifik";}
function assignments(personId,day){return (state.plan?.assignments||[]).filter(s=>s.personId===personId&&(day==null||s.day===day)&&validTime(s.start)&&validTime(s.end)).sort((a,b)=>a.day-b.day||a.start.localeCompare(b.start)||a.end.localeCompare(b.end));}
function activityFor(s){return namedActivity(s.activityId);}
function placeForShift(s){return locationOf(activityFor(s)?.placeId??null);}
function availableRanges(p,day){return (p?.availability||[]).filter(a=>a.day===day&&validTime(a.start)&&validTime(a.end)).sort((a,b)=>a.start.localeCompare(b.start));}
function breaksOf(s){const a=activityFor(s);const source=(a?.staffingPattern?.shifts||[]).find(x=>x.id===s.patternShiftId);
  const pauses=(s.breaks||[]).filter(p=>validTime(p.start)&&validTime(p.end)).map(p=>({...p}));
  for(const p of source?.breaks||[]){if(!validTime(p.start)||!validTime(p.end)||p.start<s.start||p.end>s.end)continue;if(s.patternRowIds?.length&&!s.patternRowIds.includes(source.id+":pause:"+p.id))continue;if(!pauses.some(item=>item.start===p.start&&item.end===p.end))pauses.push({...p});}
  return pauses.sort((a,b)=>a.start.localeCompare(b.start));}
function withinTime(s,m){return minutes(s.start)<=m&&m<minutes(s.end);}
function onPause(s,m){return breaksOf(s).some(p=>withinTime(p,m));}
function realWorkSegments(s){if(!validTime(s?.start)||!validTime(s?.end))return [];let parts=[{start:s.start,end:s.end}];for(const p of breaksOf(s)){parts=parts.flatMap(r=>{if(!intersects(r,p))return [r];return [{start:r.start,end:p.start},{start:p.end,end:r.end}].filter(v=>v.start<v.end);});}if(s.kind==="relief"&&Array.isArray(s.coveragePeriods)){return parts.flatMap(p=>s.coveragePeriods.map(c=>({start:p.start>c.start?p.start:c.start,end:p.end<c.end?p.end:c.end})).filter(x=>x.start<x.end));}return parts;}
function effectivelyWorkingTogether(a,b){return realWorkSegments(a).some(x=>realWorkSegments(b).some(y=>intersects(x,y)));}
// En specificerad plats ger kollegor som arbetar där samtidigt, även med olika aktiviteter.
// "Allmänt" / "Ej platsspecifik" är ingen fysisk plats: där krävs i stället
// både samma aktivitet och överlappande effektiv arbetstid för att visa kollegor.
function colocation(s){
  const activity=activityFor(s);
  if(!activity)return [];
  const placeId=activity.placeId;
  const general=placeId===null||placeId===undefined||placeId===""||isGeneral(locationOf(placeId));
  const others=(state.plan?.assignments||[]).filter(x=>
    x.id!==s.id && x.personId!==s.personId && x.day===s.day &&
    (general ? x.activityId===s.activityId : activityFor(x)?.placeId===placeId) &&
    effectivelyWorkingTogether(x,s)
  );
  return unique(others.map(x=>x.personId)).map(namedPerson).filter(Boolean)
    .sort((a,b)=>a.name.localeCompare(b.name,"sv"));
}
// För en paus kopplas avlösaren i första hand via passmodellens reliefPeriods.breakId.
function reliefForPause(s,pause){const a=activityFor(s);const source=(a?.staffingPattern?.shifts||[]).find(x=>x.id===s.patternShiftId);
  const modelPause=source?.breaks?.find(p=>p.id===pause.id||(p.start===pause.start&&p.end===pause.end));
  const matches=(a?.staffingPattern?.shifts||[]).filter(r=>r.kind==="relief"&&r.day===s.day&&(r.reliefPeriods||[]).some(q=>q.breakId===(modelPause?.id||pause.id)));
  const hasLinks=(a?.staffingPattern?.shifts||[]).some(r=>r.kind==="relief"&&r.day===s.day&&(r.reliefPeriods||[]).length);
  const candidate=(state.plan?.assignments||[]).filter(x=>x.activityId===s.activityId&&x.day===s.day&&x.kind==="relief"&&x.personId&&x.personId!==s.personId&&intersects(x,pause)&&
    (matches.length?matches.some(r=>r.id===x.patternShiftId):!hasLinks&&(x.coveragePeriods?.length?x.coveragePeriods.some(r=>intersects(r,pause)):x.start<=pause.start&&x.end>=pause.end)));
  return unique(candidate.map(x=>x.personId)).map(namedPerson).filter(Boolean);
}
function relievedByMe(s){if(s.kind!=="relief")return [];const a=activityFor(s);const source=(a?.staffingPattern?.shifts||[]).find(x=>x.id===s.patternShiftId);
  if(!source?.reliefPeriods?.length)return [];
  const sourceIds=(a.staffingPattern?.shifts||[]).filter(owner=>owner.kind!=="relief"&&(owner.breaks||[]).some(p=>(source.reliefPeriods||[]).some(q=>q.breakId===p.id&&intersects(p,s)))).map(x=>x.id);
  return unique((state.plan?.assignments||[]).filter(x=>x.activityId===s.activityId&&x.day===s.day&&x.personId!==s.personId&&sourceIds.includes(x.patternShiftId)).map(x=>x.personId)).map(namedPerson).filter(Boolean);
}
// Överlämning gäller ordinarie pass i samma aktivitet och dag; glapp är tillåtna.
// Kombinera faktiska tilldelningar med de delar av planerade pass som saknar person.
function staffingSlots(s){
  const assigned=(state.plan?.assignments||[]).filter(x=>x.day===s.day&&x.activityId===s.activityId&&x.kind==="ordinary"&&x.personId&&validTime(x.start)&&validTime(x.end)&&x.start<x.end);
  const slots=assigned.map((x,i)=>({...x,slotKey:x.id||"assigned:"+i}));
  const activity=activityFor(s);
  const plannedShifts=activity?.staffingPattern?.shifts?.length?activity.staffingPattern.shifts:
    (activity?.requirements||[]).flatMap(r=>Array.from({length:Math.max(0,Number(r.count??1)||0)},(_,i)=>
      ({...r,id:r.id+":"+i,requirementId:r.id,kind:"ordinary",breaks:[]})));
  const usedLegacy=new Set();
  for(const planned of plannedShifts){
    if(planned.day!==s.day||planned.kind!=="ordinary"||!validTime(planned.start)||!validTime(planned.end)||planned.start>=planned.end)continue;
    let linked=assigned.filter(x=>x.patternShiftId===planned.id||
      (!activity?.staffingPattern?.shifts?.length&&!usedLegacy.has(x.id)&&
       (x.requirementId===planned.requirementId||!x.requirementId)&&x.start<planned.end&&x.end>planned.start)||
      (!x.patternShiftId&&activity?.staffingPattern?.shifts?.length&&x.start===planned.start&&x.end===planned.end));
    if(!activity?.staffingPattern?.shifts?.length){linked=linked.slice(0,1);linked.forEach(x=>usedLegacy.add(x.id));}
    let gaps=[{start:planned.start,end:planned.end}];
    for(const covered of [...linked,...(planned.breaks||[])]){
      if(!validTime(covered.start)||!validTime(covered.end))continue;
      gaps=gaps.flatMap(g=>covered.start>=g.end||covered.end<=g.start?[g]:
        [{start:g.start,end:covered.start<g.end?covered.start:g.end},
         {start:covered.end>g.start?covered.end:g.start,end:g.end}].filter(x=>x.start<x.end));
    }
    for(const gap of gaps)slots.push({...gap,day:s.day,activityId:s.activityId,kind:"ordinary",
      patternShiftId:planned.id,personId:null,slotKey:"vacant:"+planned.id+":"+gap.start});
  }
  return slots;
}
function staffingPerson(slot){
  return slot.personId?namedPerson(slot.personId):{id:null,name:"(Ej bemannad)"};
}
function staffingName(person){
  return person?.id?nameButton(person):esc("(Ej bemannad)");
}
function handoverPeers(s){
  if(s.kind!=="ordinary")return [];
  return staffingSlots(s).filter(x=>s.slotKey?x.slotKey!==s.slotKey&&
    (!s.personId||x.personId!==s.personId):!s.personId||x.personId!==s.personId);
}
// En kort överlappning vid passbyte är tillåten, men inte parallellt arbete.
function worksAlone(s){
  return !handoverPeers(s).some(x=>{
    const overlap=minutes(x.end<s.end?x.end:s.end)-minutes(x.start>s.start?x.start:s.start);
    if(overlap<=0)return false;
    const boundary=Math.min(Math.abs(minutes(x.end)-minutes(s.start)),Math.abs(minutes(x.start)-minutes(s.end)));
    return overlap>30||boundary>30||
      (x.start===s.start&&x.end===s.end);
  });
}
function handover(s,edge){
  if(s.kind!=="ordinary"||!worksAlone(s))return [];
  const before=edge==="before";
  const candidates=handoverPeers(s).filter(x=>
    (before?x.start<s.start&&x.end<s.end:x.start>s.start&&x.end>s.end)&&
    Math.abs(minutes(before?x.end:x.start)-minutes(before?s.start:s.end))<=30&&worksAlone(x));
  if(!candidates.length)return [];
  const key=before?"end":"start",boundary=before?s.start:s.end;
  const nearest=Math.min(...candidates.map(x=>Math.abs(minutes(x[key])-minutes(boundary))));
  const matches=candidates.filter(x=>Math.abs(minutes(x[key])-minutes(boundary))===nearest);
  // Flera möjliga ersättare ska inte framställas som ett entydigt personbyte.
  if(unique(matches.map(x=>x.personId||x.slotKey)).length!==1)return [];
  return [{person:staffingPerson(matches[0]),slotKey:matches[0].slotKey,time:matches[0][key]}];
}
function handoverNames(items,edge){
  return items.map(item=>staffingName(item.person)+" kl. "+esc(item.time)).join("; ");
}
// Bemanningsförändringar i samma aktivitet; pausavlösningar visas för sig.
function staffingChanges(s,prev,next){
  if(s.kind!=="ordinary")return [];
  const rows=[];
  const add=(kind,time,slot,end)=>{
    const personId=slot.personId,slotKey=slot.slotKey;
    if(!rows.some(r=>r.kind===kind&&r.time===time&&r.slotKey===slotKey&&r.end===end))
      rows.push({kind,time,personId,slotKey,end,person:staffingPerson(slot)});
  };
  const previousIds=new Set(prev.map(x=>x.slotKey));
  const nextIds=new Set(next.map(x=>x.slotKey));
  for(const x of handoverPeers(s)){
    if(x.start>s.start&&x.start<s.end&&!nextIds.has(x.slotKey)){
      add("join",x.start,x,x.end>s.end?x.end:null);
    }
    if(x.end>s.start&&x.end<s.end&&!previousIds.has(x.slotKey)){
      add("leave",x.end,x,null);
    }
    if(x.start<=s.start&&x.end>=s.end&&!nextIds.has(x.slotKey)){
      add(x.end===s.end?"whole":"continue",s.end,x,x.end>s.end?x.end:null);
    }
  }
  return rows.sort((a,b)=>a.time.localeCompare(b.time)||a.kind.localeCompare(b.kind)||
    a.person.name.localeCompare(b.person.name,"sv"));
}
function staffingChangesHtml(rows){
  const groups=[];
  for(const row of rows){
    let group=groups.find(g=>g.kind===row.kind&&g.time===row.time&&g.end===row.end);
    if(!group){group={...row,people:[]};groups.push(group);}
    group.people.push(row.person);
  }
  return groups.map(g=>{
    const label=g.kind==="join"?"Ansluter kl. "+g.time:
      g.kind==="leave"?"Slutar kl. "+g.time:
      g.kind==="whole"?"Arbetar hela ditt pass":"Arbetar hela ditt pass och fortsätter efter dig";
    return `<div class="info-row">${icon("users","sm")}<span>${esc(label)}: ${g.people.map(staffingName).join(", ")}${g.end?", till kl. "+esc(g.end):""}</span></div>`;
  }).join("");
}
// Font Awesome Free 6.7.2 circle-plus / circle-minus, CC BY 4.0.
// https://fontawesome.com/license/free — Copyright 2024 Fonticons, Inc.
const STAFFING_ICONS={"join": "<svg aria-hidden=\"true\" focusable=\"false\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"display:block;flex:none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d=\"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z\"/></svg>", "leave": "<svg aria-hidden=\"true\" focusable=\"false\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"display:block;flex:none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d=\"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z\"/></svg>"};
function staffingEventIcon(event){
  return `<span style="display:inline-flex;color:${event==="leave"?"#b42318":event==="join"?"#167548":"#66736c"}">${STAFFING_ICONS[event]}</span>`;
}
function colleaguesTable(s,prev,next){
  const excluded=new Set([...prev,...next].map(x=>x.slotKey));
  const rows=[];
  // Den här tabellen gäller aktiviteten och dagen, inte andra jobb på samma plats.
  const relevant=(state.plan?.assignments||[]).filter(x=>
    x.activityId===s.activityId&&x.day===s.day&&x.personId&&x.personId!==s.personId&&
    validTime(x.start)&&validTime(x.end)&&x.start<=s.end&&x.end>=s.start);
  for(const x of relevant){
    if(excluded.has(x.id)&&x.kind!=="relief")continue;
    const person=namedPerson(x.personId);
    if(!person)continue;
    // Avlösaren ska synas även när du själv har paus.
    const periods=realWorkSegments(x);
    for(const period of periods){
      if(period.start>s.end||period.end<s.start)continue;
      if(!rows.some(r=>r.personId===x.personId&&r.start===period.start&&r.end===period.end))
        rows.push({...x,...period,person});
    }
  }
  for(const x of staffingSlots(s).filter(x=>!x.personId&&x.start<=s.end&&x.end>=s.start&&!excluded.has(x.slotKey)))
    rows.push({...x,person:staffingPerson(x)});
  const events=[];
  for(const row of rows){
    if(row.start<s.start&&row.end>s.end){
      events.push({...row,event:"whole",time:"99:99",order:2});
      continue;
    }
    let changed=false;
    if(row.end>=s.start&&row.end<=s.end){
      events.push({...row,event:"leave",time:row.end,order:0});changed=true;
    }
    if(row.start>=s.start&&row.start<=s.end){
      events.push({...row,event:"join",time:row.start,order:1});changed=true;
    }
    if(!changed)events.push({...row,event:"whole",time:"99:99",order:2});
  }
  // Återkomster efter en tidigare avgång i det egna passet går först vid lika tid.
  const priority=event=>event.event==="join"&&events.some(previous=>
    previous.event==="leave"&&event.person.id&&previous.person.id===event.person.id&&
    previous.time<event.time)?-1:event.order;
  events.sort((a,b)=>a.time.localeCompare(b.time)||priority(a)-priority(b)||
    a.person.name.localeCompare(b.person.name,"sv"));
  if(!events.length)return "";
  const timeCell=x=>`<td style="text-align:right;vertical-align:top;white-space:nowrap;padding:7px 0 7px 10px;border-top:1px solid #dce5dc"><span style="display:inline-flex;align-items:center;gap:7px">${x.event==="whole"?"":`<span class="sr-only">${x.event==="leave"?"Slutar":"Ansluter"} </span>`}${x.event==="whole"?"":staffingEventIcon(x.event)}<span>${x.event==="whole"?"Hela passet":esc(x.time)}</span></span></td>`;
  return `<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th scope="col" style="text-align:left;padding:0 8px 8px 0">Kollegor under ditt pass</th><th scope="col" style="text-align:right;padding:0 0 8px 10px">Tid</th></tr></thead><tbody>${events.map(x=>`<tr><td style="padding:7px 8px 7px 0;border-top:1px solid #dce5dc">${staffingName(x.person)}</td>${timeCell(x)}</tr>`).join("")}</tbody></table>`;

}
function reliefTimesFor(s,person){
  const periods=[];
  for(const owner of assignments(person.id,s.day).filter(x=>x.activityId===s.activityId&&x.kind!=="relief")){
    for(const pause of breaksOf(owner)){
      for(const part of realWorkSegments(s)){
        const start=pause.start>part.start?pause.start:part.start;
        const end=pause.end<part.end?pause.end:part.end;
        if(start<end&&!periods.some(p=>p.start===start&&p.end===end))periods.push({start,end});
      }
    }
  }
  return periods.sort((a,b)=>a.start.localeCompare(b.start)).map(p=>"kl. "+p.start+"–"+p.end).join(", ");
}
function timeState(s){if(dayIndexNow()!==state.day)return "planned";const m=stockholmMinute();if(m>=minutes(s.end))return "done";if(m<minutes(s.start))return "next";return onPause(s,m)?"break":"live";}
function activeNow(personId){const day=dayIndexNow();if(day<0)return [];const m=stockholmMinute();return assignments(personId,day).filter(s=>withinTime(s,m));}
function saveCache(){if(!state.plan||state.demo)return;try{storeSet(STORE.cache+state.year,JSON.stringify({plan:state.plan,registerPeople:state.registerPeople,registerPlaces:state.registerPlaces,at:new Date().toISOString()}));}catch{}}
function readCache(year){try{const value=JSON.parse(storeGet(STORE.cache+year)||"null");if(value?.plan?.year===year&&Array.isArray(value.plan.people)&&Array.isArray(value.plan.assignments)){state.plan=value.plan;state.registerPeople=value.registerPeople||[];state.registerPlaces=value.registerPlaces||[];state.loadedAt=value.at||null;state.cached=true;state.status="cached";return true;}}catch{}return false;}
function toast(msg){const el=$("toast");el.textContent=msg;el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{el.hidden=true;},3300);}
function datesHeading(day){const days=eventDates(state.year);return DAY_NAMES[day]+" "+dateLabel(days[day]);}
function renderStatus(){if(state.demo)return `<span class="statusline warning">${icon("info","sm")} Demonstration – fiktiva uppgifter${TEST?` · testtid${TEST.start!==null?" från "+String(Math.floor(TEST.start/60)).padStart(2,"0")+":"+String(TEST.start%60).padStart(2,"0"):""}`:""}</span>`;if(state.status==="live")return `<span class="statusline">${icon("check","sm")} Uppdaterat från planeringen</span>`;if(state.cached||state.status==="cached")return `<span class="statusline warning">${icon("wifi-off","sm")} Sparad kopia${state.loadedAt?" · "+esc(new Date(state.loadedAt).toLocaleString("sv-SE",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})):""}</span>`;if(state.status==="error")return `<span class="statusline warning">${icon("info","sm")} Kunde inte hämta aktuella uppgifter</span>`;return `<span class="statusline">${icon("clock","sm")} Hämtar senaste schema…</span>`;}
function shell(body){const p=currentPerson();return `<main class="shell"><header class="top"><div class="topbar"><div><h1 class="brand">Mitt Julstök</h1><button class="who" type="button" data-action="choose" style="border:0;padding:0;background:transparent">${icon("user","sm")} ${esc(p?.name||"Välj namn")} ${icon("chevron","sm")}</button></div><div class="top-actions"><button type="button" class="top-icon" aria-label="Instruktioner till alla" title="Instruktioner till alla" data-action="view" data-view="info">${icon("info","lg")}</button><button class="top-icon" aria-label="Sök" title="Sök" data-action="view" data-view="search">${icon("search","lg")}</button></div></div>${renderStatus()}</header><div class="content">${body}</div></main><nav class="bottom-nav" aria-label="Huvudmeny"><div class="nav-inner">${[["home","calendar","Min dag"],["people","users","Kollegor"],["places","pin","Platser"],["share","share","Dela"]].map(([v,i,l])=>`<button type="button" data-action="view" data-view="${v}" class="nav-btn ${state.view===v?"selected":""}" ${state.view===v?'aria-current="page"':""}>${icon(i)}<span>${l}</span></button>`).join("")}</div></nav>`;}
function renderNameSelect(){const everyone=planPeople(),list=everyone.filter(p=>norm(p.name).includes(norm(state.nameSearch))||norm(phoneOf(p)).includes(norm(state.nameSearch)));return `<div class="overlay"><section class="overlay-inner"><div class="overlay-head"><div class="overlay-mark"><img src="icon-192.png" alt=""></div><h1>Mitt Julstök</h1><p>Välj ditt namn för att se dina arbetspass, pauser och kollegor. Du behöver normalt bara välja en gång på den här telefonen.</p></div>${state.error&&!state.cached?`<div class="notice">${esc(state.error)}</div>`:""}<label for="nameInput" class="sr-only">Sök ditt namn</label><div class="search">${icon("search")}<input id="nameInput" autocomplete="off" type="search" placeholder="Skriv ditt namn…" value="${esc(state.nameSearch)}" autofocus></div><div class="list-title">${everyone.length?`${list.length} av ${everyone.length} medarbetare`:"Personal"}</div><div class="rows" id="nameResults">${list.length?list.slice(0,100).map(p=>`<button type="button" class="rowlink" data-action="set-person" data-id="${esc(p.id)}"><strong>${esc(p.name)}</strong>${icon("chevron")}</button>`).join(""): `<div class="empty"><p>${everyone.length?"Inget namn matchar din sökning.":state.status==="loading"?"Hämtar personalregistret…":"Det finns ännu ingen personal inlagd för årets Julstök."}</p></div>`}</div><p class="system-notice">Ditt namnval sparas lokalt i webbläsaren.</p>${state.status==="error"?`<button class="action-btn outline block" data-action="retry">Försök ansluta igen</button>`:""}<div class="system-notice">${state.demo?"Exempelläget visar ingen riktig personal eller bemanning.":""}</div></section></div>`;}
function renderDays(){const dates=eventDates(state.year),today=dayIndexNow();return `<div class="days" role="group" aria-label="Välj dag">${dates.map((d,i)=>`<button type="button" class="day ${state.day===i?"selected":""} ${i===today?"today":""}" data-action="day" data-day="${i}" aria-pressed="${state.day===i}"><strong>${DAY_NAMES[i]}</strong><small>${compactDate(d)}</small></button>`).join("")}</div>`;}
function renderAlert() {
  const hasError = Boolean(state.error);
  const showConnectionError = hasError && !state.cached && !state.demo;
  const showCachedWarning = hasError && state.cached && state.status !== "live";

  if (showConnectionError) {
    return `
      <div class="notice">
        <strong>Ingen anslutning till årsplanen.</strong><br>
        ${esc(state.error)}
        <div class="actions" style="margin-top:11px">
          <button class="action-btn outline" data-action="retry">Försök igen</button>
          <button class="action-btn secondary" data-action="demo">Visa exempel</button>
        </div>
      </div>`;
  }

  if (showCachedWarning) {
    return `<div class="notice">Visar senast sparade schema. Uppgifter kan ha ändrats sedan dess.</div>`;
  }

  return "";
}
function workingSummary(p,day){const av=availableRanges(p,day);return av.length?av.map(x=>`${x.start}–${x.end}`).join(", "):"Arbetstid ej registrerad";}

// Lodrätt personligt Gantt – tiden går nedåt, med egen stapel längst till vänster.
// Kollegurval och Gantt-axel begränsas till användarens exakta arbetstid.
// Endast hela timmar visas i tidskolumnen. Avvikande start-/sluttider
// markeras med små etiketter intill den blå stapeln.
// Den egna stapeln visar alltid exakt det egna arbetstillfället.
// Varje stapel visar sina egna klockslag, så att inget behöver avläsas mot en skala.
const GANTT_PX_PER_MINUTE=1.1;
const GANTT_HEAD=46; // Högre rubrikrad: första heltimmen ryms ovanför startlinjen
const GANTT_EDGE_PADDING=0; // Ingen luft mellan rubrikraden och arbetspassets exakta start
const GANTT_FOOT=0; // Tidsytan slutar exakt vid min blå stapels slut
function personalGantt(s){
  const start=minutes(s.start),end=minutes(s.end);
  if(!Number.isFinite(start)||!Number.isFinite(end)||end<=start)return "";
  const axisStart=start;
  const axisEnd=end;
  const height=Math.max(80,Math.round((axisEnd-axisStart)*GANTT_PX_PER_MINUTE));
  const same=(state.plan?.assignments||[]).filter(x=>x.day===s.day&&x.activityId===s.activityId&&
    x.personId&&x.personId!==s.personId&&validTime(x.start)&&validTime(x.end)&&minutes(x.start)<axisEnd&&minutes(x.end)>axisStart);
  // Varje sammanhängande arbetstillfälle får en egen kolumn.
  // Registrerade pauser delar inte upp arbetstillfället. Separata pass med
  // ett verkligt glapp blir däremot separata kolumner även för samma person.
  const groups=[];
  const ordered=[...same].sort((a,b)=>a.start.localeCompare(b.start)||a.end.localeCompare(b.end));
  for(const x of ordered){
    const a=minutes(x.start),b=minutes(x.end);
    const previous=groups.findLast(g=>g.personId===x.personId&&g.kind===x.kind&&g.end===a);
    const group=previous||{personId:x.personId,kind:x.kind,start:a,end:b,assignments:[]};
    if(!previous)groups.push(group);
    group.end=Math.max(group.end,b);
    group.assignments.push(x);
  }
  const others=groups.map(g=>{
    const segments=[];
    for(const x of g.assignments){
      for(const segment of realWorkSegments(x)){
        const rs=minutes(segment.start),re=minutes(segment.end);
        const a=Math.max(axisStart,rs),b=Math.min(axisEnd,re);
        if(a<b)segments.push({start:a,end:b,cutTop:rs<axisStart,cutBottom:re>axisEnd,realStart:rs,realEnd:re});
      }
    }
    segments.sort((p,q)=>p.start-q.start||p.end-q.end);
    // En avlösare kan täcka flera personer i följd. När täckningsperioderna
    // möts (eller överlappar) utan avbrott visas EN sammanhängande stapel.
    // Verkliga glapp och registrerade pauser ska däremot förbli synliga.
    if(g.kind==="relief"){
      const joined=[];
      for(const segment of segments){
        const last=joined[joined.length-1];
        if(last&&segment.start<=last.end){
          if(segment.end>last.end){
            last.end=segment.end;
            last.realEnd=segment.realEnd;
            last.cutBottom=segment.cutBottom;
          }
        }else joined.push({...segment});
      }
      segments.splice(0,segments.length,...joined);
    }
    // Kollegors registrerade pauser visas i samma kolumn som deras arbetstillfälle.
    // Klipp pauser till mitt pass och slå ihop överlappande pausintervall.
    const pauseParts=g.assignments.flatMap(x=>breaksOf(x).map(p=>({
      start:Math.max(axisStart,minutes(p.start)),end:Math.min(axisEnd,minutes(p.end)),
      type:p.type||"Paus"
    })).filter(p=>Number.isFinite(p.start)&&Number.isFinite(p.end)&&p.start<p.end));
    pauseParts.sort((a,b)=>a.start-b.start||a.end-b.end);
    const colleaguePauses=[];
    for(const pause of pauseParts){
      const last=colleaguePauses[colleaguePauses.length-1];
      if(last&&pause.start<=last.end)last.end=Math.max(last.end,pause.end);
      else colleaguePauses.push({...pause});
    }
    return {personId:g.personId,name:namedPerson(g.personId)?.name||"",start:g.start,end:g.end,segments,pauses:colleaguePauses};
  }).filter(p=>p.name&&p.segments.length)
    // Grupp 1: redan på plats vid min start (inklusive samma starttid),
    // sorterade efter verklig sluttid. Grupp 2: ansluter senare under
    // mitt arbetstillfälle, sorterade efter verklig starttid.
    // Vid lika huvudtid används den andra tidsgränsen, därefter namn.
    .sort((p,q)=>{
      const pHere=p.start<=start,qHere=q.start<=start;
      if(pHere!==qHere)return pHere?-1:1;
      return (pHere?p.end-q.end||p.start-q.start:p.start-q.start||p.end-q.end)
        ||p.name.localeCompare(q.name,"sv");
    });
  const fmt=t=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`;
  if(!others.length)return "";
  const mine=realWorkSegments(s).map(p=>({start:minutes(p.start),end:minutes(p.end),cutTop:false,cutBottom:false,realStart:minutes(p.start),realEnd:minutes(p.end)}));
  // Samma regel för MIN avlösning som för kollegors avlösningar:
  // flera täckningsperioder utan tidsmässigt glapp ska ge en enda blå stapel.
  // realWorkSegments har redan tagit bort registrerade pauser, så glapp bevaras.
  if(s.kind==="relief"){
    mine.sort((a,b)=>a.start-b.start||a.end-b.end);
    const joined=[];
    for(const segment of mine){
      const last=joined[joined.length-1];
      if(last&&segment.start<=last.end){
        if(segment.end>last.end){last.end=segment.end;last.realEnd=segment.realEnd;}
      }else joined.push({...segment});
    }
    mine.splice(0,mine.length,...joined);
  }
  const lanes=[{name:"Jag",self:true,segments:mine},...others];
  const pauses=breaksOf(s).map(p=>({a:Math.max(start,minutes(p.start)),b:Math.min(end,minutes(p.end)),type:p.type||"Paus"})).filter(p=>p.a<p.b);
  const pauseText=pauses.map(p=>`${p.type} ${fmt(p.a)}–${fmt(p.b)}`).join(", ");
  const isToday=dayIndexNow()===s.day;
  const heading=`<div class="pg-heading">Kollegor under mitt pass</div>`;
  const trackHeight=height;
  const yFor=t=>(t-axisStart)/(axisEnd-axisStart)*height;
  // Endast hela timmar i Tid-kolumnen; aldrig start/slut som extra tick.
  // Min egen exakta start och sluttid syns i stället vid den blå stapeln.
  const ticks=[];
  for(let t=Math.ceil(axisStart/60)*60;t<=axisEnd;t+=60)ticks.push(t);
  // Den blå bakgrunden täcker hela MITT arbetstillfälle (inklusive paus).
  // Ingen del av tidsytan får fortsätta nedanför den egna sluttiden.
  const grid=ticks.map(t=>`<div class="vg-tick${t===axisStart?" vg-first":""}${t===axisEnd?" vg-last":""}" style="top:${Math.min(trackHeight-1,yFor(t))}px"><span>${esc(fmt(t))}</span></div>`).join("");
  const lines=ticks.map(t=>`<i class="vg-hl" style="top:${Math.min(trackHeight-1,yFor(t))}px"></i>`).join("");
  const pauseBars=periods=>periods.map(p=>`<span class="vg-bar vg-bar-pause" style="top:${yFor(p.a)}px;height:${Math.max(2,yFor(p.b)-yFor(p.a))}px" title="${esc(p.type+' '+fmt(p.a)+'–'+fmt(p.b))}"></span>`).join("");
  const pbars=pauseBars(pauses);
  const bar=(seg,self)=>{
    const top=yFor(seg.start),h=Math.max(2,yFor(seg.end)-top),range=fmt(seg.start)+"–"+fmt(seg.end);
    const cut=(seg.cutTop?' vg-cut-top':'')+(seg.cutBottom?' vg-cut-bottom':'');
    return `<span class="vg-bar${self?' vg-bar-me':''}${cut}" style="top:${top}px;height:${h}px" title="${esc(range)}"></span>`;
  };
  // Tunn hjälplinje från siffran ner till början av kollegans sista arbetstid.
  const guide=person=>{
    if(person.self||!person.segments.length)return '';
    const h=yFor(person.segments[person.segments.length-1].start);
    return h>3?`<i class="vg-guide" style="height:${h}px"></i>`:'';
  };
  const badge=(person,n)=>person.self?'<b class="vg-num vg-num-me">Jag</b>':`<b class="vg-num">${n}</b>`;
  let counter=0;const nums=lanes.map(p=>p.self?0:++counter);
  // Exakt start/slut visas endast för den blå stapeln när tiden inte är hel.
  // Etiketterna placeras inom Gantt-ytan och ändrar inte tidsskalan.
  const myEdgeLabels=`${start%60?`<span class="vg-my-edge vg-my-edge-start" title="Min starttid">${esc(fmt(start))}</span>`:''}${end%60?`<span class="vg-my-edge vg-my-edge-end" title="Min sluttid">${esc(fmt(end))}</span>`:''}`;
  const columns=lanes.map((person,i)=>`<div class="vg-person${person.self?' vg-self':''}"><div class="vg-person-label" title="${esc(person.name)}">${badge(person,nums[i])}</div><div class="vg-person-track" style="height:${trackHeight}px">${lines}${guide(person)}${person.segments.map(p=>bar(p,person.self)).join('')}${person.self?pbars+myEdgeLabels:pauseBars((person.pauses||[]).map(p=>({a:p.start,b:p.end,type:p.type})))}</div></div>`).join('');
  const selfWidth=others.length>=5?60:others.length>=3?64:70;
  const colleagueCount=new Set(others.map(p=>p.personId)).size;
  const note=colleagueCount===1?"Här visas din kollegas faktiska start- och sluttid.":"Här visas dina kollegors faktiska start- och sluttider.";
  const key=others.map((p,i)=>`<li>${badge(p,i+1)}<span class="vg-key-name">${esc(p.name)}</span><span class="vg-key-time"><span>${esc(fmt(p.start)+"–"+fmt(p.end))}</span></span></li>`).join("");
  return `<div class="personal-gantt vertical-gantt" data-axis-start="${axisStart}" data-axis-end="${axisEnd}" aria-label="Kollegor under mitt pass ${esc(s.start)} till ${esc(s.end)}">
    ${heading}
    <div class="vg-scroll" tabindex="0" aria-label="Kollegornas tider under mitt pass, tiden går nedåt">
      <div class="vg-chart" style="--vg-time-width:46px;--vg-min:34px;--vg-self-width:${selfWidth}px;--vg-n:${lanes.length};height:${trackHeight+GANTT_HEAD}px">
        <div class="vg-timecol"><div class="vg-time-label">Tid</div><div class="vg-time-track" style="height:${trackHeight}px">${grid}</div></div>
        ${columns}
        ${isToday?`<div class="vg-now" hidden aria-label="Aktuell tid"></div>`:''}
      </div>
    </div>
    <ol class="vg-key">${key}</ol>
    <p class="pg-note">${esc(note)}</p>
  </div>`;
}
function updateGanttClock(){
  const now=stockholmMinute();
  document.querySelectorAll('.vertical-gantt').forEach(chart=>{
    const pass=chart.closest('[data-pass-day]');if(!pass)return;
    const start=minutes(pass.dataset.start),end=minutes(pass.dataset.end),marker=chart.querySelector('.vg-now');
    if(!marker)return;
    const visible=dayIndexNow()===Number(pass.dataset.passDay)&&now>=start&&now<=end;
    marker.hidden=!visible;
    if(visible){
      const track=chart.querySelector('.vg-time-track');
      const axisStart=Number(chart.dataset.axisStart),axisEnd=Number(chart.dataset.axisEnd);
      marker.style.top=`${GANTT_HEAD+(now-axisStart)/(axisEnd-axisStart)*(track.offsetHeight-GANTT_FOOT)}px`;
    }
  });
}
function initializeGantt(){updateGanttClock();}

function renderHome(){const p=currentPerson();if(!p)return "";const shifts=assignments(p.id,state.day),today=dayIndexNow();const count=shifts.length;
  return `${renderAlert()}${renderDays()}<div class="heading"><h2>${esc(datesHeading(state.day))}</h2>${state.day===today?`<span class="today-tag">Idag</span>`:today>=0?`<button class="today-return" data-action="day" data-day="${today}">Till idag</button>`:""}</div><p class="summary">${esc(workingSummary(p,state.day))} · ${count} ${count===1?"pass":"pass"}</p>${count?`<div class="cards">${shifts.map((s,i)=>passCard(s,i)).join("")}</div>`:`<div class="empty">${icon("calendar","lg")}<h3>Du har inga arbetspass ${state.day===today?"idag":"den här dagen"}</h3><p>${availableRanges(p,state.day).length?"Du har arbetstid registrerad, men inga uppgifter tilldelade.":"Välj en annan dag för att se ditt schema."}</p></div>`}`;}
function passCard(s,index){const activity=activityFor(s),place=placeForShift(s),isToday=dayIndexNow()===state.day,status=timeState(s),pauses=breaksOf(s),isRelief=s.kind==="relief";const labels={done:"Avslutat",live:"Pågår just nu",break:"Paus pågår",next:"Kommande",planned:"Planerat"};const colleagues=colocation(s);const prev=handover(s,"before"),next=handover(s,"after");const table=personalGantt(s);const forMe=relievedByMe(s);const returners=forMe.filter(person=>assignments(person.id,s.day).some(x=>x.activityId===s.activityId&&realWorkSegments(x).some(part=>part.start===s.end&&part.end>s.end)&&breaksOf(x).some(p=>p.end===s.end&&p.start<s.end&&p.end>s.start)));const instructions=[activity?.notes||"",activity?.dayNotes?.[s.day]||"",s.note||""].filter(x=>String(x).trim()).join("\n\n");
  return `<article class="pass ${status==="live"||status==="break"?"live":""}" id="pass-${esc(s.id)}" data-pass-day="${s.day}" data-start="${esc(s.start)}" data-end="${esc(s.end)}"><div class="pass-head"><span class="pass-time">${esc(s.start)}–${esc(s.end)}</span>${isToday?`<span class="pill ${status}">${labels[status]}</span>`:isRelief?'<span class="pill next">Avlösare</span>':""}</div><div class="pass-body"><h3 class="pass-title">${esc(activity?.title||"Arbetsuppgift")}${isRelief?' <span style="font-size:12px;font-weight:600;color:#587669">· Avlösare</span>':""}</h3><div class="place-line">${icon("pin","sm")} ${esc(place.name)}</div>${mapButton(place)?`<div class="place-actions">${mapButton(place)}</div>`:""}${instructions?`<div class="instructions"><h4>Instruktioner</h4><div class="text">${esc(instructions)}</div></div>`:""}${pauses.length||forMe.length||prev.length||next.length||table?`<div class="detail">${pauses.map(p=>{const relief=reliefForPause(s,p);return `<div class="info-row">${icon("coffee","sm")}<span><strong>${esc(p.type||"Paus")}: ${esc(p.start)}–${esc(p.end)}</strong>${relief.length?`<br>Avlösare: ${relief.map(nameButton).join(", ")}`:""}</span></div>`;}).join("")}${forMe.length?`<div class="info-row">${icon("users","sm")}<span><strong>Du avlöser:</strong> ${forMe.map(p=>nameButton(p)+(reliefTimesFor(s,p)?", "+esc(reliefTimesFor(s,p)):"")).join("; ")}</span></div>`:""}${prev.length?`<div class="info-row">${icon("back","sm")}<span>Du ersätter: ${handoverNames(prev,"before")}</span></div>`:""}${next.length?`<div class="info-row">${icon("arrow","sm")}<span>Ersättare: ${handoverNames(next,"after")}</span></div>`:""}${table}</div>`:""}</div></article>`;}
function personNow(person){const now=activeNow(person.id);const dateIndex=dayIndexNow();if(dateIndex<0)return `<p class="smallmuted">Julstöket pågår inte just nu. Se planerade arbetsuppgifter nedan.</p>`;if(!now.length)return `<p class="smallmuted">Inget pass pågår just nu enligt schemat.</p>`;return now.map(s=>{const a=activityFor(s),place=placeForShift(s),onBreak=onPause(s,stockholmMinute());return `<div class="mini-entry"><strong>${onBreak?"Paus":a?.title||"Arbetsuppgift"}</strong><small>${esc(place.name)} · ${esc(s.start)}–${esc(s.end)}</small>${mapButton(place)?`<div class="place-actions">${mapButton(place)}</div>`:""}${onBreak?`<small>Personen har paus enligt schemat – fysisk position är inte känd.</small>`:""}</div>`;}).join("");}
function renderPeople(){if(state.detailPersonId){const p=namedPerson(state.detailPersonId);if(!p){state.detailPersonId=null;return renderPeople();}const shifts=assignments(p.id),phone=phoneLink(p);return `${renderAlert()}<button class="context-back" data-action="person-back">${icon("back","sm")} ${state.personFrom==="search"?"Till sökningen":state.personFrom==="places"?"Till platserna":"Till kollegorna"}</button><div class="person-hero"><h2>${esc(p.name)}</h2>${phone||'<p class="smallmuted">Inget telefonnummer registrerat.</p>'}<div class="section-divider"></div><h3 class="inline-title">Just nu · enligt schemat</h3>${personNow(p)}</div><h3 class="inline-title" style="margin-top:22px">Arbetspass under Julstöket</h3>${shifts.length?DAY_NAMES.map((name,day)=>{const list=shifts.filter(s=>s.day===day),av=availableRanges(p,day);if(!list.length&&!av.length)return "";return `<div class="person-dayline">${esc(datesHeading(day))} · ${esc(workingSummary(p,day))}</div>${list.map(s=>{const a=activityFor(s),place=placeForShift(s);return `<div class="mini-entry"><strong>${esc(s.start)}–${esc(s.end)} · ${esc(a?.title||"Arbetsuppgift")}</strong><small>${esc(place.name)}${s.kind==="relief"?" · Avlösning":""}</small>${breaksOf(s).map(p=>`<small>Paus ${esc(p.start)}–${esc(p.end)}${reliefForPause(s,p).length?` · Avlösare: ${esc(reliefForPause(s,p).map(x=>x.name).join(", "))}`:""}</small>`).join("")}</div>`;}).join("")}`;}).join(""):`<div class="empty"><p>Inga uppgifter tilldelade.</p></div>`}`;}
  const list=planPeople();return `${renderAlert()}<div class="heading"><h2>Hitta kollega</h2></div><p class="smallmuted search-help">Tryck på en person för att se var personen arbetar enligt schemat. Telefonnummer går att ringa direkt.</p><div class="rows">${list.length?list.map(p=>{const now=activeNow(p.id),place=now[0]?placeForShift(now[0]):null;return `<div class="rowlink"><button type="button" class="rowlink-main" data-action="person" data-id="${esc(p.id)}"><strong>${esc(p.name)}</strong><small>${place?`Just nu: ${esc(place.name)}${onPause(now[0],stockholmMinute())?" · Paus":""}`:"Inget pågående pass"}</small></button>${phoneLink(p)||icon("chevron")}</div>`;}).join(""):`<div class="empty"><p>Ingen personal finns att visa.</p></div>`}</div>`;}
const PLACE_IMAGE_BASE="https://kultpub.github.io/site/";
const PLACE_TYPE_IMAGES={spot:"map_spot.png",house:"map_house.png",area:"map_area.png",allmogehallen:"allmogehallen.png",arbetarbostaden:"arbetarbostaden.png",blekingegarden:"blekingegarden.png",bosmalatorpet:"bosmalatorpet.png",cafeet:"cafeet.png",green_gate:"green_gate.png",hylla_smedja:"hylla_smedja.png",onsjostugan:"onsjostugan.png",red_gate:"red_gate.png",black_gate:"black_gate.png",thomanderska_huset:"thomanderska_huset.png",vastra_vrams_prastgard:"vastra_vrams_prastgard.png"};
function placeImage(loc){const src=PLACE_IMAGE_BASE+(PLACE_TYPE_IMAGES[loc?.placeType]||"map_spot.png");return `<img class="place-photo" style="position:absolute;top:12px;right:12px;width:88px;height:88px;object-fit:cover;border-radius:10px;border:1px solid #d8ded6;background:#f5f7f2" src="${esc(src)}" alt="" loading="lazy" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${PLACE_IMAGE_BASE}map_spot.png';}else{this.remove();}">`;}
function placeCard(p,from){const today=dayIndexNow(),now=stockholmMinute();const loc=locationOf(p.id);const workers=today<0?[]:unique((state.plan?.assignments||[]).filter(s=>s.day===today&&activityFor(s)?.placeId===p.id&&realWorkSegments(s).some(segment=>withinTime(segment,now))).map(s=>s.personId)).map(namedPerson).filter(Boolean);return `<section class="place-entry" id="place-${esc(p.id)}" style="position:relative">${placeImage(loc)}<h3 style="padding-right:104px">${esc(loc.name)}</h3>${loc.description?`<div class="desc" style="padding-right:104px">${esc(loc.description)}</div>`:""}${mapButton(loc)?`<div class="place-actions">${mapButton(loc)}</div>`:""}<div class="current"><strong>Här arbetar just nu · enligt schemat</strong>${workers.length?`<div class="person-list">${workers.map(person=>`<button class="person-chip" data-action="person"${from?` data-from="${from}"`:""} data-id="${esc(person.id)}">${esc(person.name)}</button>`).join("")}</div>`:`<p class="empty-inline">${today<0?"Julstöket pågår inte just nu.":"Ingen schemalagd här just nu."}</p>`}</div></section>`;}
function renderPlaces(){const places=(state.plan?.places||[]).filter(p=>!isGeneral(p)).sort((a,b)=>a.name.localeCompare(b.name,"sv"));const list=places;const today=dayIndexNow(),now=stockholmMinute();return `${renderAlert()}<div class="heading"><h2>Platser</h2></div><p class="smallmuted search-help">${state.demo?"Exempelläget innehåller inga verifierade kartpositioner. I den publicerade appen används de länkar som registrerats under Redigera plats i planeringsverktyget.":"Kartlänkar öppnas i Google Maps och hämtas från platsregistret."}</p>${list.length?list.map(p=>placeCard(p)):`<div class="empty"><p>Inga platser hittades.</p></div>`}`;}
// ---- Gemensam sökning: personer, aktiviteter och platser ----
function dayAbbr(day){return DAY_NAMES[day].slice(0,3);}
function searchData(){
  const words=norm(state.query).split(/\s+/).filter(Boolean);
  const match=text=>{const hay=norm(text);return words.every(w=>hay.includes(w));};
  const plan=state.plan||{};
  const shifts=(plan.assignments||[]).filter(s=>validTime(s.start)&&validTime(s.end))
    .sort((a,b)=>a.day-b.day||a.start.localeCompare(b.start)||a.end.localeCompare(b.end));
  const byPerson=new Map(),byActivity=new Map();
  for(const s of shifts){
    if(s.personId){if(!byPerson.has(s.personId))byPerson.set(s.personId,[]);byPerson.get(s.personId).push(s);}
    if(!byActivity.has(s.activityId))byActivity.set(s.activityId,[]);byActivity.get(s.activityId).push(s);
  }
  const people=planPeople().filter(p=>{const phone=phoneOf(p);return match(p.name+" "+phone+" "+phone.replace(/\D/g,""));});
  // Aktivitet och plats hör alltid ihop: en träff på det ena tar med det andra.
  const directActivities=(plan.activities||[]).filter(a=>a&&match([a.title,locationOf(a.placeId??null).name,a.notes,Object.values(a.dayNotes||{}).join(" ")].join(" ")));
  const directPlaces=(plan.places||[]).filter(p=>!isGeneral(p)).filter(p=>{const loc=locationOf(p.id);return match(loc.name+" "+(loc.description||""));});
  const activityIds=new Set(directActivities.map(a=>a.id)),directPlaceIds=new Set(directPlaces.map(p=>p.id));
  const placeIds=new Set([...directPlaceIds,...directActivities.map(a=>a.placeId).filter(Boolean)]);
  const activities=(plan.activities||[]).filter(a=>a&&(activityIds.has(a.id)||(a.placeId&&directPlaceIds.has(a.placeId))))
    .sort((a,b)=>String(a.title||"").localeCompare(String(b.title||""),"sv"));
  const places=(plan.places||[]).filter(p=>!isGeneral(p)&&placeIds.has(p.id))
    .sort((a,b)=>a.name.localeCompare(b.name,"sv"));
  return {words,byPerson,byActivity,people,activities,places};
}
// Fasta kolumner: dag, klockslag och (för personer) aktivitet hamnar alltid på samma plats.
const SEARCH_LINES_STYLE="margin-top:6px;font-size:12px;line-height:1.55;color:var(--muted);font-variant-numeric:tabular-nums";
function searchLine(columns,cells){return `<div style="display:grid;grid-template-columns:${columns};column-gap:8px">${cells.map(c=>`<span>${c}</span>`).join("")}</div>`;}
function searchPersonRow(p,data){
  const list=data.byPerson.get(p.id)||[];
  const lines=list.map(s=>searchLine("2.4em 6.6em minmax(0,1fr)",[esc(dayAbbr(s.day)),esc(s.start+"–"+s.end),esc(activityFor(s)?.title||"Arbetsuppgift")])).join("");
  const phone=phoneLink(p);
  return `<div class="rowlink" style="display:block"><button type="button" class="rowlink-main" style="display:block;width:100%" data-action="person" data-from="search" data-id="${esc(p.id)}"><strong>${esc(p.name)}</strong>${lines?`<div style="${SEARCH_LINES_STYLE}">${lines}</div>`:""}</button>${phone?`<div style="text-align:right;margin-top:6px">${phone}</div>`:""}</div>`;
}
function searchActivityRow(a,data){
  const list=data.byActivity.get(a.id)||[];
  const loc=locationOf(a.placeId??null);
  const days=[...new Set(list.map(s=>s.day))].sort((x,y)=>x-y);
  const lines=days.map(day=>{
    const part=list.filter(s=>s.day===day);
    const start=part.map(s=>s.start).sort()[0],end=part.map(s=>s.end).sort().slice(-1)[0];
    return searchLine("5em minmax(0,1fr)",[esc(DAY_NAMES[day]),esc(start+"–"+end)]);
  }).join("");
  return `<div class="rowlink" style="display:block"><strong>${esc(a.title||"Arbetsuppgift")}</strong><small>${esc(loc.name)}</small>${lines?`<div style="${SEARCH_LINES_STYLE}">${lines}</div>`:""}</div>`;
}
function renderSharedInfo(){
  const info=state.plan?.sharedInfo;
  const text=typeof info?.text==="string"?info.text.trim():"";
  const worker=currentPerson();
  const contacts=["friday","saturday","sunday"].map((key,day)=>{
    if (!worker || !assignments(worker.id,day).length) return "";
    const person=namedPerson(info?.sickContactPersonIds?.[key]);
    return `<div class="rowlink sick-contact">
      <div><strong>${esc(datesHeading(day))}</strong><small>${person?esc(person.name):"Ingen kontaktperson angiven."}</small></div>
      ${person?phoneLink(person)||'<span class="smallmuted">Telefonnummer saknas.</span>':""}
    </div>`;
  }).join("");
  return `${renderAlert()}
    <button type="button" class="context-back" data-action="person-back">${icon("back","sm")} Till Min dag</button>
    <div class="heading"><h2>Instruktioner till alla</h2></div>
    ${text?`<div class="person-hero shared-info-text">${esc(text)}</div>`:'<p class="smallmuted">Inga gemensamma instruktioner har lagts in ännu.</p>'}
    ${contacts?`<section aria-labelledby="sickContactsTitle">
      <h3 class="inline-title" id="sickContactsTitle">Vem ringer jag om jag blir sjuk?</h3>
      <div class="rows">${contacts}</div>
    </section>`:""}`;
}

function renderSearch(){
  const data=searchData();
  const group=(title,items,rows,plain)=>items.length?`<h3 class="inline-title" style="margin:20px 0 9px">${title} (${items.length})</h3>${plain?rows:`<div class="rows">${rows}</div>`}`:"";
  let body;
  if(!data.words.length){
    body=`<div class="empty">${icon("search","lg")}<p>Skriv för att söka bland personer, aktiviteter och platser.</p></div>`;
  }else if(!data.people.length&&!data.places.length&&!data.activities.length){
    body=`<div class="empty"><h3>Inga träffar</h3><p>Prova ett annat sökord.</p></div>`;
  }else{
    body=group("Personer",data.people,data.people.map(p=>searchPersonRow(p,data)).join(""))
      +group("Aktiviteter",data.activities,data.activities.map(a=>searchActivityRow(a,data)).join(""))
      +group("Platser",data.places,data.places.map(p=>placeCard(p,"search")).join(""),true);
  }
  return `${renderAlert()}<div class="heading"><h2>Sök</h2></div><label class="search">${icon("search")}<input id="searchInput" type="search" style="-webkit-appearance:none;appearance:none" placeholder="Person, plats eller aktivitet" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" value="${esc(state.query)}" aria-label="Sök"></label>${body}`;
}
// Delningslänken är alltid appens publicerade adress, oavsett var sidan öppnats.
const SHARE_URL="https://kultpub.github.io/site/mitt-julstok/";
function sharedUrl(){return SHARE_URL;}
function shareReady(){return true;}
function renderShare(){const url=sharedUrl(),usable=shareReady();return `${renderAlert()}<div class="heading"><h2>Dela Mitt Julstök</h2></div><section class="share-card"><h3>En länk för alla</h3><p>En kollega skannar QR-koden, öppnar appen och väljer sitt eget namn. Inget namn eller schema finns i QR-koden.</p>${usable?`<div class="qr-wrap" id="qrWrap"><canvas id="qrCanvas" width="300" height="300" role="img" aria-label="QR-kod som länkar till Mitt Julstök"></canvas></div><div class="url-box">${esc(url)}</div><div class="actions"><button class="action-btn" data-action="share">${icon("share","sm")} Dela</button><button class="action-btn outline" data-action="copy">Kopiera länk</button></div>`:`<div class="qr-wrap"><div style="padding:18px;font-size:13px;color:var(--muted)">${icon("info","lg")}<p>QR-koden blir tillgänglig när appen publicerats på en HTTPS-adress.</p></div></div><p>På en lokal filadress eller testsida går QR-koden inte att använda på en annan telefon.</p>`}</section><p class="smallmuted" style="margin-top:15px">Du kan också lägga till Mitt Julstök på telefonens hemskärm via webbläsarens meny.</p><button class="action-btn secondary block" data-action="choose" style="margin-top:16px">Byt person</button>`;}
function seasonMessage(){
  const mode=state.seasonMode;
  if(mode==="thanks") return {
    title:`Tack för ett strålande bra genomfört Julstök ${state.year}!`,
    text:"",
    image:"julstoket-tack.jpg",
    imageAlt:`Pyntad julgran för Julstöket ${state.year}`,
    sparkle:true
  };
  return {
    title:`Julstöket ${state.year} är under planering – återkom omkring 1 november!`,
    text: "",
    image:"julstoket-planering.jpg",
    imageAlt:`Jultomte som skriver för Julstöket ${state.year}`,
    sparkle:false
  };
}
function renderSeasonGate(){
  const msg=seasonMessage();
  const glitter=msg.sparkle ? Array.from({length:20},(_,i)=>{
    const x=16+((i*37)%70),y=24+((i*23)%65);
    const size=3+(i%4),duration=2.2+(i%5)*0.7,delay=-(i*0.63);
    return `<span class="spark" aria-hidden="true" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;animation-duration:${duration}s;animation-delay:${delay}s"></span>`;
  }).join("") : "";
  return `
    <main class="shell shell-standalone">
      <header class="top top-standalone">
        <div class="message-banner">
          <h1>Mitt Julstök</h1>
        </div>
      </header>

      <div class="content content-standalone">
        <figure class="season-figure ${msg.sparkle ? "sparkle" : ""}">
          <img src="${esc(msg.image)}" alt="${esc(msg.imageAlt)}">

          <div class="season-card season-image-text">
            <h2>${esc(msg.title)}</h2>
          </div>

          ${glitter}
        </figure>
      </div>
    </main>`;
}
function render(){const preserved=[...document.querySelectorAll(".vg-scroll")].map(el=>({id:el.closest("[data-pass-day]")?.id,left:el.scrollLeft}));let content="";if(state.seasonMode!=="active"&&!state.demo){content=renderSeasonGate();}else if(!state.plan){content=state.status==="error"?`<main class="shell"><div class="content"><h2>Mitt Julstök</h2><div class="notice">${esc(state.error||"Kunde inte hämta planen.")}</div><div class="actions"><button class="action-btn" data-action="retry">Försök igen</button><button class="action-btn outline" data-action="demo">Visa exempel</button></div></div></main>`:`<div class="boot"><div class="boot-logo"><img src="icon-192.png" alt=""></div><h1>Mitt Julstök</h1><p>Hämtar Julstökets uppgifter…</p></div>`;}else if(!currentPerson()){content=renderNameSelect();}else{content=shell(state.view==="people"?renderPeople():state.view==="places"?renderPlaces():state.view==="share"?renderShare():state.view==="search"?renderSearch():state.view==="info"?renderSharedInfo():renderHome());}$("app").innerHTML=content;document.body.style.touchAction=swipeAllowed()?"pan-y pinch-zoom":"";initializeGantt();for(const saved of preserved){if(!saved.id)continue;const target=document.getElementById(saved.id)?.querySelector(".vg-scroll");if(target)target.scrollLeft=saved.left;}if(state.view==="share"&&currentPerson()&&shareReady()&&$("qrCanvas")){try{window.JulQR?.draw($("qrCanvas"),sharedUrl());}catch(error){$("qrWrap").innerHTML=`<p class="error-message">QR-koden kunde inte skapas.</p>`;}}}
function focusRender(id){const el=$(id),pos=el?.selectionStart??null;render();const target=$(id);if(target){target.focus();if(pos!==null&&target.setSelectionRange)try{target.setSelectionRange(pos,pos);}catch{}}}
function exampleData(){const people=[{id:"demo-amanda",name:"Amanda (exempel)",phone:"070-123 45 67",availability:[{day:0,start:"15:00",end:"20:00"},{day:1,start:"09:00",end:"18:00"},{day:2,start:"10:00",end:"14:00"}]},{id:"demo-sara",name:"Sara (exempel)",phone:"070-222 11 00",availability:[{day:1,start:"10:00",end:"18:00"}]},{id:"demo-ludvig",name:"Ludvig (exempel)",phone:"070-333 22 11",availability:[{day:1,start:"11:00",end:"18:00"}]}],places=[{id:"demo-gate",name:"Gröna grinden",description:"Entréområdet (exempel)",mapsUrl:""},{id:"demo-shop",name:"Vita huset",description:"Museibutiken (exempel)",mapsUrl:""},{id:"demo-square",name:"Torget",description:"",mapsUrl:""}],activities=[{id:"demo-a1",title:"Entrékassor",placeId:"demo-gate",notes:"Välkomna besökarna och kontrollera biljetter.",dayNotes:{},staffingPattern:{shifts:[]}},{id:"demo-a2",title:"Julbutiken",placeId:"demo-shop",notes:"Kontrollera växelkassan vid passets början.",dayNotes:{1:"På lördagen är det extra mycket besökare."},staffingPattern:{shifts:[{id:"demo-source",kind:"ordinary",day:1,breaks:[{id:"demo-pause",start:"13:00",end:"13:30"}]},{id:"demo-rel-source",kind:"relief",day:1,breaks:[],reliefPeriods:[{breakId:"demo-pause",start:"13:00",end:"13:30"}]}]}},{id:"demo-a3",title:"Glöggförsäljning",placeId:"demo-square",notes:"Se till att glöggen hålls varm.",dayNotes:{},staffingPattern:{shifts:[]}}],assignments=[{id:"demo-s1",activityId:"demo-a1",personId:"demo-amanda",day:0,start:"15:00",end:"20:00",kind:"ordinary",breaks:[]},{id:"demo-s2",activityId:"demo-a1",personId:"demo-amanda",day:1,start:"09:00",end:"11:00",kind:"ordinary",breaks:[]},{id:"demo-s3",activityId:"demo-a2",personId:"demo-amanda",day:1,start:"11:00",end:"15:00",kind:"ordinary",breaks:[{id:"demo-pause",start:"13:00",end:"13:30",type:"Paus"}],patternShiftId:"demo-source"},{id:"demo-s4",activityId:"demo-a3",personId:"demo-amanda",day:1,start:"15:30",end:"18:00",kind:"ordinary",breaks:[]},{id:"demo-s5",activityId:"demo-a2",personId:"demo-ludvig",day:1,start:"13:00",end:"13:30",kind:"relief",breaks:[],patternShiftId:"demo-rel-source"},{id:"demo-s6",activityId:"demo-a2",personId:"demo-sara",day:1,start:"11:00",end:"15:00",kind:"ordinary",breaks:[]},{id:"demo-s7",activityId:"demo-a1",personId:"demo-amanda",day:2,start:"10:00",end:"14:00",kind:"ordinary",breaks:[]}];return {schemaVersion:1,year:state.year,revision:1,places,people,activities,assignments};}
function setDemo(){stopListeners();state.demo=true;if(TEST)state.day=TEST.day;state.plan=exampleData();state.registerPeople=state.plan.people;state.registerPlaces=state.plan.places;state.status="live";state.error="";state.cached=false;state.personId="";state.detailPersonId=null;state.view="home";render();}
function stopListeners(){for(const stop of [stopPlan,stopPeople,stopPlaces])try{stop?.();}catch{}stopPlan=stopPeople=stopPlaces=null;}
function syncSeason(){
  if(state.demo) return false;
  const season=currentSeason();
  if(season.mode===state.seasonMode && season.year===state.year) return false;
  stopListeners();
  state.seasonMode=season.mode;
  state.year=season.year;
  state.day=initialDay(state.year);
  state.plan=null;
  state.cached=false;
  state.status="loading";
  state.error="";
  state.loadedAt=null;
  state.detailPersonId=null;
  state.view="home";
  if(state.seasonMode==="active"){
    readCache(state.year);
    reconcilePerson();
    connect();
  }
  render();
  return true;
}
function connect(){if(state.demo||state.seasonMode!=="active")return;state.error="";if(!state.cached)state.status="loading";render();
  (async()=>{try{const [appModule,fs]=await Promise.all([import("https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js"),import("https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js")]);const app=appModule.getApps().find(a=>a.name==="mitt-julstok")||appModule.initializeApp(FIREBASE_CONFIG,"mitt-julstok");firestore={fs,db:fs.getFirestore(app)};listen();}catch(error){connectionError(error);}})();}
function connectionError(err){state.error=err?.code==="permission-denied"?"Firestore tillåter ännu inte publik läsning. Publicera läsregler för julstokPlans, julstokPeople och julstokPlaces.":"Kontrollera internetanslutningen och att Firebase är tillgängligt.";if(!state.cached)state.status="error";else state.status="cached";render();}
function listen(){if(!firestore||state.demo||state.seasonMode!=="active")return;stopListeners();const {fs,db}=firestore;const ref=fs.doc(db,"julstokPlans",String(state.year));stopPlan=fs.onSnapshot(ref,snapshot=>{if(snapshot.exists()){const value=snapshot.data();if(value.year!==state.year||!Array.isArray(value.people)||!Array.isArray(value.activities)||!Array.isArray(value.assignments)){connectionError(new Error("Planformatet kan inte läsas."));return;}state.plan=value;}else{state.plan={schemaVersion:1,year:state.year,people:[],places:[],activities:[],assignments:[]};}state.cached=false;state.status="live";state.error="";state.loadedAt=new Date().toISOString();saveCache();reconcilePerson();render();},connectionError);
  stopPeople=fs.onSnapshot(fs.collection(db,"julstokPeople"),snap=>{state.registerPeople=snap.docs.map(d=>({id:d.id,...d.data()}));saveCache();render();},connectionError);
  stopPlaces=fs.onSnapshot(fs.collection(db,"julstokPlaces"),snap=>{state.registerPlaces=snap.docs.map(d=>({id:d.id,...d.data()}));saveCache();render();},connectionError);
}
function refreshClock(){if(syncSeason())return;if(!currentPerson()||state.view!=="home"||state.status==="loading")return;const active=document.activeElement?.tagName;if(active==="INPUT"||active==="SELECT")return;updateGanttClock();const liveCards=document.querySelectorAll(".pass");for(const card of liveCards){const data=(state.plan?.assignments||[]).find(x=>"pass-"+x.id===card.id);if(!data)continue;const status=timeState(data);card.classList.toggle("live",status==="live"||status==="break");const pill=card.querySelector(".pass-head .pill");if(pill&&dayIndexNow()===state.day){const labels={done:"Avslutat",live:"Pågår just nu",break:"Paus pågår",next:"Kommande",planned:"Planerat"};pill.className="pill "+status;pill.textContent=labels[status];}}}
async function copyLink(){const url=sharedUrl();if(!url)return;try{await navigator.clipboard.writeText(url);toast("Länken är kopierad.");}catch{const input=document.createElement("textarea");input.value=url;input.style.position="fixed";input.style.opacity="0";document.body.append(input);input.select();try{document.execCommand("copy");toast("Länken är kopierad.");}catch{toast("Kunde inte kopiera länken.");}input.remove();}}
async function shareLink(){const url=sharedUrl();if(!url)return;if(navigator.share){try{await navigator.share({title:"Mitt Julstök",text:"Öppna ditt personliga schema för Julstöket.",url});}catch(error){if(error.name!=="AbortError")toast("Delningen misslyckades.");}}else await copyLink();}
// Händelsedelegering gör att sökning och navigering fungerar efter varje renderering.
document.addEventListener("click",event=>{const button=event.target.closest("[data-action]");if(!button)return;const action=button.dataset.action;
  if(action==="view"){state.view=button.dataset.view;state.detailPersonId=null;state.personFrom=null;syncHistory();render();window.scrollTo(0,0);return;}
  if(action==="set-person"){rememberPerson(namedPerson(button.dataset.id));state.nameSearch="";state.view="home";state.detailPersonId=null;syncHistory();render();window.scrollTo(0,0);return;}
  if(action==="choose"){state.personId="";storeDel(STORE.person);storeDel(STORE.personMeta);state.nameSearch="";state.view="home";state.detailPersonId=null;syncHistory();render();$("nameInput")?.focus();return;}
  if(action==="day"){state.day=Number(button.dataset.day);render();window.scrollTo(0,0);return;}
  if(action==="person"){const origin=button.dataset.from||(state.view==="places"||state.view==="search"?state.view:null);state.personFrom=origin;if(origin)state.searchScroll=window.scrollY;state.detailPersonId=button.dataset.id;state.view="people";syncHistory();render();window.scrollTo(0,0);return;}
  if(action==="person-back"){personBack();return;}
  if(action==="retry"){if(firestore)listen();else connect();return;}
  if(action==="demo"){setDemo();return;}
  if(action==="share"){shareLink();return;}
  if(action==="copy"){copyLink();return;}
});
// Navigeringsnivåer: 0 = Min dag, 1 = undervy, 2 = person.
// Varje nivå har en historikpost, så telefonens bakåtgest/bakåtknapp går en nivå upp i stället för att stänga appen.
let histPending=false,histTimer=null;
function navLevel(){return state.detailPersonId?2:state.view!=="home"?1:0;}
function histLevel(){try{return Number(history.state?.jul)||0;}catch{return 0;}}
function syncHistory(){
  if(histPending)return;
  const target=navLevel(),cur=histLevel();
  try{
    if(target>cur){for(let i=cur+1;i<=target;i++)history.pushState({jul:i},"");}
    else if(target<cur){histPending=true;clearTimeout(histTimer);histTimer=setTimeout(()=>{histPending=false;},600);history.go(target-cur);}
  }catch{histPending=false;}
}
function personBackNow(){
  const from=state.personFrom;
  state.detailPersonId=null;state.personFrom=null;
  if(from==="search"||from==="places"){state.view=from;render();window.scrollTo(0,state.searchScroll||0);return;}
  render();
}
function levelUp(){
  if(state.detailPersonId){personBackNow();return;}
  if(state.view!=="home"){state.view="home";render();window.scrollTo(0,0);}
}
function personBack(){if(histLevel()>0&&navLevel()>0)history.back();else levelUp();}
window.addEventListener("popstate",()=>{
  histPending=false;clearTimeout(histTimer);
  const k=histLevel();let guard=3;
  while(navLevel()>k&&guard--)levelUp();
  syncHistory();
});
// Svep åt höger i en undervy går en nivå upp. Pekhändelser fungerar för både finger och mus.
// I undervyer sätts touch-action så att webbläsaren bara tar hand om lodrät scrollning
// och lämnar det horisontella svepet till appen.
let swipeStart=null;
function swipeAllowed(){return navLevel()>0&&!!currentPerson();}
document.addEventListener("pointerdown",event=>{
  if(!swipeAllowed()||!event.isPrimary||(event.pointerType==="mouse"&&event.button!==0)||event.target.closest?.(".vg-scroll,input,textarea,select")){swipeStart=null;return;}
  swipeStart={x:event.clientX,y:event.clientY,time:Date.now(),id:event.pointerId};
},{passive:true});
document.addEventListener("pointerup",event=>{
  if(!swipeStart||event.pointerId!==swipeStart.id)return;
  const dx=event.clientX-swipeStart.x,dy=event.clientY-swipeStart.y,dt=Date.now()-swipeStart.time;
  swipeStart=null;
  if(swipeAllowed()&&dx>60&&dx>Math.abs(dy)*1.5&&dt<1000)personBack();
},{passive:true});
document.addEventListener("pointercancel",()=>{swipeStart=null;},{passive:true});

document.addEventListener("input",event=>{const input=event.target;if(input.id==="nameInput"){state.nameSearch=input.value;focusRender("nameInput");}if(input.id==="searchInput"){state.query=input.value;focusRender("searchInput");}});
function init(){try{if(histLevel()>0)history.replaceState({jul:0},"");}catch{}
  const showDemo=new URLSearchParams(location.search).get("demo")==="1";if(showDemo)setDemo();else if(state.seasonMode!=="active"){render();}else{readCache(state.year);reconcilePerson();render();connect();}
  minuteTimer=setInterval(refreshClock,30000);
  if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost"))navigator.serviceWorker.register("service-worker.js",{updateViaCache:"none"}).then(reg=>reg.update()).catch(()=>{});
}
init();