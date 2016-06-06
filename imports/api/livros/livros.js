import {Mongo} from 'meteor/mongo';

export const Livros = new Mongo.Collection('livros');

Livros.schema = new SimpleSchema({
    titulo: {
        type: String,
        label: 'The title of the document.'
    },
    autor : 
    {
        type : String,
        label : `Autor do livro.`
    }
});

Livros.attachSchema(Livros.schema);