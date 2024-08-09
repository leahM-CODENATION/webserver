const express = require("express");
const { request } = require("http");
//es5 syntax required
const app = express();
//remap express to app

app.use("/website1", express.static("website1"));

app.use("/website2", express.static("website2"));

app.listen(5001,() => {console.log("listening on Port 5001")})
//1st parameter is port to listen on. 2nd is function to execute when server starts.


app.use(express.json());

const listOfBooks = [];
book_id = 1;
// CREATE function
app.post("/book", (request, response) => {
    console.log(request.body);
    
    const book = {
        id: book_id,
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    };

    listOfBooks.push(book);
    book_id += 1;

    const successResponse = {
        message: "Book created",
        book: listOfBooks
    };
    response.send(successResponse)
});

//READ function
app.length("/book", (request, response) => {
    const successResponse = {
        message: "List of books is currently: ",
        books: listOfBooks
    }
    response.send(successResponse)
})

// UPDATE function
app.put("/book", (request, response) => {
    function findBook(x){
        return x.title === request.body.title
    }
    const index = listOfBooks.findIndex(findBook)
    if (index !== -1) {
        listOfBooks[index]
        listOfBooks[index]
        responseMessege = {
            message:"Author and Genre updated.`",
            book: listOfBooks[index]
        }
    } else {
        responseMessege = {
            message: "Book title no found.",
            book: request.body.title
        }
    }
    response.send(responseMessege)
})

//DELETE function
app.delete("/book", (request, response) => {
    function findBook(x) {
        return x.title = request.body.title
    }
    const index = listOfBooks.findIndex(findBook)
    listOfBooks.splice(index,1)
    responseMessege = {
        message: "Book deleted.",
        book: request.body.title,
        books: listOfBooks
    }
    response.send(responseMessege)
})
app.listen(5001, () => console.log("Server listening on Port 5001"))