# Training Assignment: Angular Pipe & Service for Book Management

## Objective

Develop a feature-rich Angular application that has a service for book management and a custom pipe for text transformation. Implement unit tests to ensure that both the service and pipe work as expected, including error scenarios.

## Requirements

- Intermediate understanding of Angular, TypeScript, and Jasmine testing framework.
- Node.js and Angular CLI must be installed.

## Tasks

### 1. Project Setup

- Create a new Angular project using Angular CLI.
- Install necessary dependencies.

### 2. Book Service Implementation

- Create a new service named `BookService`.
- Implement the following CRUD methods:
  1. `getAllBooks()`: Fetch all book records.
  2. `createBook(book: Book)`: Add a new book record.
  3. `updateBook(book: Book)`: Update an existing book record.
  4. `deleteBook(id: number)`: Delete a book record by ID.

### 3. Book Model Creation

- Create a `Book` interface with fields: `id`, `title`, `author`, and `isbn`.

### 4. Pipe Implementation

- Create a new pipe named `CapitalizePipe` which takes a string as input and capitalizes the first letter of each word.

### 5. Test Cases for Book Service

- Write tests to verify that all CRUD methods (GET, POST, PUT, DELETE) work as expected.
- Extend test cases to handle error scenarios like 400, 404, and 500 status codes.

### 6. Test Cases for Pipe

- Write tests to ensure that the `CapitalizePipe` works as expected.
- Include a test for null and undefined values.

### 7. Cleanup

- Add an `afterEach` block to verify that there are no outstanding HTTP requests for service tests.

## Evaluation Criteria

- Correct implementation of all CRUD operations in the service.
- Proper functioning of the custom pipe.
- Comprehensive test coverage, including edge cases and error handling.
- Code readability and documentation.

## Bonus

- Implement sorting and filtering methods in the `BookService` and write tests for them.

## Submission

- Commit all your code changes and push them to a Git repository.
- Share the repository link for review.
