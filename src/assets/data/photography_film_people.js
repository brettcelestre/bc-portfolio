const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Matt 5
  urlTitle: matt-5
  date: 2019
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1009
    Medium:
      width: 1100
      height: 740
    Small:
      width: 800
      height: 538

- title: Eric & Jeff
  urlTitle: eric-&-jeff
  date: 2019
  size: ''
  orientation: landscape
  description: Happy Camp, CA
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1017
    Medium:
      width: 1100
      height: 746
    Small:
      width: 800
      height: 543

- title: Charlotte & Scott
  urlTitle: charlotte-&-scott
  date: OCTOBER 2018
  size: ''
  orientation: landscape
  description: Aptos, CA
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1015
    Medium:
      width: 1100
      height: 745
    Small:
      width: 800
      height: 541

- title: Jeanne-Marie Madrid
  urlTitle: jeanne-marie-madrid
  date: AUGUST 2018
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 730
    Small:
      width: 800
      height: 531

- title: Jeanne-Marie Eixample
  urlTitle: jeanne-marie-eixample
  date: AUGUST 2018
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 730
    Small:
      width: 800
      height: 531


- title: Tram Driver
  urlTitle: tram-driver
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 796
      height: 1200
    Medium:
      width: 597
      height: 900
    Small:
      width: 398
      height: 600

- title: Jeanne-Marie Painting 3
  urlTitle: jeanne-marie-painting-3
  date: 2018
  size: ''
  orientation: landscape
  description: Painting a portrait of Grimes
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 945
    Medium:
      width: 1100
      height: 693
    Small:
      width: 800
      height: 504

- title: Grant
  urlTitle: grant
  date: MARCH 27, 2017
  day: 27
  year: 2017
  size: ''
  orientation: landscape
  description: Oakland, CA
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 949
    Medium:
      width: 1100
      height: 696
    Small:
      width: 800
      height: 506

- title: Matt & Me Editing
  urlTitle: matt-&-me-editing
  date: 2017
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 945
    Medium:
      width: 1100
      height: 693
    Small:
      width: 800
      height: 504

- title: Jeanne-Marie Watching Construction
  urlTitle: jeanne-marie-watching-construction
  date: 2016
  size: ''
  orientation: landscape
  description: Concord, CA
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 990
    Medium:
      width: 1100
      height: 726
    Small:
      width: 800
      height: 528

- title: Geoff
  urlTitle: geoff
  date: 2016
  size: ''
  orientation: landscape
  description: San Bruno, CA
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 995
    Medium:
      width: 1100
      height: 730
    Small:
      width: 800
      height: 531

- title: Jeanne-Marie Painting 2
  urlTitle: jeanne-marie-painting-2
  date: 2015
  size: ''
  orientation: landscape
  description: Creating a Cuban cookbook for her sister Maria
  arrows: dark
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1014
    Medium:
      width: 1100
      height: 743
    Small:
      width: 800
      height: 541
  
- title: Jeanne-Marie
  urlTitle: jeanne-marie
  date: 2015
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 956
    Medium:
      width: 1100
      height: 701
    Small:
      width: 800
      height: 510

- title: Jeanne-Marie Shooting
  urlTitle: jeanne-marie-shooting
  date: JANUARY 2013
  year: 2013
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1059
    Medium:
      width: 1100
      height: 777
    Small:
      width: 800
      height: 565

- title: Jeanne-Marie Buzzed
  urlTitle: jeanne-marie-buzzed
  date: JANUARY 2013
  year: 2013
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1074
    Medium:
      width: 1100
      height: 788
    Small:
      width: 800
      height: 573

- title: Masked Strangers
  urlTitle: masked-strangers
  date: 2012
  year: 2012
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1071
    Medium:
      width: 1100
      height: 785
    Small:
      width: 800
      height: 571

- title: Jeanne-Marie 1
  urlTitle: jeanne-marie-1
  date: 2012
  size: ''
  orientation: landscape
  description: San Jose, CA
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1074
    Medium:
      width: 1100
      height: 788
    Small:
      width: 800
      height: 573

- title: Jeanne-Marie 2
  urlTitle: jeanne-marie-2
  date: 2012
  size: ''
  orientation: portrait
  description: San Jose, CA
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 854
      height: 1200
    Medium:
      width: 641
      height: 900
    Small:
      width: 427
      height: 600

