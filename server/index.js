const express = require("express");
const { MongoClient,ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://rahman:12345@cluster0.nxhbkwn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const todo = client.db("tkm").collection("todo");
const ongoing = client.db("tkm").collection("ongoing");
const done = client.db("tkm").collection("done");


// get todo, post todo, delete todo
app.get("/todo", async(req,res) => {
    try {
    const cursor =todo.find({status:"Prime"});todo
      const result = await cursor.toArray();
      res.send(result)
    } catch (error) {
   console.log(error);     
    }
  });
  app.post("/todo", async (req,res) => {
    try {
        const task = req.body;
        console.log(req.body);
        const result = await todo.insertOne(product)
        res.send(result)
    } catch (error) {
        console.log(error);
    }
  })
  
  app.delete("/todo/:id", async (req,res) =>{
    try {
      const id = req.params.id
      const query = { _id: new ObjectId(id)  }; 
      const result = await todo.deleteOne(query)
      res.send(result)
    } catch (error) {
      console.log(error);
    }
  })



  // get ongoing, post ongoing, delete ongoing",
    app.get("/todo", async(req,res) => { 
  try {
    const cursor =ongoing.find({status:"Prime"});todo
      const result = await cursor.toArray();
      res.send(result)
    } catch (error) {
   console.log(error);     
    }
  });

  app.post("/ongoing", async (req,res) => {
    try {
        const task = req.body;
        console.log(req.body);
        const result = await ongoing.insertOne(product)
        res.send(result)
    } catch (error) {
        console.log(error);
    }
  })
  
  app.delete("/ongoing/:id", async (req,res) =>{
    try {
      const id = req.params.id
      const query = { _id: new ObjectId(id)  }; 
      const result = await ongoing.deleteOne(query)
      res.send(result)
    } catch (error) {
      console.log(error);
    }
  })



  // get done, post done, delete done", async(req,res) => {
    app.get("/done", async(req,res) => { 
        try {
          const cursor =done.find({status:"Prime"});todo
            const result = await cursor.toArray();
            res.send(result)
          } catch (error) {
         console.log(error);     
          }
        });
      
        app.post("/done", async (req,res) => {
          try {
              const task = req.body;
              console.log(req.body);
              const result = await done.insertOne(product)
              res.send(result)
          } catch (error) {
              console.log(error);
          }
        })
        
        app.delete("/done/:id", async (req,res) =>{
          try {
            const id = req.params.id
            const query = { _id: new ObjectId(id)  }; 
            const result = await done.deleteOne(query)
            res.send(result)
          } catch (error) {
            console.log(error);
          }
        })



        
app.get("/", (req, res) => {
    res.send("Crud is running...");
  });
  app.get("/jwt", (req, res) => {
    res.send("Crud is running...");
  });
  
  
  app.listen(port, () => {
    console.log(`Simple Crud is Running on port ${port}`);
  });
  run().catch(console.dir);