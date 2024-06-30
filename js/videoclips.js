var clip1 = document.getElementById("clip1"); 
var clip2 = document.getElementById("clip2"); 
var clip3 = document.getElementById("clip3"); 
var clip4 = document.getElementById("clip4"); 
var clip5 = document.getElementById("clip5"); 

function vclip1() {
	clip1.style.display = "block";
	clip2.style.display = "none";
	clip3.style.display = "none";
	clip4.style.display = "none";
	clip5.style.display = "none";
}

function vclip2() {
	clip1.style.display = "none";
	clip2.style.display = "block";
	clip3.style.display = "none";
	clip4.style.display = "none";
	clip5.style.display = "none";
}

function vclip3() {
	clip1.style.display = "none";
	clip2.style.display = "none";
	clip3.style.display = "block";
	clip4.style.display = "none";
	clip5.style.display = "none";
}

function vclip4() {
	clip1.style.display = "none";
	clip2.style.display = "none";
	clip3.style.display = "none";
	clip4.style.display = "block";
	clip5.style.display = "none";
}

function vclip5() {
	clip1.style.display = "none";
	clip2.style.display = "none";
	clip3.style.display = "none";
	clip4.style.display = "none";
	clip5.style.display = "block";
}