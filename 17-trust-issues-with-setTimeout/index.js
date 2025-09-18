console.log("start");

setTimeout(cb=()=>{
    console.log("callback functon");
},5000)

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate+10000){
    endDate = new Date().getTime();
}
console.log("while expires");

// output
/**
 * start
 * end
 * while expires (after 10 seconds)
 * callback function
 */