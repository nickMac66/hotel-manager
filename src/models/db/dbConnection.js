/* 
 * Name: dbConnection.js
 * Description: Establishes a connection to the MongoDB database
 * Author: NicMac
 * Date: October 18, 2024 
 */

mongoConnect = () => {

    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://nickemacdonald:hotelmanager@hotelmanager.occa5.mongodb.net/?retryWrites=true&w=majority&appName=HotelManager";

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    async function run() {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);
}

module.exports = {  
    mongoConnect
};