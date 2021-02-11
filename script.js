"use strict";


let n=0;
const array1 = []
init(); 

function init(){
    
    
if(n<9) {
    array1.unshift(n);
    console.log(n);
    console.log(array1); 
    n++;
    setTimeout(init,1000); 
}
else {
    n++;
    array1.unshift(n);
    array1.length = 9;
    console.log(array1); 
    
    setTimeout(init,1000);
}

}