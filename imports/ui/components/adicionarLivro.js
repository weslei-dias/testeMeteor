import { Template } from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import {Livros} from '../../api/livros/livros';


let template;

Template.addLivro.onCreated(() => {

    template = Template.instance();

    template.subscribe('Livros');

    template.livros = () => {
        return Livros.find();
    }

});

Template.addLivro.helpers({
    'livros': () => {
       return template.livros();
    }
});

Template.addLivro.events({
    'submit form' (event, template){
        event.preventDefault();

        const livro = {
            titulo: template.find('[name="titulo"]').value.trim(),
            autor : template.find('[name="autor"]').value.trim(),
            editora: template.find('[name="editora"]').value.trim()
        };

        if (livro.titulo !== '' && livro.autor !== '') {
            Meteor.call('Livros.insert', livro, (error) => {
                if (error) {
                    alert(error.reason);
                } else {
                    template.find('form').reset();
                }
            });
        } else {
            alert('Insisra um título e autor do livro antes de adicionar um livro!.')
        }
    }
});