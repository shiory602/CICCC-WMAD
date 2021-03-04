
function getNumber(num) {
	return new Promise(function(resolve, reject) {
			// numが3以上ならnumを返し、3未満なら"Falied!"のメッセージを返す
			if (num >= 3) {
					setTimeout(function() {
							resolve(num);
					}, 1000);
			} else {
					reject("Falied!");    
			}
	});  
}

// 今回は3を渡しているので、resolveから3が返ってくる
getNumber(3).then(function(result) {
	console.log(result);
	//numに3を加算して、getNumberに返している
	return result + 3;
}).then(function(result) {
	//上と同じ処理の繰り返し。これがチェイン
	console.log(result);
	return result + 3;
}).then(function(result) {
	// 最終結果として、numに6を加算した数を表示
	console.log(result);
}, function(err){
	// 3未満の場合はrejectが呼び出され、"Falied!"のメッセージが表示される
	console.log(err);
});




// Promiseとは。。。

// promiseを返す何か
function callBackLater(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
​
// then 使う版
function runWithPromise() {
  const p = callBackLater();
  p.then((result) => {
    console.log(result);
  });
}
​
// async/await 使う版（一度promiseオブジェクトを受け取る書き方）
async function runAsync() {
  const p = callBackLater();
  const result = await p;
  console.log(result);
}
​
// async/await 使う版（普通の書き方）
async function runAsync() {
  const result = await callBackLater();
  console.log(result);

