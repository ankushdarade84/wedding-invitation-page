
    $(document).ready(function() {
        // Toggle mobile navigation
        function toggleMobileNavigation() {
            var navbar = $(".navigation-holder");
            var openBtn = $(".navbar-header .open-btn");
            var closeBtn = $(".navigation-holder .close-navbar");
            var body = $(".page-wrapper");
    
            openBtn.on("click", function() {
                if (!navbar.hasClass("slideInn")) {
                    navbar.addClass("slideInn");
                    body.addClass("body-overlay");
                }
                return false;
            });
    
            closeBtn.on("click", function() {
                if (navbar.hasClass("slideInn")) {
                    navbar.removeClass("slideInn");
                }
                body.removeClass("body-overlay");
                return false;
            });
    
            // Close navigation on list item click
            $("#navbar > ul > li > a[href^='#']").on("click", function() {
                if (navbar.hasClass("slideInn")) {
                    navbar.removeClass("slideInn");
                    body.removeClass("body-overlay");
                }
            });

        }
    
        toggleMobileNavigation();
    
        // Other functions and code you provided...
    });

    // Set the date we're counting down to
    var countDownDate = new Date("July 27, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the distance between now and the count down date
        var distance = countDownDate - now;

        // Calculate days, hours, minutes and seconds remaining
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with class="box"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is finished, display some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("clock").innerHTML = "EXPIRED";
        }
    }, 1000);


