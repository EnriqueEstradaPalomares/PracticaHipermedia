if(process.env.NODE_ENV === 'production'){
    //estamos en produccion - regresa las credenciales de produccion
    module.exports = require('./prod.js')
   }
   else{
   //estamos en desarrollo - regresa las credenciales de desarrollo
   module.exports = require('./dev.js')
   }