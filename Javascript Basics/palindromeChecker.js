function palindrome1(str) {
    
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    newString = newString.replace(/[^0-9a-z]/gi, '').toLowerCase();

    var finalString = newString.split('').reverse().join('')

    return finalString === newString;
}



function palindrome2(str) {
    var re = /[\W_]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');
    
    var reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr
}

palindrome1('eye')
palindrome2('eye')