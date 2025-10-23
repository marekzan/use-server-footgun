import { describe, it, expect } from "vitest";
import { isOwner } from "../server";

describe("isOwner", () => {
  it("should return true if the user mail and owner mail are the same", () => {
    expect(isOwner("test@example.com", "test@example.com")).toBe(true);
  });

  it("should return false if the user mail and owner mail are different", () => {
    expect(isOwner("user@example.com", "owner@example.com")).toBe(false);
  });

  it("should be case-sensitive", () => {
    expect(isOwner("test@example.com", "Test@example.com")).toBe(false);
  });
});
