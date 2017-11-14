function cache(func) {
    //Create an empty object to store cache values
    var functions = {};
    return function() {
        //Convert the argument value into string and save in a variable 
        var input = JSON.stringify(arguments);
        if (!(input in functions)) {
            functions[input] = func.apply(null, arguments);
        }
        return functions[input];
    };
}
