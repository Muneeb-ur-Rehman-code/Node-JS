import mongoose from "mongoose";
const connection = mongoose.connect('mongodb://0.0.0.0/mern').then(() => {
    console.log("connected to database");
});
export default connection;
//# sourceMappingURL=db.js.map