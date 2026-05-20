import "dotenv/config"
import {connectDB} from "./config/db.config"
import app from "./app"

connectDB()

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
