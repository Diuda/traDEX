$(document).ready(function(){


    $('#loginDetails').submit(function(event){

      
        event.preventDefault(); 
      

        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);

        $.ajax({
            type: 'POST',
            data: JSON.stringify({ 'username':username,'password':password }),
            contentType: 'application/json',
            url: '/submit',						
            success: function(data) {

                
                data = JSON.parse(data);
                if(data.redirectURL==='/customer'){
                    console.log(data)
                    $(location).attr('href', '/customer')
                }

                else if(data.redirectURL=='/trader')
                $(location).attr('href', '/trader')
            }
        });
      
    
    });

});