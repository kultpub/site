/* Mitt Julstök: versionsbundet appskal. Personligt namnval och schema sparas separat. */
const CACHE_PREFIX="mitt-julstok-app-";
const CACHE_NAME=CACHE_PREFIX+"20261108-gantt-contrast-v38";
const SHELL=["./","./index.html","./styles.css?v=20261108-gantt-contrast-v38","./app.js?v=20261108-gantt-contrast-v38","./qr.js?v=20261108-gantt-contrast-v38","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>
    cache.addAll(SHELL.map(url=>new Request(url,{cache:"reload"})))
  ).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key))
  )).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    try {
      const response=await fetch(new Request(event.request,{cache:"no-cache"}));
      if(response.ok)await cache.put(event.request,response.clone());
      return response;
    } catch(error) {
      const saved=await cache.match(event.request);
      if(saved)return saved;
      if(event.request.mode==="navigate"){
        const page=await cache.match("./index.html");
        if(page)return page;
      }
      // Stöd äldre HTML-sidor som fortfarande begär resurser utan versionsnummer.
      const filename=url.pathname.split("/").pop();
      if(["app.js","qr.js","styles.css"].includes(filename)){
        const asset=await cache.match("./"+filename+"?v=20261108-gantt-contrast-v38");
        if(asset)return asset;
      }
      throw error;
    }
  })());
});