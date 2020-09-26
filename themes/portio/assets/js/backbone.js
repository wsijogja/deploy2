function PageLoad() {
$("body").removeClass("hidden");
  TweenMax.to($(".preloader-text"), 1, {
    force3D: true,
    opacity: 1,
    y: 0,
    delay: 0.2,
    ease: Power3.easeOut,
  });

  var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 500) % 50) * 70;

  // Percentage Increment Animation
  var PercentageID = $("#precent"),
    start = 001,
    end = 100,
    durataion = time;
  animateValue(PercentageID, start, end, durataion);

  function animateValue(id, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

    var timer = setInterval(function () {
      current += increment;
      $(obj).text(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  // Fading Out Loadbar on Finised
  setTimeout(function () {
    TweenMax.to($(".percentage, .inner"), 0.7, {
      force3D: true,
      opacity: 0,
      yPercent: -101,
      ease: Power3.easeInOut,
    });
    TweenMax.to($(".preloader-wrap"), 0.7, {
      force3D: true,
      yPercent: -150,
      delay: 0.2,
      ease: Power3.easeInOut,
    });
  }, time);
 }
