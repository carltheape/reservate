      $.get("/table/", function(data) {
        console.log(data);
        if (data) {
            for (var i = 0; index < 6; i++) {
                $("#tableSection").append(data.name[i]);  
            };
            for (var i = 6; index < data.lenth; i++) {
                $("#waitinglistSection").append(data.name[i]);  
            };
          
        }
        else {
          $("#name").text("The force is not strong with this one. Your character was not found.");
          $("#stats").hide();
        }
      });