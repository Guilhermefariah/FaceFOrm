# FaceForm

Este é um projeto com um formulário, utilizando Next.js para o frontend e Node.js/Express para o backend. Ele utiliza TypeScript, ESLint e Tailwind CSS para uma experiência de desenvolvimento robusta e estilização fácil.


## Estrutura do Projeto

```plaintext
FaceForm/
├── backend/
│   ├── controllers/
│   │   └── formController.ts       // Controlador para gerenciar operações relacionadas aos formulários.
│   ├── models/
│   │   └── formModel.ts            // Modelo de dados para os formulários.
│   ├── routes/
│   │   └── formRoutes.ts           // Rotas relacionadas aos formulários.
│   ├── services/
│   │   └── formService.ts          // Lógica de negócio relacionada aos formulários.
│   ├── config/
│   │   └── database.ts             // Configuração do banco de dados utilizado pela aplicação.
│   ├── app.ts                      // Configuração do aplicativo Express.
│   └── server.ts                   // Ponto de entrada do servidor backend.
├── frontend/
│   ├── public/
│   │   └── img/
│   │       └── FaceForm.jpg        // Imagem de exemplo.
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   └── Header.tsx      // Componente de cabeçalho da aplicação.
│   │   │   ├── Footer/
│   │   │   │   └── Footer.tsx      // Componente de rodapé da aplicação.
│   │   │   └── SupportForm/
│   │   │       ├── RegistrationForm.tsx    // Componente para formulário de registro.
│   │   │       ├── ForgotPasswordForm.tsx  // Componente para formulário de recuperação de senha.
│   │   │       └── NavigationButtons.tsx   // Componente para botões de navegação entre formulários.
│   │   ├── pages/
│   │   │   ├── HomePage.tsx        // Página inicial da aplicação.
│   │   │   ├── ForumPage.tsx       // Página do fórum.
│   │   │   └── Layout.tsx          // Componente para layout comum entre páginas.
│   │   ├── styles/
│   │   │   └── globals.css         // Estilos globais da aplicação.
│   │   ├── hooks/                  // Hooks customizados da aplicação, se houver.
│   │   ├── utils/                  // Funções utilitárias da aplicação, se houver.
│   │   ├── contexts/               // Contextos do React, se houver.
│   │   ├── services/               // Serviços da aplicação, como chamadas de API.
│   │   └── assets/                 // Recursos estáticos da aplicação, como imagens e fontes.
│   ├── package.json                // Dependências e scripts do frontend.
│   └── next.config.js              // Configuração do Next.js.
├── .gitignore
├── README.md
├── package.json                    // Dependências e scripts do projeto principal.
└── server.js                       // Ponto de entrada do servidor principal.


```


## Tecnologias Utilizadas

### Backend

- [Node.js]
- [Express]
- [TypeScript]
- [MongoDB]

### Frontend

- [Next.js]
- [React]
- [TypeScript]
- [ESLint]
- [TailwindCSS]
- [Formik]
- [Yup]


## Requisitos

- Node.js (versão 12.0 ou superior)
- npm (versão 6.0 ou superior)

## Instalação

- Clone o repositório:

  ```bash
  git clone https://github.com/Guilhermefariah/FaceForm.git
  cd FaceForm
  ```

## Instale as dependências:

  ```bash
  npm install
  ```

## Execução

  ### Inicie o FaceForm
  ```bash
  npm run dev
  ```


#### Abra http://localhost:3000 no seu navegador para ver a aplicação.

## Scripts Disponíveis

### Backend
* `npm run dev:` Inicia o servidor de desenvolvimento.
* `npm run build:` Compila o backend para produção.
* `npm start:` Inicia o servidor em produção.

### Frontend

* `npm run dev:` Inicia o servidor de desenvolvimento.
* `npm run build:` Compila a aplicação para produção.
* `npm start:` Inicia o servidor em produção.
* `npm run lint:`Executa o linter para encontrar e corrigir problemas no código.

# Estrutura de Diretórios
## Backend

* `backend/controllers:` Controladores que lidam com as requisições.

* `backend/models:` Modelos que representam os dados e interagem com o banco de dados.
* `backend/routes:` Define as rotas do backend.
* `backend/services:` Contém a lógica de negócio.
* `backend/config:` Configurações do projeto, como a configuração do banco de dados.
* `backend/app.ts:` Configuração do app Express.
* `backend/server.ts:` Ponto de entrada do servidor.

## Frontend

* `frontend/public:` Arquivos públicos, como imagens.

* `frontend/src/app/pages:` Contém as páginas principais do aplicativo.
* `frontend/src/app/components:` Contém os componentes reutilizáveis.
* `frontend/src/styles:` Contém os arquivos de estilo.
* `frontend/src/hooks:` Contém hooks customizados, se houver.
* `frontend/src/utils:` Contém funções utilitárias e helpers.
* `frontend/src/contexts:` Contém contextos do React, se houver.
* `frontend/src/services:` Contém serviços, como chamadas de API.
* `frontend/src/assets:` Contém assets, como imagens e fontes.
* `frontend/src/index.tsx:` Ponto de entrada do aplicativo.
* `frontend/package.json:` Dependências e scripts do frontend.
* `frontend/next.config.js:` Configuração do Next.js.

# Contribuição

- Faça um fork do projeto.
Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).

- Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).

- Faça push para a branch (`git push origin feature/nova-feature`).

- Abra um Pull Request.

# Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.