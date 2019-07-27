//design

$(document).ready(function () {
 $("#we1").click(function () {
$(".clcs").toggle();
 $(".first-icon").toggle();
});
$("#first-icon").click(function () {
$(".clcs").toggle();
 $(".first-icon").toggle();
});
    //development
$("#con").click(function () {
$('.cls1').toggle();
$(".second-icon").toggle();
});
$("#second-icon").click(function () {
$(".cls1").toggle();
$(".second-icon").toggle();
});
// project management
$("#coni").click(function () {
 $(".cls3").toggle();
$(".third-icon").toggle();
});
$(".third-icon").click(function () {
$(".cls3").toggle();
$(".third-icon").toggle();
 });
    /*** submit on input*/
$(".foorm").submit(function (event) {
 var inputName = $("#name").val();
var inputEmail = $("#Email").val();
 var x = $("#text").val();
 if (inputName == "" || inputEmail == "" || x == "") {
alert("please write amessage before you submit ok??!!");
 }
else {
 alert(inputName + " I receive your message.thank you for contact us!!. ");
}
event.preventDefault();
});
/*opacity and hovering for image*/
$(".mgn").hide();
$("#mgb").animate({
opacity: 0.5
});
$("#mgb").hover(function () {
 $(this).stop()
$(".mgn").fadeIn();
}, function () {
$(this).stop()
 $(".mgn").fadeOut();
});
/*opacity and hovering for image2*/
$(".paragraph2").hide();
$("#mgc").animate({
 opacity: 0.5
});
$("#mgc").hover(function () {
$(this).stop()
$(".paragraph2").fadeIn();
}, function () {
$(this).stop()
$(".paragraph2").fadeOut();
 });
/*opacity and hovering for image3*/
$(".paragraph3").hide();
 $("#mgd").animate({
        opacity: 0.5
});
$("#mgd").hover(function () {
$(this).stop()
$(".paragraph3").fadeIn();
 }, function () {
$(this).stop()
$(".paragraph3").fadeOut();
});
 /*opacity and hovering for image4*/
$(".paragraph4").hide();
$("#mgE").animate({
       opacity: 0.5
});
$("#mgE").hover(function () {
$(this).stop()
$(".paragraph4").fadeIn();
}, function () {
$(this).stop()
$(".paragraph4").fadeOut();
   });   
/*opacity and hovering for image5*/
$(".paragraph5").hide();
$("#imgf").animate({
opacity: 0.5
});
$("#imgf").hover(function () {
 $(this).stop()
$(".paragraph5").fadeIn();
}, function () {
$(this).stop()
$(".paragraph5").fadeOut();
});
/*opacity and hovering for image6*/
$(".paragraph6").hide();
$("#imgG").animate({
opacity: 0.5
});
$("#imgG").hover(function () {
$(this).stop()
$(".paragraph6").fadeIn();
}, function () {
$(this).stop()
$(".paragraph6").fadeOut();
}); 
   /*opacity and hovering for image7*/
$(".paragraph7").hide();
$("#imgH").animate({
opacity: 0.5
});
$("#imgH").hover(function () {
$(this).stop()
$(".paragraph7").fadeIn();
}, function () {
$(this).stop()
$(".paragraph7").fadeOut();
}); 
   /*opacity and hovering for image8*/
$(".paragraph8").hide();
$("#imgI").animate({
opacity: 0.5
 });
 $("#imgI").hover(function () {
$(this).stop()
$(".paragraph8").fadeIn();
}, function () {
 $(this).stop()
 $(".paragraph8").fadeOut();
});                        
});

