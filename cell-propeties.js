
let sheetDb = [];

for(let i=0;i<100;k++){
    let sheetRow = [];
    for(let j = 0;j<26;j++){
        let object = {
            bold: false,
            italic: false,
            underline: false,
            alligment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            BGColor: "#000000",
        }
        sheetRow.push(object);
    }
    sheetDb.push(sheetRow);
}

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-props");
let fontFamily = document.querySelector(".font-family-props");
let fontColor = document.querySelector(".font-color");
let BgColor = document.querySelector(".bg-color");
let alligment = document.querySelector(".alingment");;
let leftAling = alligment[0];
let rightAling = alligment[1];
let centerAling = alligment[2];
