const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Grant
  urlTitle: grant
  date: 2017 MARCH
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Oakland, CA.
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
  urlTitle: brett-0
  date: 2013
  size: ''
  info: Nikon D800 - 50mm
  arrows: dark
  description: Taken in Saratoga, CA.
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
  urlTitle: brett-1
  date: 2013
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Saratoga, CA.
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
  urlTitle: danielle
  date: 2011
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Walnut Creek, CA.
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
  urlTitle: devon-&-matt
  date: 
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Oakland, CA.
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
  urlTitle: jeanne-marie-0
  date: 
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Martinez, CA.
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
  urlTitle: jeanne-marie-1
  date: 
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Walnut Creek, CA.
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
  urlTitle: justin
  date: 
  size: ''
  info: Nikon D800 - 50mm
  arrows: light
  description: Walnut Creek Skatepark.
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
