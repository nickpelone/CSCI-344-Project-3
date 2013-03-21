(function () {
    "use strict";
    var $ = window.$, toDoItemsLength;
    $(document).ready(console.log("Hello World"));
    //load json file for entries
    $.getJSON("data/all.json",  function(toDoData) {
        console.log(toDoData[0].description);
        toDoItemsLength = toDoData.length;
        console.log(toDoItemsLength);
        //fill up tabs
        for (var i = 0; i < toDoItemsLength; i++){
            $("#tabAllContent").append("<div class='toDoItem'><a>"+toDoData[i].description+"</a></div>");
        }
    });
}());