console.log("nia！竟然被发现了～");

function scary(){
	if (document.getElementById("button1").innerHTML == "单击开启") {
		document.getElementById("button1").innerHTML = "单击关闭";
		document.getElementById("b").style.opacity = 100;
	} else {
		document.getElementById("button1").innerHTML = "单击开启";
		document.getElementById("b").style.opacity = 0;
	}
}

function han(){
	if (document.getElementById("button2").innerHTML == "单击开启") {
		document.getElementById("button2").innerHTML = "单击关闭";
		document.getElementById("han").style.opacity = 100;
	} else {
		document.getElementById("button2").innerHTML = "单击开启";
		document.getElementById("han").style.opacity = 0;
	}
}

function face(){
	if (document.getElementById("button3").innerHTML == "单击开启") {
		document.getElementById("button3").innerHTML = "单击关闭";
		document.getElementById("face").style.opacity = 100;
	} else {
		document.getElementById("button3").innerHTML = "单击开启";
		document.getElementById("face").style.opacity = 0;
	}
}

function eye(id){
	document.getElementById(id).style.opacity = 100;
	const idList = ['eyes1', 'eyes2', 'eyes3', 'eyes', 'eyes5', 'eyes6', 'eyes7', 'eyes8', 'eyes9']
	idList.forEach((e) => {
		if (e == id) return;
		document.getElementById(e).style.opacity = 0;
	});
}

function mouth(id){
	document.getElementById(id).style.opacity = 100;
	const idList = ['mouth1', 'mouth2', 'mouth3', 'mouth4', 'mouth', 'mouth6', 'mouth7', 'mouth8', 'mouth9', 'mouth10', 'mouth11']
	idList.forEach((e) => {
		if (e == id) return;
		document.getElementById(e).style.opacity = 0;
	});
}

function hat(id){
	document.getElementById("hat").style.opacity = 0;
	document.getElementById("hat1").style.opacity = 0;
	document.getElementById(id).style.opacity = 100;
}

function name_(){
	if (document.getElementById("button4").innerHTML == "单击开启") {
		document.getElementById("button4").innerHTML = "单击关闭";
		document.getElementById("Warma").style.opacity = 100;
	} else {
		document.getElementById("button4").innerHTML = "单击开启";
		document.getElementById("Warma").style.opacity = 0;
	}
}

function awa(){
	var myselect=document.getElementById("awa");
	var index=myselect.selectedIndex;
	hat(myselect.options[index].value);
}

function qaq(){
	var myselect=document.getElementById("qaq");
	var index=myselect.selectedIndex;
	eye(myselect.options[index].value);
}

function qwq(){
	var myselect=document.getElementById("qwq");
	var index=myselect.selectedIndex;
	mouth(myselect.options[index].value);
}

