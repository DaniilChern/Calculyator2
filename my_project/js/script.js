function summa(c1, d1) {
	var c = document.getElementById("inp1").value;
	var d = document.getElementById("inp2").value;
	var c1 = +c;
	var d1 = +d;
	var a = c1 + d1;
	document.getElementById("out").innerHTML = a;
};

function summa1(c1, d1) {
	var c = document.getElementById("inp1").value;
	var d = document.getElementById("inp2").value;
	var c1 = +c;
	var d1 = +d;
	var a1 = c1 - d1;
	document.getElementById("out").innerHTML = a1;
};

function summa2(c1, d1) {
	var c = document.getElementById("inp1").value;
	var d = document.getElementById("inp2").value;
	var c1 = +c;
	var d1 = +d;
	var a2 = c1 * d1;
	document.getElementById("out").innerHTML = a2;

};

function summa3(c1, d1) {
	var c = document.getElementById("inp1").value;
	var d = document.getElementById("inp2").value;
	var c1 = +c;
	var d1 = +d;
	var a3 = c1 / d1;
	document.getElementById("out").innerHTML = a3;
};




document.getElementById("sum").onclick = function () {
	summa();
}
document.getElementById("sum1").onclick = function () {
	summa1();
}
document.getElementById("sum2").onclick = function () {
	summa2();
}
document.getElementById("sum3").onclick = function () {
	summa3();
}