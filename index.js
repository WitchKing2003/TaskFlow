const express = require("express");
const auth = require("./src/routes/authRouter")
const workspaces = require("./src/routes/workspacesRouter")
const projects = require("./src/routes/projectsRouter")
const columns = require("./src/routes/columnsRouter")
const tasks = require("./src/routes/tasksRouter")
const authMiddleware = require("./src/middlewares/authMiddleware")



const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/auth", auth);
// app.use(authMiddleware);
app.use("/workspaces", workspaces)
app.user("/projects", projects)
app.user("/columns", columns)
app.user("/tasks", tasks)



// app.get("/", (req, res) => {
//   res.json({
//     message: "Backend is running",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
