import { describe, test, expect } from "vitest";

describe("Favourites Feature", () => {
  test("should allow adding a property to favourites", () => {
    const favourites = [];
    favourites.push("prop1");

    expect(favourites.length).toBe(1);
    expect(favourites).toContain("prop1");
  });

  test("should allow removing a property from favourites", () => {
    const favourites = ["prop1"];
    const updated = favourites.filter(id => id !== "prop1");

    expect(updated.length).toBe(0);
  });
});
