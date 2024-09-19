# Template Node.js Express TypeScript Prisma GTS

Este repositório é um template para projetos Node.js que utilizam Express, TypeScript, Prisma e Google TypeScript Style (GTS). Ele fornece uma estrutura básica para iniciar rapidamente um projeto.

## Pré-requisitos

Antes de começar, verifique se você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/JJS4ntos/brand-new-project.git
   cd brand-new-project
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o Prisma:

   Crie um arquivo `.env` na raiz do projeto e defina suas variáveis de ambiente. Um exemplo básico:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/nome_do_banco"
   ```

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
/src
  ├── application     # Controllers, validadores e middlewares da aplicação
  ├── domain          # Entidades e usecases referentes ao domínio
  ├── infrastructure  # Banco de dados e third party libs
```

## Scripts

Aqui estão alguns scripts úteis que você pode usar durante o desenvolvimento:

- **Iniciar o servidor em modo de desenvolvimento**:

  ```bash
  npm run dev
  ```

- **Compilar o TypeScript**:

  ```bash
  npm run compile
  ```

- **Executar os testes**:

  ```bash
  npm run test
  ```

- **Rodar o lint**:

  ```bash
  npm run lint
  ```

- **Rodar o lint fix**:

  ```bash
  npm run fix
  ```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
