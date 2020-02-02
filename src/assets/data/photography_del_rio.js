const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Matt & Brett
  urlTitle: matt-&-brett
  date: SEPTEMBER 2012
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Taking one of the portraits for the poster art.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 999
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533

- title: Ryan & Joel
  urlTitle: ryan-&-joel
  date: OCTOBER 2012
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: This is Ryan, he wrote the music for Del Rio and was the train conductor.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 1073
    Medium:
      width: 1100
      height: 787
    Small:
      width: 800
      height: 572

- title: Safe Cab Lit Up
  urlTitle: safe-cab-lit-up
  date: MARCH 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: The safe cab miniture interior lit up on the greenscreen.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 994
    Medium:
      width: 1100
      height: 729
    Small:
      width: 800
      height: 530

- title: Miniature Setup
  urlTitle: miniature-setup
  date: APRIL 2012
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Matt hanging a miniature version of a still life he painted in 2007.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 999
    Medium:
      width: 1100
      height: 733
    Small:
      width: 800
      height: 533

- title: Interior Lit Up
  urlTitle: interior-lit-up
  date: AUGUST 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: A full view of the miniature passenger interior set lit up.
  arrows: light
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

- title: Directing Our Parents
  urlTitle: directing-our-parents
  date: JULY 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Matt explaining how to act scared of someone pointing a gun at them.
  arrows: light
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

- title: Playback
  urlTitle: playback
  date: JULY 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Reviewing takes we just filmed of my dad and mom who are both passengers on the train.
  arrows: light
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

- title: Andy
  urlTitle: andy
  date: NOVEMBER 2012
  orientation: portrait
  info: Nikon Nikomat FTn - 50mm
  description: After many takes of him pretending to get shot.
  arrows: dark
  sizes:
    Large:
      width: 804
      height: 1200
    Medium:
      width: 603
      height: 900
    Small:
      width: 402
      height: 600

- title: Burning The Barn
  urlTitle: burning-the-barn
  date: AUGUST 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: The night we burned the barn was a very important becuase we only had one chance to get it right.
  wip:  I planned a shot list for the night and we had to move fast setting up each next 
  arrows: dark
  sizes:
    Large:
      width: 1500
      height: 1082
    Medium:
      width: 1100
      height: 703
    Small:
      width: 800
      height: 577


- title: Burning The Barn 2
  urlTitle: burning-the-barn-02
  date: AUGUST 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
  arrows: dark
  sizes:
    Large:
      width: 1500
      height: 1080
    Medium:
      width: 1100
      height: 792
    Small:
      width: 800
      height: 576

- title: Creating The Desert
  urlTitle: creating-the-desert
  date: MAY 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: Matt imagining the opening shot of Del Rio.
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 1081
    Medium:
      width: 1100
      height: 793
    Small:
      width: 800
      height: 577
`);

module.exports = { data };
