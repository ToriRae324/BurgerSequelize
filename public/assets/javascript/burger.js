// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
  
      var isDevoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function() {
          console.log("Burger Devoured", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#addBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Burger Added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
   });
  
  