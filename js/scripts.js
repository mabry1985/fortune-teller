$(document).ready(function(){
  $(".btn").click(function(){
    var sum = 0;
    $("input:checkbox[name=lucky]:checked, input:checkbox[name=unlucky]:checked").each(function(){
      var fortune = parseInt($(this).val());
        sum += fortune;
      if(sum === 0) {
        $(".output").html("<span>A</span><span>n</span><span>s</span><span>w</span><span>e</span><span>r</span><span>&nbsp;</span><span>u</span><span>n</span><span>c</span><span>l</span><span>e</span><span>a</span><span>r</span><span>.</span>");
      } else if (sum < 0) {
        $(".output").html("<span>G</span><span>r</span><span>e</span><span>a</span><span>t</span><span>&nbsp;</span><span>t</span><span>h</span><span>i</span><span>n</span><span>g</span><span>s</span><span>&nbsp;</span><span>i</span><span>n</span><span>&nbsp;</span><span>s</span><span>t</span><span>o</span><span>r</span><span>e</span><span>&nbsp;</span><span>f</span><span>o</span><span>r</span><span>&nbsp;</span><span>y</span><span>o</span><span>u</span><span>.</span>");
      } else if (sum > 0) {
        $(".output").html("<span>G</span><span>o</span><span>&nbsp;</span><span>b</span><span>a</span><span>c</span><span>k</span><span>&nbsp;</span><span>t</span><span>o</span><span>&nbsp;</span><span>b</span><span>e</span><span>d</span>");
      };
    });
 });
});
