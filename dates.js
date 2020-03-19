const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0-sluc0.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(async err => {
    const collection = client.db("chat-box").collection("messages");
    // affiche la liste des documents de la collection dates dans la sortie standard
    const dates = await collection.find({}).toArray();
    console.log('dates:', dates)
    await collection.insertOne({ date: new Date() });
    await client.close();
  });