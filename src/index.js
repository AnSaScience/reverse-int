module.exports = function reverse (n) {
    return Math.abs(n).toString().split("").map((x,i,arr)=>{ return arr[arr.length-1-i]
    }).join("")
    }
