const mongoose = require("mongoose");

const uri =
  "mongodb+srv://21espatil15114_db_user:cv208BZKFguTzAOe@cluster0.dtthcra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Connection failed");
    console.error(err);
    process.exit(1);
  });