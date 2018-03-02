module.exports = function getZerosCount(number, base) {
  // your implementation

  tempB = base;
  power = number;
  
  for (var i = 2; i <= base; i++)
  {
    if (tempB % i === 0)
    {
      countB = 0;
      
      while (tempB % i === 0)
      {
        countB++;
        tempB = Math.floor(tempB/i);
      }
          
      sum = 0;
      tempN = number;
      
      while (tempN/i > 0)
      {
        sum += Math.floor(tempN/i);
        tempN = Math.floor(tempN/i);
      }
      
      power = Math.floor(Math.min(power,sum/countB));
    }
  }
  
  return power;
}