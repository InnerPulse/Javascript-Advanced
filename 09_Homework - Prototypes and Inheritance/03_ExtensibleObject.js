function extendedObject() {
    const __proto__ = {};

    __proto__.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                Object.getPrototypeOf(__proto__)[key] = value;
            } else {
                __proto__[key] = value;
            }
        });
    };

    return __proto__;
}
