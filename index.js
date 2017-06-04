/**
* Split an input string based on the given separator string.
* @inputString: an input string object to separate
* @separatorSubstring: an expected substring
* @inclusive: true if substring is included in the result split element, false otherwise. Defaults to false
*/
module.exports = function(inputString, separatorSubstring, inclusive) {
  var result = {
      split: [],
      splat: []
  };
  if(!inputString || !separatorSubstring) {
    result.splat.push(inputString);
    return result;
  };
  const startIdx = 0;
  var target = inputString;
  var offset = inclusive ? (separatorSubstring.length != null ? separatorSubstring.length : 1) : 0;
  var onset = inclusive ? 0 : (separatorSubstring.length != null ? separatorSubstring.length : 1);
  var splitIndex = target.indexOf(separatorSubstring);  
  
  for(nextIdx = offset + splitIndex;
    splitIndex != -1;
    splitIndex = target.indexOf(separatorSubstring), nextIdx = offset + splitIndex) {

      result.split.push(target.slice(startIdx, nextIdx));
      target = target.slice(nextIdx + onset, target.length);
  }
  result.splat.push(target);
  return result;
};