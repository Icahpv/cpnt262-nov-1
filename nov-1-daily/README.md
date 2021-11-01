# Express Activity: Create a JSON endpoint using route parameters
In this activity, you'll be refactoring a sample Express server using the spoilers from this activity: [Find an object in an array](https://gist.github.com/acidtone/443af5d0efc720e19e56c9cc55f31521).

## Instructions
1. Download or fork/clone this Gist into your workspace.
2. Using this [sample code for `Array.find()`](https://gist.github.com/acidtone/443af5d0efc720e19e56c9cc55f31521), define an array of objects called `guild`.
3. Refactor the `GET /api/guild/:class` endpoint so that it returns a single guild member that matches the requested `:class` route parameter.
4. Return a JSON `404 Not Found` response if the `:class` isn't found.