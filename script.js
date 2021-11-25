
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

for(let i=0;i<100;i++){
let cellRow = document.createElement("div");
cellRow.setAttribute("class","cell-row");
for(let j=0;j<26;j++){
    let cell = document.createElement("div");
    cell.setAttribute("class","cell");
    //remove red line of text 
    cell.setAttribute("spellcheck","false")
    // set attribute for cell and storage idntification
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
        let colId = String.fromCharCode(65+j);
        addresBar.value =  `${colId}${rowId}`
    })
    

}

// by default click on first cell
let firstCell = document.querySelector(".cell");
firstCell.click();