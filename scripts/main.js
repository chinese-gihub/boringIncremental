var game=undefined;
var titleFrames=[
	"-==Boring Incremental==-",
	"--=Boring Incremental=--",
	"---Boring Incremental---",
	"--=Boring Incremental=--",
	"-==Boring Incremental==-",
	"===Boring Incremental==="
];
var titleFrame=0;
document.onload=function(){
	game=document.getElementById("game");
	game.style.display="";
	setInterval(()=>{
		titleFrame++;
		document.title=titleFrames[titleFrame%titleFrames.length];
		
	},1000/2);
	
}
