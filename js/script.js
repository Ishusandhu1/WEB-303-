// Method for $.getJSON request
function getTeamJSON() {
    $.getJSON("team.json", function (data) {
      $.each(data.team, function (index, member) {
        var memberDiv = $("<div class='member'></div>");
        memberDiv.append("<h2>" + member.name + "</h2>");
        memberDiv.append("<h5>" + member.position + "</h5>");
        memberDiv.append("<p>" + member.bio + "</p>");
        $("#team").append(memberDiv);
      });
    });
  }
  
  // Method for $.ajax request
  function getTeamWithAjax() {
    $("#team").text("Loading..."); // Display loading message
    $.ajax({
      url: "team.json",
      type: "GET",
      dataType: "json",
      success: function (data) {
        $("#team").empty(); // Clear loading message
        $.each(data.team, function (index, member) {
          var memberDiv = $("<div class='member'></div>");
          memberDiv.append("<h2>" + member.name + "</h2>");
          memberDiv.append("<h5>" + member.position + "</h5>");
          memberDiv.append("<p>" + member.bio + "</p>");
          $("#team").append(memberDiv);
        });
      },
      error: function () {
        $("#team").text("Error: Content could not be retrieved.");
      }
    });
  }
  
  $(document).ready(function () {
    // Call one of the methods to display the team information
    getTeamJSON(); // or getTeamWithAjax();
  });
  
  
    setTimeout(function () {
      $("#team").empty(); // Clear loading message after 3 seconds
      $.each(data.team, function (index, member) {
        var memberDiv = $("<div class='member'></div>");
        memberDiv.append("<h2>" + member.name + "</h2>");
        memberDiv.append("<h5>" + member.position + "</h5>");
        memberDiv.append("<p>" + member.bio + "</p>");
        $("#team").append(memberDiv);
      });
    }, 3000); // Delay for 3 seconds (3000 milliseconds)
  
  