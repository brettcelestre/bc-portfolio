const ymlLoader = require('js-yaml');

const data = ymlLoader.load(`
- title: Matt & Brett
  urlTitle: matt-&-brett
  id: 3f3c21e6-24b0-4729-bd31-cb959a58bec7
  v: v1606328518
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

- title: Burning The Barn
  urlTitle: burning-the-barn-1
  id: b7b113ae-73dd-470f-b700-0cd7ec50c2b7
  v: v1606328719
  date: AUGUST 9, 2013
  day: 9
  year: 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 1082
    Medium:
      width: 1100
      height: 793
    Small:
      width: 800
      height: 577

- title: Burning The Barn 2
  urlTitle: burning-the-barn-2
  id: 8942af9d-a04b-4fe1-a741-9dcc28804de8
  v: v1606328755
  date: AUGUST 9, 2013
  day: 9
  year: 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
  arrows: light
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

- title: Burning The Barn 3
  urlTitle: burning-the-barn-3
  id: b3c3df5a-d171-490d-a3d3-c235077df830
  v: v1606328799
  date: AUGUST 9, 2013
  day: 9
  year: 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
  arrows: light
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

- title: Burning The Barn 4
  urlTitle: burning-the-barn-4
  id: fa766d8a-3226-462f-9b5d-6976ca71de6e
  v: v1606329007
  date: AUGUST 9, 2013
  day: 9
  year: 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
  arrows: light
  sizes:
    Large:
      width: 1500
      height: 1079
    Medium:
      width: 1100
      height: 791
    Small:
      width: 800
      height: 575

- title: Burning The Barn 5
  urlTitle: burning-the-barn-5
  id: fa60566a-ee09-4cc9-a5aa-1a3a6e54462b
  v: v1606329039
  date: AUGUST 9, 2013
  day: 9
  year: 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
  arrows: light
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

- title: Burning The Barn 6
  urlTitle: burning-the-barn-6
  id: ff37a2e0-728a-4211-86e3-2415f621fdfe
  v: v1606329210
  date: AUGUST 9, 2013
  day: 9
  year: 2013
  orientation: landscape
  info: Nikon Nikomat FTn - 50mm
  description: 
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

- title: Ryan & Joel
  urlTitle: ryan-&-joel
  id: 4900b79b-671c-499f-ae67-9c40345c7e9c
  v: v1606329247
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
  id: efaf18cb-2b24-4fc6-b5c5-fd8549d3daa1
  v: v1606329300
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
  id: 090634d5-f3a3-4aac-90ed-dc648f0bea0a
  v: v1606329341
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
  id: c2307427-e821-4c5e-a42a-27bfb57b0d13
  v: v1606329380
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
  id: 86308f14-ab72-451e-bdf0-48a6914bbb34
  v: v1606329419
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
  id: 124ecc94-705d-4689-a920-fa71dd2b80fa
  v: v1606329450
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
  id: ea874411-f4ca-439f-8951-5f9ed4ed44bb
  v: v1606329485
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

- title: Creating The Desert
  urlTitle: creating-the-desert
  id: 2e304b39-3ddb-4b37-b55a-1ead2aa222e0
  v: v1606329537
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
