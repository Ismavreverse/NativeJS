function add(value1) {
    var result = value1;
    var addition = function (value2) {
        result += value2;
        return addition;
    };
    addition.valueOf = function () {
        return result;
    };
    return addition;
}
