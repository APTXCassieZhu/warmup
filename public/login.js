$(document).ready(function(){
    var login_form = $("#login");
    login_form.submit( function(e) {
        var login_data = {name: $('#name').val(), password: $('#psword').val()};
        e.preventDefault();
        $.ajax({
            type: login_form.attr('method'),
            url: login_form.attr('action'),
            data: JSON.stringify(adduser_data),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data){
                if (data.status=='OK'){
                    window.location.href='/ttt'
                }
                console.log(data);
            }
        })
    });
});