var express = require('express');
var expressGraphql = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    message: String
  }
`);

var root = {
  message: (m) => "Hello World!"
}

module.exports = {
  schema,
  root
}
