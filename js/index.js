/**
 * 出題する英単語と解答
 */
const words = [
  {
    question:'protect',
    answer:'守る'
  },
  {
    question:'hello',
    answer:'こん'
  },
  {
    question:'read',
    answer:'読む'
  },
  {
    question:'red',
    answer:'赤'
  }
];

// 英単語を表示するか日本語訳を表示するかのフラグ
let mode = true;

// 何番目の単語か
let num = 0;

// 表示するdom
const element = document.getElementById('english');

/**
 * ボタンのリスナー
 */
document.getElementById('btn').onclick = function(){
  if (mode) {
    mode = false;
    jpQuestion();
  } else {
    mode = true;
    engQuestion();
  }
}

/**
 * 文字列を表示する関数
 */
function render(str){
  if (mode) {
    element.style.color = 'red';
  } else {
    element.style.color = 'black';
  }
  
  element.innerText = str;
}

/**
 * 英単語
 */
function engQuestion () {//英語の処理
  num = Math.floor(Math.random() * words.length);
  render(words[num]['question']);
}

/**
 * 日本語訳
 */
function jpQuestion () {//日本語の処理
  render(words[num]['answer']);
}

// 最初に英単語を表示する
engQuestion();