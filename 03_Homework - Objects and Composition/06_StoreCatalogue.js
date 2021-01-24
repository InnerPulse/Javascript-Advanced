function storage(params) {
  const catalogue = {};
  Array.from(
    params.reduce((a, c) => {
      a.add(getInitials(c));
      return a;
    }, new Set())
  )
    .sort()
    .forEach((categorie) => (catalogue[categorie] = {}));

  params.forEach((line) => {
    const [product, price] = line.split(" : ");
    const initials = getInitials(product);
    catalogue[initials][product] = Number(price);
  });

  for (const categorie in catalogue) {
    console.log(
      `${categorie}\n  ${sortProducts(Object.entries(catalogue[categorie]))}`
    );
  }

  function getInitials(name) {
    return Array.from(name)[0];
  }

  function sortProducts(products) {
    return products
      .reduce((a, c) => {
        a.push(c.join(": "));
        return a;
      }, [])
      .sort((a, b) => a.localeCompare(b))
      .join(`\n  `);
  }
}
