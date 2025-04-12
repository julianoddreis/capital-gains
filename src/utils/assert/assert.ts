interface IAssert {
  array(value: any): asserts value is any[];
  object(value: any): asserts value is Record<string, any>;
  number(value: any): asserts value is number;
  string(value: any): asserts value is string;
  isKeyOf<T extends string | number>(
    value: any,
    map: Record<T, any>,
  ): asserts value is keyof typeof map;
}

export const Assert: IAssert = {
  array(value: any): asserts value is any[] {
    if (!Array.isArray(value)) {
      throw new Error(`${value} must be an array`);
    }
  },

  object(value: any): asserts value is Record<string, any> {
    if (typeof value !== "object" || value === null) {
      throw new Error(`${value} must be an object`);
    }
  },

  number(value: any): asserts value is number {
    if (typeof value !== "number") {
      throw new Error(`${value} must be a number`);
    }
  },

  string(value: any): asserts value is string {
    if (typeof value !== "string") {
      throw new Error(`${value} must be a string`);
    }
  },

  isKeyOf<T extends string | number>(
    value: any,
    map: Record<T, any>,
  ): asserts value is keyof typeof map {
    if (!map.hasOwnProperty(value)) {
      throw new Error(`${value} is not a key in the provided map`);
    }
  },
};
