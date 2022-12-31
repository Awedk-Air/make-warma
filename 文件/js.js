console.log("nia！竟然被发现了～");
console.log("输入'warma();'有惊喜哦～")

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

async function warma(){
	alert('数字比大小游戏开始啦！（玩法见https://www.bilibili.com/video/BV1CQ4y1X7jr，把你出的数字和电脑出的数字比大小，谁大谁就赢～赢得最多的就胜利了～用完的牌要回收哦～）');
	alert('沃玛已经发给你了8张牌，分别是1、2、3、4、5、6、7、8');
	alert('洗牌完了，游戏开始！');
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
	var enemyNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
	let a = 1;
	let b = 0;
	let c = 0;
	while (len(numbers) == 0 || len(enemyNumbers) == 0){
		var number = prompt('请输入你出的牌～(目前你的牌有'+numbers+')');
		if (Number(number) == NaN){
			alert("请输入正确的数字！");
		} else if (Number(number) > 8 || Number(number) < 0) {
			alert("数值过大或过小！");
		} else if (numbers.indexOf(Number(number)) == -1) {
			alert("这张牌已经用过啦～");	
		} else {
			alert("出牌！（你使用了数字"+number+"）");
			a = Math.floor(Math.random()*len(enemyNumbers)-1);
			alert("对方出了数字"+enemyNumbers[a]+"！");
			if (enemyNumbers[a] < Number[number]) {
				b++;
				alert("你赢了～（目前一共赢了"+b+"局～）");
			} else if (enemyNumbers[a] == Number[number]) {
				alert("平局～（目前一共赢了"+b+"局～）");
			} else {
				c++;
				alert("你输了T T（目前一共赢了"+b+"局~）");
			}
			numbers.splice(numbers.indexOf(Number(number)), 1);
			numbers.splice(a, 1);
		}
	}
	alert("游戏结束！");
	alert("你问我谁赢了？自己数啊！（怒");
}
