
const ymlLoader = require('js-yaml');
const delRioGallery = require('./photography_del_rio.js');

// - name: Sketches
//       href: /artwork/sketches/del-rio

// Ballroom - Options
// - name: Drawings
//       type: photos
//       length: ???
//       href: /artwork/drawings/ballroom-dance-floor
// - name: Teaser 2
  // length: 19 seconds
  // id: dOP9svsdfBU
  // href: /short-films/ballroom-dance-floor/teaser-2


// the flying disc - Options
// - name: Sketches
// type: photos
// href: /artwork/sketches/the-flying-disc

// justin vs gavin
// - name: Drawings
//       href: /artwork/Drawings/justin-felix-vs-gavin-drago

/*
Del Rio - new description

Del Rio is a short thriller film set to a song my friend Ryan Schimdt made originally called Traveling Plans.

The cast is comprised of friends and family who were excited enough about the project to dedicate their time for free. 

The greenscreen was built outside in the sideyard of Ryan's house, so all filming of people had to happen after the sun went down. Since we filmed during my summer breaks from school the sun didn't set until 8-9pm. We often filmed past mid night since we didn't want to make people come back for multiple days of shooting. The main characters had more shots and ended up spending around 4 nights filming their scenes.

This film took us two and half years to complete. The bulk of building the sets an
Be sure to check out the 42 minute behind the scenes documentary below.
*/

