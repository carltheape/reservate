    $("#add-btn").on("click", function(event) {
      event.preventDefault();
      var newRes = {
        name: $("#reserve-name").val().trim(),
        phone: $("#reserve-phone").val().trim(),
        eMail: $("#reserve-email").val().trim(),
        id: $("#reserve-unique-id").val().trim()
      };

if (newRes.name !="" && newRes.phone !="" && newRes.eMail !="" && newRes.id !=""){
      $.post("/api/new", newRes)
      .done(function(data) {
        console.log(data);
      });
    }
  // else{show the invalid entry box}
  };