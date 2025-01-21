const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        listaAmigos.push(nome);
        atualizarLista();
        input.value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const sorteados = [...listaAmigos];
    const pares = [];

    sorteados.forEach((_, i) => {
        const amigo1 = sorteados.splice(Math.random() * sorteados.length, 1)[0];
        const amigo2 = sorteados.length
            ? sorteados.splice(Math.random() * sorteados.length, 1)[0]
            : sorteados[0];
        
        if (amigo1 && amigo2) {
            pares.push(`${amigo1} tirou ${amigo2}`);
        }
    });

    pares.forEach(par => {
        const li = document.createElement('li');
        li.textContent = par;
        resultado.appendChild(li);
    });
}
