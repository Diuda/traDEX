$(document).ready(function(){

    var boxCount=0;

    $('#addExpense').click(function(event){

        // console.log("Working");
        event.preventDefault();

        $('#expenseList').append ('<div><br><input type="text"/><br></div>');
        boxCount++;
    }

    )


    $('#delExpense').click(function(event){

        console.log(boxCount)
        if(boxCount==0){

            alert("You have no items to delete");
            return
        }
        
        event.preventDefault();
        $("#expenseList").children().last().remove();
        
        boxCount--;
    })
});