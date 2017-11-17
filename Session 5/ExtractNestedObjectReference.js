Object.prototype.hash = function(string) {
    return string.split('.').reduce(function(a, b) {
        return a && a[b];
    }, this);
};
