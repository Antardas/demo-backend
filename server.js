const app = require("./app");
const connect = require("./database/connectDB");
const port = process.env.PORT || 5000;
connect();




app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
