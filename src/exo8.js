function isPalindrome(str) {
    if (str.split('').reverse().join('') === str) {
        console.log("oui c'est un palindrome");
    }
    else {
        console.log("non ce n'est pas un palindrome");
    }
    console.log(isPalindrome('tenet'))
    console.log(isPalindrome('Alyra'))
}