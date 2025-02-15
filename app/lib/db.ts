import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error("please define mongodb uri in envlocal file");
let catched = global.mongoose;
if (!catched) catched = global.mongoose = { conn: null, promise: null };
// function for connecting database;
export async function connectToDatabase() {
  if (catched.conn) return catched.conn;
  if (!catched.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };
    catched.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => mongoose.connection);
  }
  try{
    catched.conn = await catched.promise

  }
  catch(error){
    catched.promise = null;
    throw new Error("check database file")

  }
}