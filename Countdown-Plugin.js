(function($) {
    jQuery.fn.countdown = function(options, callback) {
    var settings = {
      'date': null
    };
    if (options) {
      $.extend(settings, options);
    }
    this_sel = $(this);
    /*Canvas JavaScript*/
    var canvas = document.getElementById('myCanvas');
    var canvas1 = document.getElementById('myCanvas1');
    var canvas2 = document.getElementById('myCanvas2');
    var canvas3 = document.getElementById('myCanvas3');
    var context = canvas.getContext('2d');
    var context1 = canvas1.getContext('2d');
    var context2 = canvas2.getContext('2d');
    var context3 = canvas3.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;


    var sec_arc_end = 0,
      min_arc_end = 0,
      hour_arc_end = 0,
      day_arc_end = 0;

    function count_exec() {
      eventDate = Date.parse(settings.date) / 1000;
      currentDate = Math.floor($.now() / 1000);
      if (eventDate <= currentDate) {
        callback.call(this);
        clearInterval(interval);
      }
      seconds = eventDate - currentDate;

      days = Math.floor(seconds / (60 * 60 * 24));

      seconds -= days * 60 * 60 * 24;
      hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60;
      minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      // seconds arc canvas...................
      context.clearRect(50, 50, canvas.width, canvas.height);
      sec_arc_end = ((60 - seconds) * parseFloat(0.10472));
      context.beginPath();
      context.arc(centerX, centerY, radius, 1.5 * Math.PI, 1.5 * Math.PI + sec_arc_end, false);
      context.lineWidth = 8;
      context.strokeStyle = '#14E170';
      context.stroke();
      // minutes arc canvas...................
      context1.clearRect(50, 50, canvas.width, canvas.height);
      min_arc_end = ((60 - minutes) * parseFloat(0.10471));
      context1.beginPath();
      context1.arc(centerX, centerY, radius, 1.5 * Math.PI, 1.5 * Math.PI + min_arc_end, false);
      context1.lineWidth = 8;
      context1.strokeStyle = '#14E170';
      context1.stroke();
      // hours arc canvas...................
      context2.clearRect(50, 50, canvas.width, canvas.height);
      hour_arc_end = ((24 - hours) * parseFloat((0.10471 * 5) / 2));
      context2.beginPath();
      context2.arc(centerX, centerY, radius, 1.5 * Math.PI, 1.5 * Math.PI + hour_arc_end, false);
      context2.lineWidth = 8;
      context2.strokeStyle = '#14E170';
      context2.stroke();
      // days arc canvas...................
      context3.clearRect(50, 50, canvas.width, canvas.height);
      day_arc_end = ((days) * parseFloat((0.10471) * 2));
      context3.beginPath();
      context3.arc(centerX, centerY, radius, 1.5 * Math.PI, 1.5 * Math.PI + day_arc_end, false);
      context3.lineWidth = 8;
      context3.strokeStyle = '#14E170';
      context3.stroke();
      // add 0 value to left of value
      if (!isNaN(eventDate)) {
        this_sel.find('#days #old').text(days);
        this_sel.find('#days #new').text(days);
        this_sel.find('#hours #old').text(hours );
        this_sel.find('#hours #new').text(hours);
        this_sel.find('#mins #old').text(minutes);
        this_sel.find('#mins #new').text(minutes);
        this_sel.find('#secs #old').text(seconds+1);
        this_sel.find('#secs #new').text(seconds);

        if (seconds == 59) {
          this_sel.find('#mins').addClass("animate");
        } else if (seconds == 58) {
          this_sel.find('#mins').removeClass("animate");
        }
        if (minutes == 59 && seconds ==59) {
          this_sel.find('#hours').addClass("animate");
        } else if (seconds == 58) {
          this_sel.find('#hours').removeClass("animate");
        }
        if (hours == 23 && minutes==59 && seconds ==59 ) {
          this_sel.find('#days').addClass("animate");
        } else if (seconds == 58) {
          this_sel.find('#days').removeClass("animate");
        }

      }
    }
    count_exec();
    var interval = setInterval(count_exec, 1000);
  };
  
  Date.prototype.addDays = function(days){
	this.setDate(this.getDate()+parseInt(days));
	return this;
};
})(jQuery);


