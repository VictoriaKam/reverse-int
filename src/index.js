module.exports = function reverse(n) {
    let arr = Array.from(String(n));
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            newArr.unshift(arr[i]);
        }
    }
    return Number(newArr.join(''));
}
