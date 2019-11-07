/*$(document).ready(function () {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.send();
});*/

$(function () {
    document.getElementById("divnum").innerText = $('div').length;

    //$('<div>Hello</div>').css({ color: 'red' }).appendTo('body');

    $('html').dblclick(function (e) {
        console.log('Double-click detected at ' + e.pageX + ', ' + e.pageY + '\n');
    });

    $("#notgoogle").click(function (event) {
        alert("You should not use any link on this page!");
        event.preventDefault();
    });

    $("#mettibold").click(function (event) {
        $(".stiloso").addClass("pesante");
    });

    $("#toglibold").click(function (event) {
        $(".stiloso").removeClass("pesante");
    });

    $("#scambia").click(function (event) {
        $(".stiloso").toggleClass("blu");
    });

    $("#controlla").click(function (event) {
        $(".stiloso").hasClass("blu");
        console.log($(".stiloso").hasClass("blu"));
    });

    $("#oksize").click(function (event) {
        let msg = $("#sizemsg").val();
        console.log(msg);
        $("#sizable").text(msg);
    });

    $("#big").click(function (event) {
        let cur = parseInt($('#sizable').css('font-size'));
        $('#sizable').css('font-size', 1+cur * 2);
    });

    $("#small").click(function () {
        let cur = parseInt($('#sizable').css('font-size'));
        $('#sizable').css('font-size', cur / 2);
    });
});