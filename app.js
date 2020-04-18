
function javascriptTask03(checkNum) {
    let arr1 = [];
    for(let i = 1; i <= checkNum; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr1.push("yu-gi-oh");
        }
        else if (i % 2 === 0 && i % 3 === 0) {
            arr1.push("yu-gi");
        }
        else if (i % 2 == 0 && i % 5 == 0) {
            arr1.push("yu-oh");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            arr1.push("gi-oh");
        }
        else if(i % 2 === 0) {
            arr1.push("yu");
        }
        else if (i % 3 === 0) {
            arr1.push("gi");
        }
        else if (i % 5 === 0) {
            arr1.push("oh");
        }
        else {
            arr1.push(i);
        }
    }
    console.log(arr1);
}

javascriptTask03(100);
javascriptTask03(30);
javascriptTask03(10);


