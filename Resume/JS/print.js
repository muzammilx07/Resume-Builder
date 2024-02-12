function printCV()
 {
     printDiv = "#preview-sc";
     $("*").addClass("no-print");
     $(printDiv+" *").removeClass("no-print");
     $(printDiv).removeClass("no-print");

     parent =  $(printDiv).parent();
     while($(parent).length)
     {
         $(parent).removeClass("no-print");
         parent =  $(parent).parent();
     }
     window.print();

 }
