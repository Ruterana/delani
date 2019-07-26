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
            alert("please fill the form");
        }
        else {
            alert(inputName + " I receive your message.thank you!!. ");
        }
        event.preventDefault();
    });

//     $(".mgn").hide();
//     $("mg1").animate({
//         opacity: 0.7
//     });
//     $(".mgb").hover(function () {
//         $(this).stop().animate({ opacity: 3 });
//         $(".mgn").fadeIn();
//     }, function () {
//         $(this).stop().animate({ opacity: 1 });
//         $(".mgn").fadeOut();
//     }
// })
});
