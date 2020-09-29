// IMPORT MODULES under test here:
import { guessANumber } from '../arbitrary-test.js'
// import { example } from '../example.js';s
const test = QUnit.test;
1

test('should return 420 if user guesses 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 420;
    const input = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessANumber(input)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
