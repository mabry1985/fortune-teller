$(document).ready(function () {
  $('.btn').click(function () {
    var sum = 0;
    $('input:checkbox[name=input]:checked').each(function () {
      var fortune = parseInt($(this).val());
        sum += fortune;
      if (sum === 0) {
        $(".output").html("<span>A</span><span>n</span><span>s</span><span>w</span><span>e</span><span>r</span><span>&nbsp;</span><span>u</span><span>n</span><span>c</span><span>l</span><span>e</span><span>a</span><span>r</span><span>.</span>");
      } else if (sum < 0) {
        $(".output").html("<span>G</span><span>r</span><span>e</span><span>a</span><span>t</span><span>&nbsp;</span><span>t</span><span>h</span><span>i</span><span>n</span><span>g</span><span>s</span><span>&nbsp;</span><span>i</span><span>n</span><span>&nbsp;</span><span>s</span><span>t</span><span>o</span><span>r</span><span>e</span>");
      } else if (sum > 0 && sum < 18) {
        $(".output").html("<span>G</span><span>o</span><span>&nbsp;</span><span>b</span><span>a</span><span>c</span><span>k</span><span>&nbsp;</span><span>t</span><span>o</span><span>&nbsp;</span><span>b</span><span>e</span><span>d</span>");
      } else if (sum === 100) {
        $(".output").html("<span>Y</span><span>o</span><span>u</span><span>&nbsp;</span><span>n</span><span>e</span><span>e</span><span>d</span><span>&nbsp;</span><span>o</span><span>u</span><span>t</span><span>&nbsp;</span><span>m</span><span>o</span><span>r</span><span>e</span>");
      } else {
        $(".output").html("<span>H</span><span>E</span><span>L</span><span>L</span><span>O</span><span>?</span>");
      }
    });

    console.log(sum);
 });
});
