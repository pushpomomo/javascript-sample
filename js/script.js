// text chang

function textChange(){
	document.getElementById('t_h3').innerHTML="Hello";
}



// show date
function showDate(){
       document.getElementById('sd').innerHTML=Date();
}



// bulb on/off
function bulbOn(){
       document.getElementById('img').src="images/bulbon.gif";
}
function bulbOff(){
       document.getElementById('img').src="images/bulboff.gif";
}

// imoji
// function smileGif(){
//        document.getElementById('imj')src="images/smile.gif";
// }

// function sadGif(){
//        document.getElementById('imj')src="images/sad.gif";
// }

// text change
function textChange2(){
	   document.getElementById('tx_h3').innerHTML="Awesome";

}

// // text change mouseover
function textChange3(){
	document.getElementById('m_o').innerHTML="Hello world";
}


// // text change mouse out
function textChange4(){
	document.getElementById('m_out').innerHTML="Hello world";
}


// // text change mouse enter
function textChange5(){
	document.getElementById('m_enter').innerHTML="Hello";
}


// show boder
function showBorder(){
	document.getElementById('sb').style.border="5px solid blue";
}

// show hide text
function showText(){
	document.getElementById('t_sh').style.display="block";
}
function hideText(){
	document.getElementById('t_sh').style.display="none";
}

// show result

var number1 = 7;
var number2 = 3;

var result = number1 + number2;

function showResult(){
	document.getElementById('result').innerHTML=result;
}

// show amount

let number1x, number2y; 
number1x = 19;
number2y = 23;
number1x += number2y;

function showResult5(){
	document.getElementById('res_a').innerHTML=number1x;
}






// class name
function cName(){
    document.getElementsByClassName('p')[2].innerHTML="world";
}


// tag name
function cName1(){
	let data = document.getElementsByTagName('h1');
	alert(data.length);
}

// font size
function fontSize1(){
	document.getElementById('font_s').style.fontSize="30px";
}

// statement
function changeStatement(){
	document.getElementById('stat').innerHTML="Hello Mahi";
}


// display none 
function displayNone(){
	document.getElementById('d_n').style.display="none";
}

//display block
function displayBlock(){
	document.getElementById('d_block').style.display="block";
}

//display result
let x, y, z;
x = 7;
y = 5;
z = x - y;

function showResult2(){
	document.getElementById('result6').innerHTML= z;
}

// if statement

if (new Date().getHours() < 18){
  document.getElementById("if_s").innerHTML="Good day!";
}


// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

function showMap(){
      document.getElementById('map').innerHTML=fruits.get("apples");
}