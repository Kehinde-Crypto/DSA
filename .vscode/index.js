const numbers = [1 ,2 ,3 ,4,5,6,7,8,9,10,11,12]

const getEl = (arr , index) =>arr[index];
console.log(getEl(numbers,0));

function findPar(arr){
  for(let i = 0;i<arr.length;i++){
    for(let j = i + 1; j<arr.length;j++){
      console.log(`Pair ${[i]}, ${[j]}`); 
    }
  }
}

findPar(num);