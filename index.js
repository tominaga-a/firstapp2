const express = require("express");
const app = express();

// クライアントから送信されたデータを解析し、req.bodyオブジェクトとしてアクセスできるようにする
app.use(express.urlencoded({ extended: true }));

// テンプレートエンジンにEJS使用するように設定
app.set("view engine", "ejs")

// publicフォルダ内のファイルを、を静的ファイルとして扱うよう設定
app.use("/public", express.static("public"));

// ルーティングを読み込む
const routers = require("./routes");
app.use(routers);

// localhost:3001で起動
app.listen(3001, () => {
    console.log("Listening on localhost port 3001");
});