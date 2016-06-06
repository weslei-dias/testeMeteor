import { Livros } from '../livros';

import '../methods';


Meteor.publish('Livros', () => {
    return Livros.find();
});