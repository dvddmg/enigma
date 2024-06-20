outlets = 1
function randomGen(n, x, a, c, o) {
	var l = []
	var m = Math.pow(2, o) - 1
	for (var i = 0; i < n; i++) {
		x = (x * a + c) % m
		l.push((x/m))
	}
	outlet(0, l)
}