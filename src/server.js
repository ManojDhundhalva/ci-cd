const app = require("./app");
const config = require("./config");

app.get("/", (_, res) => res.send("Hello, World!"));

// Start Server
app.listen(config.PORT, () => console.log(`App listening on port ${config.PORT}`));
