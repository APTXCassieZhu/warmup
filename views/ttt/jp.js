var grid = [" ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];
var winner = "";

$(document).ready(function(){
    $(".cell").click(function(){
      if (winner == ""){
      $(this).text("X");
      grid[$(this).attr("id")]="X";
      sendJson();
      }
    });
  });

  function sendJson() {
    $.ajax({
      url:"/ttt/play",
      type:"POST",
      data:JSON.stringify({grid:grid}),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data){
        console.log(data);
        $("#winner").text(data.winner);
        grid = data.grid;
        winner = data.winner;
        for(var i=0; i<9;i++){
            $('#' + i).text(data.grid[i]);
           }
      }
    })
   
}
