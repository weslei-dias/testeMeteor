/*
describe( 'Adicionar livro', function() {

    it('Para criar um novo livro @watch', function(){
        browser.url('http://localhost:3000')
            .setValue('[name="titulo"]', 'Testando automação com o CHIMP')
            .setValue('[name="autor"]', 'Weslei Dias')
            .submitForm('form');

        var obterLivro = server.execute(function () {
            return Livros.findOne({titulo: 'Testando automação com o CHIMP'});
        });

        expect(obterLivro.titulo).to.equal('Testando automação com o CHIMP');
    });

    afterEach( function() {
        server.execute( function() {
            var livro = Livros.findOne( { titulo: 'Testando automação com o CHIMP', autor: 'Weslei Dias' } );
            if ( livro ) {
                Livros.remove( livro._id );
            }
        });
    });
});

    */