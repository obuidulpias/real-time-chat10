import './bootstrap';

$(document).ready(function(){

    $(document).on('click','#send_message',function (e){
        e.preventDefault();

        let username = $('#username').val();
        let message = $('#message').val();

        //alert(username+" "+message);

        if(username == '' || message == ''){
            alert('Please enter both username and message')
            return false;
        }


        $.ajax({
            method:'post',
            url:'/send-message',
            data:{username:username, message:message},
            success:function(res){
                //
            }
        });

    });
});

window.Echo.channel('chat')
    .listen('.message',(e)=>{
        $('#messages').append('<p><strong>'+e.username+'</strong>'+ ': ' + e.message+'</p>');
        $('#message').val('');
    });