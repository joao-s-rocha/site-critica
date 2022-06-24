const express = require('express');
const app = express();
const Filme = require('./models/Filme');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial - Celke");
});

app.post("/comentario", async (req, res) => {
    await Comentario.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Comentário postado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Comentário não postado!"
        });
    });
});

app.post("/filme", async (req, res) => {
    await Filme.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Filme cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Filme não cadastrado!"
        });
    });
});

app.post("/usuario", async (req, res) => {
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado!"
        });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});