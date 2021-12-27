const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Matt
  urlTitle: matt
  id: 96916e8c-8603-48dc-8940-c8739defd2cd
  v: v1606269743
  date: MARCH 2013
  year: 2013
  month: March
  day: 
  size: 
  orientation: portrait
  description: Matt painting the train interiors for our short film Del Rio
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 799
      height: 1200
    Medium:
      width: 599
      height: 900
    Small:
      width: 399
      height: 600

- title: Living Room
  urlTitle: living-room
  id: 0b5362a6-6bba-4ef5-b711-bf25191e3324
  v: v1606269774
  date: 2013
  year: 2013
  month: 
  day: 
  size: 
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 983
    Medium:
      width: 1100
      height: 721
    Small:
      width: 800
      height: 524

- title: Jeanne-Marie
  urlTitle: jeanne-marie
  id: b07bb723-eaec-465b-95c8-9271d64ec01e
  v: v1606269804
  date: MARCH 2013
  year: 2013
  month: March
  day: 
  size: 
  orientation: landscape
  description: Jeanne-Marie
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1004
    Medium:
      width: 1100
      height: 736
    Small:
      width: 800
      height: 535

- title: Santa Cruz
  urlTitle: santa-cruz
  id: 64993074-c697-4728-a490-329b1bf63c17
  v: v1606269838
  date: 2013
  year: 2013
  month: 
  day: 
  size: 
  orientation: landscape
  description: Santa Cruz, CA
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1004
    Medium:
      width: 1100
      height: 736
    Small:
      width: 800
      height: 535

- title: SJSU 0
  urlTitle: sjsu-0
  id: 989476f6-bb79-401d-a03a-a416c1a4b91a
  v: v1606269865
  date: 2013
  year: 2013
  month: 
  day: 
  size: 
  orientation: landscape
  description: San Jose State University
  arrows: light
  info: Nikon Nikomat FTn - 50mm
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

- title: SJSU 1
  urlTitle: sjsu-1
  id: dbe00f7e-25f1-467a-b569-de01c62c3dac
  v: v1606269893
  date: 2013
  year: 2013
  month: 
  day: 
  size: 
  orientation: portrait
  description: San Jose State University
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 809
      height: 1200
    Medium:
      width: 607
      height: 900
    Small:
      width: 405
      height: 600

- title: Me
  urlTitle: me
  id: c3cf4069-225f-4bf2-8844-f06cbaa4a4ef
  v: v1606269920
  date: 2011
  year: 2011
  month: 
  day: 
  size: 
  orientation: landscape
  description: I
  arrows: dark
  info: Nikon N55 - 50mm
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
