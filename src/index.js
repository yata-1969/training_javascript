// /**
//  * const, letの変数宣言
//  */

// var val1 = "var変数";
// console.log(val1);

// /**
//  * var変数は上書き可能
//  */

// val1 = "var変数を上書き";
// console.log(val1);

// /**
//  * var変数は再宣言可能
//  */

//  var val1 = "var変数を再宣言";
//  console.log(val1);

/**
 * letについて
 */

//  let val2 = "let変数";
//  console.log(val2);

/**
 * letは上書きが可能
 */

// val2 = "let変数を上書き";
// console.log(val2);

/**
 * letは再宣言不可能
 */

//  let val2 = "let変数を再宣言";
//  console.log(val2);

/**
 * constについて
 * 変数の上書き、再宣言不可
 */

//  const val3 = "const変数";
//  console.log(val3);

// const val4 = {
//   name: "前田",
//   age: "27"
// };
// val4.name = "いっせい";
// val4.address = "大阪";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name ="じゃけぇ";
// const age = 28;
// // 『私の名前はじゃけぇです。年齢は２８です』

// const message = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
// console.log(message);

// // テンプレート文字列を使用
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (int1, int2) => {
//   return int1 + int2;
// };

// console.log(func3(1, 1));

// const myprofile = {
//   name: "まえだ",
//   age: "27",
// };

// const myprofile2 = {
//   name: "いっせい",
//   age: "27",
// };

// const message1 = `私の名前は${myprofile.name}です。私の年齢は${myprofile.age}歳です。`;
// console.log(message1);

// const { name, age } = myprofile2
// const message2 = `私の名前は${name}です。私の年齢は${age}歳です。`;
// console.log(message2);

// const myprofile1 = ["前田", "27"];
// const message3 = `私の名前は${myprofile1[0]}です。私の年齢は${myprofile1[1]}です。`;
// console.log(message3);

// const [ name, age ] = myprofile1;
// const message4 = `私の名前は${name}です。私の年齢は${age}歳です。`;
// console.log(message4);

// const sayhello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayhello("前田");

/**
 * スプレッド構文
 */
//配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// // sumfunc(arr1[0], arr1[1]);
// sumfunc(...arr1)

/**
 * まとめる
 */
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 =[30, 40];

// const arr7 = [...arr4];
// console.log(arr7);

// const arr8 = [...arr4, ...arr5];
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */

//  const NameArr = ["前田", "熊谷", "飯尾"];
//  for (let index = 0; index < NameArr.length; index++) {
//    console.log(NameArr[index])
//  };

//  for (let index = 0; index < NameArr.length; index++) {
//    console.log(`${index　+　1}番目は${NameArr[index]}です。`)
//  };

//  NameArr.map((name) => {
//    return console.log(name)
//  });

// NameArr.map((name, index) => console.log(`${index +1}番目は${name}です。`));

// NameArr.map((name) => console.log(name));

// const NumArr = [1, 2, 3, 4, 5];
// const NewNum = NumArr.filter((num) => {
//   return num % 2 === 1
// });

// console.log(NewNum);

// const NewNameArr = NameArr.map((name) => {
//   if (name === "飯尾") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });

// console.log(NewNameArr);

/**
 * 三項演算子
 */
// ある条件　？　条件がtureの時：　条件がfalseの時
// if,elseが一文でかけるイメージ

// const val1 = 1 > 0 ? 'tureです' : 'Falseです';
// console.log(val1);

// const num = 1300
// console.log(num.toLocaleString(num))

// const val1 = typeof num === 'number'? num.toLocaleString() : '型が違います';
// console.log(val1);

const checksum = (num1, num2) => {
  var sum = num1 + num2;
  return num1 + num2 > 100
    ? `100を超えています。現在の数値は${sum}`
    : `許容範囲内です。現在の数値は${sum}`;
};

console.log(checksum(200, 50));
console.log(checksum(40, 50));
