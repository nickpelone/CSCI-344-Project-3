(function () {
    "use strict";
    var $ = window.$, toDoItemsLength, newItemsAdded;
    $(document).ready(console.log("Hello World"));
    //load json file for entries
    $.getJSON("data/all.json",  function(toDoData) {
        console.log(toDoData[0].description);
        toDoItemsLength = toDoData.length;
        console.log(toDoItemsLength);
        //fill up tabs
        for (var i = 0; i < toDoItemsLength; i++){
          $("#tabAllContent").append("<div class='toDoItem' id='"+i+"'> <a>"+toDoData[i].description+"</a><button class='delete' id='delete"+i+"'>Delete </button></div>");
    }
  });
}());