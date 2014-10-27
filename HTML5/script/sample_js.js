/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Lesson 2
var testNum = 1;
var pageCount = 11;

// TODO Reimplement, JustForKix
function gotoPage(id) {
        var v1;
        var v2;
        var v3;
        var b1;
        var b2;
        var b3;
    if (id === 1) {
        v1 = "id11";
        v2 = "id1";
        v3 = "id2";
        b1 = "border: 1px solid black; height: 180px";
        b2 = "border: 1px solid red";
        b3 = "border: 1px solid black";
    } else if (id === 2) {
        v1 = "id1";
        v2 = "id2";
        v3 = "id3";
        b1 = "border: 1px solid black";
        b2 = "border: 1px solid red";
        b3 = "border: 1px solid black";
    } else if (id === 3) {
        v1 = "id2";
        v2 = "id3";
        v3 = "id4";
        b1 = "border: 1px solid black";
        b2 = "border: 1px solid red";
        b3 = "border: 1px solid black";
    } else if (id === 4) {
        v1 = "id3";
        v2 = "id4";
        v3 = "id5";
        b1 = "border: 1px solid black";
        b2 = "border: 1px solid red";
        b3 = "border: 1px solid black; height: 18%";
    } else if (id === 5) {
        v1 = "id4";
        v2 = "id5";
        v3 = "id6";
        b1 = "border: 1px solid black";
        b2 = "border: 1px solid red; height: 18%";
        b3 = "border: 1px solid black; height: 25%";
    } else if (id === 6) {
        v1 = "id5";
        v2 = "id6";
        v3 = "id7";
        b1 = "border: 1px solid black; height: 18%";
        b2 = "border: 1px solid red; height: 25%";
        b3 = "border: 1px solid black; height: 22%";
    } else if (id === 7) {
        v1 = "id6";
        v2 = "id7";
        v3 = "id8";
        b1 = "border: 1px solid black; height: 25%";
        b2 = "border: 1px solid red; height: 22%";
        b3 = "border: 1px solid black; height: 27%";
    } else if (id === 8) {
        v1 = "id7";
        v2 = "id8";
        v3 = "id9";
        b1 = "border: 1px solid black; height: 22%";
        b2 = "border: 1px solid red; height: 27%";
        b3 = "border: 1px solid black; height: 32%";
    } else if (id === 9) {
        v1 = "id8";
        v2 = "id9";
        v3 = "id10";
        b1 = "border: 1px solid black; height: 27%";
        b2 = "border: 1px solid red; height: 32%";
        b3 = "border: 1px solid black; height: 30%";
    } else if (id === 10) {
        v1 = "id9";
        v2 = "id10";
        v3 = "id11";
        b1 = "border: 1px solid black; height: 32%";
        b2 = "border: 1px solid red; height: 30%";
        b3 = "border: 1px solid black; height: 32%";
    } else if (id === 11) {
        v1 = "id10";
        v2 = "id11";
        v3 = "id1";
        b1 = "border: 1px solid black; height: 30%";
        b2 = "border: 1px solid red; height: 180px";
        b3 = "border: 1px solid black";
    }
    document.getElementById(v1).setAttribute("style", b1);
    document.getElementById(v2).setAttribute("style", b2);
    document.getElementById(v3).setAttribute("style", b3);
};

function gotoNext() {
    var id = retrive();
    var k;
    if (id >= pageCount) {
        k = 1;
    } else {
        var j = 1;
        k = +id + +j;
    }
    store(k);
    gotoPage(k);
};

function gotoPrev() {
    var id = retrive();
    var k;
    if (id <= 1) {
        k = pageCount;
    } else {
        var j = 1;
        k = +id - j;
    }
    store(k);
    gotoPage(k);
};

