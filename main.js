function function1() {
    function2();
}

function function2() {
    function3();
}
function function3() {
    function4();
}
function function4() {
    function5();
}
function function5() {
    console.log('function5');
}




console.log('start');
setTimeout(function(){ console.log("Timer 1"); }, 0);
setTimeout(function(){ console.log("Timer 2"); }, 3000);
setTimeout(function(){ console.log("Timer 3"); }, 0);
function1();
console.log('end');


//latentflip.com/loupe