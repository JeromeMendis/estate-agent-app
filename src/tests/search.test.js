import { describe, test, expect } from "vitest";

describe("Search Properties", () => {
  const properties = [
    { id: "p1", location: "London" },
    { id: "p2", location: "Manchester" }
  ];

  test("should return results matching search term", () => {
    const result = properties.filter(p =>
      p.location.toLowerCase().includes("london")
    );

    expect(result.length).toBe(1);
    expect(result[0].location).toBe("London");
  });

  test("should return empty array if no match found", () => {
    const result = properties.filter(p =>
      p.location.toLowerCase().includes("leeds")
    );

    expect(result.length).toBe(0);
  });
});
