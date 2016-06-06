import {Livros} from '../../api/livros/livros'

//COMENTARIO LEGAL
Template.listaLivros.helpers({
    livros() {
        const livros = Livros.find();
        if ( livros ) {
            return livros;
        }
    }
});
