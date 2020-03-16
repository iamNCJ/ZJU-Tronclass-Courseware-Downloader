// ==UserScript==
// @name         ZJU Tronclass Downloader
// @namespace    ncj.wiki
// @version      1.0
// @license      MIT
// @description  Download Tronclass Courseware
// @author       NCJ
// @match        http://courses.zju.edu.cn:8060/course/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    $('#file-previewer-with-note > div > div > div.header.clearfix').append('<input type="button" value="Download" id="CP">')
    $("#CP").css("position", "relative").css("left", 10);
    $('#CP').click(function(){
        window.open(decodeURIComponent(document.getElementById('pdf-viewer').src.split("?file=")[1]));
    });
});
