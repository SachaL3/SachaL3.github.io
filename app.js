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