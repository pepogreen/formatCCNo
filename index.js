module.exports = {
	cardType: function (entry) {
	    var num = entry.replace(/[^\d]/g, '');
	    // unknown
	    if (num.match(/^0/) ||
	        num.match(/^1/) ||
	        num.match(/^2/) ||
	        num.match(/^7/) ||
	        num.match(/^8/) ||
	        num.match(/^9/)) {
	      return "unknown";
	      // mastercard
	    }else if (num.match(/^5[1-5]\d*/g)) {
	      return "mastercard";
	      // visa
	    }else if (num.match(/^4\d*/g)) {
	      return "visa";
	      // american express
	    }else if (num.match(/^3[47]\d*/g)) {
	      return "amex";
	      // discover
	    }else if (num.match(/^30\d*/g) ||
	      num.match(/^36\d*/g) ||
	      num.match(/^38\d*/g) ||
	      num.match(/^39\d*/g) ||
	      num.match(/^60\d*/g) ||
	      num.match(/^64\d*/g) ||
	      num.match(/^65\d*/g)) {
	      return "discover";
	      // unknown when 2nd digit leads to unknown (ie 56, 31, 66)
	    }else {
	      if (num.length >= 2) {
	        return "unknown";
	      }
	    }
	  }
}