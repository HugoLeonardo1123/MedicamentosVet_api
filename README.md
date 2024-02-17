## Atividade 11 de WEB

### Medicamentos Veterinários-api

### Hugo Leonardo Viana

<p>
    O objetivo desta atividade é aplicar os conceitos aprendidos sobre o desenvolvimento de APIs. A proposta é criar uma API e conectá-la a um banco de dados, permitindo seu consumo por meio dos verbos HTTP.
</p>

### Descrição do Projeto:

<p>
    O projeto é uma aplicação de backend construída com Node.js, utilizando o framework Express.js, e MongoDB como banco de dados. Ele fornece uma API RESTful para gerenciar dados de medicamentos. A autenticação é realizada através de tokens JWT (JSON Web Tokens) para proteger as rotas que requerem autenticação. Além disso, o projeto utiliza o pacote mongoose para modelar e interagir com os dados do MongoDB de forma mais simples e eficiente.
</p>

### Objetivo do Projeto:

<p>
    O objetivo principal do projeto é fornecer uma plataforma para armazenar, recuperar, atualizar e excluir informações sobre medicamentos Veterinários. Ele permite que os usuários criem novos registros de medicamentos, consultem todos os medicamentos armazenados, excluam medicamentos específicos e atualizem informações sobre medicamentos existentes. Além disso, a aplicação fornece a capacidade de recuperar informações específicas de um medicamento com base no seu ID e no campo desejado, como por exemplo, a espécie do medicamento.

</p>

### Tecnologias Utilizadas no Projeto:

- Node.js: É uma plataforma de código aberto que permite executar JavaScript no servidor. É a base do projeto, fornecendo o ambiente de execução para o código JavaScript.

- Express.js: É um framework para Node.js que facilita a criação de aplicativos da web e APIs. No projeto, o Express é utilizado para lidar com as rotas HTTP, simplificando o processo de criação de endpoints e o gerenciamento das requisições.

- MongoDB: É um banco de dados NoSQL orientado a documentos. No projeto, o MongoDB é utilizado para armazenar os dados dos medicamentos de forma flexível e escalável.

- Mongoose: É uma biblioteca do Node.js que fornece uma solução de modelagem de objetos para MongoDB. No projeto, o Mongoose é utilizado para definir os modelos de dados dos medicamentos, facilitando a interação com o banco de dados MongoDB.

- JWT (JSON Web Tokens): É um padrão aberto (RFC 7519) que define uma maneira compacta e autossuficiente para transmitir informações entre as partes como um objeto JSON. No projeto, os JWTs são utilizados para autenticar os usuários e proteger as rotas sensíveis da API.

- VSCode (Visual Studio Code): É um editor de código-fonte desenvolvido pela Microsoft. No projeto, o VSCode é utilizado como o ambiente de desenvolvimento principal, oferecendo recursos como edição de código, depuração e integração com ferramentas de controle de versão, como o Git.

**URL Base**: http://localhost:3000/medics

## Endpoints

**GET**  
**URL**: http://localhost:3000/medics  
Descrição: Retorna todos os medicamentos cadastrados no banco de dados.  
Dados necessários: Nenhum.

Imagem mostrando resposta esperada:

![Resposta](/imagens/getResp.jpg "Resposta")

**POST**  
**URL**: http://localhost:3000/medics

- Descrição: Adiciona um novo medicamento ao banco de dados.
- Dados necessários: Nome do medicamento, Quantidade disponível, Classificação e Especie.  
  **OBS:** O id é adicionado automaticamente.

Imagen a esquerda requisição/Imagem a direita resposta:

![Requisição](/imagens/postRequisit.jpg "Requisição")
![Resposta](/imagens/postResp.jpg "Resposta")

**DELETE**  
**URL**: http://localhost:3000/medics/:id

- Descrição: Deleta um medicamento do banco de dados com base no seu ID.
- Dados necessários: ID do medicamento a ser deletado.

**GET**  
/medics/:id/:campo  
**URL**: http://localhost:3000/medics/:id/:campo

- Descrição: Retorna uma informação específica de um medicamento com base no ID e no campo desejado.
- Dados necessários: ID do medicamento e nome do campo desejado.

Imagem mostrando resposta esperada ao solicitar o campo "quantidade":

![Resposta](/imagens/getCamp.jpg "Resposta")

**PUT**  
**URL**: http://localhost:3000/medics/:id

- Descrição: Atualiza um medicamento existente no banco de dados com base no seu ID.
- Dados necessários: ID do medicamento a ser atualizado e os novos dados a serem atualizados.

## Estrutura do Banco de Dados

![Estrutura](/imagens/estrut.jpg "Estrutura")

## Como usar a API

Configuração do Ambiente e Instalação: Antes de tudo, certifique-se de ter o Node.js e o MongoDB instalados em sua máquina. Clone o repositório do projeto do GitHub para sua máquina local e navegue até o diretório do projeto usando o terminal. Em seguida, execute o comando npm install para instalar todas as dependências necessárias do projeto. Depois, certifique-se de que o MongoDB está em execução em sua máquina e edite o arquivo index.js para configurar a URL de conexão do MongoDB, se necessário.

Execução do Projeto e Uso da API: Após a instalação e configuração, inicie o servidor local executando o comando npm start. O servidor estará disponível em http://localhost:3000. Agora você pode acessar a API utilizando ferramentas como o Postman. Utilize os endpoints disponíveis, como /medics para obter todos os medicamentos cadastrados, /medics/:id para obter um medicamento específico pelo ID, /medics/:id/:campo para recuperar uma informação específica de um medicamento, /medics para adicionar um novo medicamento e /medics/:id para atualizar um medicamento existente. Certifique-se de fornecer os dados necessários em cada requisição, conforme descrito na documentação da API.

## Créditos - Fontes de referência utilizadas

- [Rocketeseat](https://www.youtube.com/watch?v=ghTrp1x_1As&t=1507s)
- [Lucas Nhimi](https://www.youtube.com/watch?v=3Eam3ogU-uk&t=227s)
- [DevClub_Tutorial_1](https://www.youtube.com/watch?v=lZ1Xa930O6Q&t=1539s)
- [DevClub_Tutorial_2](https://www.youtube.com/watch?v=lnEnF1hey5g&t=2s)
- [Matheus Battisti](https://www.youtube.com/watch?v=anMK76I2dUA&t=286s)
- [Mangoose](https://mongoosejs.com/)
- [w3schools](https://www.w3schools.com/)

## Licença

Licença MIT
