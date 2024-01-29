import { connect } from "./database";
import app from "./app";

const port = 3001;

connect();

app.listen(port, () => {
  console.log("sonsjiina");
});
