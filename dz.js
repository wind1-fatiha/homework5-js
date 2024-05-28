function showText() {
    const content = document.getElementById("input");
    document.getElementById("text").innerHTML = content;
}

btn.style.height='50px'
btn.style.width='100px'

input.style.height='50px'

//////////////ДОП ЗАДАНИЕ///////////////

const count=document.getElementById('count')
const plus=document.getElementById('plus')
const minus=document.getElementById('minus')

function str() {
    if (count>=0, count<50){
        return True;
    }
    }

function plus10(){
    count.innerHTML= +count.textContent +10
} 
function minus10() {
    count.innerHTML= +count.textContent -10
}

function calculate(callback, callback2){
    return callback(str,plus10)+" "+callback2(str,min10)
}
const num10=calculate(callback)
const num=calculate(callback2)
plus.addEventListener('click', num10)
minus.addEventListener('click', num)