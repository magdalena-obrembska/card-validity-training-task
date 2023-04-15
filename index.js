function checkCardNumber(cardNumber) {
    if (typeof cardNumber !== 'number') 
        throw new Error('Not a number.');

    const numberCardNumber = parseInt(cardNumber.toString().replace(/ /g, '')); 
    const len = Math.ceil(Math.log10(numberCardNumber + 1)); 
    var sum = 0;
    var parity = len % 2;
    for (var i = 0; i < len; i++) {
        var stringDigit = String(numberCardNumber).charAt(i)
        var digit = parseInt(stringDigit);

        if (i % 2 == parity) 
            digit *= 2;
        if (digit > 9) 
            digit -= 9;
        sum += digit;
    }
    if ((sum % 10) == 0) {
        const result = String(numberCardNumber).substring(0, 2);

        if (len == 16 && result == "51" || result == "52" || result == "53" || result == "54" || result == "55") {
            return 'Mastercard';
        } else if (len == 13 || len == 16 && result[0] == "4") {
            return 'Visa';
        } else if (len == 15 && result == "34" || result == "37") {
            return 'American Express';
        } else {
            throw new Error('Wrong card number.');
        }
    }
}
export {
    checkCardNumber
};
