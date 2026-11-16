const CACHE='mm-trade-vault-public-2026-11-15-v3';
const ASSETS=['./','./index.html','./trades.json','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('mm-trade-vault-')||k.startsWith('mm-trade-vault-public-'))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url),base=new URL('./',self.location.href);
 if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
 event.respondWith(fetch(request).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(request,copy)).catch(()=>{}))}
   return response;
 }).catch(async()=>{
   const saved=await caches.match(request,{ignoreSearch:true});
   if(saved)return saved;
   if(request.mode==='navigate')return caches.match('./index.html');
   return Response.error();
 }));
});
