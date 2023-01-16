const express = require('express');
const { createServer } = require("http");
const realtimeServer = require("./realtimeServer.cjs");
const path = require("path");
const cookieParser = require("cookie-parser")
// const router = require("./routes/index.cjs")

const app = express();
const httpServer = createServer(app);

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser())

// Routes
app.use( require("./routes/index.cjs") );
// router(app)
// app.use('/app', express.static('public')); 

// Public
app.use( express.static( path.join(__dirname, "public")));

// Levantar servidor
httpServer.listen(app.get("port"), () => {
    console.log("El servidor esta corriendo en el puerto", app.get("port"));
});

// Llamo al servidor de Socket.io
realtimeServer(httpServer);