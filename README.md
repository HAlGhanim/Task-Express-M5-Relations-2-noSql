# Express Relations

## Setup

1. Create an `.env` file with the `MONGODB_URL` set the your database.
1. Install all requirements.
1. Inspect the projects models and api directory.
1. Read the task fully.
1. Import the `Relations Course Task.postman_collection.json` into Postman to help speed testing along.

## Task

### One-to-Many Relation

A course has many lectures. E.g. A **course** like **`React`**, has **`many lectures`** dedicated for many topics, like `useState`, `react-query`, `react-router-dom`. So we will try to create this type relationship by doing the following:

1. Setup
   - Create a course and a lecture using postman.
1. Create a relation between the `Lecture` model and the `Course` model:
   - In the `db/models/Lecture.js` add a property called `course`, where the `type` is a mongoose `ObjectId` that references the `Course` model
1. Create add a route and controller function that establishes a relation:
   - In the `api/lectures` Add a route with `post` as the method and `/:lectureId` as the url
   - Create a controller called `addToCourse` in the `api/lectures/lectures.controllers.js` file and export it.
   - In the controller, update the lecture found in the `req.lecture` by setting the `course` property to equal the course property in the `req.body`.
1. Now that we have a relationship in the lecture finished, we now need to add many lectures to the `Course` model:
   - In `db/models/Course.js` add a property called `lectures`, assign it and `empty array`.
   - Inside the `empty array`, add an object where the key called `type` is set to a mongoose `ObjectId` and the key `ref` references the `Lecture` model.
1. Back in the lecture controllers file:
   - Import the `Course` model.
   - Inside the `addToCourse` function, use the `Course` model and the `findByIdAndUpdate` query to find the course using the id in the request body, then push the lecture id to the the courses list of the tag.
   - return an empty response with the status set to 204.
1. Test your endpoint in postman:
   - Setup a request to use the endpoint you created earlier, and send `JSON` with the key of `course` set to a value of a `course` that exists.
1. Lets populate the list of courses and the list of lectures.
   - In `lectures.controllers.js`, update the find method with populate to retrieve details on the course property. Test it in Postman using both adding a course to an existing lecture.
   - In the `courses.controllers.js`, update the find method with populate to retrieve details on the lectures property.

### Many-to-Many Relation

A course can have many tag. E.g. A **course** like **`React`**, has **`many tags`** such as `frontend`, `javascript`, `library`. And a tag can have many courses, e.g. a tag of `frontend` can have `css`,  `html`, `javascript`, `react` as associated courses.So we will try to create this type relationship by doing the following:

1. Setup
   - Create a course and a tag using postman.
1. Create a relation between the `Course` model and the `Tag` model:
   - In `db/models/Course.js` add a property called `tags`, assign it and `empty array`.
   - Inside the `empty array`, add an object where the key called `type` is set to a mongoose `ObjectId` and the key `ref` references the `Tag` model.
1. Create a relation between the `Tag` model and the `Course` model:
   - In `db/models/Tag.js` add a property called `courses`, assign it and `empty array`.
   - Inside the `empty array`, add an object where the key called `type` is set to a mongoose `ObjectId` and the key `ref` references the `Tag` model.
1. Create add a route and controller function that establishes a relation:
   - In the `api/courses` Add a route with `post` as the method and `/:courseId` as the url.
   - Create a controller called `addTagToCourse` in the `api/courses/courses.controllers.js` file and export it.
   - In the controller, update the course found in the `req.course` by setting pushing the `req.body.tag` into the `tags` property of the `req.course`.
   - Import the `Tag` model into the `courses.controllers.js`.
   - Inside the `addTagToCourse` function, use the `Tag` model and the `findByIdAndUpdate` query to find the tag using the id in the request body, then push the course id of the course to the the courses list of the tag.
   - return an empty response with the status set to 204.
1. Lets populate the list of courses and the list of tags.
   - In `tags.controllers.js`, update the find method with populate to retrieve details on the courses property.
   - In the `courses.controllers.js`, update the find method by chaining an extra populate to retrieve details on the tags property.
   - Test it in Postman using both adding an existing tag to a course.

## Bonus

### One-to-Many Relation Bonus

1. When populating the list of lectures in the `courses.controllers.js`, only select the id and the name of the lecture.
1. When populating the list of a lectures for details of the course, only select the course name.
1. Update the `createLecture` and the `updateLectureById` in the `lectures.controller` to add a relation to the `course` if it was in the `req.body`.
1. Modify the `deleteLectureById` to remove a lecture id from the `course` list when a lecture is deleted.

### Many-to-Many Relation Bonus

1. When populating the list of courses in the `courses.controllers.js`, only select the id and the name of the tags.
1. When populating the list of a tags only select the course name.
1. Update the `createCourse` and the `updateCourseById` in the `lectures.controller` to add a relations to the `tags` if it was in the `req.body`, try doing this is a list of tags.
1. Modify the `deleteCourseById` to remove a course id from the `tags` the course has relations with when after a course gets deleted.
