class Filme {
    constructor(public titulo: string, public ano: number) {}
}

class Acao extends Filme {
    categoria: string = "Ação";
}

class Romance extends Filme {
    categoria: string = "Romance";
}

const listaDeFilmes: (Acao | Romance)[] = [
    new Acao("Duro de Matar", 1988),
    new Acao("Mad Max: Estrada da Fúria", 2015),
    new Romance("Simplesmente Acontece", 2014),
    new Romance("Titanic", 1997),
    new Acao("John Wick", 2014),
];

function recomendarFilmes(categoria: string): void {
    const filmesRecomendados = listaDeFilmes.filter(filme => filme.categoria === categoria);
    
    if (filmesRecomendados.length === 0) {
        console.log(`Nenhum filme na categoria "${categoria}" foi encontrado.`);
    } else {
        console.log(`Filmes Recomendados na categoria "${categoria}":`);
        filmesRecomendados.forEach(filme => {
            console.log(`Título: ${filme.titulo}, Ano: ${filme.ano}`);
        });
    }
}

recomendarFilmes("Ação");
recomendarFilmes("Romance");