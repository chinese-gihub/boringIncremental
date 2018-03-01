document.body.onload=function(){
	document.getElementById("game").style.display="";
}
var titleFrames=[
	"/\Boring Incremental\/",
	"\/Boring Incremental/\"
];
var titleFrame=0;
setInterval(()=>{
	titleFrame++;
	document.title=titleFrames[titleFrame%titleFrames.length];
},1000/2);
