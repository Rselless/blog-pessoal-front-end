# Blog Pessoal

## 📖 Sobre o Projeto

Acesse o projeto em produção aqui: https://vercel.com/rselless-projects/blog-pessoal-front-end

Esteé um projeto de blog pessoal construído com **React** e **TypeScript**. A aplicação foi desenvolvida para permitir que usuários autenticados criem, editem e excluam postagens e temas, oferecendo uma experiência completa de gerenciamento de conteúdo.

A interface do usuário, incluindo a barra de navegação e o rodapé, é renderizada de forma dinâmica com base no status de autenticação do usuário. O projeto implementa um sistema de autenticação robusto, utilizando o **React Context** para gerenciar o estado global e proteger as rotas da aplicação.

## 🚀 Tecnologias Utilizadas

### Front-end

  * **React**: Biblioteca principal para a construção da interface do usuário.
  * **TypeScript**: Linguagem de programação que adiciona tipagem estática, utilizada para modelar a estrutura de dados de `Usuario`, `Postagem` e `Tema`.
  * **Vite**: Ferramenta de build que proporciona um ambiente de desenvolvimento rápido.
  * **Tailwind CSS**: Framework de utilitários CSS para estilização.
  * **React Router DOM**: Gerencia o roteamento e a navegação entre as diferentes páginas da aplicação.
  * **React Context**: Utilizado para gerenciar o estado de autenticação e proteger rotas, verificando se o usuário está logado.
  * **Axios**: Cliente HTTP para a comunicação com a API de Back-end, com funções encapsuladas em um serviço dedicado para padronizar as requisições.
  * **React Toastify**: Utilizado para exibir notificações ao usuário após ações como login, cadastro ou atualização de dados.
  * **React Loader Spinner**: Fornece indicadores visuais de carregamento, como o `RotatingLines` nos botões de formulário e a `DNA` nas listas de dados.
  * **Reactjs-Popup**: Utilizado para criar um modal para a criação de novas postagens.
  * **Phosphor Icons**: Biblioteca de ícones utilizada para os logos de redes sociais no rodapé da página.

### Back-end

  * O Front-end do projeto se conecta a uma API de Back-end externa, cuja URL é definida em um arquivo de ambiente.

## ⚙️ Funcionalidades e Rotas

A aplicação possui um sistema de rotas completo, cobrindo todas as funcionalidades de gerenciamento do blog:

  * **Páginas Principais**: `Cadastro`, `Home`, `Login` e `Perfil` são páginas distintas da aplicação.

  * **Autenticação e Perfil**

      * `/` e `/login`: Página de login para acesso à conta.
      * `/cadastro`: Formulário para registro de novos usuários.
      * `/perfil`: Exibe as informações do perfil do usuário. Esta é uma rota protegida que exige autenticação.
      * `Sair`: Opção de logout na barra de navegação que limpa o token de autenticação e redireciona para a página de login.

  * **Gerenciamento de Temas**

      * `/temas`: Lista todos os temas disponíveis. O acesso a esta rota é protegido por autenticação.
      * `/cadastrartema`: Formulário para criação de um novo tema.
      * `/editartema/:id`: Formulário para edição de um tema existente.
      * `/deletartema/:id`: Página para a exclusão de um tema, com confirmação.

  * **Gerenciamento de Postagens**

      * `/postagens`: Lista todas as postagens do blog.
      * `/cadastrarpostagem`: Formulário para criar uma nova postagem, que pode ser acessado via modal.
      * `/editarpostagem/:id`: Formulário para edição de uma postagem existente.
      * `/deletarpostagem/:id`: Página para a exclusão de uma postagem, com confirmação.

## 📁 Estrutura de Pastas

A estrutura do projeto é organizada de forma modular e clara, com a maioria dos arquivos de desenvolvimento localizados na pasta `src`.

```
.
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── postagens/
│   │   │   ├── cardpostagens/
│   │   │   ├── deletarpostagem/
│   │   │   ├── formpostagem/
│   │   │   ├── listapostagens/
│   │   │   └── modalpostagem/
│   │   ├── temas/
│   │   │   ├── cardtemas/
│   │   │   ├── deletartema/
│   │   │   ├── formtema/
│   │   │   └── listatemas/
│   │   └── usuarios/
│   │       └── listausuarios/
│   │           └── ListarUsuarios.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── UserContext.tsx
│   ├── models/
│   │   ├── Postagem.ts
│   │   ├── Tema.ts
│   │   ├── Usuario.ts
│   │   └── UsuarioLogin.ts
│   ├── pages/
│   │   ├── cadastro/
│   │   │   ├── cadastro.css
│   │   │   └── Cadastro.tsx
│   │   ├── home/
│   │   │   └── Home.tsx
│   │   ├── login/
│   │   │   ├── login.css
│   │   │   └── Login.tsx
│   │   └── perfil/
│   │       └── Perfil.tsx
│   ├── services/
│   │   └── Service.ts
│   ├── utils/
│   │   └── ToastAlerta.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
└── yarn.lock
```

## 🛠️ Como Executar o Projeto

Para rodar a aplicação localmente, siga os passos abaixo:

1.  **Pré-requisitos**:
      * Você precisa ter o **Node.js** instalado na sua máquina.
2.  **Instalação**:
      * Clone o repositório.
      * Navegue até o diretório do projeto.
      * Instale as dependências usando `npm` ou `yarn`:
        ```bash
        npm install
        # ou
        yarn install
        ```
3.  **Execução**:
      * Para iniciar o servidor de desenvolvimento, execute o comando:
        ```bash
        npm run dev
        # ou
        yarn dev
        ```
      * A aplicação estará disponível em `http://localhost:5173` por padrão.

## 🤝 Desenvolvedor

  * **Rafael Selles Sant'anna**
      * [LinkedIn](https://www.linkedin.com/in/rafael-selles-sant-anna/)
      * [GitHub](https://github.com/Rselless/)
