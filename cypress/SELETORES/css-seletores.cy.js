// SELETORES GLOBAIS DE TESTE EM CSS

const seletores = {
    urls: {
        seleta: "https://www.tendaatacado.com.br/produto/seleta-russa-congelada-select-1kg-10815?region_id=000007",
        sacoLixo: "https://www.tendaatacado.com.br/produto/desodorante-aerosol-men-invisible-rexona-120g-22535?region_id=000007",
        carrinho: "https://www.tendaatacado.com.br/carrinho",
        entrega: "https://www.tendaatacado.com.br/separacao-pacotes",
        checkout: "https://www.tendaatacado.com.br/checkout",
    },

    produto: {
        aviso: ".btn.btn-disclaimer",
        addCarrinhoSeleta: "#buttonbuy-sku-000000000000950066-UN",
        addCarrinhoDesodorante: "#buttonbuy-sku-000000000000955697-UN",
        verCarrinho: ".icon-cart-ball",
    },

    carrinho: {
        addQuantidade: ".btn-action",
        retiraQuantidade: ".btn-action-decrement",
        continuar: ".btn.btn-finish-order.btn-block",
    },

    login: {
        login: "#login",
        usuario: "ferrigatitrabalho@hotmail.com",
        password: "#password",
        senha: "Teste@123!",
        entrar: "button[type='submit']",
    },

    entrega: {
        opcoes: "div[class='delivery-actions-container '] button[class='btn-delivery']",
        retire: "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)",
        cidade: "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)",
        dia: "div[id='2025-01-25']",
        hora: "div[class='PickupDeliveryContainer'] div:nth-child(1) div:nth-child(2) i:nth-child(1)",
        finalizar: ".btn.btn-finish-order.btn-block",
    },

    pagamentoBoleto: {
        boleto: "div[id='\"nav-billet-tab\"'] span[class='tab-header']",
        confirmaBoleto: ".btn.btn-btn.btn-primary.btn-buy",
        codigoBoleto: ".contrast.copy-text",
    },

    pagamentoCartao: {
        cartao: "//span[normalize-space()='Cartão de crédito']",
        numeroCartao: "//input[@id='number']",
        numero: "4000000000000010",
        mesCartao: "//div[contains(text(),'Mês')]",
        mes: "01",
        anoCartao: "//div[contains(text(),'Ano')]",
        ano: "2030",
        cvvCartao: "//input[@id='cvv']",
        cvv: "123",
        nomeCartao: "//input[@id='name']",
        nome: "Rodrigo Coelho",
        cpfCartao: "//input[@id='cpf']",
        cpf: "38252353860",
        confirmar: "//button[normalize-space()='Pagar com cartão de crédito']",
        alerta: "//div[@role='alert']",
    },
};

export default seletores;
