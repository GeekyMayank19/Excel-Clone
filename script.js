
let cellGrid = document.querySelector(".cell-grid");
let gridCont = document.querySelector(".grid-cont");

for(let i= 0;i<100;i++){
    let col = document.createElement("div");
    col.setAttribute("class","col");
    col.textContent = i+1;
    gridCont.appendChild(col);
}
let leftcorner = document.querySelector(".left-corner")
for(let i = 0 ;i<26;i++){
    let row = document.createElement("div");
    row.setAttribute("class","row");
    row.textContent = String.fromCharCode(i+65);
    leftcorner.appendChild(row);
}

for(let i=1;i<=100;i++){
let cellRow = document.createElement("div");
cellRow.setAttribute("class","cell-row");
for(let j=1;j<=26;j++){
    let cell = document.createElement("div");
    cell.setAttribute("class","cell");
    // set attribute for cell idntification
    cell.setAttribute("rid",i);
    cell.setAttribute("cid",j);
    // cell.textContent = i+","+j;
    cell.setAttribute("contenteditable","true");
    displayCellAddress(cell, i, j);
    cellRow.appendChild(cell);
}
cellGrid.appendChild(cellRow);
}
let addresBar =document.querySelector(".address-bar");


function displayCellAddress(cell , i, j){

    cell.addEventListener("click",(e)=>{
        let rowId = i+1;
        let colId = String.fromCharCode(64+j);
        addresBar.value =  `${colId}${rowId}`
    })
    

}