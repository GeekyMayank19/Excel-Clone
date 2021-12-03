// let sheetDb = [];

// for (let i = 0; i < 100; i++) {
//   let sheetRow = [];
//   for (let j = 0; j < 26; j++) {
//     let cellProp = {
//       bold: false,
//       italic: false,
//       underline: false,
//       alignment: "left",
//       fontFamily: "monospace",
//       fontSize: "14",
//       fontColor: "#000000",
//       BGColor: "#000000",
//     };
//     sheetRow.push(cellProp);
//   }
//   sheetDb.push(sheetRow);
// }

// // Selcetor for cell properties
// let bold = document.querySelector(".bold");
// let italic = document.querySelector(".italic");
// let underline = document.querySelector(".underline");
// let fontSize = document.querySelector(".font-size-props");
// let fontFamily = document.querySelector(".font-family-props");
// let fontColor = document.querySelector(".font-color-prop");
// let BgColor = document.querySelector(".BGcolor-prop");
// let alignment = document.querySelectorAll(".alignment");
// let leftAlign = alignment[0];
// let centerAlign = alignment[1];
// let rightAlign = alignment[2];

// let addresBar = document.querySelector(".address-bar");
// let activeColorProp = "#d1d8e0";
// let inactiveColorProp = "#F1F1F1";
// // Attach propeties listner
// // application of two-way binding
// // 1 -> bold icon
// bold.addEventListener("click", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);

//   // Modification
//   cellProp.bold = !cellProp.bold; //data change
//   cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // Ui change of selcted cell
//   // ui change of bold icon
//   bold.style.backgroundColor = cellProp.bold
//     ? activeColorProp
//     : inactiveColorProp;

//     console.log(cellProp.bold)
// });

// // 2-> italic font
// italic.addEventListener("click", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);

//   // Modification
//   cellProp.italic = !cellProp.italic; //data change
//   cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // Ui change of selcted cell
//   // ui change of bold icon
//   italic.style.backgroundColor = cellProp.italic
//     ? activeColorProp
//     : inactiveColorProp;
// });

// // 3-> underline
// underline.addEventListener("click", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);

//   // Modification
//   cellProp.underline = !cellProp.underline; //data change
//   cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // Ui change of selcted cell
//   // ui change of underline icon
//   underline.style.backgroundColor = cellProp.underline
//     ? activeColorProp
//     : inactiveColorProp;
// });

// // 4-> font size
// fontSize.addEventListener("change", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);
//   // fontSize.value means value uthaya h front end se
//   // value of current ui after changed by user
//   cellProp.fontSize = fontSize.value; // data change
//   cell.style.fontSize = cellProp.fontSize + "px"; // ui change
//   fontSize.value = cellProp.fontSize;
// });

// // 5-> font family
// fontFamily.addEventListener("change", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);

//   cellProp.fontFamily = fontFamily.value; // data change
//   cell.style.fontFamily = cellProp.fontFamily; // ui change
//   fontFamily.value = cellProp.fontFamily;
// });

// // 6-> font color
// fontColor.addEventListener("change", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);

//   cellProp.fontColor = fontColor.value; // data change
//   cell.style.color = cellProp.fontColor; // ui change
//   fontColor.value = cellProp.fontColor;
// });

// // 7-> background color
// BgColor.addEventListener("change", (e) => {
//   let address = addresBar.value;
//   let [cell, cellProp] = getActiveCell(address);

//   cellProp.BgColor = BgColor.value; // data change
//   console.log(cellProp.BgColor);
//   cell.style.backgroundColor = cellProp.BgColor; // ui change
//   BgColor.value = cellProp.BgColor;
// });

// // 8-> alingment

// alignment.forEach((alignElem) => {
//   alignElem.addEventListener("click", (e) => {
//     let address = addresBar.value;
//     let [cell, cellProp] = getActiveCell(address);

