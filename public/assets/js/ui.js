$(document).ready(function () {
  $(".modalclose").click(function () {
    $(".login-modal").hide();
  });
  $("li.login").click(function () {
    $(".login-modal").show();
  });
});

$("nav > .content > ul > li").hover(
  function () {
    var menuName = $(this).attr("menuName");
    if (menuName != undefined) {
      $("#subnav .subItem." + menuName).attr("active", "y");
      $("#subnav").attr("active", "y");
    }
  },
  function () {
    $("#subnav .subItem").attr("active", "n");
    $("#subnav").attr("active", "n");
  }
);

$("#subnav .subItem").hover(
  function () {
    $("#subnav").attr("active", "y");
  },
  function () {
    $("#subnav").attr("active", "n");
  }
);
