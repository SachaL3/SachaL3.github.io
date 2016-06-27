var titles = [];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");

function Allow()
{
if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
{
user.title.value="";
alert("Please Enter only alphabets");
}

window.location.reload()
}

function insert () {
titles.push(titleInput.value);
clearAndShow();
}

function clearAndShow () 
{
titleInput.value = "";
messageBox.innerHTML = "";
messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}


// .....for comments
// if(!window.hcb_user){hcb_user={

// };
// } (function(){
// 	var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="//www.htmlcommentbox.com";s.setAttribute("type","text/javascript");
// 	s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&opts=16862&num=10&ts=1466373177533");
// 	if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);
// })();

////////..............................Stop Watch
var time = 0;
var running = false;

function startPause() {
	if(running == false){
		running = true;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
	}
	else {
		running = false;
		document.getElementById("startPause").innerHTML = "Resume";
	}

}



function reset() {
	running = false;
	time = 0;
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById("output").innerHTML = "0:00:00:00";
}

function increment() {

	if(running == true) {

		setTimeout(function() {
			time++;
			var min = Math.floor(time/100/60);
			var sec = Math.floor(time/100 % 60);
			var hour = Math.floor(time/10/60/60);
			var tenth = Math.floor(time%100);

			if(min<10){
				min = "0" + min;
			}
			if(sec<10){
				sec = "0" + sec;
			}
			if(tenth<10){
				tenth = "0" + tenth;
			}
			


			document.getElementById("output").innerHTML = hour + ": " + min + ": " + sec + ": " + tenth;
			increment();
	}, 10);
	}
};
