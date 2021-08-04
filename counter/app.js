console.log('Javascript funcionando')

const number = document.querySelector('.container__counter')
let counter = 0

function colorizeCounter() {
	if (counter < 0)
	number.style.color='red'
	else if (counter > 0)
	number.style.color='green'
	else
	number.style.color='black'
}

function printCounter() {
	number.innerHTML=counter
}

function handleDecrease() {
	counter--
	printCounter()
	colorizeCounter()
}

function handleReset() {
	counter = 0
	printCounter()
	colorizeCounter()
}

function handleIncrease() {
	counter++
	printCounter()
	colorizeCounter()
}