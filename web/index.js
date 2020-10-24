// 削除ボタンが押された時の処理
function deleteButtonListener(event) {
    const button = event.currentTarget;
    const id = button.dataset.id;

    // deleteメソッドでAPIにアクセス
    fetch(`./api/vi/users/${id}`, {method: 'DELETE'})
      .then(() => fetchUserList());
}

// HTMLへの描画を関数化
function renderUserList(userList) {
    const users = document.querySelector('.user_list');
    users.innerHTML = '';

    // 取得したデータをループ処理で個別に表示させる
    for(const item of userList) {
        const li = document.createElement('li');
        const paragraph_1 = document.createElement('p');
        const paragraph_2 = document.createElement('p');
        paragraph_1.textContent = `Name: ${item.name}`;
        paragraph_2.textContent = `Boy Friend: ${item.boyfriend}`;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        deleteButton.classList.add('delete_button');
        deleteButton.dataset.id = item.id;
        deleteButton.addEventListener('click', deleteButtonListener);
        users.appendChild(li);
        li.appendChild(paragraph_1);
        li.appendChild(paragraph_2);
        li.appendChild(deleteButton);
    }
}

// APIからJSONを取得して描画する関数
async function fetchUserList() {
    fetch('./api/vi/users')
      .then((response) => response.json())
      .then((userList) => {
        // 描画関数を実行
        renderUserList(userList);
    });
};

// APIに新しいアイテムを追加(POST)する関数
async function postNewUser(userInformation) {
    const body = new FormData();
    body.append('name', userInformation.name);
    body.append('boyfriend', userInformation.boyfriend);
    return fetch('./api/vi/users', {
        method: 'POST',
        body: body
    }).then((response) => response.json());
}

// 入力要素取得
const userName = document.querySelector('.user_name');
const userBoyfriend = document.querySelector('.user_boyfriend');
const submitButton = document.querySelector('.submit_btn');

// 追加ボタンを押した時に項目をPOSTする処理
submitButton.addEventListener('click', (event) => {
    const name = userName.value;
    const boyfriend = userBoyfriend.value;
    if(name && boyfriend) {
        postNewUser({name, boyfriend})
         .then((item) => fetchUserList());
         userName.value = '';
         userBoyfriend.value = '';
    };
});

// 初回データ読み込み
fetchUserList();




