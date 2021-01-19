function objectFctory(library, orders) {
  const result = orders.reduce((acc, order) => {
    const composed = Object.assign({}, order.template);
    order.parts.forEach((part) => (composed[part] = library[part]));
    acc.push(composed);
    return acc;
  }, []);
  return result;
}
