const express = require("express")
const todosRoutes = require("./routes")
const app = express()

app.use(express.json())

app.use(todosRoutes)

app.get("/tarefas", (req, res) => {
    return res.json("foi")
})

app.listen(3000, () => console.log("Server está no ar"))
