const mongoose = require('mongoose');


// Conexión a la base de datos de MongoDB
mongoose.connect(process.env.DATABASE_URL, {

})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });
 