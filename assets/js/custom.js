$(function() {
    $("input#filter").bind("keyup", function() {
        var text = $(this).val().toLowerCase();
        var items = $(".card");

        //first, hide all:
        items.parent().hide();

        //show only those matching user input:
        items.filter(function () {
            return $(this).attr("data-title").toLowerCase().includes(text);
        }).parent().show();
    });
});
