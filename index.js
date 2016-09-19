var self = module.exports = {
	ccCardType: function (cardNumber) {
	    var numbers = cardNumber.replace(/[^\d]/g, '');
	    // unknown
	    if (numbers.match(/^0/) ||
	        numbers.match(/^1/) ||
	        numbers.match(/^2/) ||
	        numbers.match(/^7/) ||
	        numbers.match(/^8/) ||
	        numbers.match(/^9/)) {
	      return "unknown";
	      // mastercard
	    }else if (numbers.match(/^5[1-5]\d*/g)) {
	      return "mastercard";
	      // visa
	    }else if (numbers.match(/^4\d*/g)) {
	      return "visa";
	      // american express
	    }else if (numbers.match(/^3[47]\d*/g)) {
	      return "amex";
	      // discover
	    }else if (numbers.match(/^30\d*/g) ||
	      numbers.match(/^36\d*/g) ||
	      numbers.match(/^38\d*/g) ||
	      numbers.match(/^39\d*/g) ||
	      numbers.match(/^60\d*/g) ||
	      numbers.match(/^64\d*/g) ||
	      numbers.match(/^65\d*/g)) {
	      return "discover";
	      // unknown when 2nd digit leads to unknown (ie 56, 31, 66)
	    }else {
	      if (numbers.length >= 2) {
	        return "unknown";
	      }
	    }
	},
	isThisNumber: function (number) {
    	return !isNaN(parseFloat(number)) && isFinite(number);
	},
	formatCcCard: function (cardNumber) {
        var formattedNo = '';
        if (cardNumber == null || cardNumber === "") {
          return;
        }
        var val = cardNumber.trim();
        var cardtype = self.ccCardType(val);

        val = val.replace(/\D/g,"");

        if (cardtype === 'amex'){
          for (var i = 0; i < val.length; i++) {
            if (!self.isThisNumber(val.charAt(i))) {
              continue;
            }
            if (i === 15) {
              continue;
            }
            if (i === 4 || i === 10) {
              formattedNo += '-' + val.charAt(i);
            }else{
              formattedNo += val.charAt(i);
            }
          }
        }else{
          for (var i = 0; i < val.length; i++) {
            if(!self.isThisNumber(val.charAt(i))){
              continue;
            }
            if (i != 0 && i % 4 == 0){
              formattedNo += '-' + val.charAt(i);
            }else{
              formattedNo += val.charAt(i);
            }
          }
        }
        return formattedNo;
	}
}