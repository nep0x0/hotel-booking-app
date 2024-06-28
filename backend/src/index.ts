import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
    res.json({ message: "hello from express endpoint1" });
});

app.listen(7000, () => {
    console.log("server running on port 7000");
})