/**
 * @param {string} S
 * @return {string}
 */

var toGoatLatin = function(S) {
  var vowel = "aeiouAEIOU";
  
  nani = S.split(" ");
  answer = ""
  
  for(var i = 0; i < nani.length; i++) {
      if(vowel.includes(nani[i][0])) {
          answer += nani[i] + "ma"; 
      }
      else {
          answer += nani[i].substr(1) + nani[i][0] + "ma";
      }
      answer += ("a".repeat(i+1)) + " ";
  }    
  
  return answer.trim();
};