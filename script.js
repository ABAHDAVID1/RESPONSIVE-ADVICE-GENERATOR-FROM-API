'use strict';

const rollDice = document.getElementById('rollDice');

async function fetchData(){
try{
const response = await fetch('https://api.adviceslip.com/advice');
const data = await response.json();

const adviceContent = await document.getElementById('adviceContent');

const adviceNum = await document.getElementById('adviceNum');
adviceContent.textContent = data.slip.advice;
adviceNum.textContent = '#' + data.slip.id;
}catch(error){
console.error(error)
};
};
fetchData();

rollDice.addEventListener('click', () =>{
window.location.reload();

});