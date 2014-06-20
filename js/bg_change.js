$(document).ready(function() {
	$("#banner").click(function(){
        if($("#banner").hasClass('static'))
        {
            $("#banner").addClass('dead').removeClass('static');
        }
        else
        {
            $("#banner").addClass('static').removeClass('dead');
        }
    });
});