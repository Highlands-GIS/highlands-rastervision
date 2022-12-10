// Create service client module using ES6 syntax.
import AWS from "aws-sdk";
// Set the AWS Region.
const REGION = "us-east-1";
// Create an Amazon S3 service client object.
const s3Client = new AWS({ region: REGION });
export { s3Client };
