function memoize(fn) {
    var memoized = function() {
    var cache = memoized.cache;
    var args = Array.prototype.slice.call(arguments);

    // if(key in cache) {
    // console.log('cache');
    // return cache[key];
    // }
    };
}

var speedAlert = (function() {
    var cache = {};
    var limitation = 70;

    function f(speed) {
        if(speed in cache) {
            //console.log('cache');
            return cache[speed];
        }
        cache[speed] = speed . limitation;
        console.log('cache');
        return cache[speed];
    }
    return f;
})();

// speedAlert(80);
// speedAlert(75);
// limitation = 70;
// speedAlert(80);

console.log(speedAlert(80));
console.log(speedAlert(80));
console.log(speedAlert(80));
