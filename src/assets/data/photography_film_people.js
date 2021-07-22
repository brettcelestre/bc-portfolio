const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Matt 5
  urlTitle: matt-5
  id: d4096b7c-b1be-430c-ae28-959d23238bc6
  v: v1606266153
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
  id: f26d8da5-9d46-41e8-9190-e7db71f347db
  v: v1606266189
  date: JULY 2019
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
  id: 9ec18ed7-f9f4-43ce-a2c7-5baad15ec800
  v: v1606266271
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
  id: 64484f7e-b33c-4946-96d8-ca82a905c002
  v: v1606266503
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
  id: 607cc7f7-045a-4364-9a16-3847a7c04049
  v: v1606266920
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
  id: 3d05e59a-d91b-4830-88e8-10f51106752f
  v: v1606266968
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
  id: 9bff91e5-89b0-4692-8d8f-dfa1a99b9e2a
  v: v1606267013
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
  id: ba393acc-60f2-455e-9313-d9d38420f9e9
  v: v1606266063
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
  id: ac174ff5-c2cf-45ff-b1dd-a7d505cd9797
  v: v1606267105
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
  id: 313b82ee-d03b-4e70-8906-3e93c352b81d
  v: v1606267138
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
  id: b0a78444-556f-43e4-ba6b-e2094e85fc1a
  v: v1606267170
  date: 2016
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

- title: Jeanne-Marie Painting 2
  urlTitle: jeanne-marie-painting-2
  id: 12b1dc70-1bdf-4981-92f2-8891c44089aa
  v: v1606267205
  date: 2015
  size: ''
  orientation: landscape
  description: Jeanne-Marie watercoloring picadillo for a cookbook as a gift for her sister Maria.
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
  id: 4efd9ccb-56ed-4eb5-a61f-dba4fbf3800e
  v: v1606267246
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
  id: 7e4b36fe-92a3-4c14-bd2f-1460a2ab9883
  v: v1606267316
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
  id: f26fde60-f528-41eb-b133-46e715c31276
  v: v1606267347
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
  id: 36bfd174-cf21-4cb7-ba92-770d66b60ed0
  v: v1606267383
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
  id: 2b843ad8-6822-44be-a447-4df7eded45db
  v: v1606267416
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
  id: 1f9d1fff-27cc-401e-86bc-6b87b5867bd4
  v: v1606267452
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
  id: f8e3d471-5f0a-49f9-83e9-b2c972e41892
  v: v1606267486
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
  id: 87f0fbf8-bcee-46d4-8897-cec07e4086d0
  v: v1606267524
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
  id: ec52ff68-e2dc-495a-acc5-9a75cc623998
  v: v1606267573
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
  id: 7be170b2-7e26-47f4-930a-592a845865e5
  v: v1606267615
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
  id: e93cfa69-642a-4738-bf2b-9c2dbf3a69e2
  v: v1606267675
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
  id: c2cec8ff-a7a2-426e-abf8-cd582841bdf0
  v: v1606267711
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
  id: efa35c21-b56f-4fb7-ac62-e55f3febc189
  v: v1606267746
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
  id: 4808596b-0067-48e9-b5f9-5894f59c79c7
  v: v1606267791
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
  id: a11efd50-fa53-4b13-aa74-ce23babe8372
  v: v1606267822
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
  id: c781523d-3edd-4fc2-8a69-746bb6a3d0ec
  v: v1606267869
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
  id: 2ff1b6f0-c4ff-43fa-be05-1dcba015ea0c
  v: v1606267920
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
  id: 7b2e9c9c-688c-45d8-81b0-425a5731f68c
  v: v1606267959
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
  id: f4178d28-eea7-4c53-99e4-a688f84e1172
  v: v1606267994
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
  id: b9539843-deac-47aa-8815-eef7739bf32b
  v: v1606268033
  date: 2007
  size: ''
  orientation: portrait
  description: Jake and Brittany.
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
  id: 65d4b6b2-8e37-4fc6-b271-d5597bd7e7d9
  v: v1606268090
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