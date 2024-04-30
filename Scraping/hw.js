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

// ==============FIND THE WINING TEAM NAME ============================
function extractHtml(html){
    let $ =  cheerio.load(html);
//    let element =$(".ds-text-compact-xxs .ds-flex.ci-team-score.ds-flex");
// let elementsArr = $(".ds-text-compact-xxs.ds-p-2.ds-px-4 .ds-flex .ci-team-score .ds-flex.ds-items-center");
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
let BattingTbl; let BowlingTbl;
for(let i=0; i<=TblHtmlArr.length-1;i++) {
let tableHeader = $(TblHtmlArr[i]).find(".ds-text-title-xs.ds-font-bold.ds-capitalize");
let TblHeaderName = tableHeader.text();
if(TblHeaderName == WiningTeam) {
    // biting players--- 
    BattingTbl =  $(TblHtmlArr[i]).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table");
    // bowling players--- 
     BowlingTbl = $(TblHtmlArr[i]).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto ");
//    console.log(BowlingTbl.html())
}

}

//-------loop for battining  and bowling-----
let btnLine = $(BattingTbl).find("tbody");
let Batting = $(btnLine).find("tr");
// console.log(Batting.html());
let objB = [];
for(let j=0; j<=Batting.length-1;j++) {
    let AllPlayer = $(Batting[j]).find(".ds-w-0.ds-whitespace-nowrap.ds-min-w-max");
let Plr = $(AllPlayer[0]).find(".ds-text-tight-s.ds-font-medium.ds-text-typo.ds-underline.ds-decoration-ui-stroke");
if(Plr.text() !=='') {
    let obj={
        'PlayerName':$(AllPlayer[0]).text(),
        // 'status':$(AllPlayer[1]).text(),
        'run':$(AllPlayer[1]).text(),
        'ball':$(AllPlayer[2]).text(),
        'fours':$(AllPlayer[4]).text(),
        'sixs':$(AllPlayer[5]).text(),
        'SR':$(AllPlayer[6]).text(),
    };
    objB.push(obj);
}
   
}
// player obj--
// console.log(objB);

// ---------------Download a  team batting score table into a excel-------------------------------------------
try{
let workbook = new excelJS.Workbook()
const sheet = workbook.addWorksheet("ScoreCard", {
    headerFooter:{firstHeader: "Header", firstFooter: "Hello World"}
  });
const wsTitle = 'BATTING SCORE';

sheet.columns = [
  {header:"Player Name",key:"pname",width:25},
  {header:"Run",key:"run",width:25},
  {header:"Ball",key:"ball",width:25},
  {header:"Fours",key:"fours",width:25},
  {header:"Sixs",key:"sixs",width:25},
  {header:"Strik Rate",key:"sr",width:25}
]

objB.map((val,idx)=>{
    sheet.addRow({
        pname:val.PlayerName,
        run:val.run,
        ball:val.ball,
        fours:val.fours,
        sixs:val.sixs,
        sr:val.SR
    });
});
let rndm = new Date().getTime();
let exlFileNm = WiningTeam+"_batting_score"+rndm;
workbook.xlsx.writeFile(`./${exlFileNm}.xlsx`).then(function() {
    console.log("xlsx file download for"+WiningTeam+"_batting_score..");
});

} catch(err){
console.log(err);
}


}





