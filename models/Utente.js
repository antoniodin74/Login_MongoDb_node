const mongoose = require('mongoose')
const utenteschema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required: true
    },
    indirizzo: {
        type: String,
    },
    citta: {
        type: String,
    },
    cap: {
        type: String,
    },
    piva: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: ''
    },
    note: {
        type: String,
        default: ''
    },
    fotoPath: {
        type: String,
        default: ''
    }
})

let Utente = mongoose.model('Utente', utenteschema, 'utenti')

module.exports = Utente