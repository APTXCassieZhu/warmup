var winner = "";

$(document).ready(function(){
    $(".cell").click(function(){
      if (winner == ""){
      $(this).text("X");
      //grid[$(this).attr("id")]="X";
      move = $(this).attr("id")
      console.log(move);
      sendJson();
      }
    });
  });

  function sendJson() {
    $.ajax({
      url:"/ttt/play",
      type:"POST",
      data:JSON.stringify({'move' : move}),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data){
      }
    })
   
}