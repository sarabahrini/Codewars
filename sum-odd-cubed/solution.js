function cubeOdd(arr) {
    let odd = arr.map(num => Math.pow(num, 3)).filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    if (odd || odd === 0) {
      return odd;
    } else {
      return undefined;
    }
  }