const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Happy Camp
  urlTitle: happy-camp
  id: 89b97b4c-f804-485b-97ee-d3fb07a460b9
  v: v1606268685
  date: 2019
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1005
    Medium:
      width: 1100
      height: 737
    Small:
      width: 800
      height: 536

- title: Water Steps
  urlTitle: water-steps
  id: cc43a8c4-941c-43fa-8a1b-b9f340b3f115
  v: v1606268719
  date: 2019
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
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

- title: Windows
  urlTitle: windows
  id: aed07c9c-d57c-42a8-9b0a-971f958d7f03
  v: v1606268752
  date: 2019
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 1500
      height: 1011
    Medium:
      width: 1100
      height: 771
    Small:
      width: 800
      height: 539

- title: Hallway
  urlTitle: hallway
  id: f46e5ce0-8a1e-45cb-932d-25d550f42e44
  v: v1606268781
  date: 2018
  size: ''
  orientation: portrait
  description: 
  arrows: light
  info: Nikon FM10 - 85mm
  sizes:
    Large:
      width: 803
      height: 1200
    Medium:
      width: 602
      height: 900
    Small:
      width: 401
      height: 600

- title: Crestline
  urlTitle: crestline
  id: 3b7a49d4-5243-4966-986d-b4d3d69a00f5
  v: v1606268816
  date: 2018
  size: ''
  orientation: landscape
  description: Twin Peaks, CA
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Twin Peaks
  urlTitle: twin-peaks
  id: 29d8b213-6088-4c5c-a4f0-a0666a73fdd9
  v: v1606268865
  date: 2018
  size: ''
  orientation: landscape
  description: Twin Peaks, CA
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Twin Peaks Blvd
  urlTitle: twin-peaks-blvd
  id: d3ab136b-698d-422b-ae9d-e0702279fcb0
  v: v1606268899
  date: 2018
  size: ''
  orientation: landscape
  description: Twin Peaks, CA
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Alfama
  urlTitle: alfama
  id: 8c94a70e-c70d-423f-9bb7-c708ef976e0b
  v: v1606268940
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: Lisbon, Portugal
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Rooftops
  urlTitle: rooftops
  id: 38d40276-6b80-4cf1-b85c-48bf62226960
  v: v1606268982
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: Lisbon, Portugal
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1005
    Medium:
      width: 1100
      height: 737
    Small:
      width: 800
      height: 536

- title: Rooftops 2
  urlTitle: rooftops-2
  id: f4206b63-19b9-4ade-aaf4-7a5432c9ab25
  v: v1606269016
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: Lisbon, Portugal
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 805
      height: 1200
    Medium:
      width: 604
      height: 900
    Small:
      width: 403
      height: 600

- title: Lisbon Street
  urlTitle: lisbon-street
  id: 73921abd-83ae-402d-8c8b-f6b2b2f38257
  v: v1606269070
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: Lisbon, Portugal
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

- title: Alfama Laundry
  urlTitle: alfama-laundry
  id: 3c8b1641-896e-4c6b-b3d2-d5608665de1e
  v: v1606269104
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: Lisbon, Portugal
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1017
    Medium:
      width: 1100
      height: 746
    Small:
      width: 800
      height: 542

- title: Madrid Window
  urlTitle: madrid-window
  id: 5e82e0e7-e21b-4c3d-a176-4192ce3830d9
  v: v1606269143
  date: AUGUST 2018
  size: ''
  orientation: portrait
  description: Madrid, Spain
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

