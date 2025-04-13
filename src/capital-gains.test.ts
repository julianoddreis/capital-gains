import readline from "readline";

import { main } from "./capital-gains";

jest.mock("readline");
const mockQuestion = jest.fn();
const mockClose = jest.fn();

const mockRl = {
  question: mockQuestion,
  close: mockClose,
} as unknown as readline.Interface;
(readline.createInterface as jest.Mock).mockReturnValue(mockRl);
const logSpy = jest.spyOn(console, "log").mockImplementation();

describe("capital gains integration test", () => {
  describe("given a valid input json", () => {
    it("should return the correct output json", async () => {
      mockQuestion
        .mockImplementationOnce((_, cb) =>
          cb(
            `[{"operation":"buy", "unit-cost":10.00, "quantity": 100},{"operation":"sell", "unit-cost":15.00, "quantity": 50},{"operation":"sell", "unit-cost":15.00, "quantity": 50}]`,
          ),
        )
        .mockImplementationOnce((_, cb) => cb(""));

      await main(mockRl);

      expect(logSpy).toHaveBeenCalledWith(
        JSON.stringify([{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }]) + "\n",
      );
    });
  });

  describe("given a multiple list of operations", () => {
    it("should return the output for each list individually", async () => {
      mockQuestion
        .mockImplementationOnce((_, cb) =>
          cb(
            `[{"operation":"buy", "unit-cost":10.00, "quantity": 100},{"operation":"sell", "unit-cost":15.00, "quantity": 50},{"operation":"sell", "unit-cost":15.00, "quantity": 50}]`,
          ),
        )
        .mockImplementationOnce((_, cb) =>
          cb(
            `[{"operation":"buy", "unit-cost":10.00, "quantity": 10000},{"operation":"sell", "unit-cost":20.00, "quantity": 5000},{"operation":"sell", "unit-cost":5.00, "quantity": 5000}]`,
          ),
        )
        .mockImplementationOnce((_, cb) => cb(""));

      await main(mockRl);

      expect(logSpy).toHaveBeenCalledWith(
        JSON.stringify([{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }]) + "\n",
      );
      expect(logSpy).toHaveBeenCalledWith(
        JSON.stringify([{ tax: 0.0 }, { tax: 10000.0 }, { tax: 0.0 }]) + "\n",
      );
    });
  });
});
