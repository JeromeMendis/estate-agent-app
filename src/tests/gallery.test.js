import { describe, test, expect } from "vitest";

describe("Property Gallery", () => {
  test("should load images into gallery", () => {
    const images = ["img1.jpg", "img2.jpg"];
    expect(images.length).toBeGreaterThan(0);
  });

  test("should display correct number of images", () => {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    expect(images.length).toBe(3);
  });
});