- title: Gothic Quarter
  urlTitle: gothic-quarter
  id: 65bd5881-1782-4818-ba4c-943daae7e536
  v: v1606269183
  date: AUGUST 2018
  size: ''
  orientation: landscape
  description: Gothic Quarter, Barcelona, Spain
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: El Raval
  urlTitle: el-raval
  id: d26b5df1-6106-49a2-97a1-69a7810fd7bd
  v: v1606269215
  date: AUGUST 2018
  size: ''
  orientation: landscape
  description: El Raval, Barcelona, Spain
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: El Born Alley
  urlTitle: el-born-alley
  id: 96835148-4c85-4a84-9360-c34ed9f281e0
  v: v1606269254
  date: AUGUST 2018
  size: ''
  orientation: landscape
  description: El Born, Barcelona, Spain
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Two Beggers
  urlTitle: two-beggers
  id: 54f79f53-8096-43ae-b659-87e9d1484188
  v: v1606269287
  date: AUGUST 2018
  size: ''
  orientation: landscape
  description: Barcelona, Spain
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Dollar Tree
  urlTitle: dollar-tree
  id: 355af803-ab27-4fe7-8477-daa331ed0e8a
  v: v1606269316
  date: 2016
  size: ''
  orientation: portrait
  description: Concord, CA
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Park & Shop Alley
  urlTitle: park-&-shop-alley
  id: 9f5e08d5-4eed-40af-90f8-78fe1cd8a38b
  v: v1606269349
  date: 2016
  size: ''
  orientation: portrait
  description: Concord, CA
  arrows: light
  info: Nikon FM10 - 50mm
  sizes:
    Large:
      width: 1500
      height: 1013
    Medium:
      width: 1100
      height: 743
    Small:
      width: 800
      height: 540

- title: "730"
  urlTitle: "730"
  id: 2d43c70e-a81b-4f8e-9762-d0be7158b4b6
  v: v1606269377
  date: NOVEMBER 2012
  size: ''
  orientation: landscape
  description: San Jose, CA
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1078
    Medium:
      width: 1100
      height: 791
    Small:
      width: 800
      height: 575

- title: "780"
  urlTitle: "780"
  id: 05744f3f-c5c4-4053-8d42-3de29b0427e8
  v: v1606269423
  date: NOVEMBER 2012
  size: ''
  orientation: landscape
  description: View from my bedroom window while living on S 11th St, San Jose, CA
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
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

- title: Santa Clara
  urlTitle: santa-clara
  id: 33668df4-63d4-404a-8f3b-2f73c3e17d7b
  v: v1606269457
  date: NOVEMBER 2012
  size: ''
  orientation: landscape
  description: Downtown San Jose, CA.
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 979
    Medium:
      width: 1100
      height: 718
    Small:
      width: 800
      height: 522

- title: Second Street
  urlTitle: second-street
  id: 2c4fa870-734b-42ab-88d5-56f1cba46856
  v: v1606269490
  date: NOVEMBER 2012
  size: ''
  orientation: landscape
  description: San Jose, CA.
  arrows: light
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 996
    Medium:
      width: 1100
      height: 731
    Small:
      width: 800
      height: 531

- title: First Street
  urlTitle: first-street
  id: 4041f226-0e91-4b62-9a5d-a1c2f8d168ae
  v: v1606269521
  date: 2012
  size: ''
  orientation: portrait
  description: San Jose, CA.
  arrows: light
  info: Nikon FM10 - 50mm
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

- title: Mexico
  urlTitle: mexico
  id: a01085f0-d119-40c9-aea7-e8ec2126e992
  v: v1606269553
  date: JANUARY 2011
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon Nikomat FTn - 50mm
  sizes:
    Large:
      width: 1500
      height: 1056
    Medium:
      width: 1100
      height: 774
    Small:
      width: 800
      height: 563

- title: Taylor Blvd
  urlTitle: Taylor Blvd
  id: 240f8173-3e32-4d7c-812b-7b83b19f5b1a
  v: v1606269589
  date: 2007
  size: ''
  orientation: landscape
  description: 
  arrows: dark
  info: Nikon N55 - 18mm
  sizes:
    Large:
      width: 785
      height: 1200
    Medium:
      width: 589
      height: 900
    Small:
      width: 392
      height: 600
`);

module.exports = { data };
