import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db('aploo_mern');
  const documents = await db.collection('mern_test').find().toArray();
  res.json(documents);
}
