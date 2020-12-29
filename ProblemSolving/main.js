// counting unic number
// [1,1,2,2,3,4,4,5,6,7,8,8]
// [1,2,3]
function count(array){
    if(array.length){
        let i=0;
        for (let j = 1; j < array.length; j++) {
           if (array[i] !==array[j]){
              i++
              array[i]=array[j]
           }
            
        }
      for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if (element===element) {
              for (let i=0; i<4; i++) {
                  console.log(i);
                  array.pop()
                }
            // array.pop()
            // array.pop()
            // array.pop()
            // array.pop()
            

             return array
          }
          console.log(array);
      }
        return array   
    }
}
let result=count([1,1,2,2,3,4,4,5,6,7,8,8])
console.log(`unik number is : ${result}`);