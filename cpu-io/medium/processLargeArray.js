// Problem Description – Non-Blocking Large Array Processing

// You are given a very large array containing around 100,000 items that must be processed. 
// Your task is to implement a strategy that performs this processing without blocking the main thread, ensuring the browser UI remains responsive. 
// The solution should break the work into smaller chunks and schedule them asynchronously.
async function processLargeArray(items, processFn) {
    const chunk = 1000;
    let index = 0;

    function processChunk(){
        const end = Math.min(index + chunk, items.length);

        for (; index < end; index++){
            processFn(items[index]);
        }

        if (index < items.length){
            return new Promise((resolve) => {
                setTimeout(() => resolve(processChunk()), 0);
            });
        }
    }

    await processChunk();
}

module.exports = processLargeArray;
