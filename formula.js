for(let i =0 ; i<rows; i++){
    for(let j=0;j<cols;j++){
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur",(e)=>{
            address = addressBar.value;
            let [activeCell, cellProp] = getCellAndCellProp(address);
            let enteredData = activeCell.innerText;
            cellProp.value = enteredData;
            // console.log(cellProp)
        })
    }
}

let formulaBar = document.querySelector(".formula-bar");

formulaBar.addEventListener("keydown",(e)=>{
    let inputFormula = formulaBar.value;
    if(e.key==="Enter" && inputFormula){
        //if change in formula break old P-c relation , evaluate new formula, add new p-c relation
       let address = addressBar.value;
       let [cell,cellProp ] = getCellAndCellProp(address);
        if(inputFormula!==cellProp.formula){
            removeChildFromParent(cellProp.formula);
        }

        let evaluatedValue = evaluateValue(inputFormula);

        cellUiAndCellProp(inputFormula,evaluatedValue);

        addChildToParent(inputFormula);

        console.log(sheetDB);
    }
})

function addChildToParent(formula ){
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" ");
    for(let i = 0 ;i<encodedFormula.length;i++){
        let asciiVal = encodedFormula[i].charCodeAt(0)-'0';
        if(asciiVal >=65 && asciiVal <=90){
            let [parentCell,parentCellProp] = getCellAndCellProp(encodedFormula[i]);
            parentCellProp.children.push(childAddress);
            // console.log(parentCellProp)
        }
    }

}

function removeChildFromParent(formula){
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" ");
    for(let i = 0 ;i<encodedFormula.length;i++){
        let asciiVal = encodedFormula[i].charCodeAt(0)-'0';
        if(asciiVal >=65 && asciiVal <=90){
            let [parentCell,parentCellProp] = getCellAndCellProp(encodedFormula[i]);
            let idx = parentCellProp.children.indexOf(childAddress);
            parentCellProp.children.splice(idx,1);
            // console.log(parentCellProp)
        }
    }
}

function evaluateValue(formula){

    let encodedFormula = formula.split(" ");
    for(let i = 0 ;i<encodedFormula.length;i++){
        let asciiVal = encodedFormula[i].charCodeAt(0)-'0';
        console.log(asciiVal);
        if(asciiVal >=65 && asciiVal <=90){
            let [cell,cellProp] = getCellAndCellProp(encodedFormula[i]);
            encodedFormula[i]=cellProp.value;
        }
    }
    let decodedFormula =  encodedFormula.join(" ");
    return eval(decodedFormula);
}

function cellUiAndCellProp(formula,val){
    address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);
    cell.innerText = val;
    cellProp.value = val;
    cellProp.formula = formula;
}