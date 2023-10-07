import { Api, use, StackContext } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app}: StackContext) {
    const { table } = use(StorageStack);

    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                bind: [table]
            }
        },
        routes: {
            "POST /users": "packages/functions/src/create.main",
            "GET /users": "packages/functions/src/list.main",
            "DELETE /users/{id}": "packages/functions/src/delete.main"
        }
    });

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url
    });

    return {
        api
    };

}