
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
export const handler = async (event: APIGatewayProxyEventV2, context: APIGatewayProxyResultV2 ) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  return {
            statusCode: 200,
            body: JSON.stringify(`Hello World! ${event}`),
          };
};