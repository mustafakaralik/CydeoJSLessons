// Lets create a function hell by async feature
/*
function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log('backend data received');
        dataNeeded = 'mustafa'
    }, 5000);
    return dataNeeded;
}
let data = waitingForSomeServerToAct();
console.log(data);
*/
function functionThatNeedsBackendData(info) {
    console.log('I need this info fro the rest of my code '+ info);
    
}

// functionThatNeedsBackendData(waitingForSomeServerToAct());


// how to solve async feature  with callbacks
function waitingForSomeServerToAct_WithCallBack(callbacks) {
    let dataNeeded;
    setTimeout(() => {
        console.log('backend data received');
        dataNeeded = 'mustafa'
        callbacks(dataNeeded);
    }, 5000);
    return dataNeeded;
}

waitingForSomeServerToAct_WithCallBack(functionThatNeedsBackendData);