const express = require("express");
const rootRouter = require("./src/routes/index")



const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/TaskForger",rootRouter);



// app.get("/", (req, res) => {
//   res.json({
//     message: "Backend is running",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
