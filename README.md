<div align="center"> <img src="https://github.com/MariaGabrielaReis/nlw-12-spacetime-server/assets/69374340/c5cf466a-9b07-46ab-ac9c-02273bf7f88f" alt="Banner com o nome do projeto" /> </div>

API para a cápsula do tempo de projetos, uma aplicação que permite criar uma linha do tempo de todos os seus projetos, com descrição, imagens e vídeos! <br>
**Aplicação inspirada no evento Next Level Week: Spacetime, promovido pela Rocketseat** 🚀
> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Nest, Fastify, Zod, SQLite, Prisma, Insomnia**

## :gear: Como rodar

Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:
```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/nlw-12-spacetime-server.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn
```

Antes de rodar o projeto, certifique-se de ter criado uma instância do aplicativo para poder acessar o OAuth do Github:
- Acesse `settings` > `developer settings` > `oauth apps` e cadastre:
  - **Homepage URL** como `http://localhost:3000`
  - **Authorization callback URL** como `http://localhost:3000/api/auth/callback`

Após esta configuração, adicione no arquivo `.env` (na raíz do projeto) com os dados fornecidos pelo GitHub: 
```bash
# Database
DATABASE_URL="file:./dev.db"

# GitHub
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

Agora execute a aplicação com o comando abaixo, assim o servidor inciará na porta:3333:
```bash
# Execute a aplicação
$ yarn dev
```

> Use o Insomnia, por exemplo, para realizar as requisições (importe a coleção [deste arquivo](./requests_collection))

## :railway_track: Rotas
Em breve...

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-0D9488?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
