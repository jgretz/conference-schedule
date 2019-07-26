const PRODUCTION = 'PRODUCTION';

export default (process.env.NODE_ENV === PRODUCTION
  ? {
    bitlyToken: process.env.bitlyToken,
  }
  : {
    bitlyToken: require('./private').default.bitlyToken,
  });
