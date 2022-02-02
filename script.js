let p=document.querySelector(".text")
let count=-1
let button=document.querySelector("button")
button.onclick=function(){
	button.disabled=true
	let value=document.querySelector("input").value
	value="Привет "+value+", ты взломан(а)"
	let timer=setInterval(print, 250)
	function print(){
	count+=1
	p.innerHTML+=value[count]
	if (count==value.length-1) {
		clearInterval(1)
		window.location.href="https://aleksandarbortulevsergeevich.github.io/Alex-School_now/"
	}
}
}
