$(document).ready(function(){
    var login_form = $("#adduser");
    var login_data = {name: $('#name'), password: $('#psword')};
    $.ajax({
        type: login_form.attr('method'),
        url: login_form.attr('action'),
        data: JSON.stringify(adduser_data),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data){
            console.log(data);
        }
    })
});