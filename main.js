function checkA(){
window.location.href = "Q1.html";
}
	
function check1(){
	var question1 = document.quiz.question1.value;
	var q1 = 0;
	
	if (question1 == "Yes") { 
q1 = 1;
	}
	if (question1 == "No") { 
q1 = 2;
	}
sessionStorage.q1 = (q1);

		if (q1 == 1){
window.location.href = "Q2.html";
	}
		else {
window.location.href = "SMILE.html";
	}
}
	
function check2(){
	var question1 = document.quiz.question1.value;
	var q2 = 0;
	
	if (question1 == "All of it") { 
q2 = 1;
	}
	if (question1 == "None of it") { 
q2 = 2;
	}

sessionStorage.q2 = (q2);

		if (q2 == 1,2){
window.location.href = "Q2a.html";
	}

}

function check2a(){
	var question1 = document.quiz.question1.value;
	var q2 = 0;
	
	if (question1 == "Live") { 
q2a = 1;
	}
	if (question1 == "As a recording") { 
q2a = 2;
	}

sessionStorage.q2a = (q2a);

		if (q2a == 2){
window.location.href = "Q3.html";
	}
	else {
window.location.href = "https://www.twitch.tv/simonzinzovski";
	}
}

function check3(){
	var question1 = document.quiz.question1.value;
	var q3 = 0;
	
	if (question1 == "Yes") { 
q3 = 1;
	}
	if (question1 == "Doesn't Exist") { 
q3 = 2;
	}
	if (question1 == "No") { 
q3 = 3;
	}

sessionStorage.q3 = (q3);

		if (q3 == 1){
window.location.href = "https://youtu.be/FzZIy4ItAjQ";
	}
	else{
window.location.href = "Q4.html";		
	}

}

function check4(){
	var question1 = document.quiz.question1.value;
	var q4 = 0;
	
	if (question1 == "All") { 
q4 = 1;
	}
	if (question1 == "None") { 
q4 = 2;
	}

sessionStorage.q4 = (q4);

		if (q4 == 1){
window.location.href = "https://youtu.be/rRolJIwbEBQ";
	}
	else{
window.location.href = "Q5.html";		
	}

}
	
function check5(){
	var question1 = document.quiz.question1.value;
	var q5 = 0;
	
	if (question1 == "Minimal & Melodic") { 
q5 = 1;
	}
	if (question1 == "Maximal & Rhythmic") { 
q5 = 2;
	}
	if (question1 == "Moderate & Both") {
q5 = 3;
	}

sessionStorage.q5 = (q5);

		if (q5 == 1,3){
window.location.href = "Q6.html";
	}

}

function check6(){
	var question1 = document.quiz.question1.value;
	var q6 = 0;
	
	if (question1 == "Orchestral") { 
q6 = 1;
	}
	if (question1 == "Electronic") { 
q6 = 2;
	}
	if (question1 == "Solo Piano") {
q6 = 3;
	}

sessionStorage.q6 = (q6);

		if (q6 == 1,3){
window.location.href = "Q7.html";
	}

}

function check7(){
	var question1 = document.quiz.question1.value;
	var q7 = 0;
	
	if (question1 == "69bpm") { 
q7 = 1;
	}
	if (question1 == "110bpm") { 
q7 = 2;
	}

sessionStorage.q7 = (q7);

		if (q7 == 1,2){
window.location.href = "Q8.html";
	}

}

function check8(){
	var question1 = document.quiz.question1.value;
	var q8 = 0;
	
	if (question1 == "The living room") { 
q8 = 1;
	}
	if (question1 == "Outer space") { 
q8 = 2;
	}

sessionStorage.q8 = (q8);

		if (q8 == 1,2){
window.location.href = "Q9.html";
	}

}

function check9(){
	var question1 = document.quiz.question1.value;
	var q9 = 0;
	
if (question1 == "Yes please") { 
q9 = 1;
	}
	
	else{ 
q9 = 2;
	}
sessionStorage.q9 = (q9);

	if (q9 == 1,2){
window.location.href = "Q10.html";
	}
}

function check10(){
var question1 = document.quiz.question1.value;

sessionStorage.q10 = (question1);

window.location.href = "Q11.html";
	}


function check11(){
var question1 = document.quiz.question1.value;

sessionStorage.q11 = (question1);
	}

