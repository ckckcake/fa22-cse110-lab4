Kevin Lam, A15925037

1. 3 is printed because we successfully iterate through the array 
2. 150 is printed because discountedPrice is a var variable which means it has a global scope, so it is still there after the loop ends
3. 150 is printed again because of the same reason as above 
4. the returned array will now be twice the size earlier because of the push function that is called in the for loop
5. error, we are using let now which is block scoped, line 12 is trying to access i that is defined in a different block
6. error, same reason as above
7. final price will successfully print whatever was last stored from the loop because it is in the same block
8. the array will be returned
9. 3, i is a let variable so its global
10. error, we are trying to reassign a constant variable length to a different value
11. the full array will be returned,[100,200,300]
12. 
 - A. console.log(student.name);
 - B. console.log(student."Grad Year");
 - C. student.greeting();
 - D. console.log(student."Favorite Teacher".name);
 - E. console.log(student.courseLoad[0]);
13. Arithmetic
 - A. 32, integers map to exact string representations
 - B. 1, auto-type conversion from subtraction operation
 - C. 3, 3 + nothing = 3
 - D. 3null, string conversion null -> "null"
 - E. 4, true == 1
 - F. 0, false == 0
 - G. 3undefined, string conversion
 - H. NaN, '3' becomes int 3 from subtraction type conversion but undefined has no type to change to
14. Comparison
 - A. true, compares as int
 - B. false, im not sure tbh
 - C. true, compares as int
 - D. false, strict equality checks type match
 - E. false, true becomes 1 so 1 == 2 is checked
 - F. true, boolean(2) is true?
15. === checks for type matching while == is more lax/broad
16. check part2-question16.js file
17. [2, 4, 6], doSomething function is executed and returns a value to be passed into the pass function
18. reference part2-question18.js
19. 1 4 3 2, 1 and 4 are printed first because there is no delay set, and then 3's delay is shorter than 2's delay