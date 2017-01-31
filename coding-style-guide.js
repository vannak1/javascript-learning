/*
Coding Style Guide for Reactor Prep
What is readability?
Code readability refers to writing code whose purpose is clear and self-explanatory, and whose syntax, layout, and structure are consistent and unsurprising.

Code with lots of inconsistencies requires more mental effort from the code reader, who must parse through random visual differences to determine what differences are actually meaningful.

Often that confused code reader is you.

Confusing yourself and struggling to parse your own code in the context of an interview is Bad News. Don't make things harder for yourself!

Follow these guidelines, and you'll be ok.

Indentation
When writing any block of code that is logically subordinate, that block should be indented two spaces more than the surrounding lines.

Indent with spaces, not tabs. Do not put any tab characters anywhere in your code. You would do well to stop pressing the tab key entirely.

When a line opens a block, the next line starts 2 spaces further in than the line that opened:

Good:

1│ if (condition) {
2│   action();
3│ }
<code></code>
Bad:

1│ if (condition) {
2│ action();
3│ }
<code></code>
When a line closes a block, that line starts at the same level as the line that opened the block

Good:

1│ if (condition) {
2│   action();
3│ }
<code></code>
Bad:

1│ if (condition) {
2│   action();
3│   }
<code></code>
No two lines should ever have more or less than 2 spaces difference in their indentation. Any number of mistakes in the above rules could lead to this, but one example would be:

Bad:

1│ transmogrify({
2│    a: {
3│     b: function(){
4│     }
5│ }});
<code></code>
Variable declaration
Use a new line for each variable declaration.

Use a new var statement for each line you declare a variable on.

Good:

1│ var ape;
2│ var bat;
<code></code>
Bad:

1│ var cat,
2│     dog
<code></code>
Bad:

1│ var eel, fly;
<code></code>
Naming
Variable names
A single descriptive word is best. "Descriptive" preferably means it's directly describing some noun in the "domain" of your problem. Name your variables after their purpose, not their structure.

Good:

1│ var animals = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var targetInputs = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var array = ['cat', 'dog', 'fish'];<code></code>
Collections such as arrays and maps should have plural noun variable names.

Good:

1│ var animals = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var animalList = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var animal = ['cat', 'dog', 'fish'];
<code></code>
Boolean names
Variables that represent boolean values should be named accordingly. Since a boolean either is true or false, typically you prefix the variable name with is or are.

E.g., isValid or areAvailable.

Good:

1│ var areEqual = true;
<code></code>
Bad:

1│ var pass = true;
<code></code>
Function names
Function names should start with a verb -- in the form "{verbObject}", like "calculateTotal" or "listInventory" etc. That makes it self-describing, telling the code reader at a glance what the function's input and output are as well as a summary of the processing that transforms the former to the latter.

Bad:

1│ var waterBlocks = function() {
2│   // count how many blocks of ater are collected between each tower
3│ }
Good:

1│ var countWaterBlocks = function() {
2│   // do stuff
3│ }<code></code>
Good:

1│ var counterWaterBlocksBetweenTowers = function() {
2│   // do stuff
3│ }
<code></code>
Capital letters in variable names
Most people choose to use capitalization of the first letter in their variable names to indicate that they contain a class).
Optionally, some people use a capital letter only on functions that are written to be run with the keyword new.
Use all-caps for constant variables (ones that will not change throughout the life of your program).
1│ // Example of a capitalized class constructor function name.
2│ function Animal() {
3│ }
4│
5│ // Example of an all-caps constant variable name.
6│ const MAX_ITEMS_IN_QUEUE = 100;
<code></code>
Symbols / punctuation
Don't omit braces (even if you can)
Never omit braces for statement blocks (although they are technically optional).

Good:

1│ for (key in object) {
2│   alert(key);
3│ }
<code></code>
Bad:

1│ for (key in object)
2│   alert(key);
<code></code>
Quoting
Prefer single quotes around JavaScript strings, rather than double quotes.

Having a standard of any sort is preferable to a mix-and-match approach, and single quotes allow for easy embedding of HTML, which prefers double quotes around tag attributes.

Good:

1│ var dog = 'dog';
2│ var cat = 'cat';
<code></code>
Acceptable:

1│ var dog = "dog";
2│ var cat = "cat";
<code></code>
Bad:

1│ var dog = 'dog';
2│ var cat = "cat";
<code></code>
Semicolons
Don't forget semicolons at the end of lines

Good:

1│ alert('hi');
<code></code>
Bad:

1│ alert('hi')
<code></code>
Semicolons are not required at the end of statements that include a block--i.e. if, for, while, etc.

Good:

1│ if (condition) {
2│   response();
3│ }
<code></code>
Bad:

1│ if (condition) {
2│   response();
3│ };
<code></code>
Misleadingly, a function may be used at the end of a normal assignment statement, and would require a semicolon (even though it looks rather like the end of some statement block).

Good:

1│ var greet = function () {
2│   alert('hi');
3│ };
<code></code>
Bad:

1│ var greet = function () {
2│   alert('hi');
3│ }
<code></code>
Operators and keywords
Use strict comparison operators
Always use === and !==, since == and != will automatically convert types in ways you're unlikely to expect.

Good:

1│ // this comparison evaluates to false, because the number zero is not the same as the empty string.
2│ if (0 === '') {
3│   alert('looks like they\'re equal');
4│ }
<code></code>
Bad:

1│ // This comparison evaluates to true, because after type coercion, zero and the empty string are equal.
2│ if (0 == '') {
3│   alert('looks like they\'re equal');
4│ }
<code></code>
Use of the ternary operator (x ? y : z)
The ternary operator is the form:

1│ x ? y : z;
<code></code>
It evaluates to y if x is true, otherwise it evaluates to z.

The ternary operator makes for compact code, but it can be hard to read.

Which of the following do you think is easier to read?

Uses ternary:

1│ return (actual === expected) ? 'passed' : 'FAILED ['+ testName + '] Expected "'+expected+'",but got '+'"'+actual+'"';
<code></code>
Uses simple if-statement:

1│ if (actual !== expected) {
2│   console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
3│ } else {
4│   console.log('passed');
5│ }
<code></code>
Only use the ternary operator if it's extremely clear and short to do so. Don't just use it to be clever.

Use of the not-operator (!)
The idiom is to keep the not-operator right next to the item it is negating:

Bad:

1│ if (! isEqual) {
<code></code>
Good:

1│ if (!isEqual) {
<code></code>
Switch statements
Avoid use of switch statements altogether.

They are prone to error due to missing break statements. See this article for more detail.

Brevity
Write the least code you can that is still completely clear.
Not as good:

1│ function square(n) {
2│   var squaredN = n * n;
3│   return squaredN;
4│ }
<code></code>
Good:

1│ function square(n) {
2│   return n * n;
3│ }
<code></code>
The principle is to write just enough code to be self-describing. The aim is for any reasonable code reader to be able to glance at a given piece of code and understand what it's doing, with no comments, without asking anybody for an explanation, and without having to pore over the surrounding code for clues.

Avoid negation
Whenever you find yourself with lots of negation, you might have an opportunity to increase clarity by converting it to positive.

A bit confusing to work out:

1│ if(!equalSizes || !equalValues) {
2│
3│               // negative outcome
4│
5│ } else {
6│
7│               // positive outcome
8│
9│ }
<code></code>
More straightforward:

1│ if(equalSizes && equalValues) {
2│
3│               // positive outcome
4│
5│ } else {
6│
7│               // negative outcome
8│
9│ }
<code></code>
Return boolean results directly
Whenever you find yourself returning true or false from within a conditional, you might have an opportunity for brevity.

Verbose:

1│ if(charSet.size < text.length) {
2│
3│   return false;
4│
5│ }
6│
7│ return true;
<code></code>
Concise:

1│ return charSet.size > text.length;
<code></code>
Spacing
Code density
Conserve vertical space by minimizing the number of lines you write. The more concisely your code is written, the more context can be seen in one screen.
Good:

1│ function square(n) {
2│   return n * n;
3│ }
4│
5│ function assertEqual(actual, expected, testName) {
6│   // compare actual and expected
7│ }
<code></code>
Bad:

1│ function square(n) {
2│   return n * n;
3│ }
4│
5│
6│
7│ function assertEqual(actual, expected, testName) {
8│   // compare actual and expected
9│ }
<code></code>
Conserve line length by minimizing the amount of complexity you put on each line. Long lines are difficult to read. Try to make it easily read in one glance.
This goal is in conflict with the line quantity goal, so you must do your best to balance them.
Padding & additional whitespace
Generally, we don't care where you put extra spaces, provided they are not distracting.

You may use it as padding for visual clarity. If you do though, make sure it's balanced on both sides.

Good:

1│ alert('I chose to put no visual padding around this string');
<code></code>
Good:

1│ alert( 'I chose to put visual padding around this string' );
<code></code>
Bad:

1│ alert( 'I only put visual padding on one side of this string');
<code></code>
You may use it to align two similar lines, but it is not recommended. This pattern usually leads to unnecessary edits of many lines in your code every time you change a variable name.

1│ // discouraged:
2│ var firstItem  = getFirst();
3│ var secondItem = getSecond();
<code></code>
Put else and else if statements on the same line as the ending curly brace for the preceding if block

Good:

1│ if (condition) {
2│   response();
3│ } else {
4│   otherResponse();
5│ }
<code></code>
Bad:

1│ if (condition) {
2│   response();
3│ }
4│ else {
5│   otherResponse();
6│ }
<code></code>
Spacing between commas
Bad:

1│ assertEqual(Math.pow(3,2),9,'Math.pow squares properly');
<code></code>
Good:

1│ assertEqual(Math.pow(3, 2), 9, 'Math.pow squares properly');
<code></code>
Spacing around operators
Bad:

1│ 'Failed ['+testName+']'...
<code></code>
Good:

1│ 'Failed [' + testName + ']'...
<code></code>
Bad:

1│ if(actual===expected){
2│   // action
3│ }else{
4│   // alternate action
5│ }
<code></code>
Good:

1│ if(actual === expected){
2│   // action
3│ } else {
4│   // alternate action
5│ }
<code></code>
Code comments
Code comments are usually less effective than a good variable names and function names.
Having to write comments suggests that your code structure and naming are not sufficient to convey the "story" (the flow of data and processing) of your code by themselves. That's a bad sign.
Comments make a file longer and drift out of sync with the code they annotate.
If you do comment, then comment on the purpose of the code (the "why"), not the mechanics of implementing it (the "how").
Do not leave stray comments (aka "cruft", or leftover junk) sitting in your code. Just delete unnecessary / outdated / temporary-scaffolding type of comments.
JavaScript gotchas
ES6
Knowledge and usage of new Javascript features is impressive. However, in an interview context, complicated machinery is often disallowed. The interviewer mostly wants to see evidence of your logic, and having cool latest-and-greatest machinery can obscure that sometimes. There is also an element of overwhelming yourself. In general, it is best to keep it simple when possible.

Bad:

1│ if (actual === expected) {
2│   console.log(`passed`);
3│ } else {
4│   console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`);
5│ }
<code></code>
Good:

1│ if (actual === expected) {
2│   console.log(`passed`);
3│ } else {
4│   console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
5│ }
<code></code>
Bad:

1│ var result = array.map((element) => element * 2);
<code></code>
Good:

1│ var result = array.map(function(element) {
2│   return element * 2;
3│ });
<code></code>
Avoid for...in
Do not use for...in statements with the intent of iterating over a list of numeric keys. Use a for-with-semicolons statement in stead.

Good:

1│ var list = ['a', 'b', 'c']
2│ for (var i = 0; i < list.length; i++) {
3│   alert(list[i]);
4│ }
<code></code>
Bad:

1│ var list = ['a', 'b', 'c']
2│ for (var i in list) {
3│   alert(list[i]);
4│ }
<code></code>
Snake vs. Camel Casing
In Javascript, the convention is use 'Camel Casing' when naming variables. This is opposed to the convention called 'Snake Casing', which is used in other programming languages like Ruby.

Good:

1│ var camelCased = 'Used in javascript';
<code></code>
Bad:

1│ var snake_cased = 'Used in other languages';
<code></code>
Under certain circumstances, you will see people use snake-casing for constants in Javascript.

1│ const MAX_ITEMS_IN_QUEUE = 100;
*/
