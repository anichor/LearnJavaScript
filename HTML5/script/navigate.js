/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Child Stuff
 */

var pageCount = 12;
var textElement = new Array("id1",   "id2",   "id3",   "id4",  "id5",  "txt6", "txt7", "txt8", "txt9", "txt10",  "txt12",  "txt13");
var elements = new Array(   "id1",   "id2",   "id3",   "id4",  "id5",  "id6",  "id7",  "id8",  "id9",  "id10",   "id12",   "id13");
var textLimit = new Array(   "8",     "8",     "8",     "8",    "50",  "200",  "300",  "280",  "320",  "450",    "400",    "380");
var devInnerDiv;

function initNavigate() {
};

function inputController($scope) {
};

function gotoNext() {
    var id = retrive();
    var k = +id + 1;
    if (k >= pageCount) {
        k = 0;
    }
    store(k);
    gotoPage(k);
    setTextLimit(k);
};

function gotoPrev() {
    var id = retrive();
    var k = +id - 1;
    if (k < 0) {
        k = +pageCount - 1;
    }
    store(k);
    gotoPage(k);
    setTextLimit(k);
};

function gotoPage(id) {
    var prev;
    var next;
    var current;
    if (id === 0) {
        prev = elements[+pageCount - 1];
        current = elements[id];
        next = elements[+id + 1];
    } else if (id === +pageCount - 1) {
        prev = elements[+id - 1];
        current = elements[id];
        next = elements[0];
    } else {
        prev = elements[+id - 1];
        current = elements[id];
        next = elements[+id + 1];
    }
    if (prev !== "id5") {
        document.getElementById(prev).setAttribute("class", "div_border_black");
    } else {
        document.getElementById(prev).removeAttribute("class");
    }
    document.getElementById(current).setAttribute("class", "div_border_red");
    if (next !== "id5") {
        document.getElementById(next).setAttribute("class", "div_border_black");
    } else {
        document.getElementById(next).removeAttribute("class");
    }
    devInnerDiv = document.getElementById(textElement[id]).innerHTML;
    document.getElementById("text_input").value = devInnerDiv;
};

function setTextLimit(id) {
    document.getElementById("text_input").setAttribute("placeholder", textLimit[id] + " Chars");
    document.getElementById("text_input").setAttribute("maxlength", textLimit[id]);
};

function setInputText() {
    var event;
    if (window.event) {
        event = window.event.keyCode;
           // alert("" + event);
    }
    if (event === 13) { // Enter
    } else if (event === 27) { // Escape
        gotoNext();
    } else {
        document.getElementById(textElement[retrive()]).innerHTML = document.getElementById("text_input").value;
    }
};