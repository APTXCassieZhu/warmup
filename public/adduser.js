$(document).ready(function(){
    var adduser_form = $("#adduser");
    var adduser_data = {name: $('#name'), email: $('#email'), password: $('#psword')};
    $.ajax({
        type: adduser_form.attr('method'),
        url: adduser_form.attr('action'),
        data: JSON.stringify(adduser_data),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data){
            console.log(data);
            if (data.status=='OK'){
                window.location.href='/'
            }
        }
    })
});