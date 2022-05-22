import express from "express";
import palindromesRoutes from "./routes/palindromes.routes";
import salesRoutes from "./routes/sale.routes";
import automoveisRoutes from "./routes/automovel.routes";
const app = express();

app.use(express.json());
app.use("/api", palindromesRoutes);
app.use("/api", salesRoutes);
app.use("/api", automoveisRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running!\nhttp://localhost:${port}/`));
