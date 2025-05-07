# Provide an example of using union and intersection types in TypeScript.

--> we are all know about that is in union and intersection making cofused us right?
today we are going to discuss or explain about these types in typescript. lets breakdown below:
first we just focus on definetion of union is, this type work as like work our or operator right?
and intersection work like our js and operator. but if we wan to get more clear concept about these two types then we can see an example : just remamber when we work with truth table in our ICT classes,if in some of us don't know about truth table for those , that is work for some binary calculation in machin level. suppose there have two operation one is sum and on is multiple. so now we need to calculate these using binary numbers, we have two inputs such as A and B now if we pick 1 for A , means A = 1 and B = 0 and now if we sum these two then output will be 1 + 0 = 1 right? and with the same values if we calculate multiple then 1 x 1 = 1 is output right? and for more clear grasping we can take one more example is for multiple when 1 x 0 = 0 right? its just simple mathmatics that we all know already. if we got these example clearly then now union and intersection gonna be a piece of cake for us. actually that sum operation is OR operation and the AND operation is multiple in our programming and OR means Union , AND means or work like AND. let's prove it is how?

suppose , A | B, A & B

now for these two example just think with our truth table's example , for union A | B = 1 + 0 = 1, that's mean in it return's 1 right? and 1 means true for our machine that's mean if in union u can assign two or more than two conditions and if just one is true than that means it return's true overall.
for intersection A & B = 1 x 0 = 0, that's mean it return's 0 right? and 0 means false for our machine soo with these rules for intersection all values should be true but if just one value is false then it will retur false overall.

summary: just think union is a sum operation and intersection is a multiplication operation which we use in our real life.

# What is type interface in TypeScript? Why is it helpful?

--> interface in typescript is link a foundation of a building and we build full building based on that foundaion. interface determine a structure for an object.It specifies the names and types of properties and methods that an object must have. interface use for checking types but interface not implement anything in your main function its just give you a shape of your objects data.

interface helpful cause we don't need to write types everywhere just declare one time and use anywhere in our code that can make code cleaner and faster writing. for using interface increase our code readabilty.
interface also makes type safety You can mix inferred types with explicitly typed ones allowing you to adopt Typescript incrementally.
