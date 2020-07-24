
const ymlLoader = require('js-yaml');
const { startImg } = require('../../utils/utils');

const film = require('./photography_film_sections.js');
const digital = require('./photography_digital_sections.js');
// const clientStart = require('../../assets/data/photography_client.js').data[0];
const delRio = require('../../assets/data/photography_del_rio.js');

// Maybe have this on a per film / digital basis? Maybe only do this for film?
// - title: Sets
//   href: /photography/sets/sections
//   fontStyles:
//   sizes:
//     Large:
//       width: 1500
//       height: 998
//     Medium:
//       width: 1100
//       height: 732
//     Small:
//       width: 800
//       height: 532

const data = ymlLoader.load(`
- title: Film
  href: /photography/film/sections
  length: ${film.length}
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

- title: Digital
  href: /photography/digital/sections
  length: ${digital.length}
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

- title: Del Rio
  href: /photography/del-rio/${startImg(delRio).urlTitle}
  length: ${delRio.data.length}
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

      // - title: Client
//   href: /photography/client/${clientStart.title.split(' ').join('-').toLowerCase()}
//   fontStyles:
//   sizes:
//     Large:
//       width: 1500
//       height: 998
//     Medium:
//       width: 1100
//       height: 732
//     Small:
//       width: 800
//       height: 532