import seletores from '../../SELETORES/css-seletores.cy';

describe('Teste Tenda Atacado - Compra com Boleto', () => {

    // Estruturas de seletores
    const listaProduto = [
        seletores.produto.aviso,
        seletores.produto.addCarrinhoSeleta,
        seletores.produto.verCarrinho,
    ];

    const listaCarrinho = [
        seletores.carrinho.addQuantidade,
        seletores.carrinho.addQuantidade,
        seletores.carrinho.retiraQuantidade,
        seletores.carrinho.continuar,
    ];

    const listaLogin = [
        { acao: 'type', seletor: seletores.login.login, valor: seletores.login.usuario },
        { acao: 'type', seletor: seletores.login.password, valor: seletores.login.senha },
        { acao: 'click', seletor: seletores.login.entrar },
    ];

    const listaEntrega = [
        seletores.entrega.opcoes,
        seletores.entrega.retire,
        seletores.entrega.cidade,
        seletores.entrega.dia,
        seletores.entrega.hora,
        seletores.entrega.finalizar,
    ];

    const listaBoleto = [
        seletores.pagamentoBoleto.boleto,
        seletores.pagamentoBoleto.confirmaBoleto,
        seletores.pagamentoBoleto.codigoBoleto,
    ];

    it('Deve adicionar o produto ao carrinho e navegar até o carrinho', () => {
        // Acessar a URL:
        cy.visit(seletores.urls.seleta);
        cy.wait(5000);

        // Produto Tenda: Add Açai ao carrinho:
        listaProduto.forEach(seletor => {
            cy.get(seletor)
                .click();
            if (seletor === seletores.produto.addCarrinhoSeleta) {
                cy.wait(1000);
            };
        });

        // Validar redirecionamento correto para a próxima página:
        cy.url().should('eq', seletores.urls.carrinho);

        // Add e Remover unidades do produto:
        listaCarrinho.forEach(seletor => {
            cy.get(seletor)
                .click();
        });

        // Validar redirecionamento correto para a próxima página:
        cy.url().should('eq', seletores.urls.entrega);

        // Fazer login
        listaLogin.forEach(acao => {
            if (acao.acao === 'type') {
                cy.get(acao.seletor)
                    .type(acao.valor);
            } else if (acao.acao === 'click') {
                cy.get(acao.seletor)
                    .click();
            };
        });

        // Selecionar opção de entrega:
        listaEntrega.forEach(seletor => {
            cy.get(seletor)
                .click();
        });

        // Validar redirecionamento correto para a próxima página:
        cy.url().should('eq', seletores.urls.checkout);

        // Escolher Boleto como forma de pagamento:
        listaBoleto.forEach(seletor => {
            cy.get(seletor)
                .click();
            // Confirma que o pedido foi gerado juntamente com o código do boleto:
            if (seletor === seletores.pagamentoBoleto.confirmaBoleto) {
                cy.get("#btFechar", { timeout: 10000 })
                    // .should('be.visible')
                    // .should('not.be.disabled')
                    .click();
                cy.get(seletores.pagamentoBoleto.codigoBoleto)
                    .should('be.visible');
            };
        });
    });
});