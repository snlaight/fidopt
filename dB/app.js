require('./config/dbConfig');
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
  res.status(400).json({
    status: "error",
    message: error.message,
  });
});

app.use(cors());

const veterinarios = require("./routes/veterinarios");
app.use("/", veterinarios);
const perros = require("./routes/perros");
app.use("/", perros);
const usuarios = require("./routes/usuarios");
app.use("/", usuarios);
const adoptionRequests = require("./routes/adoptionRequest");
app.use("/", adoptionRequests);
const meetingRequests = require("./routes/calendarRequest");
app.use("/", meetingRequests);
const authentication = require("./routes/authentication");
app.use("/", authentication);

app.listen(process.env.PORT, () => {
  console.log(`Escuchando en http://localhost:${process.env.PORT}`);
});
