$(document).ready(function(){
   $(".cons").click(function(){
$(".clcs").toggle();
    $(".first-icon").toggle();
   });
   $(".cons").click(function(){
    $(".clcs").toggle();
        $(".first-icon").toggle();
       });
   /****developmennt*/
   $("img.con").click(function(){
      $('.cls1').toggle();
      $(".second-icon").toggle();
   });
   $(".second-icon").click(function(){
    $(".cls1").toggle();
    $(".second-icon").toggle();
 });
  $("img.coni").click(function(){
      $(".cls2").toggle();
 $(".third-icon").toggle();

   });
   /*** submit on input*/
   $(".foorm").submit(function(){
var inputName=$("#name").val();
var inputEmail=$("#Email").val();
var x=$("#text").val();
alert(inputName+" I receive your message. ");
   } );
});
