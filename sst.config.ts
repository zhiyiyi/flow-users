import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { WebAppStack } from "./stacks/WebAppStack";

export default {
  config(_input) {
    return {
      name: "flow-users",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack).stack(WebAppStack);
  }
} satisfies SSTConfig;
