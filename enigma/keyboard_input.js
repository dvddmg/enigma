outlets = 1

var c = 0
var a = []
var m = [1, 2, 0, 2, 0, 1]
var q = [0, 0, 1, 1, 2, 2]

function init(n){
    a = n.toString().split(" ")
    c = 0
}

function count(){
    if(c >= 0 && c <= 2){
        outlet(0, a[c])
    } else {
        outlet(0, Math.abs(a[q[c-3]] - a[m[c-3]]))
    }
    c = (c+1)%9
}