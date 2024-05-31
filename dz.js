function showText() {
    const content = document.getElementById("input");
    document.getElementById("text").innerHTML = content;
}

btn.style.height='50px'
btn.style.width='100px'

input.style.height='50px'

//////////////ДОП ЗАДАНИЕ///////////////

// const count=document.getElementById('count')
// const plus=document.getElementById('plus')
// const minus=document.getElementById('minus')

// let counter=0
// count.innerHTML=counter

// plus.addEventListener('click',()=>{
//     count.innerHTML= +counter.innerText +10
// });


// minus.addEventListener('click',()=>{
//     count.innerHTML= +counter.innerText -10
// });

// function organicizer(){
//     if(counter<1){
//         document.getElementById('plus').disabled=true
//     }
//      else{
//          document.getElementById('plus').disabled=false
//     }
//     if (counter>50) {
//         document.getElementById('minus').disabled=true
//     }
//     else{
//         document.getElementById('minus').disabled=false
//     }
//     organicizer()
//     }
    



document.getElementById('displayTextBtn').addEventListener('click', function() { 
    const inputText = document.getElementById('textInput').value; 
    document.getElementById('displayText').textContent = inputText; 
}); 
 
let counter = 0; 
const minCounter = 0; 
const maxCounter = 50; 
 
function updateCounterDisplay() { 
    document.getElementById('counterValue').textContent = counter; 
} 
 
document.getElementById('incrementBtn').addEventListener('click', function() { 
    if (counter < maxCounter) { 
        counter++; 
        updateCounterDisplay(); 
    } 
}); 
 
document.getElementById('decrementBtn').addEventListener('click', function() { 
    if (counter > minCounter) { 
        counter--; 
        updateCounterDisplay(); 
    } 
}); 
 
updateCounterDisplay();

    