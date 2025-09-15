import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

export const collectionObj = {
    services: "services",
    user: "users"
};

export default function dbConnect(collectionName) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db(process.env.DB_NAME).collection(collectionName);
}

