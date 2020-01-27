const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Matt & Brett
  urlTitle: matt-&-brett
  date: 2012
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
  date: 2012
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
  date: 2013
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
  date: 2012
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
  date: 2012
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
  date: 2013
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
  date: 2013
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
`);

module.exports = { data };
