import { StackContext, Table } from "sst/constructs";

export function StorageStack({ stack, app }: StackContext) {
    const table = new Table(stack, "Users", {
        fields: {
            id: "string",
            name: "string",
            email: "string"
        },
        primaryIndex: { partitionKey: "id", sortKey: "email" }
    });

    return {
        table
    };
}