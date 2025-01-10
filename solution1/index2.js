const stringArr = ['a ','b','c'];
console.log(stringArr);

// custom array
class MyArray {
  constructor(){
    this.length = 0;
    this.data ={}
  }
  push(item){
    this.data[this.length] = item;
    console.log(this.data);
    this.length++;
    return this.length;
  }
  get(value){
     this.data[this.length] = value;
     this.length++;
     return this.length;

  }
  pop(index){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    // return this.data[this.length];
     this.length--;
     return lastItem;
  }
  delete(index){
     const items = this.data[index];
     for(let i = 0; i < items.length; i++){
      this.data[i] = this.data[items[i + 1]];
     }
      delete this.data[this.length - 1];
      return items

  }
}
const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("mango");
myNewArray.push("paw paw");
myNewArray.get();
myNewArray.pop();

