
$("#dropdown").click(function (e) {
  e.stopPropagation();
});
$("#dropdown2").click(function (e) {
  e.stopPropagation();
});

$(function () {
  $("#dropdown").click(function () {
    $("#dropdown-content").toggle("slow", function () {
      //Animation complete
    })
  });
  $(document).click(function () {
    $("#dropdown-content").hide();
  });

  $("#dropdown2").click(function () {
    $("#dropdown-content2").toggle("slow",function(){});
  });
  $(document).click(function () {
    $("#dropdown-content2").hide();
  });

  $("#nameinput").mouseenter(function () {
    $(this).css({
      border: '0 solid #8fa0ef'
    }).stop(true, false).animate({
      borderWidth: 3
    }, 200);
  }).mouseleave(function () {
    $(this).stop(true, false).animate({
      borderWidth: 0
    }, 200);
  });
  $("#emailinput").mouseenter(function () {
    $(this).css({
      border: '0 solid #8fa0ef'
    }).stop(true, false).animate({
      borderWidth: 3
    }, 200);
  }).mouseleave(function () {
    $(this).stop(true, false).animate({
      borderWidth: 0
    }, 200);
  });
  $("#messageinput").mouseenter(function () {
    $(this).css({
      border: '0 solid #8fa0ef'
    }).stop(true, false).animate({
      borderWidth: 3
    }, 200);
  }).mouseleave(function () {
    $(this).stop(true, false).animate({
      borderWidth: 0
    }, 200);
  });

  $("#resumelink").hover(function () {
    $(this).stop(true, false).animate({
      fontSize: "30px"
    }, 400);
  }, function () {
    $(this).stop(true, false).animate({
      fontSize: "28px"
    });
  });
  $("#projectslink").hover(function () {
    $(this).stop(true, false).animate({
      fontSize: "30px"
    }, 400);
  }, function () {
    $(this).stop(true, false).animate({
      fontSize: "28px"
    });
  });
  $("#contactlink").hover(function () {
    $(this).stop(true, false).animate({
      fontSize: "30px"
    }, 400);
  }, function () {
    $(this).stop(true, false).animate({
      fontSize: "28px"
    });
  });
  $("#submitbtn").hover(function () {
    $(this).stop(true, false).animate({
      fontSize: "16.5px"
    }, 100);
  }, function () {
    $(this).stop(true, false).animate({
      fontSize: "16px"
    });
  });
});