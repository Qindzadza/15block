const flavor=prompt("Enter flavors for your froyo.  Separate them with commas");
// spliting prompt
const flavors=flavor.split(",");
console.log(flavors);
// 1 solution
// let count={};
// for(let i=0;i<flavors.length;i++){
//    let  current=flavors[i];
//     if(!count[current]){
//         count[current] =1;
//     }else{
//         count[current]+=1;
//     }
// }
// 2 solution
// let count={}
// for(let i of flavors){
//     if(count[i]=count[i]){
//         count[i]+=1;
//     }else{
//         count[i]=1;
//     }
// }
// 3 solution
// const count={};
// for(let i=0;i<flavors.length;i++){
//     current=flavors[i]
//     if(count[current]=count[current]){
//         count[current]+=1;
//     }else{
//         count[current]=1;
//     }
// }
// 4 solution 
let count={};
for(let i of flavors){
    count[i]=count[i] ? count[i]+1 : 1;
}
console.log("your order containes:" );
console.table(count)
