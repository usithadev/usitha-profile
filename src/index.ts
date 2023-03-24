import express from "express"
import { config as dotenv} from "dotenv";
import path from "path";

dotenv(); // Configure the .env file

const app = express();
const PORT = 3000 || process.env.PORT;

app.use("/", express.static(path.join(__dirname, "public")))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));