// Get references to HTML elements
const inputEl = document.getElementById("text-input");
const buttonEl = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

// Add event listener to button
buttonEl.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    const inputString = inputEl.value.trim();

    if (!inputString) {
        alert("Please enter a value.");
        return;
    }

    const isPalindromic = isPalindrome(inputString);
    displayResult(inputString, isPalindromic);
}

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

function displayResult(input, isPalindromic) {
    const resultMessage = isPalindromic
        ? `${input} is a palindrome`
        : `${input} is not a palindrome`;

    resultEl.textContent = resultMessage;
    resultEl.style.color = isPalindromic ? "green" : "red";
}
