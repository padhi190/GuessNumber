export function generateRandomBetween(min, max, exclude) {
    const rndNo = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNo === exclude) {
      return generateRandomBetween(min, max, exclude);
    }
    return rndNo;
  }