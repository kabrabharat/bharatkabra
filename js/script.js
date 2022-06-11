// ============ typing animation =========

var typed = new Typed(".typing", {
    strings:["", "Software Engineer", "Python Developer", "Full Stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// change the active navigation tab

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance+20) {
                    $('.aside .nav li a.active').removeClass('active');
                    $('.aside .nav li a').eq(i).addClass('active');
                    if ($(window).width() < 992){
                        $('.aside').css('left','-270px')
                        $('.nav-closer').css("display", "none")
                        $('.nav-toggler').css("display", "block")
                    }
            }
    });
}).scroll();

// // Get the container element
// var divContainer = document.getElementById("nav");

// // Get all buttons with class="btn" inside the container
// var anchors = divContainer.getElementsByClassName("navigate-item");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < anchors.length; i++) {
//   anchors[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += " active";
//   });
// }

// Send Email Method

function sendEmail() {
    alert('Not Working! Please Send Mail to bharatkabra@outlook.in instead.')
  }

// Sidebar toggler

function toggleSidebar(){
    if($('.aside').css("left") == "-270px"){
        $('.aside').css("left", "0px")
        // $('.nav-toggler').css("left","300px")

        if (($(window).width() < 992)){
            $('.nav-closer').css("display", "block")
            $('.nav-toggler').css("display", "none")
        }
    }
    else{
        $('.aside').css("left", "-270px")
        $('.nav-toggler').css("left","20px")
        if (($(window).width() < 992)){
            $('.nav-closer').css("display", "none")
            $('.nav-toggler').css("display", "block")
        }
    }
}

