// This was my first method at solving this problem, the most trouble I had was dealing with the regex since I attempted to utilize match at first as opposed to replace. This however gave me a lot of
// errors since it didn't result in an array, or at least non of the methods for arrays would work on the result from the match, I am not sure why but it could be that it returned a string and not an array.
// I would have to look into it more, that being said this method is decent as it placed in the top 20% speed wise and almost in the top 40% memory wise. There are some improvements that I can make but for the most part
// this solution is decent.
function validPalindromeV1(s) {
    // // // Pseudo Code:
    // Take in a string, strip the string down to only the characters and digits within it.
    // // If necessary, change all of the letters to lower case for ease of comparison.
    // Remove all spaces from the sentence and get a singular string that includes all characters and digits.
    // Go from front to back comparing the letters or digits and flag any instance of two corresponding spaces not matching.
    // // Once a single instance is found it is safe to assume the word is not a palindrome, and if the word is not even in length, the middle value does not matter.
    let pattern = /(\W|_)+/g;
    let result = s.replace(pattern, ' ').split(' ').join('').toLowerCase();

    for (let left = 0, right = result.length - 1; left < right; left++, right--) {
        if (result[left] !== result[right]) {
            return false
        }
    }

    return true;
};

// This method has some changes that now place it in the top 10%, instead of compounding the various string and array methods, I found that spiting them to another line decreased the run time.
// I also tried this method utilizing a while loop and it made little to no difference.
function validPalindromeV2(s) {
    let pattern = /(\W|_)+/g;
    let result = s.replace(pattern, ' ');
    result = result.split(' ').join('').toLowerCase();

    for (let left = 0, right = result.length - 1; left < right; left++, right--) {
        if (result[left] !== result[right]) {
            return false
        }
    }

    // let left = 0;
    // let right = result.length - 1;

    // while (left < right) {
    //     if (result[left] !== result[right]) {
    //         return false
    //     }
    //     left++;
    //     right--;
    // }

    return true;
};


// Biggest takeaway, by far, writing out the pseudo code and working on other problems involving pointers has greatly helped when it comes to solving problems that require similar approaches. While it
// is not wise to try and carbon copy one of my solutions to another problem directly to a new one, it is best to try and adapt it instead. Knowing how to implement a previous point problem solution
// and adapt it to this helps to show me that I should focus more on working with similar problems to further my knowledge as opposed to jumping around sporadically learning.

// Initializes all html element from the webpage.
const initialDisplay = document.getElementById('initial-display');
const resultDisplay = document.getElementById('result-display');
const radioOptions = document.getElementById('radio-options').querySelectorAll('input');
const userInput = document.getElementById('text-input');

// Displays the result of the algorithm.
function displayResult() {
    // Displays the initial string from the user in the initialDisplay element.
    initialDisplay.innerHTML = userInput.value;

    // Displays the result from the algorithm in the resultDisplay.
    resultDisplay.innerHTML = validPalindromeV2(userInput.value);
}

// Sets the textbox value to a predefined string, based on the value passed in.
function pushString(num) {
    // Initializes a variable to store the string that will be passed to the algorithm.
    let string = "";
    // Checks the value of the number passed into the function
    // and sets the variable equal to the number's associated array.
    if (num == 0) {
        string = "A man, a plan, a canal: Panama";
    } else if (num == 1) {
        string = "race a car";
    } else if (num == 2) {
        string = " ";
    } else if (num == 3) {
        string = "race car";
    }

    // Sets the userInput to the preset string.
    userInput.value = string;

    // Calls the function to display the algorithm's result.
    displayResult(userInput.value);
}

// Loads all of the eventListeners for the webpage.
function loadEventListeners() {
    // Iterates through all of the radio options and initializes an eventListener for each.
    for (const radio of radioOptions) {
        radio.addEventListener('change', () => {
            pushString(radio.value);
        })
    }

    // Initializes an eventListener for the userInput element
    userInput.addEventListener('change', () => {
        displayResult();
    })
}

loadEventListeners();