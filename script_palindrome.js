var kata1 = "kasur ini rusak";

function checkPalindrome(input) {
  var strArray = input.toLowerCase().split("");
  var newArr = strArray.join("");
  var reverseArr = [...newArr].reverse().join("");
  console.log(newArr);
  console.log(reverseArr);

  if (newArr === reverseArr) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome(kata1));
