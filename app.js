document.addEventListener("DOMContentLoaded", function() {
    const selectedItems = [];
    let total = 0;
    const buttons = document.querySelectorAll('.add-btn');
    
    const itemsWithPrices = {
        "Feijão Tropeiro": 25,
        "Arroz à Grega": 20,
        "Frango Grelhado": 15,
        "Lasanha de Bolonhesa": 27,
        "Salada": 12,
        "Strogonoff de Carne": 30,
        "Arroz com Pequi": 22,
        "Carne de Panela": 28,
        "Peixe Assado": 35,
        "Macarrão ao Sugo": 18,
        "Frango à Milanesa": 20,
        "Feijoada": 40,
        "Quibe Assado": 24,
        "Baião de Dois": 27,
        "Escondidinho de Carne Seca": 32,
        "Refrigerante": 5,
        "Suco Natural": 8,
        "Água Mineral": 3,
        "Chá Gelado": 6,
        "Cerveja Artesanal": 15,
        "Água com Gás": 4,
        "Caipirinha": 18,
        "Água de Coco": 8,
        "Pudim de Leite": 10,
        "Bolo de Cenoura com cobertura de chocolate": 12,
        "Brigadeiro Gourmet": 5,
        "Mousse de Maracujá": 10,
        "Torta de Limão": 15,
        "Pavê de Chocolate": 14,
        "Petit Gateau": 16,
        "Palha Italiana": 10,
        "Salmão ao Molho de Limão": 40,
        "Pizza de Margherita": 25,
        "Risoto de Camarão": 45,
        "Wrap de Frango": 28
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const itemText = this.parentElement.innerText.split(" - ")[0];
            const itemPrice = itemsWithPrices[itemText];

            if (!selectedItems.find(i => i.name === itemText)) {
                selectedItems.push({ name: itemText, price: itemPrice });
                total += itemPrice;
                alert(`Você adicionou: ${itemText}`);
                atualizarResumo();
            } else {
                alert("Item já adicionado!");
            }
        });
    });

    document.getElementById('finalizar-pedido').addEventListener('click', function() {
        localStorage.setItem('orderDetails', JSON.stringify(selectedItems));
        window.location.href = 'pedido.html';
    });

    function atualizarResumo() {
        const pedidoItens = document.getElementById("pedido-itens");
        pedidoItens.innerHTML = "";

        selectedItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            pedidoItens.appendChild(li);
        });

        const totalElement = document.getElementById("total");
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
});
