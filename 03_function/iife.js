// Immediately Invoked Function Expressions (IIFE)

// IIFE can be used to avoid variable hoisting from within blocks, protect against polluting the global environment.

(function server() {
    // named IIFE
    console.log('DB CONNECTED');
})();

(() => {
    console.log('DB CONNECTED Two');
})();

((name) => {
    console.log(`DB CONNECTED ${name}` );
})('Sanju')