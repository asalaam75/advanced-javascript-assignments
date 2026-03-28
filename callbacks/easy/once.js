// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function onceFn(fn) {
    let called = false; 
    let storedError;
    let StoredData;
    return function (...args) {
        let callback = args.pop();
        if (called){
            return callback(storedError, StoredData);
        }

        called = true;

        fn(...args, (err, data) => {
            storedError = err;
            StoredData = data
            callback(storedError, StoredData);
        });
    }
    
}

module.exports = onceFn;
