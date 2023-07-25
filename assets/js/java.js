
$(document).ready(function () {
    "use strict";

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = $('#navbar .scrollto');
    const navbarlinksActive = () => {
      let position = $(window).scrollTop() + 200;
      navbarlinks.each(function () {
        if (!this.hash) return;
        let section = $(this.hash);
        if (!section) return;
        if (
          position >= section.offset().top &&
          position <= section.offset().top + section.outerHeight()
        ) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    };
    navbarlinksActive();
    $(document).on("scroll", navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let elementPos = $(el).offset().top;
      $("html, body").animate(
        {
          scrollTop: elementPos,
        },
        600
      );
    };

    /**
     * Back to top button
     */
    let backtotop = $(".back-to-top");
    if (backtotop.length) {
      const toggleBacktotop = () => {
        if ($(window).scrollTop() > 100) {
          backtotop.addClass("active");
        } else {
          backtotop.removeClass("active");
        }
      };
      toggleBacktotop();
      $(document).on("scroll", toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(this).toggleClass("bi-list bi-x");
    });

    /**
     * Scrool with offset on links with a class name .scrollto
     */
    $(document).on("click", ".scrollto", function (e) {
      if ($(this.hash).length) {
        e.preventDefault();
        let body = $("body");
        if (body.hasClass("mobile-nav-active")) {
          body.removeClass("mobile-nav-active");
          $(".mobile-nav-toggle").toggleClass("bi-list bi-x");
        }
        scrollto(this.hash);
      }
    });

    /**
     * Scroll with offset on page load with hash links in the URL
     */
    if (window.location.hash) {
      if ($(window.location.hash).length) {
        scrollto(window.location.hash);
      }
    }

    /**
     * Skills animation
     */
    let skillsContent = $(".skills-content");
    if (skillsContent.length) {
      skillsContent.waypoint({
        handler: function (direction) {
          let progress = $(".progress .progress-bar");
          progress.each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + "%");
          });
        },
        offset: "80%",
      });
    }

    /**
     * Porfolio isotope and filter
     */
    let portfolioContainer = $(".portfolio-container");
    if (portfolioContainer.length) {
      let portfolioIsotope = portfolioContainer.isotope({
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = $("#portfolio-flters li");

      $(document).on("click", "#portfolio-flters li", function (e) {
        e.preventDefault();
        portfolioFilters.removeClass("filter-active");
        $(this).addClass("filter-active");

        portfolioIsotope.isotope({
          filter: $(this).data("filter"),
        });

        AOS.refresh();
      });
    }

    /**
     * Portfolio details slider
     */
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    /**
     * Testimonials slider
     */
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    /**
     * Animation on scroll
     */
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    /**
     * Initiate Pure Counter
     */
    new PureCounter();
});

