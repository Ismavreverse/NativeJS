var Cat = (function() {
    var localScopeVariable = { Counter: 0, TotalWeight: 0, AvgWeight: 0 }
    function Cat(name, weight) {
        if (name === undefined || weight === undefined) { throw new Error('Name and Weight arguments need to be specified'); }
        localScopeVariable.Counter++;
        this.name = name;
        Object.defineProperty(this, 'weight', {
            get: function() { return this._weight || 0; },
            set: function(val) {
                localScopeVariable.TotalWeight = localScopeVariable.TotalWeight - this.weight + val;
                localScopeVariable.AvgWeight = localScopeVariable.TotalWeight / localScopeVariable.Counter;
                return this._weight = val;
            }
        });
        this.weight = weight;
    }
    Cat.averageWeight = function() {
        return localScopeVariable.AvgWeight;
    }
    return Cat;
}());