function generate(){
	
let value1 = sessionStorage.getItem('q5');
console.log(value1);
let value2 = sessionStorage.getItem('q6');
console.log(value2);
let value3 = sessionStorage.getItem('q7');
console.log(value3);
let value4 = sessionStorage.getItem('q8');
console.log(value4);

if (value1 == 1 && value2 == 1 && value3 == 1 && value4 == 1){
window.location.href = "MMBalOrch69nv.html";
	}
if (value1 == 1 && value2 == 1 && value3 == 2 && value4 == 1){
window.location.href = "MMBalOrch110nv.html";
	}
if (value1 == 1 && value2 == 2 && value3 == 1 && value4 == 1){
window.location.href = "MMBalElc69nv.html";
	}
if (value1 == 1 && value2 == 2 && value3 == 2 && value4 == 1){
window.location.href = "MMBalElc110nv.html";
	}
if (value1 == 1 && value2 == 3 && value3 == 1 && value4 == 1){
window.location.href = "MMBalPian69nv.html";
	}
if (value1 == 1 && value2 == 3 && value3 == 2 && value4 == 1){
window.location.href = "MMBalPian110nv.html";
	}
	
	
if (value1 == 2 && value2 == 1 && value3 == 1 && value4 == 1){
window.location.href = "MRBalOrch69nv.html";
	}
if (value1 == 2 && value2 == 1 && value3 == 2 && value4 == 1){
window.location.href = "MRBalOrch110nv.html";
	}
if (value1 == 2 && value2 == 2 && value3 == 1 && value4 == 1){
window.location.href = "MRBalElc69nv.html";
	}
if (value1 == 2 && value2 == 2 && value3 == 2 && value4 == 1){
window.location.href = "MRBalElc110nv.html";
	}
if (value1 == 2 && value2 == 3 && value3 == 1 && value4 == 1){
window.location.href = "MRBalPian69nv.html";
	}
if (value1 == 2 && value2 == 3 && value3 == 2 && value4 == 1){
window.location.href = "MRBalPian110nv.html";
	}
	
	
if (value1 == 3 && value2 == 1 && value3 == 1 && value4 == 1){
window.location.href = "BBBalOrch69nv.html";
	}
if (value1 == 3 && value2 == 1 && value3 == 2 && value4 == 1){
window.location.href = "BBBalOrch110nv.html";
	}
if (value1 == 3 && value2 == 2 && value3 == 1 && value4 == 1){
window.location.href = "BBBalElc69nv.html";
	}
if (value1 == 3 && value2 == 2 && value3 == 2 && value4 == 1){
window.location.href = "BBBalElc110nv.html";
	}
if (value1 == 3 && value2 == 3 && value3 == 1 && value4 == 1){
window.location.href = "BBBalPian69nv.html";
	}
if (value1 == 3 && value2 == 3 && value3 == 2 && value4 == 1){
window.location.href = "BBBalPian110nv.html";
	}
	
	

if (value1 == 1 && value2 == 1 && value3 == 1 && value4 == 2){
window.location.href = "MMBalOrch69_V.html";
	}
if (value1 == 1 && value2 == 1 && value3 == 2 && value4 == 2){
window.location.href = "MMBalOrch110_V.html";
	}
if (value1 == 1 && value2 == 2 && value3 == 1 && value4 == 2){
window.location.href = "MMBalElc69_V.html";
	}
if (value1 == 1 && value2 == 2 && value3 == 2 && value4 == 2){
window.location.href = "MMBalElc110_V.html";
	}
if (value1 == 1 && value2 == 3 && value3 == 1 && value4 == 2){
window.location.href = "MMBalPian69_V.html";
	}
if (value1 == 1 && value2 == 3 && value3 == 2 && value4 == 2){
window.location.href = "MMBalPian110_V.html";
	}
	
	
if (value1 == 2 && value2 == 1 && value3 == 1 && value4 == 2){
window.location.href = "MRBalOrch69_V.html";
	}
if (value1 == 2 && value2 == 1 && value3 == 2 && value4 == 2){
window.location.href = "MRBalOrch110_V.html";
	}
if (value1 == 2 && value2 == 2 && value3 == 1 && value4 == 2){
window.location.href = "MRBalElc69_V.html";
	}
if (value1 == 2 && value2 == 2 && value3 == 2 && value4 == 2){
window.location.href = "MRBalElc110_V.html";
	}
if (value1 == 2 && value2 == 3 && value3 == 1 && value4 == 2){
window.location.href = "MRBalPian69_V.html";
	}
if (value1 == 2 && value2 == 3 && value3 == 2 && value4 == 2){
window.location.href = "MRBalPian110_V.html";
	}
	
if (value1 == 3 && value2 == 1 && value3 == 1 && value4 == 2){
window.location.href = "BBBalOrch69_V.html";
	}
if (value1 == 3 && value2 == 1 && value3 == 2 && value4 == 2){
window.location.href = "BBBalOrch110_V.html";
	}
if (value1 == 3 && value2 == 2 && value3 == 1 && value4 == 2){
window.location.href = "BBBalElc69_V.html";
	}
if (value1 == 3 && value2 == 2 && value3 == 2 && value4 == 2){
window.location.href = "BBBalElc110_V.html";
	}
if (value1 == 3 && value2 == 3 && value3 == 1 && value4 == 2){
window.location.href = "BBBalPian69_V.html";
	}
if (value1 == 3 && value2 == 3 && value3 == 2 && value4 == 2){
window.location.href = "BBBalPian110_V.html";
	}
}

function visibility() {
  var x = document.getElementById("score");
  let value1 = sessionStorage.getItem('q9');
  console.log(value1);

  if (value1 == 1) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function infovisibility() {
  var x = document.getElementById("information");
  let value1 = sessionStorage.getItem('q2');
  console.log(value1);

  if (value1 == 1) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function names() {
let value1 = sessionStorage.getItem('q10');
console.log(value1);
let value2 = sessionStorage.getItem('q11');
console.log(value2);

document.getElementById("title").innerHTML = (value2);
document.getElementById("name").innerHTML = (value1);
}











