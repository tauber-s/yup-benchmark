# YUP

- What it is?
Although it's just one among more than 34 JavaScript validation libraries, it holds the third-highest number of stars on GitHub.
Yup is a runtime schema builder for JavaScript and TypeScript, designed for value parsing and validation.
It provides a fluent, chainable API to declaratively construct schemas that enforce structure and constraints on complex data objects.
You can easily declare the shape of an object and the constraints for each field (type checking, required values, length limits, pattern matching, etc.)
It supports complex validations like nested objects, arrays and conditional logic.
Yup makes it easy to include custom error messages right in the schema definition, which is perfect for form validation where you need to show errors to users.

- simple schema validation
imagens 1-
mostrando como é o uso do yup

- custom schema validation
imagem 2-
with yup you can build complex validations without making a code messy.
just pass your custom message as the second parameter to each validation method.
mostrar como é que pega os erros

- Conditional validation
One of Yup’s powerful features is its ability to change validation rules based on other values in the data. 
With the .when() method, you can make fields behave differently depending on context.
imagens 3-
The oneOf() method locks down the allowed roles, and default() fills in missing values automatically.

- Handling errors
imagens 4-
Yup’s error object is rich with detail:
A general error message summarizing the total number of issues
A flat errors array with all the messages
An inner array that gives you full context for each error—field name (path), the rule that failed (type), and the message
    - error messages
    For user interfaces, especially forms, you typically want a simpler structure that maps each field to its error message.
    imagens 5-

- best real world patterns
    - easy Reusable schemas
        .shape() .concat()  .pick()/.omit()
    - normalize data
        .transform()
    - custom methods
        addMethod()
    - custom validation
        test()

Pros and Cons:
- pros
    - Large and active community: Yup has a mature and active community, providing extensive documentation, tutorials, and support.  
    - Extensive validation methods: Yup offers a wide range of built-in validation methods, covering a variety of common scenarios.  
    - Flexible and extensible: Yup allows for custom validation rules and supports asynchronous validation, making it suitable for complex validation needs.  
- Cons
    - Less robust TypeScript support: While Yup is compatible with TypeScript, it requires manual type definitions
    - performance issues

- show benchmark comparing with joi

https://www.ray.so/ - code snippet