const data = ymlLoader.load(`
- title: Del Rio
  urlTitle: del-rio
  date: 2014 DECEMBER
  year: 2014
  length: "8:24"
  href: /short-films/del-rio
  description: A short thriller film about a train robbery.
  descriptionOld: Del Rio is a short thriller film, set in a grim deserted valley, baptized with the same title. As an extravagant locomotive, the Loxodonta Express, navigates through carrying a prosperous assortment of passengers and wealth; their destination will collide with the horrific dangers that unknowingly lay directly in their path.
  website: https://www.instagram.com/delriofilm/?hl=en
  instagram: "@delriofilm"
  imdb: https://www.imdb.com/title/tt2334592
  id: h8nbA3BLtbI
  url: https://www.youtube.com/embed/h8nbA3BLtbI?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/h8nbA3BLtbI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  options: 
    - name: Behind The Scenes
      type: video
      href: /short-films/del-rio/behind-the-scenes
      id: iesCBSqrVZ4
      length: "40:22 minutes"
    - name: Photography
      type: photos
      href: /photography/del-rio/${delRioGallery.data[0].urlTitle}
      length: ${delRioGallery.data.length} photos
    - name: Storyboards Comparison
      type: video
      href: /short-films/del-rio/storyboards-comparison
      id: IaKfoVWGeFo
      length: "5:36 minutes"
  credits: <strong>Written & Directed</strong></ br>\
        by</ br>\
        Matthew & Brett Celestre</ br></ br></ br> \
        \
        <strong>Original Music Written & Recorded</strong></ br>
        by</ br>\
        Ryan 'GOOMBAH' Schmidt</ br></ br></ br> \
        \
        <strong>Music Mixed & Mastered</strong></ br>\
        by</ br>\
        Ryan Schmidt & Andrew Jinkins</ br></ br></ br> \
        \
        <strong>Produced</strong></ br>\
        by</ br>\
        Forbidden Science From Outer Space</ br></ br></ br> \
        \
        <strong>Executive Producers, Storyboards, Edited & Lighting</strong></ br>\
        by</ br>\
        Matthew & Brett Celestre</ br></ br></ br> \
        \
        <strong>Cinematography & Special Effects</strong></ br>\
        by</ br>\
        Brett Celestre</ br></ br></ br> \
        \
        <strong>Starring</strong></ br>\
        Corey Duffel</ br>\
        Jesse Gale</ br>\
        Joel Jutgair</ br>\
        Caden Honda</ br>\
        Steve Ruge</ br>\
        Ryan Schmidt</ br>\
        Andrew Jinkins</ br>\
        Andy Lee</ br>\
        Kevin Vanier</ br>\
        Mark Smallhoover</ br>\
        Justin Felix</ br></ br></ br>\
        \
        <strong>Additional Help From</strong></ br>\
        Jeanne-Marie Garcia, Allyza Leongson, Kevin Luker, Rachel Banks, Brendin Lowenthal, Camille Rose, Brittany Watkins, Travis Van Oosbree, Kathy Celestre, Steve Celestre, Grant Selland, Genie Lee, John Shumaker, Conner Macleod, Darren Busby, Allen Hsiao, Derek Keller, Scott Celestre, Lauren Watkins, Barbie Vanier, Devon Blood, Monica Demaray-Blood, Keith Reader, Stephen Chow, Morgan Foster, The Schmidt Family, Helen Celestre, & Rachelle Kintzer</ br></ br></ br>\
        \
        <strong>Thanks to our Donators</strong></ br>\
        Gordon Kilgore, Final Stop Films, Cedric Howe, Mark Keller, Cassie Marketos, Kyle Luman, Elisabeth Holm, Francelle, skasnotdead, Brian Boyle, Camille Rose, Olivia, Eugene Ahn, Sherrill Wagnor, Thiago Bessa, Sierra Echo Charlie, Jack, Shay Kornfeld, Daniel Green, Ryan McClain, Joel Jutagir, VelcroFathoms, Cilista, Sarah Watters, Brain Orr, Andrew Zhou, William Johnston, Jennifer Frevele, Barbie Vanier, The Performance Group, Suanne Deising, Brittany, Albert J. Ferretti, Jonathan Verducci, Jane Bers, Sarah Doherty, Woody Hunt, John Loomis, Kathryn Stewart, Scott Celestre, Steve & Kathy Celestre, George Royster, Ray Pond, & Gwen Sutton Young</ br></ br></ br>\
        \
        <strong>© 2014 Matthew & Brett Celestre</strong>
  cover:
    Large:
      width: 1500
      height: 639
    Medium:
      width: 1100
      height: 469
    Small:
      width: 800
      height: 341
  details:
    Large:
      width: 1500
      height: 639
    Medium:
      width: 1100
      height: 469
    Small:
      width: 800
      height: 341

- title: Ballroom Dance Floor
  urlTitle: ballroom-dance-floor
  date: 2011 MAY
  year: 2011
  length: "3:15"
  href: /short-films/ballroom-dance-floor
  description: An elegant aristocrat escorts his true love on an intoxicated journey through Loxodonta Forest to attend the exquisite Ballroom masquerade party at Gatsby's mountaintop estate.
  imdb: https://www.imdb.com/title/tt2378248/
  website: 
  id: qSpbsE7gabM
  url: https://www.youtube.com/embed/qSpbsE7gabM?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/qSpbsE7gabM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  options: 
    - name: Behind The Scenes
      type: video
      id: 2BD8ac_xJEE
      length: "5:02 minutes"
      href: /short-films/ballroom-dance-floor/behind-the-scenes
    - name: Storyboards Part One
      type: video
      length: "55 seconds"
      id: BdHaw1btKAk
      href: /short-films/ballroom-dance-floor/storyboards-part-one
    - name: Storyboards Part Two
      type: video
      length: "56 seconds"
      id: 3nBm5A7_ZiE
      href: /short-films/ballroom-dance-floor/storyboards-part-two
    - name: Teaser Three
      type: video
      length: "2:26 minutes"
      id: WMyra5stRws
      href: /short-films/ballroom-dance-floor/teaser-three
  credits: <strong>Written & Directed</strong></ br>
    by</ br>
    Matthew & Brett Celestre</ br></ br></ br>
    <strong>Original Song</strong></ br>
    by</ br>
    Andrew Jinkins</ br></ br></ br>
    <strong>Story</strong></ br>
    by</ br>
    Andrew Jinkins, Matthew & Brett Celestre</ br></ br></ br>
    <strong>Animated</strong></ br>
    by</ br>
    Brett & Matthew Celestre</ br></ br></ br>
    <strong>Colored</strong></ br>
    by</ br>
    Brett Celestre</ br></ br></ br>
    <strong>© Second Vision Productions 2011</strong>
  sizes:
    Large:
      width: 1500
      height: 639
    Medium:
      width: 1100
      height: 469
    Small:
      width: 800
      height: 341

- title: The Flying Disc
  urlTitle: the-flying-disc
  date: 2012 MAY
  year: 2012
  length: "1:18"
  href: /short-films/the-flying-disc
  description: One disc. One newspaper. One phone call. Major disappointment.
  website: 
  id: aw3WzAiKgY8
  url: https://www.youtube.com/embed/aw3WzAiKgY8?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/aw3WzAiKgY8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  options: 
  credits: <strong>Written, Directed, & Special Effects</strong></ br>
    by</ br>
    Brett Celestre
  sizes:
    Large:
      width: 1500
      height: 639
    Medium:
      width: 1100
      height: 469
    Small:
      width: 800
      height: 341

- title: Dan Pool
  urlTitle: dan-pool
  date: 2011 September
  year: 2011
  length: "1:43"
  href: /short-films/dan-pool
  description: Deep underground in San Jose State University's Recreational Center one man is on a mission to have the perfect game of billards. His single shot could change the world, but on this day fate had different plans.
  id: LqBw8UVvfXg
  url: https://www.youtube.com/embed/LqBw8UVvfXg?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  options: 
  credits: <strong>Written & Directed</strong></ br>
    by</ br>
    Brett Celestre 
  sizes:
    Large:
      width: 1500
      height: 639
    Medium:
      width: 1100
      height: 469
    Small:
      width: 800
      height: 341

- title: Justin Felix Vs Gavin Drago
  urlTitle: justin-felix-vs-gavin-drago
  date: 2010 JANUARY
  year: 2010
  length: "1:37"
  href: /short-films/justin-felix-vs-gavin-drago
  description: An epic showdown between two heavyweight Creek Park lukers ends in what some might consider dirty footwork. Justin Felix and his posse enter the park with sheer confidence, while Gavin stocks up on liquid courage. Someone's ultimately going to be crusin for a brusin.
  website: 
  id: KCizRihPlU0
  url: https://www.youtube.com/embed/KCizRihPlU0?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/KCizRihPlU0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  options:
  viewFullCredits: true
  credits: <strong>Written & Directed</strong></ br>
    by</ br>
    Matthew & Brett Celestre</ br></ br></ br>

    <strong>Animated</strong></ br>
    by</ br>
    Brett & Matthew Celestre</ br></ br></ br>

    <strong>Voice Actors</strong></ br>
    Scott Celestre</ br>
    Ryan Schmidt</ br></ br></ br>

    <strong>Actors</strong></ br>
    Justin Felix</ br>
    Cole</ br>
    Kevin Luker</ br>
    Allyza</ br>
    Belly G

  sizes:
    Large:
      width: 1500
      height: 639
    Medium:
      width: 1100
      height: 469
    Small:
      width: 800
      height: 341
`);

module.exports = { data };

// ballroom - teaser 3
// https://www.youtube.com/watch?v=WMyra5stRws
// - name: Teaser 3
//       href: /short-films/ballroom-dance-floor/teaser-3

// real life 2
// https://www.youtube.com/watch?v=PvN9qTF3BeU

// real life 
// https://www.youtube.com/watch?v=AtxKViR0RSg

// sk8 moves
// https://www.youtube.com/watch?v=qSUITyfWhgI

// HDelight - Extreme Super Slow-Mo Skateboard Maneuvers
// https://www.youtube.com/watch?v=BccQcHwRuqM

// patterns
// https://www.youtube.com/watch?v=-Evb3S3qoTM

// minister
// https://www.youtube.com/watch?v=O437kB4NbaU