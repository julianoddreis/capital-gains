import { Assert } from "./assert";

describe("Assert", () => {
  describe("array", () => {
    it("should not throw when value is an array", () => {
      expect(() => Assert.array([])).not.toThrow();
      expect(() => Assert.array([1, 2, 3])).not.toThrow();
    });

    it("should throw when value is not an array", () => {
      expect(() => Assert.array({})).toThrow("must be an array");
      expect(() => Assert.array("string")).toThrow("must be an array");
      expect(() => Assert.array(123)).toThrow("must be an array");
      expect(() => Assert.array(null)).toThrow("must be an array");
    });
  });

  describe("object", () => {
    it("should not throw when value is an object", () => {
      expect(() => Assert.object({})).not.toThrow();
      expect(() => Assert.object({ key: "value" })).not.toThrow();
    });

    it("should throw when value is not an object", () => {
      expect(() => Assert.object([])).toThrow("must be an object");
      expect(() => Assert.object("string")).toThrow("must be an object");
      expect(() => Assert.object(123)).toThrow("must be an object");
      expect(() => Assert.object(null)).toThrow("must be an object");
    });
  });

  describe("number", () => {
    it("should not throw when value is a number", () => {
      expect(() => Assert.number(123)).not.toThrow();
      expect(() => Assert.number(0)).not.toThrow();
      expect(() => Assert.number(-123)).not.toThrow();
    });

    it("should throw when value is not a number", () => {
      expect(() => Assert.number("123")).toThrow("must be a number");
      expect(() => Assert.number({})).toThrow("must be a number");
      expect(() => Assert.number([])).toThrow("must be a number");
      expect(() => Assert.number(null)).toThrow("must be a number");
    });
  });

  describe("string", () => {
    it("should not throw when value is a string", () => {
      expect(() => Assert.string("")).not.toThrow();
      expect(() => Assert.string("test")).not.toThrow();
    });

    it("should throw when value is not a string", () => {
      expect(() => Assert.string(123)).toThrow("must be a string");
      expect(() => Assert.string({})).toThrow("must be a string");
      expect(() => Assert.string([])).toThrow("must be a string");
      expect(() => Assert.string(null)).toThrow("must be a string");
    });
  });

  describe("isKeyOf", () => {
    it("should not throw when value is a key of the map", () => {
      const map = { key1: "value1", key2: "value2" };
      expect(() => Assert.isKeyOf("key1", map)).not.toThrow();
      expect(() => Assert.isKeyOf("key2", map)).not.toThrow();
    });

    it("should throw when value is not a key of the map", () => {
      const map = { key1: "value1", key2: "value2" };
      expect(() => Assert.isKeyOf("nonexistent", map)).toThrow("is not a key in the provided map");
      expect(() => Assert.isKeyOf(123, map)).toThrow("is not a key in the provided map");
    });

    it("should work with numeric keys", () => {
      const map = { 1: "value1", 2: "value2" };
      expect(() => Assert.isKeyOf(1, map)).not.toThrow();
      expect(() => Assert.isKeyOf(2, map)).not.toThrow();
      expect(() => Assert.isKeyOf(3, map)).toThrow("is not a key in the provided map");
    });
  });
});
