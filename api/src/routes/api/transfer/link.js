import {BitlyClient} from 'bitly';
import constants from '../../../constants';

export default {
  post: async (req, res) => {
    try {
      const json = JSON.stringify(req.body.favorites);
      const encodedJSON = encodeURIComponent(json);
      const link = `http://altconfschedule.com?favorites=${encodedJSON}`;

      const bitly = new BitlyClient(constants.bitlyToken);
      const result = await bitly.shorten(link);

      res.json({link: result.url});
    } catch (err) {
      console.error(err); // eslint-disable-line
      res.status(500).send();
    }
  },
};
