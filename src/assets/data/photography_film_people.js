const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: AJ
  urlTitle: aj
  date: 2011
  size: ''
  orientation: landscape
  description: Taken for a Forbidden Science From Outer Space website
  arrows: light
  info: Alan Blaustiens camera... - 50MM
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
  info: Alan Blaustiens camera... - 50MM
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

- title: Brendon
  urlTitle: brendon
  date: 2009
  size: ''
  orientation: landscape
  description: Reflecting body as a life vessel in Briones Regional Park
  arrows: dark
  info: Nikon N55 - 50MM
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
  info: Nikon N55 - 50MM
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

- title: Geoff
  urlTitle: geoff
  date: 2016
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Current Nikon - 50MM
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

- title: Jeff
  urlTitle: jeff
  date: 2011
  size: ''
  orientation: portrait
  description: 
  arrows: dark
  info: Alan Blaustiens camera... - 50MM
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

- title: Jenny & Scott
  urlTitle: jenny-&-scott
  date: 2007
  size: ''
  orientation: landscape
  description: Pismo Beach, CA
  arrows: dark
  info: Nikon N55 - 50MM
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

- title: Jeanne-Marie
  urlTitle: jeanne-marie
  date: 2015
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Current Nikon - 50MM
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

- title: Jeanne-Marie 1
  urlTitle: jeanne-marie-1
  date: 2011
  size: ''
  orientation: landscape
  description: San Jose, CA
  arrows: light
  info: Alan Blaustiens camera... - 50MM
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
  date: 2011
  size: ''
  orientation: portrait
  description: San Jose, CA
  arrows: dark
  info: Alan Blaustiens camera... - 50MM
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

- title: Jeanne-Marie 3
  urlTitle: jeanne-marie-3
  date: 2015
  size: ''
  orientation: landscape
  description: Creating a Cuban cookbook for Maria
  arrows: dark
  info: Current Nikon - 50MM
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
  description: Briones art trip
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

- title: Matt 3
  urlTitle: matt-3
  date: 2011
  size: ''
  orientation: landscape
  description: 
  arrows: light
  info: Alan Blaustiens camera... - 50MM
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
  date: 2010
  size: ''
  orientation: landscape
  description: Drunk on a beach in Mexico
  arrows: dark
  info: Alan Blaustiens camera... - 50MM
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
  info: Alan Blaustiens camera... - 50MM
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

- title: Scott
  urlTitle: scott
  date: 2008
  size: ''
  orientation: portrait
  description: 
  arrows: dark
  info: Nikon N55 - 50MM
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
`);

module.exports = { data };
