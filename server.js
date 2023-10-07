import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => { //Esta ouvindo o servidor na porta 3000
    console.log("servidor escutando!");
});