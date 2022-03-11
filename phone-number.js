function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(')') > -1) {
    return false;
  }
  if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false;
  }
  if (str[0] === "-") {
    return false;
  }
  
  if (str[0] === "5" && str[2] === " " ) {
    return false;
  }


  let refinedStr = str.replace(/\-| /g, "");
  // console.log(refinedStr);

  if (refinedStr.indexOf("(") < refinedStr.indexOf(")")) {
    refinedStr = refinedStr.replace(/\(|\)/g, "");

  }
  
// console.log(refinedStr);

  if (refinedStr.length == 10) {
    return true;
  } else if (refinedStr.length === 11 && refinedStr[0] === "1") {
    return true;
  }
  return false;
}