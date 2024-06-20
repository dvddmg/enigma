outlets = 2;
var t = 0;
var m = 8;
var a = []

function init(n, u, s){
    t = n
    m = u
    a = s.toString().split(" ")
    if(t == 0){
        outlet(0, "clear")
        for(var i = 0; i < a.length; i++){
            outlet(0, a[i] + " " + i + " " + "1")
        }
        outlet(1, a)
    } else {
        for(var j = 0; j < t; j ++) {
            outlet(0, "clear")
            a.unshift(a.pop());
            for(var i = 0; i < a.length; i++){
                outlet(0, a[i] + " " + i + " " + "1")
            }
            outlet(1, a)
        }
    }
}

function update(){
    a.unshift(a.pop());
    for(var i = 0; i < a.length; i++){
        outlet(0, a[i] + " " + i + " " + "1")
    }
}

function count(){
    t = t + 1;
    if((t%m) == 0){
        outlet(0, "clear")
        update()
    }
}