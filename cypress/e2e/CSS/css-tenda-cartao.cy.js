import seletores from '../../SELETORES/css-seletores.cy';

describe('Teste Tenda Atacado - Compra com Cartão', () => {

    // Estruturas de seletores
    const listaProduto = [
        seletores.produto.aviso,
        seletores.produto.addCarrinhoDesodorante,
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

    const listaPagamentoCartao = [
        { acao: 'click', seletor: seletores.pagamentoCartao.cartao },
        { acao: 'type', seletor: seletores.pagamentoCartao.numeroCartao, valor: seletores.pagamentoCartao.numero },
        { acao: 'click', seletor: seletores.pagamentoCartao.mesCartao },
        { acao: 'click', seletor: `//div[text()='${seletores.pagamentoCartao.mes}']` },
        { acao: 'click', seletor: seletores.pagamentoCartao.anoCartao },
        { acao: 'click', seletor: `//div[text()='${seletores.pagamentoCartao.ano}']` },
        { acao: 'type', seletor: seletores.pagamentoCartao.cvvCartao, valor: seletores.pagamentoCartao.cvv },
        { acao: 'type', seletor: seletores.pagamentoCartao.nomeCartao, valor: seletores.pagamentoCartao.nome },
        { acao: 'type', seletor: seletores.pagamentoCartao.cpfCartao, valor: seletores.pagamentoCartao.cpf },
        { acao: 'click', seletor: seletores.pagamentoCartao.confirmar },
    ];

    it('Deve adicionar o produto ao carrinho e navegar até o carrinho', () => {
        // Acessar a URL:
        cy.visit(seletores.urls.sacoLixo);
        cy.wait(5000);

        // Produto Tenda: Add Açai ao carrinho:
        listaProduto.forEach(seletor => {
            cy.get(seletor)
                .click();
            if (seletor === seletores.produto.addCarrinhoDesodorante) {
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
            cy.get(seletor) // Alterado de cy.xpath para cy.get
                .click();
        });

        // Validar redirecionamento correto para a próxima página:
        cy.url().should('eq', seletores.urls.checkout);

        // Escolher Cartão como forma de pagamento:
        listaPagamentoCartao.forEach(acao => {
            if (acao.acao === 'type') {
                cy.xpath(acao.seletor)
                    .type(acao.valor);
            } else if (acao.acao === 'click') {
                cy.xpath(acao.seletor)
                    .click();
                if (acao.seletor === seletores.pagamentoCartao.confirmar) {
                }
            }
        });

        // Validação do alerta após confirmar o pagamento
        cy.xpath(seletores.pagamentoCartao.alerta, { timeout: 10000 })
            .should('be.visible');
    });
});