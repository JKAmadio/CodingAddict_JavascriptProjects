const color = ["#F72AAE", "#F7DC36", "#AB1EF7", "#1DF705", "#2911F7", "#FA301E", "#2A88FA", "#11F7FB", "#3EFA92", "#FCB126"]

function handleClick() {
	const colorIndex = Math.floor(Math.random() * 10)
	document.querySelector('.container__color').innerHTML = color[colorIndex]
	document.querySelector('.container').style.backgroundColor = color[colorIndex]
}