//1000 gacha bolgan sonlarning juft sonlar yigindisi va toq sinlar yigindisi ning yigindisini topish--

// let even = Number(0);
// let odd = Number(0);

// function findNumber(num){
//     for(i = 0 ; i <=num ; i++ ){
//         if(i % 2 == 0){
//             even +=i
         
//         }
//         else{
//             odd += i
         
//         }
//     }
 
// }

// findNumber(1000);

// let result = Number(even + odd)

// console.log(result);



//1000 gacha bolgan sonlarning ichida 3 ga bolinadigan sonlar yig'indisini topish:

let son = Number(0);

function findNumber(num){
    for(i = 0; i < num; i++){
        if(i % 3 == 0){
            son = i + son;
        }
    }
}
findNumber(1000);

console.log(son);