- title: AJ
  urlTitle: aj
  date: 2011
  size: ''
  orientation: landscape
  description: Taken for a Forbidden Science From Outer Space website
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1076
    Medium:
      width: 1100
      height: 789
    Small:
      width: 800
      height: 574

- title: Allen
  urlTitle: allen
  date: 2011
  size: ''
  orientation: landscape
  description: Taken for a Forbidden Science From Outer Space website
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1448
      height: 1043
    Medium:
      width: 1066
      height: 767
    Small:
      width: 775
      height: 558

- title: Jeff
  urlTitle: jeff
  date: 2011
  size: ''
  orientation: portrait
  description: 
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 873
      height: 1200
    Medium:
      width: 654
      height: 900
    Small:
      width: 600
      height: 825
      TODO: update small file size so height is 600 instead of width

- title: Matt 3
  urlTitle: matt-3
  date: 2011
  size: ''
  taggedPeople:
    - Matthew Celestre
  orientation: landscape
  description: 
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1077
    Medium:
      width: 1100
      height: 790
    Small:
      width: 800
      height: 574

- title: Matt 4
  urlTitle: matt-4
  date: JANUARY 2011
  size: ''
  taggedPeople:
    - Matthew Celestre
  orientation: landscape
  description: Drunk on a beach in Mexico
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1074
    Medium:
      width: 1100
      height: 788
    Small:
      width: 800
      height: 573

- title: Ryan
  urlTitle: ryan
  date: 2011
  size: ''
  orientation: landscape
  description: Taken for a Forbidden Science From Outer Space website
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1077
    Medium:
      width: 1100
      height: 790
    Small:
      width: 800
      height: 575

- title: Brendon
  urlTitle: brendon
  date: 2009
  size: ''
  orientation: landscape
  description: Reflecting body as a life vessel in Briones Regional Park
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1075
    Medium:
      width: 1100
      height: 788
    Small:
      width: 800
      height: 573

- title: Eugene & Dale
  urlTitle: eugene-&-dale
  date: 2009
  size: ''
  orientation: landscape
  description: Interstate 24 West heading towards San Francisco
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1074
    Medium:
      width: 1100
      height: 787
    Small:
      width: 800
      height: 573

- title: Scott
  urlTitle: scott
  date: 2008
  size: ''
  orientation: portrait
  description: 
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 860
      height: 1200
    Medium:
      width: 789
      height: 1100
    Small:
      width: 574
      height: 800

- title: Jenny & Scott
  urlTitle: jenny-&-scott
  date: 2007
  size: ''
  orientation: landscape
  description: Pismo Beach, CA
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1076
    Medium:
      width: 1100
      height: 789
    Small:
      width: 800
      height: 574

- title: Matt
  urlTitle: matt
  date: 2007
  size: ''
  orientation: portrait
  description: 
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 859
      height: 1200
    Medium:
      width: 644
      height: 900
    Small:
      width: 429
      height: 600

- title: Matt 2
  urlTitle: matt-2
  date: 2007
  size: ''
  orientation: portrait
  description: Briones Regional Park art trip
  arrows: dark
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 855
      height: 1200
    Medium:
      width: 641
      height: 900
    Small:
      width: 427
      height: 600

- title: Jake
  urlTitle: jake
  date: 2007
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 857
      height: 1200
    Medium:
      width: 643
      height: 900
    Small:
      width: 429
      height: 600

- title: Jake & Brittany
  urlTitle: jake-&-brittany
  date: 2007
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 859
      height: 1200
    Medium:
      width: 644
      height: 900
    Small:
      width: 429
      height: 600

- title: Me
  urlTitle: me
  date: 2007
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon N55 - 50mm
  sizes:
    Large:
      width: 802
      height: 1200
    Medium:
      width: 602
      height: 900
    Small:
      width: 401
      height: 600
`);

module.exports = { data };


// - title: Tram Driver 2
//   urlTitle: tram-driver-2
//   date: 2018
//   size: ''
//   orientation: landscape
//   description: 
//   arrows: light
//   info: Nikon FM10 - 50mm
//   sizes:
//     Large:
//       width: 1500
//       height: 995
//     Medium:
//       width: 1100
//       height: 730
//     Small:
//       width: 800
//       height: 531