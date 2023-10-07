import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos áneis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    },
    {
        id: 3,
        titulo: "Harry Potter e a Pedra Filosofal"
    },
    {
        id: 4,
        titulo: "Harry Potter e a Câmara Secreta"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (requisicao, resposta) => {
    resposta.status(200).send("Curso de Nodew.Js");
});

app.get("/livros", (requisicao, resposta) => {
    resposta.status(200).json(livros);
});

app.get("/livros/:id", (requisicao, resposta) => {
    const index = buscaLivro(requisicao.params.id);
    resposta.status(200).json(livros[index]);
});

app.post("/livros", (requisicao, resposta) => {
    livros.push(requisicao.body);
    resposta.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (requisicao, resposta) => {
    const index = buscaLivro(requisicao.params.id);
    livros[index].titulo = requisicao.body.titulo;
    resposta.status(200).json(livros[index]);
});

app.delete("/livros/:id", (requisicao, resposta) => {
    const index = buscaLivro(requisicao.params.id);
    livros.splice(index, 1);
    resposta.status(200).send("Livro removido com sucesso");
})
export default app;