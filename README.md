# bridge-processo-seletivo
Aplicativo Full Stack para o processo seletivo da Bridge

## Feito por Pedro Henrique Dadalt de Queiroz :)

Meu Linkedin: https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin

Meu Currículo: https://drive.google.com/file/d/1aqYgqxF6mg0j0NGspB5MtLLuFRqEERO4/view?usp=sharing

## Inicializando o projeto
Para rodar o projeto (em modo dev) é necessário duas abas de terminal. Em uma delas, na pasta raiz do projeto use `npm start`.
Esse é o servidor e está rodando na porta 5000 do localhost. Para rodar o front é preciso entrar na pasta "client" e rodar `npm start` ali.
O front é acessível pela porta 3000 (http://localhost:3000). O front se conecta com o back através de um proxy, configurado no package.json na pasta client. A pasta client é uma instância de create-react-app.

## Tech Stack
Utilizei ExpressJs para o back e React para o front. Além dessas, a única biblioteca essencial que precisei instalar 
foi a CORS, no back, para que não tivesse erros na integração front-back. Utilizei nodemon para facilitar o desenvolvimento.

## Erros
O código quebra quando pede para mostrar o histórico :( Eu deixei o histórico para implementar por último e não consegui resolver o erro antes do prazo e fiquei com medo de ser desqualificado se tentasse arrumar. Eu vou fazer um fork desse projeto, resolver, melhorar e colocar online no heroku amanhã, aqui só vou modificar esse README :P
