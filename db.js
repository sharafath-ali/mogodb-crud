import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";

let dbconnection;
const connectDb = async (cb) => {
   MongoClient.connect(uri).then((client) => {
      dbconnection = client.db();
      return cb();
   }).catch((err) => {
      console.log(err);
      return cb(err);
   });
}

const getDb = () => {
   if (dbconnection) {
      return dbconnection;
   }
}

export {
   connectDb,
   getDb
}
// import { MongoClient } from "mongodb";

// const uri = "mongodb://localhost:27017/";
// let dbconnection;

// const connectDb = async (cb) => {
//   try {
//     const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//     dbconnection = client.db("school"); // Replace with your database name
//     console.log("Database connected successfully");
//     cb();
//   } catch (err) {
//     console.error("Database connection failed", err);
//     cb(err);
//   }
// };

// const getDb = () => {
//   if (dbconnection) {
//     return dbconnection;
//   }
//   throw new Error("Database not initialized. Call connectDb first.");
// };

// export { connectDb, getDb };