//     let alignValue = e.target.classList[0];
//     cellProp.alignment = alignValue; // Data change
//     cell.style.textAlign = cellProp.alignment; // UI change (1)

//     switch (
//       alignValue // UI change (2)
//     ) {
//       case "left":
//         leftAlign.style.backgroundColor = activeColorProp;
//         centerAlign.style.backgroundColor = inactiveColorProp;
//         rightAlign.style.backgroundColor = inactiveColorProp;
//         break;
//       case "center":
//         leftAlign.style.backgroundColor = inactiveColorProp;
//         centerAlign.style.backgroundColor = activeColorProp;
//         rightAlign.style.backgroundColor = inactiveColorProp;
//         break;
//       case "right":
//         leftAlign.style.backgroundColor = inactiveColorProp;
//         centerAlign.style.backgroundColor = inactiveColorProp;
//         rightAlign.style.backgroundColor = activeColorProp;
//         break;
//     }
//   });
// });

// //////////// on click first time on celll and apply default properties

// let allCells = document.querySelectorAll(".cell");
// for (let i = 0; i < allCells.length; i++) {
//   addListenerToAttachCellProperties(allCells[i]);
// }
// console.log(allCells.length)

// function addListenerToAttachCellProperties(cell) {
//   cell.addEventListener("click", (e) => {
//     let address = addresBar.value;
//     let [rid, cid] = decodeRidCidFromAddress(address);
    
//     let cellProp = sheetDb[rid][cid];

  
//     cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
//         cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
//         cell.style.textDecoration = cellProp.underline ? "underline" : "none";
//     cell.style.fontSize = cellProp.fontSize + "px";
//     cell.style.fontFamily = cellProp.fontFamily;
//     cell.style.color = cellProp.fontColor;
//     cell.style.backgroundColor =
//       cellProp.BGcolor === "#000000" ? "transparent" : cellProp.BGcolor;
//     cell.style.textAlign = cellProp.alignment;

//     // Apply properties UI Props container
//     bold.style.backgroundColor = cellProp.bold
//       ? activeColorProp
//       : inactiveColorProp;
//     italic.style.backgroundColor = cellProp.italic
//       ? activeColorProp
//       : inactiveColorProp;
//     underline.style.backgroundColor = cellProp.underline
//       ? activeColorProp
//       : inactiveColorProp;
//     fontColor.value = cellProp.fontColor;
//     BgColor.value = cellProp.BGColor;
//     fontSize.value = cellProp.fontSize;
//     fontFamily.value = cellProp.fontFamily;

  

//     switch (
//       cellProp.alignment // UI change (2)
//     ) {
//       case "left":
//         leftAlign.style.backgroundColor = activeColorProp;
//         centerAlign.style.backgroundColor = inactiveColorProp;
//         rightAlign.style.backgroundColor = inactiveColorProp;
//         break;
//       case "center":
//         leftAlign.style.backgroundColor = inactiveColorProp;
//         centerAlign.style.backgroundColor = activeColorProp;
//         rightAlign.style.backgroundColor = inactiveColorProp;
//         break;
//       case "right":
//         leftAlign.style.backgroundColor = inactiveColorProp;
//         centerAlign.style.backgroundColor = inactiveColorProp;
//         rightAlign.style.backgroundColor = activeColorProp;
//         break;
//     }
//   });
// }



// ////////
// function getActiveCell(address) {
//   let [rid, cid] = decodeRidCidFromAddress(address);
//   // Access cell and storage object
//   // .cell[rid=${rid}][cid=${cid}] this is filter applid in attibuets of class cell
//   let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`); //it is coming rom ui
//   let cellProp = sheetDb[cid][cid]; // it is coming from database sheetDb;
//   return [cell, cellProp];
// }

// function decodeRidCidFromAddress(address) {
//   // address -> "A1"
//   let rid = Number(address.slice(1) - 1);
//   let cid = Number(address.charCodeAt(0)) - 65; // "A" -> 65
//   return [rid, cid];
// }
// Storage
let collectedSheetDB = [];  //Contains all SheetDB
let sheetDB = [];

