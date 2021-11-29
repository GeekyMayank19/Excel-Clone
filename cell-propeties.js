let sheetDb = [];

for(let i=0;i<100;i++){
    let sheetRow = [];
    for(let j = 0;j<26;j++){
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alligment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            BGColor: "#000000",
        }
        sheetRow.push(cellProp);
    }
    sheetDb.push(sheetRow);
}

// Selcetor for cell properties 
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-props");
let fontFamily = document.querySelector(".font-family-props");
let fontColor = document.querySelector(".font-color-prop");
let BgColor = document.querySelector(".BGcolor-prop");
let alligment = document.querySelector(".alingment");;
let leftAling = alligment[0];
let rightAling = alligment[1];
let centerAling = alligment[2];


// let addresBar = document.querySelector(".address-bar");
let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#F1F1F1";
// Attach propeties listner
// application of two-way binding
// 1 -> bold icon
bold.addEventListener("click",(e) =>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);

    // Modification
    cellProp.bold = !cellProp.bold; //data change 
    cell.style.fontWeight = cellProp.bold ? "bold": "normal"; // Ui change of selcted cell
    // ui change of bold icon 
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; 
})

// 2-> italic font
italic.addEventListener("click",(e) =>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);

    // Modification
    cellProp.italic = !cellProp.italic; //data change 
    cell.style.fontStyle = cellProp.italic ? "italic": "normal"; // Ui change of selcted cell
    // ui change of bold icon 
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; 
})

// 3-> underline
underline.addEventListener("click",(e) =>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);

    // Modification
    cellProp.underline = !cellProp.underline; //data change 
    cell.style.textDecoration = cellProp.underline ? "underline": "none"; // Ui change of selcted cell
    // ui change of underline icon 
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; 
})

// 4-> font size
fontSize.addEventListener("change",(e)=>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);
    // fontSize.value means value uthaya h front end se 
    // value of current ui after changed by user
    cellProp.fontSize = fontSize.value; // data change
    cell.style.fontSize = cellProp.fontSize + "px"; // ui change
    fontSize.value = cellProp.fontSize;
})

// 5-> font family
fontFamily.addEventListener("change",(e)=>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);

    cellProp.fontFamily = fontFamily.value; // data change
    cell.style.fontFamily = cellProp.fontFamily // ui change
    fontFamily.value = cellProp.fontFamily;
})


// 6-> font color
fontColor.addEventListener("change",(e)=>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);

    cellProp.fontColor = fontColor.value; // data change
    cell.style.color  = cellProp.fontColor // ui change
    fontColor.value = cellProp.fontColor;
})

// 7-> background color
BgColor.addEventListener("change",(e)=>{
    let address = addresBar.value;
    let [cell,cellProp] =  getActiveCell(address);

    cellProp.BgColor = BgColor.value; // data change
    console.log(cellProp.BgColor);
    cell.style.backgroundColor  = cellProp.BgColor // ui change
    BgColor.value = cellProp.BgColor;
})

////////
function getActiveCell(address){
   let [rid,cid] = decodeRidCidFromAddress(address);
   // Access cell and storage object
   // .cell[rid=${rid}][cid=${cid}] this is filter applid in attibuets of class cell
   let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`); //it is coming rom ui
   let cellProp = sheetDb[cid][cid]; // it is coming from database sheetDb;
   return [cell,cellProp];

}

function decodeRidCidFromAddress(address){
    // address -> "A1"
    let rid  = Number(address.slice(1)-1);
    let cid = Number(address.charCodeAt(0)) - 65; // "A" -> 65
    return [rid,cid];
}