function parseJSON(pageContainer) {
var text = getJsonText();
    var obj = JSON.parse(text);
    var out = "";
    var i;
    for (i = 0; i < obj.jsonData.length; i++) {
        out += '<a href="' + obj.jsonData[i].key + '">' + obj.jsonData[i].value + '</a><br>';
    }

    pageContainer.innerHTML = out;

    // Download from url
    /*
    var xmlHttp = new XMLHttpRequest();
    var url = "sample_json.txt";

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 0) {
            var myArray = JSON.parse(xmlHttp.responseText);
            var out = "";
            var i;
            for (i = 0; i < myArray.length; i++) {
                out += '<a href="' + myArray[i].key + '">' + myArray[i].value + '</a><br>';
            }
            pageContainer.innerHTML = out;
        }
    };

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    */
}

// $(document).ready(function() {
//    $("#global_id").click(function() {
//        $("#intro").toggle();
////        var style = document.getElementById("intro").getAttribute("style");
////        var nowStyle = "display: block";
////        if (style === nowStyle) {
////            $("#intro").hide();
////            document.getElementById("intro").setAttribute("style", "display: none");
////        } else {
////            $("#intro").show();
////            document.getElementById("intro").setAttribute("style", "display: block");
////        }
//    });
//    $("p").dblclick(function() {        
//    });
//    $("h1").mouseenter(function() {        
//        alert("So, what next?");
//    });
//    $("input").focus(function() {        
//    });
// });

function store(id){
   localStorage.setItem("page_id", id);
};

function retrive() {
    return localStorage.getItem("page_id");
};

function loadStart() {
    init();
    store(0);
    // window.scroll(0, 140);
    // window.open("index.html","bfs","fullscreen = yes");
    gotoNext();
};

function writeToConsole() {
    console.log("Test Console");
};

/**
 * Utils
 */
var AppRouter = Backbone.Router.extend({

    routes: {
    },

    initialize: function () {
        this.pageContainer = new PageContainer();
        $('.page_6').html(this.pageContainer.el);
    }
});

utils = {
       // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get('design/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }
};

/**
 * Interpretor For Client Side, NA
 * Beam.js, er.js etc
 * It never works
 * 
 * 01.
// http://nodejs.org/api.html#_child_processes

var sys = require('sys')
var exec = require('child_process').exec;
var child;
// executes `pwd`
child = exec("pwd", function (error, stdout, stderr) {
sys.print('stdout: ' + stdout);
sys.print('stderr: ' + stderr);
if (error !== null) {
console.log('exec error: ' + error);
}
});
 * // Erlang Sample for web in server side //
 * // Can be invoked from other page //
 * // Without Test. Do not know how it works?
 
-module(hello_world).
-export([start/0,service/3]).

start() ->
 inets:start(httpd, [
  {modules, [
   mod_alias, 
   mod_auth, 
   mod_esi, 
   mod_actions, 
   mod_cgi, 
   mod_dir, 
   mod_get, 
   mod_head, 
   mod_log, 
   mod_disk_log
  ]},
  {port,8081},
  {server_name,"hello_world"},
  {server_root,"log"},
  {document_root,"www"},
  {erl_script_alias, {"/erl", [hello_world]}},
  {error_log, "error.log"},
  {security_log, "security.log"},
  {transfer_log, "transfer.log"},
  {mime_types,[
   {"html","text/html"},
   {"css","text/css"},
   {"js","application/x-javascript"}
  ]}
 ]).
 
service(SessionID, _Env, _Input) ->
 mod_esi:deliver(SessionID, [
  "Content-Type: text/html\r\n\r\n", 
  "<html><body>Hello, World!</body></html>"
 ]).

To run it, save the code to a file called hello_world.erl, and create two subdirectories next to it called "www" and "log" (these subdirectories can be empty, but they need to be there for the server to start). Then fire up erl and run the following three commands:

Eshell V5.6  (abort with ^G)
1> c(hello_world).
{ok,hello_world}
2> inets:start().
ok
3> hello_world:start().
{ok,<0.51.0>}
 */
/**
 Runtime run = Runtime.getRuntime();
	Process pr = run.exec("ls");

	pr.waitFor();
    BufferedReader buf = new BufferedReader(new InputStreamReader(pr.getInputStream()));

	String line = "";
	while ((line=buf.readLine())!=null) {
		System.out.println(line);
	}
 */