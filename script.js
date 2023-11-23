//your JS code here. If required.
let p=document.getElementById("timer");
var x=setInterval(function(){
	let date=new Date();
	p.innerHTML=`${date}`;
})