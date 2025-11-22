import app from "./app.js";
import "dotenv/config"
import { connectDb } from "./db/connectDb.js";

const PORT = process.env.PORT;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on port - ", PORT);

        })
    })