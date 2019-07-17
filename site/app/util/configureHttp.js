import {configureHttp} from '@truefit/http-utils';

export default () => {
  configureHttp({
    baseConfig: {
      baseURL: process.env.API_BASE_URL,
    },
  });
};
