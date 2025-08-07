1- What is Yup?   
    * Is a powerful library for schema validation in JavaScript that offers an intuitive API. 
        It simplifies the validation process for forms and data structures, making it easier to ensure data integrity.

    * User-friendly syntax
        Allows developers to define validation rules in a clear and concise manner, improving code readability and maintainability.

    * Handles Complex Structures
        It can manage complex validations, including nested objects, arrays, and conditional logic, allowing for detailed and specific validation scenarios.

    * Customizable Error Messages
        Yup makes it easy to include custom error messages right in the schema definition

2- Simple schema validation
    * Easy to understand
    * Allows you to quickly define types and constraints

3- Custom Schema Validation
    * Organizes validation well, even with complex rules
        Just pass your custom message as the second parameter to each validation method.
        This keeps error messages close to their respective validation rules, making the code easier to understand.

4- Conditional validation
      One of Yup’s powerful features is its ability to change validation rules based on other values in the data.
    * Dynamic validations with .when()
      you can make fields behave differently depending on context.
    * .oneOf() and .default() for security and fallback
      oneOf() locks down the allowed roles, and default() fills in missing values automatically.

5- Handling Errors
    * Yup’s error object is rich with detail:
      A general error message summarizing the total number of issues
      A flat errors array with all the messages
      An inner array that gives you full context for each error

6- Showing Errors in UI
    * Structure mapped to forms
        For user interfaces, especially forms, you typically want a simpler structure that maps each field to its error message.

7- Key Patterns
  * Reuse schemas with transformations
    This pattern promotes schema reuse and composition. The .shape() method creates a new schema that includes all fields from the base schema plus any additional fields you specify.

  * Normalize Data
    transform data during the validation process. The .transform() method lets you modify values before they're validated or returned


  * Custom Methods
    The addMethod() function extends Yup's capabilities by adding new methods to specific schema types. This approach encapsulates complex validation logic behind simple, reusable methods.

8- Pros and Cons
  - pros
    * Large and active community
      Yup has a mature and active community, providing extensive documentation, tutorials, and support.  
    * Extensive validation methods
      Yup offers a wide range of built-in validation methods, covering a variety of common scenarios.  
    * Flexible and extensible
      Yup allows for custom validation rules and supports asynchronous validation, making it suitable for complex validation needs.  
  - Cons
    * Not very robust TypeScript support
      While Yup is compatible with TypeScript, it requires manual type definitions
    * performance issues
      Yup is a runtime schema builder, which means it involves a lot of object allocations and dynamic checks, potentially creating performance bottlenecks depending on the complexity of the schema.

9- Yup vs Joi
  * Yup's API is heavily inspired by Joi
  * so why not run a benchmark and compare their performance?
    I created two schemas for each library: one with very simple validation and another with more complete rules.
    I ran tests validating a single user and then an array of one hundred users.
    As you can see from the benchmark results, Yup falls significantly behind Joi in terms of performance.

    Joi is optimized for complex server-side validations, offering features like schema caching and early abortion to boost performance.
    Yup, on the other hand, was designed to be lightweight, making it a better fit for browser-based validations where bundle size and load times matter.

10- Final Thoughts
  - Yup strikes a balance between simplicity and flexibility.
  - It's ideal for handling complex validations while providing user-friendly error messages.
  - Despite performance considerations, Yup remains a solid choice in many use cases.