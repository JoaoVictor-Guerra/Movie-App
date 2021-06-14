onload = () => {

    const API_KEY = 'a99c516afeb73b4ae05aea918068ca57'

    filmesPopulares = function(){
        let divTela = document.querySelector('.tela');
        let texto = '';

        let dados = JSON.parse (this.responseText);
     
        for (i = 0; i < 3; i++)
        {
            let artigo = dados.results[i];
            let data = new Date (artigo.release_date);

            texto = texto + `
            <div class="col-12 col-lg-4 col-md-6 col-sm-12 filmes_populares">
                <img class="popularesimg" src="http://image.tmdb.org/t/p/w300/${artigo.poster_path}" alt="">
                <div class="texto_populares">
                    <h3 class="titulo_populares">${artigo.title}</h3>
                    <hr class="line">
                    <p class = "texto_popular descri_popular">${artigo.overview}</p>
                    <span><p class = "texto_popular data_popular">${data.toLocaleDateString()} || Adulto: ${artigo.adult} </p><span>
                    <br>
                    <span><a href="https://www.themoviedb.org/movie/${artigo.id}?language=pt-BR" class="leia_mais">Leia mais</a></span>
                </div>
            </div>
        `
        }

        divTela.innerHTML = texto;

    }

    pesquisa = () => {

        let xhr = new XMLHttpRequest();
        xhr.onload = filmesPopulares;
        xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
        xhr.send();

    }

    pesquisa();

}