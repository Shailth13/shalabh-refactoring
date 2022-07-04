# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Code Refactoring to dpk.js:
Segregated methods to reusable components like:

1. setEncryption for rncryption utility.
2. getEvent: for separating event trigger concern from main method(dpk)
3. refactored if statements to atomic statements, eliminating any errors due to conflict of conditions and easy testing paths.
4. Additional comments added to make the code easily comprehendable.

Testing to dpk.test.js:
four test case created due to limitation of time, could have added some BVL cases :

1. Returns the literal '0' when given no input
2. Returns the candidate key in form of string when event triggered, like create
3. if candidate key not type of string
4. if candidate key has length greater than max length i.e. > 64.

- could have added more test cases for different types of input data and event triggers.
