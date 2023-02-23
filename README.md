# API Activity


After installing the dependencies (`npm install`), `npm start` can be used to launch the application in a local web browser. It is a demo application that has a REST server and API documentation

## Getting started
First, run `npm start` to generate the OpenAPI specification, server boilerplate, and start the development server.
This command will automatically reload the server as you change files in this project.
To stop the server, press control-C in the terminal.

Once you see the message "Listening on 8081", you can access this URL in your browser: 
[http://localhost:8081/docs/](http://localhost:8081/docs/)

You should now see a "Swagger" transcript-server-openapi documentation page, with a few API endpoints defined. Expand the "GET /transcripts" endpoint, click "Try it out", and then "Execute". Now, the field "Response Body" should have text in it like:
```
[
  {
    "student": {
      "studentID": 1,
      "studentName": "avery"
    },
    "grades": [
      {
        "course": "DemoClass",
        "grade": 100
      },
      {
        "course": "DemoClass2",
        "grade": 100
      }
    ]
  },
```

This demonstrates that this endpoint of your REST API is functional.

## Working with your team, design our API
You should write a list of the endpoints you think you will neeed to implement your Dronuts MVP.

## Inspect the starter code, Then change it so that it follows your API specification 
The file `src/transcriptsController.ts` defines the API. We are creating the REST API using a library called [TSOA](https://tsoa-community.github.io/docs/), which expects us to provide it with a class that defines each of the API endpoint methods.  You can edit that file, or start a new one

### Example API
The controller class is annotated: `@Route('transcripts')`

This means that all of the `@Route` annotations within the class will be defined off of that base route.

The route `GET /transcripts`, then, is handled by this method:
```
    @Get()
    public getAll() {
        return db.getAll();
    }
```

If you add a `console.log` statement in this method, and save the file, you will note that the server restarts (it will output some text on the console), and if you re-execute the `GET /transcripts` route in your browser, you will see your `console.log` print out.

Your task for this activity is to define the rest of the routes, so that they are documented in the swagger docs.

## NOTE: The API does NOT need to be functional yet, this is just a design step to help you as you continue to work on your implementation.  

FYI: Given that REST is intended to be a stateless protocol, the TSOA designers decided that each invocation of an API endpoint should create a new instance of the controller. This is why we have to implement this controller class separately from the `transcriptManager` class.

credit to Jonathan Bell, Adeel Bhutta and Mitch Wand. for the initial version of this code.