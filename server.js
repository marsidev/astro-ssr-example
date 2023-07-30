import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("dist/client/"));
app.use(ssrHandler); // <-- This is not working

// The following works:
// app.use((req, res, next) => {
//   ssrHandler(req, res, next);
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
