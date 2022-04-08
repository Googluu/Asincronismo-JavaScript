function sum(sum1, sum2) {
    return sum1 + sum2;
}

function calc(sum1, sum2, callback) {
    return callback(sum1, sum2);
}

console.log(calc(6, 2, sum));
//
function date(callback) {
    console.log(new Date);
    setTimeout(function(){
      let date = new Date;
      callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

function div(div1, div2) {
    return div1 / div2;
}

function calc(div1, div2, callback) {
    return callback(div1, div2);
}
console.log(calc(40, 10, div));




