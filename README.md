<p align="center">
  <a href="https://github.com/camilomenucheli">
    <img alt="GitHub followers" src="https://img.shields.io/github/followers/camilomenucheli?label=Seguir&logoColor=brightgreen&style=social">
  </a>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/camilomenucheli/example-API-nodejs?color=brightgreen">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/camilomenucheli/example-API-nodejs?color=brightgreen">

  <a href="https://menucheli.dev.br">
    <img alt="Feito por Camilo Menucheli" src="https://img.shields.io/badge/feito%20por-Camilo Menucheli-%">
  </a> 
</p>

# example-API-nodejs
Exemplo de API com nodeJS 

<a href="https://nodejs.org">
  <img alt="Nodejs logo" src="https://nodejs.org/static/images/logo.svg" width="100">
</a>

## Setup
* Copiar `.env.sample`, atualizar as informações e renomear para `.env`.
* Instalar dependências do projeto executando `yarn` no terminal
* Inicie o servidor em ambiente de desenvolvimento com `yarn dev`

## EndPoints

### Usuários

| Name | Method | Path | Response | Body |
| ------ | ------ | ------ | ------ | ------ |
| Index | GET | http://localhost:8000/api/users?page=1&limit=5 | 200 | no body |
| Show | GET | http://localhost:8000/api/users/:id | 200 | no body |
| Create | POST | http://localhost:8000/api/users | 200 | name, filePath |
| Update | PUT | http://localhost:8000/api/users/:id | 200 | page, limit |
| Destroy | DELETE | http://localhost:8000/api/users/:id | 200 | no body |

## Dependências
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [mongoose-paginate](https://www.npmjs.com/package/mongoose-paginate)
* [require-dir](https://www.npmjs.com/package/require-dir)

## Dev Dependências
* [nodemon](https://www.npmjs.com/package/nodemon)
