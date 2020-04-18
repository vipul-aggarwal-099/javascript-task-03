
function javascriptTask(number1) {
    const arr1 = [];
    for(let i = 1; i <= number1; i++) {
        if(i % 2 === 0) {
            arr[i - 1] = 'yu';
        }
        if (i % 3 === 0) {
            arr[i - 1] = "gi";
        }
        if (i % 5 === 0) {
            arr1[i - 1] ="oh";
        }
        if (i % 2 === 0 && i % 3 === 0) {
            arr1[i - 1] = "yu-gi";
        }
        if (i % 2 == 0 && i % 5 == 0) {
            arr1[i - 1] = "yu-oh";
        }
        if (i % 3 === 0 && i % 5 === 0) {
            arr[i - 1] = "gi-oh";
        }
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr1[i - 1] = "yu-gi-oh";
        }
    }
}