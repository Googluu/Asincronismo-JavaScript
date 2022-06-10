const boom = require('@hapi/boom');
// tiene que ser dinámico
function validatorHandler(schema, property) { //clousures
  return (req, res, next) => { //middleware
    const data = req[property];  // puede venir en body, params, o query
    const { error } = schema.validate(data, { abortEarly: false });// para que envíe todos los errores juntos
    if (error) {
      next(boom.badRequest(error));
    }
    next(); //si no hay error sigue fresco tranquilo
  }
}

module.exports = validatorHandler;

