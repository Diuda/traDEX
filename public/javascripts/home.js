$(document).ready(function(){


    $('#loginDetails').submit(function(event){

       
      

        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);

        $.ajax({
            type: 'POST',
            data: JSON.stringify({ 'username':username,'password':password }),
            contentType: 'application/json',
            url: '/submit',						
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
      
          event.preventDefault();
    
    });

});