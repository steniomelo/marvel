# Marvel Characters SPA

Este projeto é um Single Page Application (SPA) construído com React para listar e exibir detalhes dos personagens da Marvel. O projeto utiliza a API da Marvel para obter os dados dos personagens e é gerenciado com Redux para o estado global.

## Features

- Listagem dos personagens com paginação
- Busca e ordenação dos personagens por nome
- Exibição dos detalhes dos personagens
- Favoritar/Desfavoritar personagens
- Exibir apenas personagens favoritos
- Persistência dos personagens favoritos no LocalStorage
- CI/CD na Vercel

## Tecnologias Utilizadas

- React
- Redux
- TypeScript
- Axios
- React Router
- Marvel API
- React Hot Toast

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/steniomelo/marvel.git
```

2. Navegue até o diretório do projeto:

```bash
cd marvel
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo .env na raiz do projeto e adicione sua chave pública e privada da API da Marvel:

```bash
REACT_APP_MARVEL_PUBLIC_KEY=your_marvel_public_key
REACT_APP_MARVEL_PRIVATE_KEY=your_marvel_private_key
```

## Executando o projeto

1. Para iniciar o servidor de desenvolvimento, execute:

```bash
npm start
# ou
yarn start
```
