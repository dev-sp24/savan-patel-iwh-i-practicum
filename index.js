require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
 
});

app.get("/update-cobj", (req, res) => {
  res.render("update-cobj");
});

app.post("/update-cobj", async (req, res) => {
  const { name,price,model } =
    req.body;
  let customObjectRecordId = null;
  const data = {
    properties: {
      name,
      price,
      model,
    },
  };

  const url = `https://api.hubspot.com/crm/v3/objects/2-222070893`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${process.env.PRIVATE_APP_ACCESS}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Custom object created:", response.data);
    customObjectRecordId = response.data.id;
    res.redirect("/");
  } catch (error) {
    console.error("Error creating custom object:", error.message);
    res.send("Error creating custom object");
  }

});

// * Localhost
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
