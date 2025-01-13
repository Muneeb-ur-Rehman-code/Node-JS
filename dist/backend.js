import express from "express";
import userModel from "./user.js";
import connection from "./db.js";
const app = express();
const usermodel = userModel;
const dbconnection = connection;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("index");
});
app.post("/", async (req, res) => {
    const newUser = await usermodel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    res.send("User Registered");
});
app.get('/get_users', (req, res) => {
    usermodel.find().then((users) => {
        res.send(users);
    });
});
app.post('/update_user', async (req, res) => {
    const { oldName, newName } = req.body;
    await usermodel.findOneAndUpdate({
        username: oldName
    }, {
        username: newName
    });
});
app.post('/delete_user', async (req, res) => {
    await usermodel.findOneAndDelete({
        username: req.body.username
    });
    res.send("User Deleted");
});
app.listen(3000);
//# sourceMappingURL=backend.js.map