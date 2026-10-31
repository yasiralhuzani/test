// Usage: node render.js  -> writes ../business-card-print.pdf (96x56mm incl. 3mm bleed)
const {chromium}=require('playwright');const path=require('path');(async()=>{
const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+path.join(__dirname,'card.html'));await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:path.join(__dirname,'..','business-card-print.pdf'),width:'96mm',height:'56mm',printBackground:true,preferCSSPageSize:true});
await b.close();})();
