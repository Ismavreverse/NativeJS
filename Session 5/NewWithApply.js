function construct(obj) {
    return new (obj.bind.apply(obj, arguments))();
}
