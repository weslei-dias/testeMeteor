//import {Livros} from '/imports/api/livros/livros';

//COMENTARIO PARA FAZER O COMMIT

module.exports = function() {
    this.After( function() {
        server.execute( function() {
            var livro = Meteor.livros.findOne( { titulo: 'Testando automação com o CHIMP', autor: 'Weslei Dias' } );
            if ( livro ) {
                Meteor.livros.remove( livro._id );
            }
        });
    });

    this.Given( /^que eu tenha adicionado um livro$/, function () {
        browser.url( 'http://localhost:3000' )
            .setValue( '[name="titulo"]', 'Testando automação com o CHIMP !' )
            .setValue( '[name="autor"]', 'Weslei Dias' )
            .submitForm( 'form' );
    });

    this.Then(/^eu consigo visualizar "([^"]*)" na lista de livros$/, function (tituloLivro) {
        var getLivro = server.execute( function(tituloLivro) {
            return Meteor.livros.findOne( { titulo: tituloLivro } );
        }, tituloLivro );

        expect( getLivro.titulo ).toEqual( tituloLivro );
    });
};
