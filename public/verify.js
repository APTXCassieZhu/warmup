$(document).ready(function(){
    var verify_form = $("#verify");
    verify_form.submit( function(e) {
        var verify_data = {email: $('#email').val() , key: $('#key').val() };
        e.preventDefault();
        $.ajax({
            type: verify_form.attr('method'),
            url: verify_form.attr('action'),
            contentType:"application/json; charset=utf-8",
            data: JSON.stringify(verify_data),
            dataType:"json",
            success: function (data){
                console.log(data);
                if (data.status=='OK'){
                    window.location.href='/'
                } else if (data.status == 'ERROR') {
                    window.location.href='/adduser'
                }
            }
    })
})
});