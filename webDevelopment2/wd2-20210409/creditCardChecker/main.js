/*
Credit Card Checker

Project Goals
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk
currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest
of your time relaxing!
As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

Project Requirements
1.
Look over the starter code. There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.
You’ll use these arrays later to check if your functions are working properly.

2.
Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

To find out if a credit card number is valid or not, use the Luhn algorithm.
Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm(https://en.wikipedia.org/wiki/Luhn_algorithm#Description) Generally speaking, algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:
1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
3. Sum up all the digits in the credit card number.
4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
Here’s a Check your function using both the provided valid and invalid numbers.

3.
Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

4.
After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers.
Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
Currently, there 4 accepted companies which each have unique first digits.
The following table shows which digit is unique to which company:

First Digit Company
3 Amex (American Express)
4 Visa
5 Mastercard
6 Discover
If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, &quot;Visa&quot; should only appear once in the array.
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// 配列に有効なカード番号の数字が含まれている場合はtrueを、無効な場合はfalseを返す。配列の値を変更してはいけません。
/*1. 右端の桁（チェックデジット）から、左に向かって繰り返します。
2. 左への繰り返しでは、他のすべての桁が2倍になります（チェックデジットは2倍になりません）。
    2倍にした後の数字が9より大きければ、その値から9を引きます。
// 奇数の時は偶数。偶数の時は奇数のインデックスの値を２倍にして、数字が９より大きければ９を引く。
3. クレジットカード番号のすべての桁を合計します。
4. モジュロ10の和が0の場合（10で割った和の余りが0の場合）、その数字は有効であり、そうでない場合は無効です。
以下は、用意された有効な数字と無効な数字の両方を使って、あなたの関数をチェックしてみましょう。*/
function validateCred(arr) {
    for (let i = 0; i < 5; i++) {
        return arr === batch[i] ? true : false;
    }
}


//クレジットカード番号のネストした配列を1つのパラメータとする、findInvalidCards()という別の関数を作成します。
//役割は、入れ子になった配列の中で無効な番号をチェックし、無効なカードの別の入れ子になった配列を返すことです。
function findInvalidCards(nestedArray) {
    
    // return invalidArray
}
/*
無効なクレジットカード番号をすべて見つけた後、これらの不良番号を発行した可能性のあるクレジットカード会社を特定する必要があります。
関数 idInvalidCardCompanies() を作成します。この関数は、無効な番号のネストした配列を1つのパラメータとし、会社の配列を返します。
現在、4つの会社が認められていますが、それぞれの会社の最初の桁が異なります。
次の表は、どの桁がどの会社に固有かを示しています。

1桁目 会社
3 アメックス(アメリカン・エキスプレス)
4 Visa（ビザ
5 マスターカード
6 Discover（ディスカバー
記載されている番号で始まらない場合は、次のようなメッセージを印刷してください。"Company not found" のようなメッセージを出力します。
idInvalidCardCompanies()は、無効な番号のカードを郵送した会社の配列を返す必要があります。例えば、無効なVisaカードが2枚あったとしても、"Visa"は配列の中に一度しか現れません。*/

function idInvalidCardCompanies() {
    let firstDigit = batch.forEach(arr => arr[arr.length - 1]);
    switch (firstDigit) {
        case 3:
            return 'Amex';
        case 4:
            return 'Visa';
        case 5:
            return 'Mastercard';
        case 6:
            return 'Discover';
        default:
            alert('Company not found');
    }

}

console.log(findInvalidCards([4, 5, 3, 9, 6, 7, 8]));
console.log(validateCred([4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]));
// console.log(idInvalidCardCompanies(valid4));