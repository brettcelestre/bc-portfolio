
const ymlLoader = require('js-yaml');

const blackAndWhiteStart = require('../../assets/data/photography_film_black-&-white.js').data[0];
const deskStart = require('../../assets/data/photography_film_desk.js').data[0];
const placesStart = require('../../assets/data/photography_film_places.js').data[0];
const natureStart = require('../../assets/data/photography_film_nature.js').data[0];
const peopleStart = require('../../assets/data/photography_film_people.js').data[0];
const thingsStart = require('../../assets/data/photography_film_things.js').data[0];

const data = ymlLoader.load(`
- title: People
  href: /photography/film/people/${peopleStart.title.split(' ').join('-').toLowerCase()}
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532

- title: Nature
  href: /photography/film/nature/${natureStart.title.split(' ').join('-').toLowerCase()}
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532

- title: Places
  href: /photography/film/places/${placesStart.title.split(' ').join('-').toLowerCase()}
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532

- title: Black & White
  href: /photography/film/black-&-white/${blackAndWhiteStart.title.split(' ').join('-').toLowerCase()}
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532

- title: Things
  href: /photography/film/things/${thingsStart.title.split(' ').join('-').toLowerCase()}
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532

- title: Desk
  href: /photography/film/desk/${deskStart.title.split(' ').join('-').toLowerCase()}
  fontStyles:
  sizes:
    Large:
      width: 1500
      height: 998
    Medium:
      width: 1100
      height: 732
    Small:
      width: 800
      height: 532
`);

module.exports = { data };
