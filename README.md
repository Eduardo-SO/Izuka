
# Izuka

<p align="center">
  <img src=".github/izuka.gif" />
</p>

 **[izuka.com.br](https://izuka.com.br/)**

 # Descrição

Blog desenvolvido com **[Next.js](https://nextjs.org/)**.

Geração de posts de forma estática através da funcionalidade de **SSG** *(Static Site Generation)*.

Conversão de conteúdo Markdown para HTML com a ferramenta **remark-html**.


# Ferramentas utilizadas
- TypeScript
- Next.js
- Styled Components
- gray-matter
- remark-html
- date-fns
- ESLint
- Prettier
- EditorConfig

# Executando a aplicação

## Ferramentas necessárias

- **[NodeJS](https://nodejs.org/en/download/)**

    *Instalar preferencialmente a versão LTS*

    Necessário para rodar código JS/TS em sua máquina local.

- **[Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)**

    Gerenciador de pacotes do NodeJS.

    Utilizado para instalar as bibliotecas e frameworks utilizados na aplicação.

- **[Git](https://git-scm.com/downloads)**

    Contém diversos recursos para o versionamento do código.

    Também utilizado para baixar o código da aplicação em sua máquina local.

## Baixando e executando

- Para baixar a aplicação na sua máquina, rode o seguinte comando no terminal:

```bash
git clone https://github.com/Eduardo-SO/Izuka.git
```

Feito isso, será baixado uma pasta contendo o código da aplicação

- Acesse ela com o comando:

```bash
cd Izuka
```

- Instale as dependências com o Yarn:

```bash
yarn
```

- Inicie a aplicação:

```bash
yarn dev
```

Com isso a aplicação será iniciada em [http://localhost:3000/](http://localhost:3000/)

Vale ressaltar que em ambiente de desenvolvimento as páginas não serão pré-renderizadas, fazendo com que a cada requisição as páginas sejam renderizadas do zero.