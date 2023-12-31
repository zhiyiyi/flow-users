import { v4 as uuidv4 } from 'uuid'
import AWS from "aws-sdk";
import{ Table } from "sst/node/table";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main: APIGatewayProxyHandlerV2 = async (_evt) => {

  const data = JSON.parse(_evt?.body || '');

  const params = {
    TableName: Table.Users.tableName,
    Item: {
      id: uuidv4(),
      email: data.email,
      name: data.name,
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(params.Item)
  }
};
