const chunk = (array , size) =>{
  const chunked = [];
  let index = 0;

    while(index < array.length){
      const chunk = array.slice(index, index + size);
      console.log(chunk);
      chunked.push(chunk);
      index += size;
  }
  return chunked;
}
// two numbers
 function twoSum(nums , target){
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i , j];
      }
    }
  }
  return [];
 }

 const res = twoSum([2,7,8,9,11],9);
 console.log(res);