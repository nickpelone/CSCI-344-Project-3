(function () {
    "use strict";
    var $ = window.$, toDoItemsLength, newItemsAdded, i;
    
   $(document).ready((function (){
     //load json file for entries
    $.getJSON("data/all.json",  function(toDoData) {
        console.log(toDoData[0].description);
        toDoItemsLength = toDoData.length;
        console.log(toDoItemsLength);
        //fill up tabs
        for (i = 0; i < toDoItemsLength; i += 1) {
            $("#tabAllContent").append("<div class = 'toDoItem' id = '" + i + "'> <a>" + toDoData[i].description + "</a><button class = 'delete' id = '" + i + "'>Delete </button></div>");
            
        }
        $(".delete").click(function (){
          var toDelete = $(this).attr("id");
          console.log(toDelete);
          $("#"+toDelete).fadeOut(1000);
        });
    });
  }));
})();