vigenere = {};

vigenere.encode = function(message, keyword) {
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  var rString = "";
  for(var i in message){
    i = parseInt(i);
    var key = keyword[((i) % keyword.length)].charCodeAt(0) - 97;
    console.log(alphabet[key]);
    var ascii = (message[i].toLowerCase().charCodeAt(0) - 97 + key) % 26;
    // console.log(alphabet[key],alphabet[ascii]);
    rString += alphabet[ascii];
  }
  return rString;
};



vigenere.decode = function(message, keyword) {
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  var rString = "";
  for(var i in message){
    i = parseInt(i);
    var key = keyword[((i) % keyword.length)].charCodeAt(0) - 97;
    var ascii = (26 + message[i].toLowerCase().charCodeAt(0) - 97 - key) % 26;
    // console.log(alphabet[key],alphabet[ascii],ascii);
    rString += alphabet[ascii];
  }
  return rString;
};