// {
//     let addSheetBtn = document.querySelector(".sheet-add-icon");
//     addSheetBtn.click();
// }

for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            BGcolor: "#000000",  // Just for indication purpose,
            value: "",
            formula: "",
            children: [],
        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}


// Selectors for cell properties
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-props");
let fontFamily = document.querySelector(".font-family-props");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor-prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

// Application of two-way binding
// Attach property listeners
bold.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // Modification
    cellProp.bold = !cellProp.bold; // Data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // UI change (1)
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // UI change (2)
})
italic.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // Modification
    cellProp.italic = !cellProp.italic; // Data change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // UI change (1)
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // UI change (2)
})
underline.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // Modification
    cellProp.underline = !cellProp.underline; // Data change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // UI change (1)
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // UI change (2)
})
fontSize.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.fontSize = fontSize.value; // Data change
    cell.style.fontSize = cellProp.fontSize + "px";
    fontSize.value = cellProp.fontSize;
})
fontFamily.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.fontFamily = fontFamily.value; // Data change
    cell.style.fontFamily = cellProp.fontFamily;
    fontFamily.value = cellProp.fontFamily;
})
fontColor.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.fontColor = fontColor.value; // Data change
    cell.style.color = cellProp.fontColor;
    fontColor.value = cellProp.fontColor;
})
BGcolor.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.BGcolor = BGcolor.value; // Data change
    cell.style.backgroundColor = cellProp.BGcolor;
    BGcolor.value = cellProp.BGcolor;
})

alignment.forEach((alignElem) => {
    alignElem.addEventListener("click", (e) => {
        let address = addressBar.value;
        let [cell, cellProp] = getCellAndCellProp(address);

        let alignValue = e.target.classList[0];
        cellProp.alignment = alignValue; // Data change
        cell.style.textAlign = cellProp.alignment; // UI change (1)

        switch(alignValue) { // UI change (2)
            case "left":
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = activeColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = activeColorProp;
                break;
        }

    })
})



let allCells = document.querySelectorAll(".cell");
for (let i = 0;i < allCells.length;i++) {
    addListenerToAttachCellProperties(allCells[i]);
}

function addListenerToAttachCellProperties(cell) {
    // Work
    cell.addEventListener("click", (e) => {
        let address = addressBar.value;
        let [rid, cid] = decodeRIDCIDFromAddress(address);
        let cellProp = sheetDB[rid][cid];

        // Apply cell Properties
        cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
        cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
        cell.style.textDecoration = cellProp.underline ? "underline" : "none";
        cell.style.fontSize = cellProp.fontSize + "px";
        cell.style.fontFamily = cellProp.fontFamily;
        cell.style.color = cellProp.fontColor;
        cell.style.backgroundColor = cellProp.BGcolor === "#000000" ? "transparent" : cellProp.BGcolor;
        cell.style.textAlign = cellProp.alignment;
                

        // Apply properties UI Props container
        bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
        italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
        underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
        fontColor.value = cellProp.fontColor;
        BGcolor.value = cellProp.BGcolor;
        fontSize.value = cellProp.fontSize;
        fontFamily.value = cellProp.fontFamily;
        switch(cellProp.alignment) { // UI change (2)
            case "left":
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = activeColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = activeColorProp;
                break;
        }

        let formulaBar = document.querySelector(".formula-bar");
        formulaBar.value = cellProp.formula;
        cell.innerText = cellProp.value;
    })
}

function getCellAndCellProp(address) {
    let [rid, cid] = decodeRIDCIDFromAddress(address);
    // Access cell & storage object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
}

function decodeRIDCIDFromAddress(address) {
    // address -> "A1"
    let rid = Number(address.slice(1) - 1); // "1" -> 0
    let cid = Number(address.charCodeAt(0)) - 65; // "A" -> 65
    return [rid, cid];
}