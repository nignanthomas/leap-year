var $ = function(id) { return document.getElementById(id); }

function leap_year() {
			var year = $("year");
			var ans;
			var leap = year.value % 4 == 0 && year % 100 != 0 || year % 400 == 0;
			if (leap == true) {
				ans = year.value + " is a leap year!";
			} else {
				ans = year.value + " is not a leap year!";
      }
			$("text_where").innerHTML = ans;
		}
