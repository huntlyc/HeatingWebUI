      $(document).ready(function()
      {
          loadData();
          loadBoilerData();
          $("#update").submit(function(){return false;});
          $("#formbutton").click(function(){sendData();});     
          setInterval(function(){loadData();loadBoilerData();},50000);   

      });
