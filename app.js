$(document).ready(function(){
    $('form').submit(function(){
        var card = "<div class=\"card\">"
                        + "<h1>" + $('#firstname').val() + " " + $('#lastname').val() + "</h1>"
                        + "<p data-desc=\"" + $('#desc').val() + "\""
                        + " data-firstname=\"" + $('#firstname').val() + "\"" 
                        + " data-lastname=\"" + $('#lastname').val() + "\"" 
                        + " data-isslip=\"" + 0 + "\"" 
                        + ">Click for description!</p>" 
                        + "</div>";
        $('.displays').append(card);
        // Attach event listener to only the last child / the newly added card
        slipCardHandler($(".displays .card:last-child"));
        clearForm();
        return false;
    });
});

function slipCardHandler(selector){
    $(selector).click(function(){
        console.log($(this).children("p").attr("data-isslip"));
        if ($(this).children("p").attr("data-isslip") === "1") {
            $(this).html(""
                    + "<h1>" + $(this).children("p").attr("data-firstname") + " " + $(this).children("p").attr("data-lastname")  + "</h1>"
                    + "<p data-desc=\"" + $(this).children("p").attr("data-desc") + "\""
                    + " data-firstname=\"" + $(this).children("p").attr("data-firstname") + "\"" 
                    + " data-lastname=\"" + $(this).children("p").attr("data-lastname") + "\"" 
                    + " data-isslip=\"" + 0 + "\"" 
                    + ">" 
                    + "Click for description!"
                    + "</p>"
                );
        } else {
            $(this).html(""
                    + "<p data-desc=\"" + $(this).children("p").attr("data-desc") + "\""
                    + " data-firstname=\"" + $(this).children("p").attr("data-firstname") + "\"" 
                    + " data-lastname=\"" + $(this).children("p").attr("data-lastname") + "\"" 
                    + " data-isslip=\"" + 1 + "\"" 
                    + ">" 
                    + $(this).children("p").attr("data-desc")
                    + "</p>"
                );
        }
    });
}


function clearForm(){
    $('#firstname').val("");
    $('#lastname').val("");
    $('#desc').val("");

}

