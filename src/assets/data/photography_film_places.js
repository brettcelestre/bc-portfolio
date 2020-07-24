const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Happy Camp
  urlTitle: happy-camp
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
