function extendedObject() {
  const inst = {};

  inst.extend = function (templates) {
    Object.entries(templates).forEach(([key, value]) => {
      if (typeof value === 'function') {
        Object.getPrototypeOf(inst)[key] = value;
      } else {
        inst[key] = value;
      }
    });
  };

  return inst;
}
