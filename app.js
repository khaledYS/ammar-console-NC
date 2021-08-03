const output = document.querySelector('.output')
const input = document.querySelector('.input > input')
 
window.onkeypress = e=>input.focus()

function enterHitted(e) {
	const value = e.target.value.split(' ')
	console.log(value)
	e.target.value = ''
	outputit(value)
}

function outputit(somthtingtoreturn){
	output.innerHTML += `<span>${somthtingtoreturn}</span>`;
}


input.onfocus = ()=>{ 
	input.onkeydown = e=>{
		if(e.code == 'Enter')enterHitted(e)
	}
}


const polits = {
	print: (value)=>{return value}
}