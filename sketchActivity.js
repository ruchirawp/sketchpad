
const container = document.querySelector('.wrapper');
const slider = document.querySelector('.slider');
const colorPicker = document.querySelector('#head');


let temp;
let defaultColor = "darkgrey";
let currentColor = defaultColor;
let tempColor = "white";



onStart();


//create with default size
function onStart(){

    console.log(slider.value);
    createGrid(slider.value, Math.pow(slider.value,2));

    colorPicker.addEventListener("input", watchColorPicker, false);



}

function watchColorPicker(event) {
    
    currentColor = event.target.value; 
  }

slider.oninput = function() {
    //output.innerHTML = this.value;
    console.log(this.value);
    deleteGrid();
    createGrid(this.value,Math.pow(this.value,2));

  }

function deleteGrid(){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


}




//Section 2

function createGrid(sides,size){

    container.setAttribute('style',`grid-template-columns: repeat(${sides},auto);grid-template-columns: repeat(${sides},auto) `);

    for (i=0;i<size;i++){
    
        temp = document.createElement('div');
        temp.classList.add('bg','gridUnit');
        temp.addEventListener('mouseenter', changeColor);
        container.appendChild(temp);
    }
    


    
    }

function changeColor(){

    console.log("test");
    
    console.log(typeof this.style.backgroundColor);
    

    //this.style.backgroundColor = "purple";
    this.setAttribute('style',`background-color: ${currentColor}`);
   
}

//Section 3
function reset(){

    const grid = document.querySelectorAll('.gridUnit'); 
    for (const square of grid){
        square.setAttribute('style','background-color: white');

    }

}

function resetColor(){

   

    if(currentColor != "white"){
        tempColor = currentColor;
        currentColor = "white"; 
    }
    else
        currentColor = tempColor;
     

}















//for future puzzle ideas
function puzzle2(){

    console.log("test");
    
    console.log(typeof this.style.backgroundColor);
    

    if (this.style.backgroundColor == ''){
        this.style.backgroundColor = "grey";
    }

    else{
        this.style.backgroundColor = "green";
    }

}

//for future puzzle ideas
function puzzle1(){

    if (this.textContent != 'hello'){
        this.textContent = 'hello';
    }

    else if (this.textContent == 'hello'){
        this.textContent = 'goodbye';  
    }
}