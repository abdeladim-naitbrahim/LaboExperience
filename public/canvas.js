let singet=false;
let menu=document.getElementById("menu");
let sing=document.getElementById("sing");
let winpanel=document.getElementById("win");
let playpanel=document.getElementById("play");
function singin()
{
	 menu=document.getElementById("menu");
 sing=document.getElementById("sing");
 winpanel=document.getElementById("win");
 playpanel=document.getElementById("play");
	hidelement(sing);
	showlement(playpanel);
	singet=true;
  document.getElementById("name").innerHTML="welcome "+document.getElementById("vname").value;
   document.getElementById("pwin").innerHTML="congratulations " +document.getElementById("vname").value+" you win";
   //doLoad();
}
function hidelement(e)
{
	 e.style.display = "none";
}
function showlement(e)
{
	 e.style.display = "block";
}
function gameloaded()
{
   menu=document.getElementById("menu");
 sing=document.getElementById("sing");
 winpanel=document.getElementById("win");
 playpanel=document.getElementById("play");
	video=document.getElementById('video');
  	 console.log("video loaded");
	 
  video.onloadeddata = (event) => {
    console.log("video ready");
	hidelement(load);
	showlement(menu);
	showlement(video);
};

}