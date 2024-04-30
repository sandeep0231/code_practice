const request = require('request-promise');
const cheerio = require('cheerio');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url,cb);
function cb(err,response,html) {

    if(err) {
console.log(err);
    }
    else {
        // console.log(html);
        extractHtml(html);
    }

}

       function extractHtml(html){
   let $ =  cheerio.load(html);
   let rest = $(".ds-uppercase ds-text-tight-m");
  let element =$("#main-container > div.ds-relative > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div.ds-flex.ds-space-x-5 > div.ds-grow > div.ds-mt-3 > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div.ds-p-0 > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div.lg\\:hover\\:ds-bg-ui-fill-translucent.ds-hover-parent.ds-relative > div > div.xl\\:ds-w-\\[730px\\] > div > div > div.first-letter\\:ds-capitalize > p");
  let element2 = $("#main-container > div.ds-relative > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div.ds-flex.ds-space-x-5 > div.ds-grow > div.ds-mt-3 > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div.ds-p-0 > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div.lg\\:hover\\:ds-bg-ui-fill-translucent.ds-hover-parent.ds-relative > div > div.xl\\:ds-w-\\[730px\\] > div > div > div.ds-leading-none.ds-mb-0\\.5 > span");  
  console.log(element2.text());
  console.log(element.text());

}
        