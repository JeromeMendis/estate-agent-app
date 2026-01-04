import { describe, test, expect } from "vitest";

describe("Filter Properties", () => {
  const properties = [
    { id: "p1", type: "House", price: 500000 },
    { id: "p2", type: "Apartment", price: 300000 }
  ];

  test("should filter properties by type", () => {
    const result = properties.filter(p => p.type === "House");
    expect(result.length).toBe(1);
    expect(result[0].type).toBe("House");
  });

  test("should filter properties by price", () => {
    const result = properties.filter(p => p.price < 400000);
    expect(result.length).toBe(1);
  });
});
