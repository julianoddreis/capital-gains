import { IOperation, OperationType } from "../domain/operation";
import { Assert } from "./assert";

const FromJsonType: Record<"buy" | "sell", OperationType> = {
  buy: OperationType.Buy,
  sell: OperationType.Sell,
};

export function operationsMapper(data: any): ReadonlyArray<IOperation> {
  Assert.array(data);

  return data.map((item: any) => {
    Assert.object(item);
    Assert.string(item.type);
    Assert.number(item["unit-cost"]);
    Assert.number(item.quantity);
    Assert.isKeyOf(item.type, FromJsonType);

    const operation: IOperation = {
      type: FromJsonType[item.type],
      unitCost: item["unit-cost"],
      quantity: item.quantity,
    };

    return operation;
  });
}
