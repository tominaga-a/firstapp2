const express = require("express");
const app = express();

//テンプレートエンジンにEJS使用の設定
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

// ルーティングを読み込む
const routers = require("./routes");
app.use(routers);


// localhost:3001で起動
app.listen(3001, () => {
    console.log("Listening on localhost port 3001");
});

