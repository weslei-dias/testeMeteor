import {Livros} from '../../api/livros/livros'


Template.listaLivros.helpers({
    livros() {
        const livros = Livros.find();
        if ( livros ) {
            return livros;
        }
    }
});
