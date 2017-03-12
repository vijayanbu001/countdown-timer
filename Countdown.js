$(document).ready(function() {
  $("#countdown").countdown({
      date: new Date().addDays(4)
	  },
    function() {
      $("#countdown").text("merry christmas");
    }
  );
})
