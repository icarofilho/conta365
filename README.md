<header>
    <h1>$ DevinBank Pagamentos S.A. $</h1>
    <p>
    <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
    <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white">
    </p>
</header>

<h2>Iniciando o servidor</h2>
<p>Para iniciar o servidor, abra o prompt de comando ou powershell e execute o comando abaixo: <small>Lembrando de estar dentro do diretório raiz</small></p>

```
nodemon start
```
<p>Para interromper o servidor basta pressionar: </p>

```
ctrl + c
```
<br>
<h2>
    Documentação
</h2>
<p>
    Documentação gerada automaticamente pelo <a href="https://www.npmjs.com/package/swagger-autogen#endpoints">Swagger-autogen</a>
</p>
<br>
<h2>
    Users EndPoints
</h2>
    <details>
        <summary>GET</summary>

```bash
localhost:3333/api/user/:id
```        
<p>Retorna um usuários cadastrados baseado em seu ID</p>
</details>
<br>
    <details>
        <summary>GET</summary>

```bash
localhost:3333/api/users
```        
<p>Retorna a lista completa de usuários cadastrados</p>
</details>
<br>
    <details>
        <summary>POST</summary>

```bash
localhost:3333/api/users
```        
<p>Adiciona um novo usuário (gerando o ID sequencial automático)</p>
</details>
<br>
    <details>
        <summary>PATCH</summary>

```bash
localhost:3333/api/users/user/:id
```        
<p>Atualiza um usuário fazendo a busca pelo ID e alterando os campos desejados</p>
</details>
