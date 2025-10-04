# Projeto de Testes Automatizados com Cypress e JavaScript

Este projeto tem como objetivo demonstrar como automatizar testes de uma aplicação web utilizando o framework [Cypress](https://www.cypress.io/). Ele inclui a organização do código com Custom Commands e a geração de relatórios com o `cypress-mochawesome-reporter`.

## Objetivo do Projeto

O projeto realiza testes automatizados para validar as funcionalidades de login de uma aplicação bancária. Ele utiliza boas práticas de automação, como a reutilização de código com comandos customizados e a geração de relatórios detalhados.

## Componentes do Projeto

- **Cypress**: Framework de testes utilizado para automação.
- **Custom Commands**: Comandos personalizados para simplificar e organizar os testes.
- **cypress-mochawesome-reporter**: Ferramenta para geração de relatórios de execução dos testes.
- **API e Aplicação Web**: Os testes dependem da execução da API e da aplicação web:
  - [Banco API](https://github.com/juliodelimas/banco-api)
  - [Banco Web](https://github.com/juliodelimas/banco-web)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar pacotes
- A API e a aplicação web devem estar em execução:
  - Siga as instruções nos repositórios [Banco API](https://github.com/juliodelimas/banco-api) e [Banco Web](https://github.com/juliodelimas/banco-web) para configurá-los.

## Instalação

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
