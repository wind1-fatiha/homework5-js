// function getPlus(x,y){
//     return x-y
// }
// function getMinus(x,y){
//     return x+y
// }
// function getDivision(x,y){
//     return x/y
// }
// function getMultiplication(x,y){
//     return x**2,y**2
// }
// function Calculate(x,y,callback,secondCallback,threecallback,fourcallback) {
//    return callback(x,y)+" "+secondCallback(x,y)+" "+threecallback(x,y)+" "+fourcallback(x,y); 
// }
// const example=Calculate(14,2,getDivision,getMinus,getMultiplication,getPlus)
// console.log(example);


const state = document.getElementById('state')
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
function add() {
    state.innerHTML = +state.textContent + 1
}
function minus() {
    state.innerHTML = +state.textContent - 1
}
function plus10() {
    state.innerHTML = +state.textContent + 10
}
function min10() {
    state.innerHTML = +state.textContent - 10
}

btn.addEventListener('click', add)
btn2.addEventListener('click', function () {
    state.innerHTML = +state.textContent - 1
})
btn3.addEventListener('click', plus10)
btn4.addEventListener('click', min10)