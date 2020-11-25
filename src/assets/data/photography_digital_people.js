const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Grant
  urlTitle: grant
  id: 8ccea559-70d0-46cb-b289-8c7934856192
  v: v1606274932
  date: MARCH 2017
  size: ''
  description: Taken in Oakland, CA
  orientation: landscape
  arrows: light
  info: Nikon D800 - 50mm
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
  id: 3f55e1b8-3503-4c09-92ee-495c70184397
  v: v1606274987
  date: 2013
  size: ''
  description: Taken in Saratoga, CA
  orientation: landscape
  arrows: light
  info: Nikon D800 - 50mm
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
  id: 2ed39276-2b72-45d1-be4a-36b7ea6ce996
  v: v1606275018
  date: 2013
  size: ''
  orientation: landscape
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Saratoga, CA
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
  id: d4751e40-a971-42fb-8b65-0fad68583b6b
  v: v1606275051
  date: 2011
  size: ''
  orientation: landscape
  info: Nikon D800 - 50mm
  arrows: light
  description: Taken in Walnut Creek, CA
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
  id: 5beb841f-abb0-4593-a7a3-f6697d931251
  v: v1606275084
  date: APRIL 2012
  size: ''
  description: Taken in Oakland, CA
  info: Nikon D800 - 50mm
  arrows: light
  orientation: landscape
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
  id: fb00b95c-56d6-4e06-bb53-789da66c418e
  v: v1606275119
  date: OCTOBER 2014
  size: ''
  description: Taken in Martinez, CA
  orientation: portrait
  arrows: dark
  info: Nikon D800 - 50mm
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
  id: aaafd1bf-7ab1-4480-89ea-93b0f6638e8d
  v: v1606275160
  date: 2013
  size: ''
  description: Walnut Creek, CA
  orientation: landscape
  arrows: light
  info: Nikon D800 - 50mm
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
  id: 44dcd4c0-4c6b-4a02-8168-a884aa14c6e8
  v: v1606275187
  date: 2013
  size: ''
  description: Walnut Creek Skatepark
  orientation: landscape
  arrows: light
  info: Nikon D800 - 50mm
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
