$(document).ready(function(){
  $(".btn").click(function(){
    var sum = 0;
    $("input:checkbox[name=lucky]:checked, input:checkbox[name=unlucky]:checked").each(function(){
      var fortune = parseInt($(this).val());
        sum += fortune;
      if(sum === 0) {
        $(".output").text("Answer unclear. Check back later.");
      } else if (sum < 0) {
        $(".output").text("Great things in store for you.");
      } else if (sum > 0) {
        $(".output").text("Go back to bed.");
      };
    });
 });
});
