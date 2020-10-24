# express.jsでREST APIを作成する  

* Node.jsフレームワークのExpress.jsへの理解を深める。  
* フロント側からデータを取得するために使用しているAPIがどのように構築されているのかを学ぶ。  

# 仕様  
* GET    :   
* POST   : ./api/v1/usersにアクセスした際にUSERデータのJSONを返す  
* PUT    : USER一覧画面でユーザー情報を編集を反映(./api/v1/users/:id)  
* DELETE : USER一覧画面で削除ボタンを押したらUSER一覧からidに紐づくデータを削除(./api/v1/users/:id)  


# 使用ライブラリ
* multer : ブラウザから送信されたデータを解釈    
* uuid   : ユニークIDを生成する  


# 各ファイルの役割  
* app.js         : サーバー側の処理(GET, POST, PUT, DELETE)  
* web/index.html : 入力フォームや一覧表示用のHTML  
* web/index.js   : クライアント側でのDOM描画、API接続によるデータの取得、イベント処理  
* web/style.css  : スタイル調整  


Jumpei Onishi
