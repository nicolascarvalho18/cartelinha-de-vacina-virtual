document.addEventListener('DOMContentLoaded', function() {
    const vacinas = [
        { nome: 'Hepatite B', data: '2024-01-01', tomada: true },
        { nome: 'BCG', data: '2024-02-01', tomada: true },
        { nome: 'Pentavalente', data: '2024-03-01', tomada: false },
        { nome: 'VIP (Poliomielite)', data: '2024-04-01', tomada: false },
        { nome: 'Rotavírus', data: '2024-05-01', tomada: false }
    ];

    const tabela = document.getElementById('vacina-tabela');

    vacinas.forEach(vacina => {
        const linha = document.createElement('tr');

        const celulaNome = document.createElement('td');
        celulaNome.textContent = vacina.nome;
        linha.appendChild(celulaNome);

        const celulaData = document.createElement('td');
        celulaData.textContent = vacina.data;
        linha.appendChild(celulaData);

        const celulaStatus = document.createElement('td');
        if (vacina.tomada) {
            celulaStatus.textContent = 'Tomada';
            celulaStatus.classList.add('status-verde');
        } else {
            celulaStatus.textContent = 'Não Tomada';
            celulaStatus.classList.add('status-vermelho');
        }
        linha.appendChild(celulaStatus);

        tabela.appendChild(linha);
    });
});
