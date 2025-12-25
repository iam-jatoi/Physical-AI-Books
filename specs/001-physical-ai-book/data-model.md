# Data Model for Physical AI Book

## Entities

### Book Chapter
- **name**: String - The title of the chapter
- **description**: String - Brief overview of the chapter content
- **lessons**: Array<Lesson> - List of lessons in this chapter
- **position**: Integer - Order of the chapter in the book
- **prerequisites**: Array<String> - Knowledge required before starting this chapter

### Lesson
- **title**: String - The title of the lesson
- **content**: String - The main content of the lesson in Markdown format
- **objectives**: Array<String> - Learning objectives for the lesson
- **prerequisites**: Array<String> - Knowledge required before starting this lesson
- **codeExamples**: Array<CodeExample> - Code examples included in the lesson
- **exercises**: Array<Exercise> - Hands-on exercises for the lesson
- **position**: Integer - Order of the lesson within the chapter

### Code Example
- **title**: String - Brief description of what the example demonstrates
- **language**: String - Programming language (e.g., "python", "javascript")
- **code**: String - The actual code content
- **explanation**: String - Explanation of what the code does
- **difficulty**: String - Difficulty level (e.g., "beginner", "intermediate")

### Exercise
- **title**: String - Title of the exercise
- **description**: String - Detailed description of the exercise
- **instructions**: String - Step-by-step instructions for the exercise
- **expectedOutcome**: String - What the user should achieve
- **difficulty**: String - Difficulty level (e.g., "beginner", "intermediate")

### Navigation Item
- **id**: String - Unique identifier for the navigation item
- **title**: String - Display title for the navigation
- **type**: String - Type of navigation item ("category" or "doc")
- **items**: Array<NavigationItem> - Child navigation items (if category)
- **docId**: String - Reference to the document (if type is "doc")

## Relationships

- Book Chapter contains multiple Lessons
- Lesson contains multiple Code Examples
- Lesson contains multiple Exercises
- Navigation Items can reference Lessons or group them into categories

## Validation Rules

- Each Chapter must have a unique name within the book
- Each Lesson must have a unique title within its chapter
- Each Code Example must have valid syntax for its specified language
- Each Lesson must have at least one learning objective
- Each Lesson must have content that is not empty
- Navigation structure must not have circular references

## State Transitions

N/A - The Physical AI Book is a static documentation site with no dynamic state transitions.