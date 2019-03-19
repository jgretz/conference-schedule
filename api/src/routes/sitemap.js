import {GET} from 'node-bits';

export default class Sitemap {
  getRoute(verb) {
    if (verb === GET) {
      return 'sitemap.xml';
    }

    return null; // will use the folder structure for all other verbs
  }

  get(req, res) {
    res.header('Content-Type', 'text/xml');
    res.status(200).send(`
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
          <loc>http://www.altconfschedule.com/</loc>
        </url>
        <url>
          <loc>http://www.altconfschedule.com/codemash</loc>
        </url>
        <url>
          <loc>http://www.altconfschedule.com/codestock</loc>
        </url>
        <url>
          <loc>http://www.altconfschedule.com/stirtrek</loc>
        </url>
        <url>
          <loc>http://www.altconfschedule.com/about</loc>
        </url>
      </urlset>
    `);
  }
}
