
const ymlLoader = require('js-yaml');
const { startImg } = require('../../utils/utils');

const blackAndWhite = require('../../assets/data/photography_film_black-&-white.js');
const desk = require('../../assets/data/photography_film_desk.js');
const places = require('../../assets/data/photography_film_places.js');
const nature = require('../../assets/data/photography_film_nature.js');
const people = require('../../assets/data/photography_film_people.js');
const things = require('../../assets/data/photography_film_things.js');

const length = people.data.length 
  + nature.data.length 
  + places.data.length 
  + things.data.length 
  + desk.data.length
  + blackAndWhite.data.length;

const data = ymlLoader.load(`
- title: People
  href: /photography/film/people/${startImg(people).id}
  length: ${people.data.length}
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
  href: /photography/film/nature/${startImg(nature).id}
  length: ${nature.data.length}
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
  href: /photography/film/places/${startImg(places).id}
  length: ${places.data.length}
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
  href: /photography/film/black-&-white/${startImg(blackAndWhite).id}
  length: ${blackAndWhite.data.length}
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
  href: /photography/film/things/${startImg(things).id}
  length: ${things.data.length}
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
  href: /photography/film/desk/${startImg(desk).id}
  length: ${desk.data.length}
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

module.exports = { data, length };
