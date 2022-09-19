//GenerateRandomFractionsWithJavaScript.js
//Change randomFraction to return a random number instead of returning 0.
function randomFraction() {
    let result = 0;
    while (result === 0) {
      result = Math.random();
    }
    return result;
  }
