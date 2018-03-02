var game=undefined;
var tickspeed=30;
var chocolateBarDec=0.0;
var actualChocolate=0;
var titleFrames=[
	"-==Boring Incremental==-",
	"--=Boring Incremental=--",
	"---Boring Incremental---",
	"--=Boring Incremental=--",
	"-==Boring Incremental==-",
	"===Boring Incremental===" //aaaaaaaaaaaaaaa
];
var titleFrame=0;
function addChocolate(amount){
	chocolateBarDec+=amount;
	actualChocolate=Math.floor(chocolateBarDec);
}
var dts=new Date().getTime();
window.onload=function(){
	var dt=new Date().getTime()-dts;
	dts=new Date().getTime();
	addChocolate(1/(tickspeed/dt));
	game=document.getElementById("game");
	game.style.display="";
	setInterval(()=>{
		titleFrame++;
		document.title=titleFrames[titleFrame%titleFrames.length];
	},1000/2);
	setInterval(()=>{
		
	},1000/tickspeed);
}
