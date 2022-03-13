const { response, request } = require('express');


const usuariosGet = (req, res) => {

  const { q, nombre = 'Erick', apikey } = req.query;

  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey
  });
}

const usuariosPost = (req, res) => {

  const {nombre, edad} = req.body;

  res.status(201).json({
    msg: 'post API - controlador',
    nombre,
    edad
  });
}

const usuariosPut = (req, res) => {

  const id = req.params.id;

  res.status(500).json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosDelete = (req, res) => {
  res.json({
    msg: 'delete API - controlador'
  });
}

const usuariosPatch = (req, res) => {
  res.json({
    msg: 'patch API - controlador'
  });
}



module.exports = {
  usuariosGet,
  usuariosPatch,
  usuariosDelete,
  usuariosPut,
  usuariosPost
}