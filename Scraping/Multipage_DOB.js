const request = require('request-promise');
const cheerio = require('cheerio');
const excelJS = require("exceljs");
const fs = require("fs");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
request(url,cb);
function cb(err,response,html) {
    if(err) {
console.log(err);
    }
    else {
        extractHtml(html);
    }
}


// ---start dob fun---
function getDOBOPlayer(link,name,team) {
    let res= "";
    request(link,cb);
    let newArr = function cb(err,response,html) {
        if(err) {
    console.log(err);
        }
        else {
              res =  extractDOBHtml(html,name,team);
        }
        return res;
    }

    console.log("fun::",newArr);
return res;
}
//---end dob fun---

function extractDOBHtml(html,name,team) {
let $ = cheerio.load(html);

let CardArr1 = $(".ds-p-4 .ds-grid.ds-grid-cols-2.ds-gap-4");
let CardArr =  $("#main-container > div.ds-relative > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.ds-pt-4 > div.ds-flex.ds-space-x-5 > div.ds-grow > div:nth-child(2) > div > div > div.ds-grid.lg\\:ds-grid-cols-3.ds-grid-cols-2.ds-gap-4.ds-mb-8 > div:nth-child(2) > span > p").text();
// let CardArrKey = $(".ds-p-4 .ds-grid.ds-grid-cols-2.ds-gap-4 .ds-text-tight-m.ds-font-regular");
// let CardArrVal = $(".ds-p-4 .ds-grid.ds-grid-cols-2.ds-gap-4 .ds-text-title-s.ds-font-bold.ds-text-typo");
// console.log(CardArrKey.html());
 return CardArr;
}
// ==============FIND THE WINING TEAM NAME ============================
function extractHtml(html){
    let $ =  cheerio.load(html);
let elementsArr = $(".ds-text-compact-xxs.ds-p-2.ds-px-4 .ds-flex.ds-flex-col .ci-team-score.ds-flex");
// console.log(elementsArr.text()); return false;
let WiningTeam;
   for(let i = 0; i<=elementsArr.length-1; i++) {
     let hashClass = $(elementsArr[i]).hasClass("ds-opacity-50");
   if(hashClass==false) {
    let Team =  $(elementsArr[i]).find(".ds-text-tight-l");
   WiningTeam = Team.text().trim();
//    console.log(WiningTeam);   //output -1
}
    }


// -==================NOW FINDING THE TABLE OF WINING TEAM =============================
let TblHtmlArr = $(".ds-mt-3 .ds-rounded-lg.ds-mt-2");
let BattingTbl;  
for(let i=0; i<=TblHtmlArr.length-1;i++) {
let tableHeader = $(TblHtmlArr[i]).find(".ds-text-title-xs.ds-font-bold.ds-capitalize");
// if(TblHeaderName == WiningTeam) {
    // biting players--- 
    BattingTbl =  $(TblHtmlArr[i]).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table");
    // bowling players--- 
     BowlingTbl = $(TblHtmlArr[i]).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto ");
//    console.log(BowlingTbl.html())
// }

}

//-------loop for battining  and bowling-----
let btnLine = $(BattingTbl).find("tbody");
let Batting = $(btnLine).find("tr");
let objB = [];
for(let j=0; j<=Batting.length-1;j++) {
    let AllPlayer = $(Batting[j]).find(".ds-w-0.ds-whitespace-nowrap.ds-min-w-max");
let Plr = $(AllPlayer[0]).find(".ds-text-tight-s.ds-font-medium.ds-text-typo.ds-underline.ds-decoration-ui-stroke");
if(Plr.text() !=='') {
    let playerLink = $(AllPlayer[0]).find("a").attr("href");
    let AccessLink = `https://www.espncricinfo.com${playerLink}`;
    let dob_player = getDOBOPlayer(AccessLink,$(AllPlayer[0]).text(),WiningTeam);
    // console.log("new dob is::::",dob_player); 
    let obj={
        'PlayerName':$(AllPlayer[0]).text(),
        'DOB':dob_player,
        'Team':WiningTeam,
    };
    objB.push(obj);
}
   
}
return false;
// ---------------Download a  team batting score table into a excel-------------------------------------------
try{
let workbook = new excelJS.Workbook()
const sheet = workbook.addWorksheet("Teams played batsmen  list");

sheet.columns = [
  {header:"Player Name",key:"pname",width:25},
  {header:"DOB",key:"DOB",width:25},
  {header:"Team",key:"Team",width:25},
]

objB.map((val,idx)=>{
    sheet.addRow({
        pname:val.PlayerName,
        DOB:val.DOB,
        Team:val.Team,
    });
});
let rndm = new Date().getTime();
let exlFileNm = WiningTeam+"_played_betsmen"+rndm;
workbook.xlsx.writeFile(`./${exlFileNm}.xlsx`).then(function() {
    console.log("xlsx file download for "+ WiningTeam +" played betsmen..");
});

} catch(err){
console.log(err);
}


} 





