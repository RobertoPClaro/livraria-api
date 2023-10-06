import http from "http";

const PORT = 3000;

const server = http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, { "Contente-Type": "text/plain"});
    resposta.end("Curso de Node.js");
});

server.listen(PORT, () => { //Esta ouvindo o servidor na porta 3000
    console.log("servidor escutando!")
});