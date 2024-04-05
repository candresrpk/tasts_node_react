import app from "./app.js";

const port = 3000

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
}).on('error', (e) => {
    console.log('Error happened:', e.message)
})