import express from 'express'
import connect from './db/db.config.js'
import User from "./models/user.model.js"

const app = express()
app.use(express.json())

app.post("/create-user", async (req, res) => {
    try {
        const {name, password} = req.body
        const user = await User.create({name, password})

        return res.status(201).json({msg:"user created", user})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Ërror while creating user", error})
        
    }
})

app.listen(8080, () => {
    console.log("server up and running on 8080")
    connect()
}) 