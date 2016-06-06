import { Livros } from './livros';


Meteor.methods({
    'Livros.insert' (livro) {
        Livros.insert(livro, (error) => {
            if (error){
                console.log(error);
            }
        });
    }
});