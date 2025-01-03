const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');

dotenv.config();

const url = 'mongodb://127.0.0.1:27017'; // Use IPv4 to avoid issues with IPv6 (::1)
const client = new MongoClient(url);

const dbName = 'passop';
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(cors());

// Initialize and connect to MongoDB
(async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Fetch all documents
    app.get('/', async (req, res) => {
      try {
        const collection = db.collection('documents');
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
      } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    // Insert a document
    app.post('/', async (req, res) => {
      try {
        const password = req.body;
        const collection = db.collection('passwords');
        const insertResult = await collection.insertOne(password);
        res.send({ success: true, insertResult });
      } catch (error) {
        console.error('Error inserting document:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    // Delete a document
    app.delete('/', async (req, res) => {
      try {
        const filter = req.body;
        const collection = db.collection('passwords');
        const deleteResult = await collection.deleteOne(filter);
        res.send({ success: true, deleteResult });
      } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  }
})();
