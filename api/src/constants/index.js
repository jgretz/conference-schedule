const PRIVATE = require('./private.js');
const PRODUCTION = 'PRODUCTION';

export default {
  bitlyToken:
    process.env.NODE_ENV === PRODUCTION
      ? process.env.bitlyToken
      : PRIVATE.default.bitlyToken,
};
