const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Grant
  date: 2017 MARCH
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Brett 0
  date: 2013
  size: ''
  description: 
  arrows: dark
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Brett 1
  date: 2013
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Danielle
  date: 2011
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Devon & Matt
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Jeanne-Marie 0
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 801
      height: 1200
    Medium:
      width: 601
      height: 900
    Small:
      width: 400
      height: 600

- title: Jeanne-Marie 1
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1001
    Medium:
      width: 1100
      height: 734
    Small:
      width: 800
      height: 534

- title: Justin
  date: 
  size: ''
  description: 
  arrows: light
  info: Nikon D800 - 50MM
  sizes:
    Large:
      width: 1500
      height: 1000
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533
`);

module.exports = { data };
