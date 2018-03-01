$(document).ready(function(){
    $('form').submit(function(){
        var card = "<div class=\"card\">"
                        + "<h1>" + $('#firstname').val() + " " + $('#lastname').val() + "</h1>"
                        + "<p>Click for description!</p>" 
                        + "</div>";
        $('.displays').append(card);
        // Assign the last child card to a variable lastcard
        var lastcard = $(".displays .card:last-child");
        //Store the user data into .data() ---> For more information jQuery .data() 
        //https://api.jquery.com/data/
        lastcard.data("user", {
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    desc: $('#desc').val()
                    });
        lastcard.data("isslip", false);
        // Attach event listener to only the last child / the newly added card
        slipCardHandler(lastcard);
        clearForm(); // Clear all values of the form to empty
        return false;
    });
});

function slipCardHandler(selector){
    $(selector).click(function(){
        if ($(this).data("isslip")) {
            //Call back the data
            $(this).html("<h1>" + $(this).data("user").firstname + " " + $(this).data("user").lastname  + "</h1>"
                    + "<p>Click for description!</p>"
            );
            $(this).data("isslip", false);
        } else {
            $(this).html("<p>" + $(this).data("user").desc + "</p>");
            $(this).data("isslip", true);
        }
    });
}

function clearForm(){
    $('#firstname').val("");
    $('#lastname').val("");
    $('#desc').val("");

}

