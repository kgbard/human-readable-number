module.exports = function toReadable (number) {
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      
        if (number === 0) return 'zero';
      
        function convertLessThanOneThousand(n) {
          if (n < 10) return ones[n];
          if (n < 20) return teens[n - 10];
          
          const ten = Math.floor(n / 10);
          const one = n % 10;
          return (ten > 0 ? tens[ten] + (one > 0 ? ' ' : '') : '') + (one > 0 ? ones[one] : '');
        }
      
        let result = '';
        
        const hundreds = Math.floor(number / 100);
        const remainder = number % 100;
      
        if (hundreds > 0) {
          result += ones[hundreds] + ' hundred';
          if (remainder > 0) result += ' ';
        }
      
        if (remainder > 0) {
          result += convertLessThanOneThousand(remainder);
        }
      
        return result.trim();
      }
