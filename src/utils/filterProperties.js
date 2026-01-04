export function filterProperties(properties, filters) {
  return properties.filter((p) => {
    if (filters.type && p.type !== filters.type) return false;

    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;

    if (filters.minBeds && p.bedrooms < Number(filters.minBeds)) return false;
    if (filters.maxBeds && p.bedrooms > Number(filters.maxBeds)) return false;

    if (
      filters.postcode &&
      !p.location.toUpperCase().startsWith(filters.postcode.toUpperCase())
    )
      return false;

    if (filters.date) {
      const propertyDate = new Date(
        `${p.added.month} ${p.added.day}, ${p.added.year}`
      );
      if (propertyDate < new Date(filters.date)) return false;
    }

    return true;
  });
}
