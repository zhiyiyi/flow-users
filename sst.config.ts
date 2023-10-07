import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "flow-users",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack);
  }
} satisfies SSTConfig;
