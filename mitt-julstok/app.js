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
const norm=str=>String(str??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("sv-SE").trim();
const validTime=str=>typeof str==="string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(str);
const minutes=str=>validTime(str)?Number(str.slice(0,2))*60+Number(str.slice(3)):NaN;
const intersects=(a,b)=>validTime(a?.start)&&validTime(a?.end)&&validTime(b?.start)&&validTime(b?.end) && a.start<b.end && b.start<a.end;
const unique=values=>[...new Set(values.filter(Boolean))];
const firstLetters=str=>String(str||"").trim().split(/\s+/).map(x=>x[0]||"").slice(0,2).join("").toUpperCase();
function storeGet(key){try{return localStorage.getItem(key);}catch{return null;}}
function storeSet(key,value){try{localStorage.setItem(key,value);}catch{}}
function storeDel(key){try{localStorage.removeItem(key);}catch{}}
function stockholmToday(){return new Intl.DateTimeFormat("sv-SE",{timeZone:TZ,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());}
function stockholmMinute(){const parts=new Intl.DateTimeFormat("sv-SE",{timeZone:TZ,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());return Number(parts.find(p=>p.type==="hour")?.value||0)*60+Number(parts.find(p=>p.type==="minute")?.value||0);}
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
const state={year:season.year,seasonMode:season.mode,day:0,view:"home",personId:storeGet(STORE.person)||"",detailPersonId:null,search:"",nameSearch:"",placeSearch:"",plan:null,registerPeople:[],registerPlaces:[],loadedAt:null,status:"loading",error:"",demo:false,cached:false,shareMessage:""};
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
function isGeneral(place){return !place||place.name==="Allmänt"||norm(place.name)==="allmant"||norm(place.name)==="ej platsspecifik";}
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
function handover(s,edge){const activity=activityFor(s);const others=(state.plan?.assignments||[]).filter(x=>x.day===s.day&&x.activityId===s.activityId&&x.personId!==s.personId&&x.kind==="ordinary"&&s.kind==="ordinary"&&((edge==="before"&&x.end===s.start)||(edge==="after"&&x.start===s.end)));
  return unique(others.map(x=>x.personId)).map(namedPerson).filter(Boolean);
}
function timeState(s){if(dayIndexNow()!==state.day)return "planned";const m=stockholmMinute();if(m>=minutes(s.end))return "done";if(m<minutes(s.start))return "next";return onPause(s,m)?"break":"live";}
function activeNow(personId){const day=dayIndexNow();if(day<0)return [];const m=stockholmMinute();return assignments(personId,day).filter(s=>withinTime(s,m));}
function saveCache(){if(!state.plan||state.demo)return;try{storeSet(STORE.cache+state.year,JSON.stringify({plan:state.plan,registerPeople:state.registerPeople,registerPlaces:state.registerPlaces,at:new Date().toISOString()}));}catch{}}
function readCache(year){try{const value=JSON.parse(storeGet(STORE.cache+year)||"null");if(value?.plan?.year===year&&Array.isArray(value.plan.people)&&Array.isArray(value.plan.assignments)){state.plan=value.plan;state.registerPeople=value.registerPeople||[];state.registerPlaces=value.registerPlaces||[];state.loadedAt=value.at||null;state.cached=true;state.status="cached";return true;}}catch{}return false;}
function toast(msg){const el=$("toast");el.textContent=msg;el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{el.hidden=true;},3300);}
function datesHeading(day){const days=eventDates(state.year);return DAY_NAMES[day]+" "+dateLabel(days[day]);}
function renderStatus(){if(state.demo)return `<span class="statusline warning">${icon("info","sm")} Demonstration – fiktiva uppgifter</span>`;if(state.status==="live")return `<span class="statusline">${icon("check","sm")} Uppdaterat från planeringen</span>`;if(state.cached||state.status==="cached")return `<span class="statusline warning">${icon("wifi-off","sm")} Sparad kopia${state.loadedAt?" · "+esc(new Date(state.loadedAt).toLocaleString("sv-SE",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})):""}</span>`;if(state.status==="error")return `<span class="statusline warning">${icon("info","sm")} Kunde inte hämta aktuella uppgifter</span>`;return `<span class="statusline">${icon("clock","sm")} Hämtar senaste schema…</span>`;}
function shell(body){const p=currentPerson();return `<main class="shell"><header class="top"><div class="topbar"><div><h1 class="brand">Mitt Julstök</h1><button class="who" type="button" data-action="choose" style="border:0;padding:0;background:transparent">${icon("user","sm")} ${esc(p?.name||"Välj namn")} ${icon("chevron","sm")}</button></div><div class="top-actions"><button class="top-icon" aria-label="Sök kollega" title="Sök kollega" data-action="view" data-view="people">${icon("search","lg")}</button><button class="top-icon" aria-label="Dela appen" title="Dela appen" data-action="view" data-view="share">${icon("share","lg")}</button></div></div>${renderStatus()}</header><div class="content">${body}</div></main><nav class="bottom-nav" aria-label="Huvudmeny"><div class="nav-inner">${[["home","calendar","Min dag"],["people","users","Kollegor"],["places","pin","Platser"],["share","share","Dela"]].map(([v,i,l])=>`<button type="button" data-action="view" data-view="${v}" class="nav-btn ${state.view===v?"selected":""}" ${state.view===v?'aria-current="page"':""}>${icon(i)}<span>${l}</span></button>`).join("")}</div></nav>`;}
function renderNameSelect(){const everyone=planPeople(),list=everyone.filter(p=>norm(p.name).includes(norm(state.nameSearch))||norm(phoneOf(p)).includes(norm(state.nameSearch)));return `<div class="overlay"><section class="overlay-inner"><div class="overlay-head"><div class="overlay-mark">J</div><h1>Mitt Julstök</h1><p>Välj ditt namn för att se dina arbetspass, pauser och kollegor. Du behöver normalt bara välja en gång på den här telefonen.</p></div>${state.error&&!state.cached?`<div class="notice">${esc(state.error)}</div>`:""}<label for="nameInput" class="sr-only">Sök ditt namn</label><div class="search">${icon("search")}<input id="nameInput" autocomplete="off" type="search" placeholder="Skriv ditt namn…" value="${esc(state.nameSearch)}" autofocus></div><div class="list-title">${everyone.length?`${list.length} av ${everyone.length} medarbetare`:"Personal"}</div><div class="rows" id="nameResults">${list.length?list.slice(0,100).map(p=>`<button type="button" class="rowlink" data-action="set-person" data-id="${esc(p.id)}"><strong>${esc(p.name)}</strong>${icon("chevron")}</button>`).join(""): `<div class="empty"><p>${everyone.length?"Inget namn matchar din sökning.":state.status==="loading"?"Hämtar personalregistret…":"Det finns ännu ingen personal inlagd för årets Julstök."}</p></div>`}</div><p class="system-notice">Ditt namnval sparas lokalt i den här webbläsaren. Det är inte en inloggning.</p>${state.status==="error"?`<button class="action-btn outline block" data-action="retry">Försök ansluta igen</button>`:""}<div class="system-notice">${state.demo?"Exempelläget visar ingen riktig personal eller bemanning.":""}</div></section></div>`;}
function renderDays(){const dates=eventDates(state.year),today=dayIndexNow();return `<div class="days" role="group" aria-label="Välj dag">${dates.map((d,i)=>`<button type="button" class="day ${state.day===i?"selected":""} ${i===today?"today":""}" data-action="day" data-day="${i}" aria-pressed="${state.day===i}"><strong>${DAY_NAMES[i]}</strong><small>${compactDate(d)}</small></button>`).join("")}</div>`;}
function renderAlert(){if(state.error&&!state.cached&&!state.demo)return `<div class="notice"><strong>Ingen anslutning till årsplanen.</strong><br>${esc(state.error)}<div class="actions" style="margin-top:11px"><button class="action-btn outline" data-action="retry">Försök igen</button><button class="action-btn secondary" data-action="demo">Visa exempel</button></div></div>`;if(state.cached&&state.status!=="live")return `<div class="notice">Visar senast sparade schema. Uppgifter kan ha ändrats sedan dess.</div>`;return "";}
function workingSummary(p,day){const av=availableRanges(p,day);return av.length?av.map(x=>`${x.start}–${x.end}`).join(", "):"Arbetstid ej registrerad";}
function renderHome(){const p=currentPerson();if(!p)return "";const shifts=assignments(p.id,state.day),today=dayIndexNow();const count=shifts.length;
  return `${renderAlert()}${renderDays()}<div class="heading"><h2>${esc(datesHeading(state.day))}</h2>${state.day===today?`<span class="today-tag">Idag</span>`:today>=0?`<button class="today-return" data-action="day" data-day="${today}">Till idag</button>`:""}</div><p class="summary">${esc(workingSummary(p,state.day))} · ${count} ${count===1?"pass":"pass"}</p>${count?`<div class="cards">${shifts.map((s,i)=>passCard(s,i)).join("")}</div>`:`<div class="empty">${icon("calendar","lg")}<h3>Inga arbetspass ${state.day===today?"idag":"den här dagen"}</h3><p>${availableRanges(p,state.day).length?"Du har arbetstid registrerad, men inga uppgifter tilldelade.":"Välj en annan dag för att se ditt schema."}</p></div>`}<p class="legend">${icon("clock","sm")} Tiderna och placeringarna är hämtade ur Julstökets planering.</p>`;}
function passCard(s,index){const activity=activityFor(s),place=placeForShift(s),isToday=dayIndexNow()===state.day,status=timeState(s),pauses=breaksOf(s),isRelief=s.kind==="relief";const labels={done:"Avslutat",live:"Pågår just nu",break:"Paus pågår",next:"Kommande",planned:"Planerat"};const colleagues=colocation(s);const prev=handover(s,"before"),next=handover(s,"after");const forMe=relievedByMe(s);const returners=forMe.filter(person=>assignments(person.id,s.day).some(x=>x.activityId===s.activityId&&realWorkSegments(x).some(part=>part.start<=s.end&&part.end>s.end)));const instructions=[activity?.notes||"",activity?.dayNotes?.[s.day]||"",s.note||""].filter(x=>String(x).trim()).join("\n\n");
  return `<article class="pass ${status==="live"||status==="break"?"live":""}" id="pass-${esc(s.id)}" data-pass-day="${s.day}"><div class="pass-head"><span class="pass-time">${esc(s.start)}–${esc(s.end)}</span>${isToday?`<span class="pill ${status}">${labels[status]}</span>`:isRelief?'<span class="pill next">Avlösning</span>':""}</div><div class="pass-body"><h3 class="pass-title">${esc(activity?.title||"Arbetsuppgift")}${isRelief?' <span style="font-size:12px;font-weight:600;color:#587669">· Avlösning</span>':""}</h3><div class="place-line">${icon("pin","sm")} ${esc(place.name)}</div>${mapButton(place)?`<div class="place-actions">${mapButton(place)}</div>`:""}${instructions?`<div class="instructions"><h4>Instruktioner</h4><div class="text">${esc(instructions)}</div></div>`:""}${pauses.length||forMe.length||prev.length||next.length||colleagues.length?`<div class="detail">${pauses.map(p=>{const relief=reliefForPause(s,p);return `<div class="info-row">${icon("coffee","sm")}<span><strong>${esc(p.type||"Paus")}: ${esc(p.start)}–${esc(p.end)}</strong>${relief.length?`<br>Avlösare: ${relief.map(nameButton).join(", ")}`:""}</span></div>`;}).join("")}${forMe.length?`<div class="info-row">${icon("users","sm")}<span><strong>Du avlöser:</strong> ${forMe.map(nameButton).join(", ")}</span></div>`:""}${isRelief&&returners.length?`<div class="info-row">${icon("arrow","sm")}<span>Efter avlösningen återgår: ${returners.map(nameButton).join(", ")}</span></div>`:""}${prev.length?`<div class="info-row">${icon("back","sm")}<span>Före ditt pass: ${prev.map(nameButton).join(", ")}</span></div>`:""}${next.length?`<div class="info-row">${icon("arrow","sm")}<span>Efter ditt pass: ${next.map(nameButton).join(", ")}</span></div>`:""}${colleagues.length?`<div class="info-row">${icon("users","sm")}<div><strong>${isGeneral(place)?"Kollegor i samma aktivitet under passet":"Kollegor på samma plats under passet"}</strong><div class="person-list" style="margin-top:7px">${colleagues.map(p=>`<button class="person-chip" data-action="person" data-id="${esc(p.id)}">${esc(p.name)}</button>`).join("")}</div></div></div>`:""}</div>`:""}</div></article>`;}
function personNow(person){const now=activeNow(person.id);const dateIndex=dayIndexNow();if(dateIndex<0)return `<p class="smallmuted">Julstöket pågår inte just nu. Se planerade arbetsuppgifter nedan.</p>`;if(!now.length)return `<p class="smallmuted">Inget pass pågår just nu enligt schemat.</p>`;return now.map(s=>{const a=activityFor(s),place=placeForShift(s),onBreak=onPause(s,stockholmMinute());return `<div class="mini-entry"><strong>${onBreak?"Paus":a?.title||"Arbetsuppgift"}</strong><small>${esc(place.name)} · ${esc(s.start)}–${esc(s.end)}</small>${mapButton(place)?`<div class="place-actions">${mapButton(place)}</div>`:""}${onBreak?`<small>Personen har paus enligt schemat – fysisk position är inte känd.</small>`:""}</div>`;}).join("");}
function renderPeople(){if(state.detailPersonId){const p=namedPerson(state.detailPersonId);if(!p){state.detailPersonId=null;return renderPeople();}const shifts=assignments(p.id),phone=phoneLink(p);return `${renderAlert()}<button class="context-back" data-action="person-back">${icon("back","sm")} Till kollegorna</button><div class="person-hero"><h2>${esc(p.name)}</h2>${phone||'<p class="smallmuted">Inget telefonnummer registrerat.</p>'}<div class="section-divider"></div><h3 class="inline-title">Just nu · enligt schemat</h3>${personNow(p)}</div><h3 class="inline-title" style="margin-top:22px">Arbetspass under Julstöket</h3>${shifts.length?DAY_NAMES.map((name,day)=>{const list=shifts.filter(s=>s.day===day),av=availableRanges(p,day);if(!list.length&&!av.length)return "";return `<div class="person-dayline">${esc(datesHeading(day))} · ${esc(workingSummary(p,day))}</div>${list.map(s=>{const a=activityFor(s),place=placeForShift(s);return `<div class="mini-entry"><strong>${esc(s.start)}–${esc(s.end)} · ${esc(a?.title||"Arbetsuppgift")}</strong><small>${esc(place.name)}${s.kind==="relief"?" · Avlösning":""}</small>${breaksOf(s).map(p=>`<small>Paus ${esc(p.start)}–${esc(p.end)}${reliefForPause(s,p).length?` · Avlösare: ${esc(reliefForPause(s,p).map(x=>x.name).join(", "))}`:""}</small>`).join("")}</div>`;}).join("")}`;}).join(""):`<div class="empty"><p>Inga uppgifter tilldelade.</p></div>`}`;}
  const list=planPeople().filter(p=>norm(p.name).includes(norm(state.search))||norm(phoneOf(p)).includes(norm(state.search)));return `${renderAlert()}<div class="heading"><h2>Hitta kollega</h2></div><label for="peopleSearch" class="sr-only">Sök person</label><div class="search">${icon("search")}<input id="peopleSearch" type="search" autocomplete="off" placeholder="Sök namn eller telefon…" value="${esc(state.search)}"></div><p class="smallmuted search-help">Tryck på en person för att se var personen arbetar enligt schemat. Telefonnummer går att ringa direkt.</p><div class="rows">${list.length?list.map(p=>{const now=activeNow(p.id),place=now[0]?placeForShift(now[0]):null;return `<div class="rowlink"><button type="button" class="rowlink-main" data-action="person" data-id="${esc(p.id)}"><strong>${esc(p.name)}</strong><small>${place?`Just nu: ${esc(place.name)}${onPause(now[0],stockholmMinute())?" · Paus":""}`:"Inget pågående pass"}</small></button>${phoneLink(p)||icon("chevron")}</div>`;}).join(""):`<div class="empty"><p>Ingen person matchar sökningen.</p></div>`}</div>`;}
function renderPlaces(){const places=(state.plan?.places||[]).filter(p=>!isGeneral(p)).sort((a,b)=>a.name.localeCompare(b.name,"sv"));const list=places.filter(p=>norm(p.name+" "+(p.description||"")).includes(norm(state.placeSearch)));const today=dayIndexNow(),now=stockholmMinute();return `${renderAlert()}<div class="heading"><h2>Platser</h2></div><label for="placesSearch" class="sr-only">Sök plats</label><div class="search">${icon("search")}<input id="placesSearch" type="search" autocomplete="off" placeholder="Sök plats…" value="${esc(state.placeSearch)}"></div><p class="smallmuted search-help">${state.demo?"Exempelläget innehåller inga verifierade kartpositioner. I den publicerade appen används de länkar som registrerats under Redigera plats i planeringsverktyget.":"Kartlänkar öppnas i Google Maps och hämtas från platsregistret."}</p>${list.length?list.map(p=>{const loc=locationOf(p.id);const workers=today<0?[]:unique((state.plan?.assignments||[]).filter(s=>s.day===today&&activityFor(s)?.placeId===p.id&&realWorkSegments(s).some(segment=>withinTime(segment,now))).map(s=>s.personId)).map(namedPerson).filter(Boolean);return `<section class="place-entry"><h3>${esc(loc.name)}</h3>${loc.description?`<div class="desc">${esc(loc.description)}</div>`:""}${mapButton(loc)?`<div class="place-actions">${mapButton(loc)}</div>`:""}<div class="current"><strong>Här arbetar just nu · enligt schemat</strong>${workers.length?`<div class="person-list">${workers.map(person=>`<button class="person-chip" data-action="person" data-id="${esc(person.id)}">${esc(person.name)}</button>`).join("")}</div>`:`<p class="empty-inline">${today<0?"Julstöket pågår inte just nu.":"Ingen schemalagd här just nu."}</p>`}</div></section>`;}).join(""):`<div class="empty"><p>Inga platser hittades.</p></div>`}`;}
function sharedUrl(){try{const url=new URL(window.location.href);if(!["http:","https:"].includes(url.protocol))return "";url.search="";url.hash="";return url.toString();}catch{return "";}}
function shareReady(){try{return window.location.protocol==="https:"&&!/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);}catch{return false;}}
function renderShare(){const url=sharedUrl(),usable=shareReady();return `${renderAlert()}<div class="heading"><h2>Dela Mitt Julstök</h2></div><section class="share-card"><h3>En länk för alla</h3><p>En kollega skannar QR-koden, öppnar appen och väljer sitt eget namn. Inget namn eller schema finns i QR-koden.</p>${usable?`<div class="qr-wrap" id="qrWrap"><canvas id="qrCanvas" width="300" height="300" role="img" aria-label="QR-kod som länkar till Mitt Julstök"></canvas></div><div class="url-box">${esc(url)}</div><div class="actions"><button class="action-btn" data-action="share">${icon("share","sm")} Dela</button><button class="action-btn outline" data-action="copy">Kopiera länk</button></div>`:`<div class="qr-wrap"><div style="padding:18px;font-size:13px;color:var(--muted)">${icon("info","lg")}<p>QR-koden blir tillgänglig när appen publicerats på en HTTPS-adress.</p></div></div><p>På en lokal filadress eller testsida går QR-koden inte att använda på en annan telefon.</p>`}</section><p class="smallmuted" style="margin-top:15px">Du kan också lägga till Mitt Julstök på telefonens hemskärm via webbläsarens meny.</p><button class="action-btn secondary block" data-action="choose" style="margin-top:16px">Byt person</button>`;}
function seasonMessage(){
  const mode=state.seasonMode;
  if(mode==="thanks") return {
    title:`Tack för ett bra genomfört Julstök ${state.year}!`,
    text:`Julstöket ${state.year} är avslutat. Vi hoppas att du får en fin adventstid – tack för allt arbete!`,
    image:"julstoket-tack.jpg",
    imageAlt:`Pyntad julgran för Julstöket ${state.year}`,
    sparkle:true
  };
  return {
    title:`Julstöket ${state.year} är under planering – snart är vi klara!`,
    text:`Vi arbetar med scheman, arbetsuppgifter och platser inför årets Julstök. Här öppnar den personliga mobilappen den 1 november.`,
    image:"julstoket-planering.jpg",
    imageAlt:`Jultomte som skriver för Julstöket ${state.year}`,
    sparkle:false
  };
}
function renderSeasonGate(){
  const msg=seasonMessage();
  return `<main class="shell shell-standalone"><header class="top top-standalone"><div class="message-banner"><h1>Mitt Julstök</h1><div class="season-card"><h2>${esc(msg.title)}</h2><p>${esc(msg.text)}</p></div></div></header><div class="content content-standalone"><figure class="season-figure ${msg.sparkle?"sparkle":""}"><img src="${esc(msg.image)}" alt="${esc(msg.imageAlt)}">${msg.sparkle?`<span class="spark s1"></span><span class="spark s2"></span><span class="spark s3"></span><span class="spark s4"></span><span class="spark s5"></span><span class="spark s6"></span><span class="spark s7"></span><span class="spark s8"></span>`:""}</figure></div></main>`;
}
function render(){let content="";if(state.seasonMode!=="active"&&!state.demo){content=renderSeasonGate();}else if(!state.plan){content=state.status==="error"?`<main class="shell"><div class="content"><h2>Mitt Julstök</h2><div class="notice">${esc(state.error||"Kunde inte hämta planen.")}</div><div class="actions"><button class="action-btn" data-action="retry">Försök igen</button><button class="action-btn outline" data-action="demo">Visa exempel</button></div></div></main>`:`<div class="boot"><div class="boot-logo">J</div><h1>Mitt Julstök</h1><p>Hämtar Julstökets uppgifter…</p></div>`;}else if(!currentPerson()){content=renderNameSelect();}else{content=shell(state.view==="people"?renderPeople():state.view==="places"?renderPlaces():state.view==="share"?renderShare():renderHome());}$("app").innerHTML=content;if(state.view==="share"&&currentPerson()&&shareReady()&&$("qrCanvas")){try{window.JulQR?.draw($("qrCanvas"),sharedUrl());}catch(error){$("qrWrap").innerHTML=`<p class="error-message">QR-koden kunde inte skapas.</p>`;}}}
function focusRender(id){const el=$(id),pos=el?.selectionStart??null;render();const target=$(id);if(target){target.focus();if(pos!==null&&target.setSelectionRange)try{target.setSelectionRange(pos,pos);}catch{}}}
function exampleData(){const people=[{id:"demo-amanda",name:"Amanda (exempel)",phone:"070-123 45 67",availability:[{day:0,start:"15:00",end:"20:00"},{day:1,start:"09:00",end:"18:00"},{day:2,start:"10:00",end:"14:00"}]},{id:"demo-sara",name:"Sara (exempel)",phone:"070-222 11 00",availability:[{day:1,start:"10:00",end:"18:00"}]},{id:"demo-ludvig",name:"Ludvig (exempel)",phone:"070-333 22 11",availability:[{day:1,start:"11:00",end:"18:00"}]}],places=[{id:"demo-gate",name:"Gröna grinden",description:"Entréområdet (exempel)",mapsUrl:""},{id:"demo-shop",name:"Vita huset",description:"Museibutiken (exempel)",mapsUrl:""},{id:"demo-square",name:"Torget",description:"",mapsUrl:""}],activities=[{id:"demo-a1",title:"Entrékassor",placeId:"demo-gate",notes:"Välkomna besökarna och kontrollera biljetter.",dayNotes:{},staffingPattern:{shifts:[]}},{id:"demo-a2",title:"Julbutiken",placeId:"demo-shop",notes:"Kontrollera växelkassan vid passets början.",dayNotes:{1:"På lördagen är det extra mycket besökare."},staffingPattern:{shifts:[{id:"demo-source",kind:"ordinary",day:1,breaks:[{id:"demo-pause",start:"13:00",end:"13:30"}]},{id:"demo-rel-source",kind:"relief",day:1,breaks:[],reliefPeriods:[{breakId:"demo-pause",start:"13:00",end:"13:30"}]}]}},{id:"demo-a3",title:"Glöggförsäljning",placeId:"demo-square",notes:"Se till att glöggen hålls varm.",dayNotes:{},staffingPattern:{shifts:[]}}],assignments=[{id:"demo-s1",activityId:"demo-a1",personId:"demo-amanda",day:0,start:"15:00",end:"20:00",kind:"ordinary",breaks:[]},{id:"demo-s2",activityId:"demo-a1",personId:"demo-amanda",day:1,start:"09:00",end:"11:00",kind:"ordinary",breaks:[]},{id:"demo-s3",activityId:"demo-a2",personId:"demo-amanda",day:1,start:"11:00",end:"15:00",kind:"ordinary",breaks:[{id:"demo-pause",start:"13:00",end:"13:30",type:"Paus"}],patternShiftId:"demo-source"},{id:"demo-s4",activityId:"demo-a3",personId:"demo-amanda",day:1,start:"15:30",end:"18:00",kind:"ordinary",breaks:[]},{id:"demo-s5",activityId:"demo-a2",personId:"demo-ludvig",day:1,start:"13:00",end:"13:30",kind:"relief",breaks:[],patternShiftId:"demo-rel-source"},{id:"demo-s6",activityId:"demo-a2",personId:"demo-sara",day:1,start:"11:00",end:"15:00",kind:"ordinary",breaks:[]},{id:"demo-s7",activityId:"demo-a1",personId:"demo-amanda",day:2,start:"10:00",end:"14:00",kind:"ordinary",breaks:[]}];return {schemaVersion:1,year:state.year,revision:1,places,people,activities,assignments};}
function setDemo(){stopListeners();state.demo=true;state.plan=exampleData();state.registerPeople=state.plan.people;state.registerPlaces=state.plan.places;state.status="live";state.error="";state.cached=false;state.personId="";state.detailPersonId=null;state.view="home";render();}
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
function refreshClock(){if(syncSeason())return;if(!currentPerson()||state.view!=="home"||state.status==="loading")return;const active=document.activeElement?.tagName;if(active==="INPUT"||active==="SELECT")return;render();}
async function copyLink(){const url=sharedUrl();if(!url)return;try{await navigator.clipboard.writeText(url);toast("Länken är kopierad.");}catch{const input=document.createElement("textarea");input.value=url;input.style.position="fixed";input.style.opacity="0";document.body.append(input);input.select();try{document.execCommand("copy");toast("Länken är kopierad.");}catch{toast("Kunde inte kopiera länken.");}input.remove();}}
async function shareLink(){const url=sharedUrl();if(!url)return;if(navigator.share){try{await navigator.share({title:"Mitt Julstök",text:"Öppna ditt personliga schema för Julstöket.",url});}catch(error){if(error.name!=="AbortError")toast("Delningen misslyckades.");}}else await copyLink();}
// Händelsedelegering gör att sökning och navigering fungerar efter varje renderering.
document.addEventListener("click",event=>{const button=event.target.closest("[data-action]");if(!button)return;const action=button.dataset.action;
  if(action==="view"){state.view=button.dataset.view;state.detailPersonId=null;render();window.scrollTo(0,0);if(state.view==="people")$("peopleSearch")?.focus();return;}
  if(action==="set-person"){rememberPerson(namedPerson(button.dataset.id));state.nameSearch="";state.view="home";render();window.scrollTo(0,0);return;}
  if(action==="choose"){state.personId="";storeDel(STORE.person);storeDel(STORE.personMeta);state.nameSearch="";state.view="home";render();$("nameInput")?.focus();return;}
  if(action==="day"){state.day=Number(button.dataset.day);render();window.scrollTo(0,0);return;}
  if(action==="person"){state.detailPersonId=button.dataset.id;state.view="people";render();window.scrollTo(0,0);return;}
  if(action==="person-back"){state.detailPersonId=null;render();$("peopleSearch")?.focus();return;}
  if(action==="retry"){if(firestore)listen();else connect();return;}
  if(action==="demo"){setDemo();return;}
  if(action==="share"){shareLink();return;}
  if(action==="copy"){copyLink();return;}
});
document.addEventListener("input",event=>{const input=event.target;if(input.id==="nameInput"){state.nameSearch=input.value;focusRender("nameInput");}else if(input.id==="peopleSearch"){state.search=input.value;focusRender("peopleSearch");}else if(input.id==="placesSearch"){state.placeSearch=input.value;focusRender("placesSearch");}});
function init(){const showDemo=new URLSearchParams(location.search).get("demo")==="1";if(showDemo)setDemo();else if(state.seasonMode!=="active"){render();}else{readCache(state.year);reconcilePerson();render();connect();}
  minuteTimer=setInterval(refreshClock,30000);
  if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost"))navigator.serviceWorker.register("service-worker.js").catch(()=>{});
}
init();
