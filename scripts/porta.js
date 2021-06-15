onload = () => {
    const API_KEY = 'a99c516afeb73b4ae05aea918068ca57'

    noticias = function(){
        let divTela = document.querySelector('.tela');
        let texto = '';

        // Montar texto HTML das notícias

        let dados = JSON.parse (this.responseText);
     
        for (i = 0; i < dados.results.length; i++)
        {
            let artigo = dados.results[i];
            let data = new Date (artigo.release_date);

            texto = texto + `
            <div class="box-noticia col-12 col-lg-12 col-md-12 col-sm-12">
                <img class="poster_filme" src="http://image.tmdb.org/t/p/w200/${artigo.poster_path}"  alt="">
                <div class="box-info">
                    <span class="titulo_filme">${artigo.title}</span><br>
                    <span class="release_date">${data.toLocaleDateString()} - Conteúdo adulto (${artigo.adult})</span><br>
                    <span class="overview">${artigo.overview}
                    <br>
                    <a href="https://www.themoviedb.org/movie/${artigo.id}?language=pt-BR">Leia mais...</a></span>
                </div>
            </div>               
            `;
        };


        // Preencher a DIV com o texto HTML

        divTela.innerHTML = texto;
    }

    pesquisa = () =>{
        let query2 = document.getElementById('txtPesquisa').value;

        let xhr = new XMLHttpRequest();
        xhr.onload = noticias;
        xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query2}`);
        xhr.send();

    }

    document.getElementById('btnPesquisa').addEventListener ('click', pesquisa);

}