// ローカルストレージの保存
localStorage.setItem('name', 'shiori');
// ローカルストレージの削除
localStorage.removeItem('name');



// セッションの保存
sessionStorage.setItem('name', 'shiori');
// セッションの上書き
sessionStorage.setItem('name', 'yukari');
// セッションの削除
sessionStorage.removeItem('name');



// クッキーの保存
document.cookie = 'name=Kyle'
// クッキーの有効期限を設定して保存（ブラウザを閉じてもcookieを残す)
document.cookie = 'name=shiori; expires=' + new Date(9999, 0, 1).toUTCString()
document.cookie = "user=John; max-age=3600"; // 1時間後（秒でカウント）
// クッキーの削除
document.cookie = "name=; expires=0";