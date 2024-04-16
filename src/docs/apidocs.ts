import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    format: '.json',
    verbose: false,
    failOnErrors: false,
    encoding: 'utf8',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de cadastro de Usuarios',
        version: '1.0.0', 
        description: 'Documentação da API de Cadastro de Usuarios',
      },
      servers: [
        {
          url: 'localhost:3333', 
        },
      ],
    },
    
    apis: ['./src/route/UserRoute.js'],
  };

export const specs = swaggerJsdoc(options)