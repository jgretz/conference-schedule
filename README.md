# Conference Schedule

This project is intended to be a quick, simple, vertical schedule for conferences. The short idea is to have a
standard UI that can be taught to point at the datasource of any conference.

The following conferences are implemented:

- CodeMash (data from the CodeMash API)
- CodeStock (data scraped from their schedule page)
- StirTrek (data scraped from their schedule page)

## Live Site

You can find the live site at [http://www.altconfschedule.com/](http://www.altconfschedule.com/)

## Site Details

The site saves all data (including favorites) in the users local storage (currently no syncing across devices). It will pull the latest from the respective datasource on each page refresh, but will display anything locally stored immediately.

## API Details

In general, the "api" directory contains a small simple nodejs server that serves the react app currently. It's intentionally very thin.

That said, since some conferences do not provide APIs to their data, I need to do some screen scraping to get the data into a consumable format. This logic is contained in the api layer

## Contributing

I built this site to serve my personal preferences. That said, I'm more than happy to have others contribute and make it into something more than I envisioned. Please see the contributing.md in this repo for guidance.

### Ideas for Contribution

- I'd like to add an easy way to share your favorites across devices that doesn't require a server on my end.
- I'd like to not have to use the package.prod.json file in the build script for the site. This should be able to be created at build time from the api/package.json.
- Other conferences integrations are welcome
- Whatever you might think of :)
