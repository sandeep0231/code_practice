const request = require('request-promise');
const cheerio = require('cheerio');
// const chalk = require('chalk');


// // const URL = `https://www.imdb.com/`;
// const URL = `https://www.imdb.com/title/tt1830379/?ref_=hm_top_tt_i_4`;

// (async ()=>{
// const response =await request(URL);
// // console.log(response);
// let $ = cheerio.load(response);
// let title = $('div[class="sc-dffc6c81-0 iwmAVw"] >h1').text();
// let subtext = $('div[class="sc-dffc6c81-0 iwmAVw"] >ul').text();
// console.log(`Movie name is : ${title}`);
// console.log(subtext);
// let rating = $('span[class="sc-bde20123-1 iZlgcd"]').text();
// let img = $('div[class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--l ipc-watchlist-ribbon--baseAlt ipc-watchlist-ribbon--onImage ipc-poster__watchlist-ribbon hero-media__watchlist"]').text();
// console.log(`Rating is: ${rating}`);
// console.log(`img: ${img}`);
// // let   rightSideData = $('ul[class="ipc-inline-list__item"]').text();
// // console.log(rightSideData);

// let clkAddBtn = $('div[class="sc-37a83435-1 hcWIAR"]').getText();
// console.log(clkAddBtn);
// }) ()


// request('https://www.worldometers.info',cb);
request('https://www.worldometers.info/coronavirus/',cb);


function cb(error,response,html) {
if(error) {
    console.log('error:',error);
}
// if(response) {
//     console.log('statusCode:',response&&response.statusCode);
// }
    if(html) {
        HandleHtlm(html);
    } 
}


function HandleHtlm(html){
    let selTool =cheerio.load(html);
    // let h1s = selTool("div");
    // console.log(h1s);

    let contentArr = selTool('#maincounter-wrap span');
    // for(let i=0; i<=contentArr.length-1; i++) {
    //        let data =  selTool(contentArr[i]).text();
    //        console.log(`data: ${data}`);
    // }

    let Total =  selTool(contentArr[0]).text();
    let death =  selTool(contentArr[1]).text();
    let recover =  selTool(contentArr[2]).text();

    console.log("Total Case:"+Total);
    console.log("Death:"+death);
    console.log("Recover:"+recover);

}


