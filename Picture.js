var scrolled = 750;
$(".collapse").on("click",function () {
    $(".gallery").toggle("slow", function () {
        $(window).scroll + scrolled;
    });
       
  });


