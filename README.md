# Cypress Automation Project

Este projeto utiliza o **Cypress** para automação de testes de fluxo de compras, cobrindo cenários com seletores **CSS** e **XPath**. Abaixo, você encontrará as instruções para configuração, execução e detalhes da estrutura do projeto.

---

## **Requisitos de Instalação**

1. Instale o [Visual Studio Code (VSCode)](https://code.visualstudio.com/).
2. Instale o [Git](https://git-scm.com/).
3. Clone este repositório utilizando o comando (substitua `https://github.com/RoFerrigati/Tenda_Automa-o_Compra` pela URL real do repositório):
   ```bash
   git clone https://github.com/RoFerrigati/Tenda_Automa-o_Compra
   ```
4. Instale o Node.js, que inclui o npm (Node Package Manager). [Download do Node.js](https://nodejs.org/).
5. No diretório do projeto, instale as dependências do projeto:
   ```bash
   npm install
   ```
6. Instale o Cypress via npm:
   ```bash
   npm install cypress --save-dev
   ```
7. Instale o suporte para XPath no Cypress:
   ```bash
   npm install -D cypress-xpath
   ```

---

## **Estrutura do Projeto**

O projeto está estruturado da seguinte forma:

```
/cypress
├── /e2e
│   ├── /CSS         # Testes utilizando seletores CSS
│   │   ├── css-tenda-boleto.cy.js
│   │   └── css-tenda-cartao.cy.js
│   ├── /XPATH       # Testes utilizando seletores XPath
│       ├── xpath-tenda-boleto.cy.js
│       └── xpath-tenda-cartao.cy.js
│
├── /SELETORES        # Arquivos contendo os seletores
│   ├── css-seletores.cy.js
│   └── xpath-seletores.cy.js
│
├── /suport        # Arquivos de suporte
│   ├── commands.js
│   └── e2e.js│
│
├── /videos           # Vídeos gerados após a execução dos testes
│   ├── /CSS
│   │   ├── css-tenda-boleto.cy.js.mp4
│   │   └── css-tenda-cartao.cy.js.mp4
│   ├── /XPATH
│       ├── xpath-tenda-boleto.cy.js.mp4
│       └── xpath-tenda-cartao.cy.js.mp4
node_modules
.gitignore
cypress.config.js
package-lock.json
package.json
README.md

```

### **Destaques**
- **Pasta `/e2e`**: Contém os arquivos de testes divididos por tipo de seletor (CSS e XPath).
- **Pasta `/seletores`**: Centraliza os seletores para facilitar a manutenção do código.
- **Pasta `/videos`**: Armazena vídeos dos testes executados, organizados por tipo de seletor.

---

## **Scripts do Projeto**

Os seguintes scripts estão configurados no arquivo `package.json` para facilitar a execução dos testes:

- Executar todos os testes com navegador **fechado**:
  ```bash
  npm run cypress:run
  ```
- Executar todos os testes com navegador **aberto**:
  ```bash
  npm run cypress:open
  ```
- Executar apenas os testes de **CSS** com navegador **fechado**:
  ```bash
  npm run cypress:run:css
  ```
- Executar apenas os testes de **CSS** com navegador **aberto**:
  ```bash
  npm run cypress:open:css
  ```
- Executar apenas os testes de **XPath** com navegador **fechado**:
  ```bash
  npm run cypress:run:xpath
  ```
- Executar apenas os testes de **XPath** com navegador **aberto**:
  ```bash
  npm run cypress:open:xpath
  ```

---

## **Notas Importantes**

1. **Tempo de Espera (`cy.wait`)**:
   - O projeto utiliza `cy.wait` para garantir que os elementos estejam completamente carregados antes da interação.
   - Em conexões mais lentas ou computadores com menor desempenho, pode ser necessário aumentar o tempo de espera nos trechos onde está configurado `cy.wait`.

2. **Ambiente de Teste**:
   - Durante os testes, utilizei um ambiente de produção devido a problemas no ambiente de testes fornecido.
   - Recomendo evitar executar os testes em produção com alta frequência para evitar bloqueios de usuário ou alertas de segurança.

3. **Melhoria Sugerida**:
   - No fluxo de pagamento do carrinho, a funcionalidade de selecionar itens específicos para pagamento não funciona conforme esperado. Seria interessante permitir que o cliente escolha quais itens pagar, possibilitando múltiplas formas de pagamento para diferentes itens do carrinho.

---

## **Minha Experiência com Ferramentas de Automação**

Como QA, possuo 6 anos de experiência em automação de testes, utilizando ferramentas como **Robot Framework**, **Cypress** e **Playwright**. Segue uma breve avaliação comparativa:

- **Playwright** (Melhor escolha): Rápido, completo e com suporte nativo a todos os navegadores e tipos de seletores.
- **Cypress**: Excelente para testes no navegador, mas depende de várias integrações externas.
- **Robot Framework**: Poderoso para fluxos complexos, mas possui limitações no suporte a navegadores modernos.

Recomendo fortemente o **Playwright** para quem busca uma solução robusta e integrada.

---

## **Observação Final**

Os vídeos dos testes estão disponíveis na pasta `/videos`. Qualquer dúvida ou problema durante a execução, estou à disposição para ajudar. Espero que este projeto atenda às expectativas e mostre o potencial da automação de testes no **Cypress**.

Boa sorte e bons testes! 🚀