// ==UserScript==
// @name         ZJU Tronclass Downloader
// @namespace    ncj.wiki
// @version      2.0.1
// @license      MIT
// @description  Download Tronclass Courseware
// @author       NCJ
// @match        *://courses.zju.edu.cn/course/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js
// ==/UserScript==

$(document).bind('DOMSubtreeModified', function() {
    if ($('#file-previewer-with-note > div > div > div.header.clearfix').length && $('#Tronclass_Downloader').length == 0) {
        $('#file-previewer-with-note > div > div > div.header.clearfix').append('<input type="button" value="Download" id="Tronclass_Downloader">')
        $("#Tronclass_Downloader").css("position", "relative").css("left", 10);
        $('#Tronclass_Downloader').click(function(){
            window.open(decodeURIComponent(document.getElementById('pdf-viewer').src.split("?file=")[1]));
        });
    }

    if ($('video').length && $('video')[0].children.length == 3 && $('#Tronclass_Downloader').length == 0) {
        var v=$('video')[0];
        for (var i of v.children) {
            $(v.parentNode.parentNode).prepend(`<a href="${i.getAttribute('src')}" id="Tronclass_Downloader">\t${i.getAttribute('label')}\t</a>`);
        }
    }
});
