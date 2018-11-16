const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: AJ
  urlTitle: aj
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: dark
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: dark
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: dark
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
  date: 
  size: ''
  description: 
  arrows: light
  info: ''
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
