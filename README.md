# Simple Codemash Schedule

This project is intended to be a quick, simple, vertical schedule for CodeMash. It currently points at the CodeMash API for CodeMash 2019.

## Live Site

You can find the live site at [https://simplecodemashschedule.herokuapp.com](https://simplecodemashschedule.herokuapp.com)

## Small Details

The site saves all data (including favorites) in the users local storage (currently no syncing across devices). It will pull the latest from the CodeMash API on each page refresh.

The "api" directory contains a small simple nodejs server that just serves the react app currently. It's intentionally very thin.

## Contributing

I built this site to serve my personal preferences. That said, I'm more than happy to have others contribute and make it into something more than I envisioned. Please see the contributing.md in this repo for guidance.
