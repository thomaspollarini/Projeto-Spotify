import { MongoClient } from "mongodb";

// remember to put your connection string
const URI = "mongodb+srv://<db-user>:<db-password>@cluster0.fose7jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotify");
