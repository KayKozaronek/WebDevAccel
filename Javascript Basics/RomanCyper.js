function rot13(str) {
    var deciphered = "";

    for(var i=0; i<str.length; i++) {
       var asciiNumber = str[i].charCodeAt();
       if (asciiNumber >=65 && asciiNumber <= 77){
           deciphered += String.fromCharCode(asciiNumber +13); 
       } 
       else if (asciiNumber >=78 && asciiNumber <=90) {
           deciphered += String.fromCharCode(asciiNumber -13);
       } 
       else{
           deciphered += str[i];
       }
    }
    return deciphered
}    

rot13('SERR PBQR PNZC')
