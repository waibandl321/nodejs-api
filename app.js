// モジュールの読み込み
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(multer().none());
// webフォルダの中身を公開
app.use(express.static('web'));

// userListを配列に
let userList = [];

// GET /api/vi/users
app.get('/api/vi/users', (req, res) => {
  // jsonを送信
  res.json(userList);
});

// POST /api/vi/users user一覧に項目を追加する
app.post('/api/vi/users', (req, res) => {
  const userData = req.body;
  const userName = userData.name;
  const userBoyfriend = userData.boyfriend;
  // ユニークIDの生成
  const id = uuidv4();

  // user項目作成
  const userInformation = {
    id,
    name: userName,
    boyfriend: userBoyfriend
  };

  // userリストに項目を追加
  userList.push(userInformation);
  console.log('Add: ' + JSON.stringify(userInformation));
  // 追加した項目をクライアントに返す
  res.json(userInformation);
});


// PUT /api/vi/users/:id
app.put('/api/vi/users/:id', (res, req) => {
  // URLの:idと同じIDを検索
  const index = userList.findIndex((item) => item.id === req.params.id);

});


// DELETE /api/vi/users/:id
app.delete('/api/vi/users/:id', (req, res) => {
  // URLの:idと同じIDを検索
  const index = userList.findIndex((item) => item.id === req.params.id);

  if(index >= 0) {
    const deleted = userList.splice(index, 1);
    console.log('Delete: ' + JSON.stringify(deleted[0]));
  }
  // ステータスコードを送信
  res.sendStatus(200);
});

// サーバーを立てる
app.listen(3000, () => console.log('Listeing on port 3000'));