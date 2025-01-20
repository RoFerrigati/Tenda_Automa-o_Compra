// SELETORES GLOBAIS DE TESTE EM XPATH

const seletores = {
    urls: {
        seleta: "https://www.tendaatacado.com.br/produto/seleta-russa-congelada-select-1kg-10815?region_id=000007",
        sacoLixo: "https://www.tendaatacado.com.br/produto/desodorante-aerosol-men-invisible-rexona-120g-22535?region_id=000007",
        carrinho: "https://www.tendaatacado.com.br/carrinho",
        entrega: "https://www.tendaatacado.com.br/separacao-pacotes",
        checkout: "https://www.tendaatacado.com.br/checkout",
    },

    produto: {
        aviso: "//button[normalize-space()='CONCORDO E FECHAR']",
        addCarrinhoSeleta: "//button[@id='buttonbuy-sku-000000000000950066-UN']",
        addCarrinhoDesodorante: "//button[@id='buttonbuy-sku-000000000000955697-UN']",
        verCarrinho: "//div[@class='icon-cart-ball']",
    },

    carrinho: {
        addQuantidade: "//span[@class='btn-action']",
        retiraQuantidade: "//span[@class='btn-action-decrement']",
        continuar: "//a[normalize-space()='Continuar']",
    },

    login: {
        login: "//input[@id='login']",
        usuario: "ferrigatitrabalho@hotmail.com",
        password: "//input[@id='password']",
        senha: "Teste@123!",
        entrar: "//button[normalize-space()='Continuar']",
    },

    entrega: {
        opcoes: "//div[@class='delivery-actions-container ']//button[@class='btn-delivery'][normalize-space()='Escolher forma de entrega']",
        retire: "//div[contains(@class,'block-options')]//div[contains(@class,'option')]//div[2]//div[1]//div[2]//i[1]",
        cidade: "//div[@class='row']//div[1]//div[2]//i[1]",
        dia: "//div[@id='2025-01-25']",
        hora: "//div[contains(@class,'PickupDeliveryContainer')]//div[1]//div[2]//i[1]",
        finalizar: "//button[normalize-space()='Finalizar compra']",
    },

    pagamentoBoleto: {
        boleto: "//span[normalize-space()='Boleto bancário']",
        confirmaBoleto: "//button[@class='btn btn-btn btn-primary btn-buy ']",
        codigoBoleto: "//textarea[@class='contrast copy-text']",
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
