var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require('express-validator');
const Utente = require('../models/Utente');

async function getClienti() {
	try {
	  const clienti = await Utente.find();
	  return clienti;
	} catch (error) {
	  throw new Error('Impossibile ottenere i clienti');
	}
  };

  module.exports =  {
	getClienti
};