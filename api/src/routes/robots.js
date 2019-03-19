import {GET} from 'node-bits';

export default class Sitemap {
  getRoute(verb) {
    if (verb === GET) {
      return 'robots.txt';
    }

    return null; // will use the folder structure for all other verbs
  }

  get(req, res) {
    res.status(200).send('User-agent: *\nAllow: /');
  }
}
