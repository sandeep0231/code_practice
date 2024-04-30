const puppeteer = require("puppeteer");
let Cpage;
const browserOpenpromise =  puppeteer.launch({
    headless:false,
    defaultViewport:null,
    slowMo:true
});
browserOpenpromise.then(function (browser){
    console.log("open"); 
    //   curent open tab
    let pageOpenPromise = browser.pages();
  return pageOpenPromise; 
}).then(function (browserPagez) {
    Cpage =  browserPagez[0]; 
   let gotoPromise =  Cpage.goto("https://www.google.com/");
return gotoPromise;
}).then(function(){
let eleWaitPro = Cpage.waitForSelector("textarea",{visible:true});
return eleWaitPro;
}).then(function () {
console.log("goto webpage.");
let keysendPro = Cpage.type("textarea","REACT JS ");
return keysendPro;
}).then(function(){
let enterKeyProcessed = Cpage.keyboard.press("Enter");
return enterKeyProcessed;
}).then(()=>{
    let waitforclingPage  = Cpage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
   return waitforclingPage;
}).then(()=>{
   let ClikedPage = Cpage.click("h3.LC20lb.MBeuO.DKV0Md");
   return ClikedPage;
})
.then(()=>{  
    let waitForClkBtn =  Cpage.waitForSelector("#__next > div:nth-child(4) > main > article > div > div.mx-5.mt-12.lg\\:mt-24.mb-20.lg\\:mb-32.flex.flex-col.justify-center > div > a.w-full.sm\\:w-auto.justify-center.active\\:scale-\\[\\.98\\].transition-transform.inline-flex.font-bold.items-center.outline-none.focus\\:outline-none.focus-visible\\:outline.focus-visible\\:outline-link.focus\\:outline-offset-2.focus-visible\\:dark\\:focus\\:outline-link-dark.leading-snug.bg-link.text-white.hover\\:bg-opacity-80.text-lg.py-3.rounded-full.px-4.sm\\:px-6",{visible:true});
    return  waitForClkBtn;
}).then(()=>{
    let ClkBtnProcess = Cpage.click("#__next > div:nth-child(4) > main > article > div > div.mx-5.mt-12.lg\\:mt-24.mb-20.lg\\:mb-32.flex.flex-col.justify-center > div > a.w-full.sm\\:w-auto.justify-center.active\\:scale-\\[\\.98\\].transition-transform.inline-flex.font-bold.items-center.outline-none.focus\\:outline-none.focus-visible\\:outline.focus-visible\\:outline-link.focus\\:outline-offset-2.focus-visible\\:dark\\:focus\\:outline-link-dark.leading-snug.bg-link.text-white.hover\\:bg-opacity-80.text-lg.py-3.rounded-full.px-4.sm\\:px-6");
    return ClkBtnProcess;
})
.then(()=>{
    let waitForClkBtn1 =  Cpage.waitForSelector("#__next > div.z-50.sticky.top-0 > nav > div > div.text-base.justify-center.items-center.gap-1\\.5.flex.\\33 xl\\:flex-1.flex-row.\\33 xl\\:justify-end > div.flex.items-center.-space-x-2\\.5.xs\\:space-x-0 > div.flex.dark\\:hidden > button > svg",{visible:true});
    return  waitForClkBtn1;
})
.then(()=>{
    let waitForClkBtnColr =  Cpage.click("#__next > div.z-50.sticky.top-0 > nav > div > div.text-base.justify-center.items-center.gap-1\\.5.flex.\\33 xl\\:flex-1.flex-row.\\33 xl\\:justify-end > div.flex.items-center.-space-x-2\\.5.xs\\:space-x-0 > div.flex.dark\\:hidden > button > svg");
    return waitForClkBtnColr;
}) 

.then(()=>{
    let SearchBarClk =  Cpage.click("#__next > div.z-50.sticky.top-0 > nav > div > div.hidden.md\\:flex.flex-1.justify-center.items-center.w-full.\\33 xl\\:w-auto.\\33 xl\\:shrink-0.\\33 xl\\:justify-center > button");
return SearchBarClk;
})
.then(()=>{
    let SearchKeys1 =  Cpage.waitForSelector("input[type='search']",{visible:true});
    return  SearchKeys1;
})

.then(()=>{
    let SearchKeys = Cpage.type("input[type='search']","Hooks");
    return SearchKeys;
})
.then(()=>{
    let PressEntrForSearch1 =  Cpage.waitForSelector(".DocSearch-Hit-Container .DocSearch-Hit-content-wrapper .DocSearch-Hit-title",{visible:true});
    return  PressEntrForSearch1;
})
.then(()=>{
    let PressEntrForSearch = Cpage.click(".DocSearch-Hit-Container .DocSearch-Hit-content-wrapper .DocSearch-Hit-title");
    return PressEntrForSearch;
})

.catch((err)=>{
console.log(err);
});