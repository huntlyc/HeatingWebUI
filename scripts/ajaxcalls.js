      function loadData(){
        $(".sensordata").load("ajaxpages/data.php .datatable", function(response, status, xhr) {
           if (status == "error") {
              $(this).html = ("<h1>Sorry, there was an error<h1>" + status) ;
           }
           else
           {
             //Zedbra stripe the table
             $(".datatable tbody tr:odd").addClass("alternaterow"); 
             $(".datatable").tablesorter();    
             $(".datatable").bind("sortStart",function() { 
               $(".datatable tbody tr:odd").removeClass("alternaterow"); 
             }).bind("sortEnd",function() { 
               $(".datatable tbody tr:odd").addClass("alternaterow"); 
             });                                                 
           }
        });            
      }
      
      function loadBoilerData(){
        $("#sysinfo").load("ajaxpages/data.php #boilerInformation", function(response, status, xhr) {
           if (status == "error") {
              $(this).html = ("<h1>Sorry, there was an error<h1>" + status) ;
           }
        });            
      }      
      
      function sendData()
      {
        $.get("ajaxpages/update.php", {id : $("#id").val(), val: $("#val").val()},
        function(){
          loadData();
        });
      }
