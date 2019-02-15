import nodeBits, {GET, POST, PUT, DELETE, OPTIONS} from 'node-bits';
import nodeBitsExpress, {cors, bodyParser} from 'node-bits-express';
import nodeBitsSpa from 'node-bits-spa';
import nodeBitsCode from 'node-bits-code';

import {configureCompression} from './util';

nodeBits([
  nodeBitsExpress({
    port: process.env.port || 4000,
    configurations: [
      cors({methods: [GET, POST, PUT, DELETE, OPTIONS]}),
      bodyParser(),
      configureCompression(),
    ],
  }),
  nodeBitsCode({
    path: __dirname,
  }),
  nodeBitsSpa({
    path: `${__dirname}/site`,
  }),
]);
