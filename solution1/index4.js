// convert number to str (toString)
// convert string to array(spilt)
// reverse the string(reverse method)
// convert array back to the string(join method)
// convert string to number(parseInt method)
// return the number()

const reverse = (n) => {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverse(1234)); // 4321

const capital = str => {
   return str.toLowerCase().split('').map(word => [0].toUpperCase() + word.slice(1)).join('');
  }
  console.log(capital("hello"));

// fizz buzz
  const FizzBuzz = n => {
    for(let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0){
        console.log("fizz buzz")
      }else if( i % 3 === 0){
         console.log("FIzz")
      }else if(i % 5 === 0){
        console.log("Buzz")
      }else{
        console.log(i);
      }
    }
  }
  // MAX PROFIT
  const max_profit = prices =>{
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0;i < prices.length;i++) {
      const currentPrice = prices[i];

      Math.min(minPrice, currentPrice);
      
      minPrice = Math.min(minPrice, currentPrice);
      console.log(minPrice);
      // potential price
      const potentialProfit =  currentPrice - minPrice;
    maxProfit =  Math.max(maxProfit,potentialProfit)
    console.log(maxProfit);
    }
    return maxProfit;
  }
  const prices = [7,1,2,3,4,5];
  const profit = max_profit(prices);
  console.log("MX :" ,profit);