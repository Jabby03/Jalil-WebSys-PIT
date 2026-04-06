$(document).ready(function () {


  /*  JQUERY FEATURE 1 — Smooth scroll*/

  $(".nav-btn").on("click", function (e) {

    e.preventDefault();

    var sectionId = $(this).data("target");
    var $section  = $("#" + sectionId);

    if ($section.length === 0) return;

    var navHeight  = $("nav").outerHeight() + 10;
    var sectionTop = $section.offset().top - navHeight;

    $("html, body").animate({ scrollTop: sectionTop }, 600);

    $(".nav-btn").removeClass("active");
    $(this).addClass("active");

  });


  /*JQUERY FEATURE 2 — Scroll-spy*/

  $(window).on("scroll", function () {

    var scrollPos = $(window).scrollTop();
    var navHeight = $("nav").outerHeight() + 10;

    $(".section-card").each(function () {

      var sectionTop    = $(this).offset().top - navHeight - 20;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {

        var sectionId = $(this).attr("id");

        $(".nav-btn").removeClass("active");
        $(".nav-btn[data-target='" + sectionId + "']").addClass("active");

      }

    });

  });


  /* JQUERY FEATURE 3 — Project card accordion*/

  $(".project-item").on("click", function () {
 
    var $thisDetails  = $(this).find(".project-more");
    var $otherDetails = $(".project-more").not($thisDetails);
 
    $otherDetails.slideUp(200);
 
    $thisDetails.slideToggle(250);
 
  });


  /*JQUERY FEATURE 4 — Contact row copy-to-clipboard*/

  $(".contact-list li").on("click", function () {

    var $li   = $(this);
    var value = $li.find(".contact-value").text().trim();

    if (navigator.clipboard && value) {
      navigator.clipboard.writeText(value).then(function () {
        $li.css("background-color", "#d4edda");
        setTimeout(function () {
          $li.css("background-color", "");
        }, 800);
      });
    }

  });


  /*JQUERY FEATURE 5 — Contact form validation*/

  $("#send-btn").on("click", function () {

    var name    = $("#form-name").val().trim();
    var email   = $("#form-email").val().trim();
    var message = $("#form-message").val().trim();

    $("#form-feedback").text("");

    if (name === "" || email === "" || message === "") {

      $("#form-feedback")
        .text("⚠️ Please fill in all fields before sending.")
        .css("color", "red");

    } else {

      $("#form-feedback")
        .text("")                         // clear first
        .append("✅ Message sent! Thank you, " + name + ".")
        .css("color", "green");

      $("#form-name").val("");
      $("#form-email").val("");
      $("#form-message").val("");

    }

  });

  /* JQUERY FEATURE 6 — Dark Mode Toggle */
  
  $("#dark-mode-btn").on("click", function () {

    $("body").toggleClass("dark");

    var isDark = $("body").hasClass("dark");

    $(this).text(isDark ? "☀️ Light Mode" : "🌙 Dark Mode");

  });


}); // END $(document).ready()