let addMoney = document.getElementById('add_money');
let countMoney = document.getElementById('count_money');
let number = document.getElementById('number');
let btnBet = document.getElementById('make_bet');
let inputBet;
let newNumber = 0;
let numCountMoney = Number(countMoney.innerHTML);

let audio1 = new Audio(); 
audio1.volume = 0.4;
audio1.src = 'apple-pay-succes.mp3';

let audio2 = new Audio();
audio2.volume = 0.3;
audio2.src = 'win.mp3';

let audio3 = new Audio();
audio3.volume = 0.05;
audio3.src = 'sound.mp3';

function translateNum(value) {
	inputBet = Number(value);
	console.log(inputBet);
}

function play() {
	newNumber = Math.floor(Math.random() * 101);
	number.innerHTML = newNumber;


	if (inputBet == newNumber) {
		numCountMoney -= 1000;
		numCountMoney += 1000000;
		audio2.play();
	} else {
		numCountMoney -= 1000;
	}
	countMoney.innerHTML = numCountMoney;
}

btnBet.onclick = () => {
	if (numCountMoney >= 1000) {
		audio3.play();
		play();
	}
	
}

addMoney.onclick = () => {
	if (numCountMoney <= 1000) {
		numCountMoney = 100000;
		audio1.play();
	}
	countMoney.innerHTML = numCountMoney;
}

