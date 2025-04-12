import { IOperation, OperationType } from "@/types/operation";
import { Assert } from "@/utils/assert";

const FromJsonType: Record<"buy" | "sell", OperationType> = {
  buy: OperationType.Buy,
  sell: OperationType.Sell,
};

export function operationsMapper(data: any): ReadonlyArray<IOperation> {
  Assert.array(data);

  return data.map((item: any) => {
    Assert.object(item);
    Assert.string(item.operation);
    Assert.number(item["unit-cost"]);
    Assert.number(item.quantity);
    Assert.isKeyOf(item.operation, FromJsonType);

    const operation: IOperation = {
      type: FromJsonType[item.operation],
      unitCost: item["unit-cost"],
      quantity: item.quantity,
    };

    return operation;
  });
}
