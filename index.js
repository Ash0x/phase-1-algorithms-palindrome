function isPalindrome(word) {
	// Write your algorithm here
	let wordArray = word.split('')
	let reverseWordArray = wordArray.slice().reverse()
	for (let i = 0; i < wordArray.length; i++) {
		if (wordArray[i] !== reverseWordArray[i]) {
			return false
		}
		return true
	}
}
isPalindrome('robot')

/* 
  Add your pseudocode here
  1) split word into array of letters
  2) create new array of letters in reverse order, preserving the original array
  3) loop through letters of word and compare to letters of word in reverse order
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log('Expecting: true')
	console.log('=>', isPalindrome('racecar'))

	console.log('')

	console.log('Expecting: false')
	console.log('=>', isPalindrome('robot'))
}

module.exports = isPalindrome
