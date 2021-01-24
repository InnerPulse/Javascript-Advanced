function townsToJson(params) {
  const towns = [];

  params.slice(1).forEach((line) => {
    const town = line.split('|')[1].trim()
      
    const [latitude, longitude] = line
      .match(/-?\d+\.?\d+/g)
      .map((el) => el.trim());
    towns.push({
      Town: town,
      Latitude: Number(Number(latitude).toFixed(2)),
      Longitude: Number(Number(longitude).toFixed(2)),
    });
  });

  return JSON.stringify(towns);
}
