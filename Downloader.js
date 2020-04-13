// ==UserScript==
// @name         ZJU Tronclass Downloader
// @namespace    ncj.wiki
// @version      1.1.1
// @license      MIT
// @description  Download Tronclass Courseware
// @author       NCJ
// @match        *://courses.zju.edu.cn/course/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
    $('#file-previewer-with-note > div > div > div.header.clearfix').append('<input type="button" value="Download" id="CP">')
    $("#CP").css("position", "relative").css("left", 10);
    $('#CP').click(function(){
        window.open(decodeURIComponent(document.getElementById('pdf-viewer').src.split("?file=")[1]));
    });
});
