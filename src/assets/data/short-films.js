
const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
- title: Del Rio
  date: 2014 DECEMBER
  year: 2014
  length: "8:24"
  href: /short-films/del-rio
  description:
  website: https://www.instagram.com/delriofilm/?hl=en
  id: h8nbA3BLtbI
  url: https://www.youtube.com/embed/h8nbA3BLtbI?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/h8nbA3BLtbI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  info: Written & Directed by Matthew & Brett Celestre</ br></ br> \
        \
        Original Music Written & Recorded by Ryan 'GOOMBAH' Schmidt</ br></ br> \
        \
        Music Mixed & Mastered by Ryan Schmidt & Andrew Jinkins</ br></ br> \
        \
        Produced by Forbidden Science From Outer Space</ br></ br> \
        \
        Executive Producers, Storyboards, Edited & Lighting by Matthew & Brett Celestre</ br></ br> \
        \
        Cinematography & Special Effects by Brett Celestre \
        \
        Starring\
        Corey Duffel\
        Jesse Gale\
        Joel Jutgair\
        Caden Honda\
        Steve Ruge\
        Ryan Schmidt\
        Andrew Jinkins\
        Andy Lee\
        Kevin Vanier\
        Mark Smallhoover\
        Justin Felix\
        \
        Additional Help From\
        Jeanne-Marie Garcia, Allyza Leongson, Kevin Luker, Rachel Banks, Brendin Lowenthal, Camille Rose, Brittany Watkins, Travis Van Oosbree, Kathy Celestre, Steve Celestre, Grant Selland, Genie Lee, John Shumaker, Conner Macleod, Darren Busby, Allen Hsiao, Derek Keller, Scott Celestre, Lauren Watkins, Barbie Vanier, Devon Blood, Monica Demaray-Blood, Keith Reader, Stephen Chow, Morgan Foster, The Schmidt Family, Helen Celestre, & Rachelle Kintzer\
        \
        Thanks to our Donators\
        Gordon Kilgore, Final Stop Films, Cedric Howe, Mark Keller, Cassie Marketos, Kyle Luman, Elisabeth Holm, Francelle, skasnotdead, Brian Boyle, Camille Rose, Olivia, Eugene Ahn, Sherrill Wagnor, Thiago Bessa, Sierra Echo Charlie, Jack, Shay Kornfeld, Daniel Green, Ryan McClain, Joel Jutagir, VelcroFathoms, Cilista, Sarah Watters, Brain Orr, Andrew Zhou, William Johnston, Jennifer Frevele, Barbie Vanier, The Performance Group, Suanne Deising, Brittany, Albert J. Ferretti, Jonathan Verducci, Jane Bers, Sarah Doherty, Woody Hunt, John Loomis, Kathryn Stewart, Scott Celestre, Steve & Kathy Celestre, George Royster, Ray Pond, & Gwen Sutton Young\
        \
        © 2014 Matthew & Brett Celestre
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

- title: Ballroom Dance Floor
  date: 2011 MAY
  year: 2011
  length: "3:15"
  href: /short-films/ballroom-dance-floor
  description:
  website: 
  id: qSpbsE7gabM
  url: https://www.youtube.com/embed/qSpbsE7gabM?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/qSpbsE7gabM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  info: Written & Directed by Matthew & Brett Celestre
    Original Song by Andrew Jinkins
    Story by Andrew Jinkins, Matthew & Brett Celestre
    Animated by Brett & Matthew Celestre
    Colored by Brett Celestre

    © Second Vision Productions 2011
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
  date: 2012 MAY
  year: 2011
  length: "1:18"
  href: /short-films/the-flying-disc
  description:
  website: 
  id: aw3WzAiKgY8
  url: https://www.youtube.com/embed/aw3WzAiKgY8?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/aw3WzAiKgY8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  info: Written, Directed, & Special Effects by Brett Celestre
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
  date: 2011 September
  year: 2011
  length: "1:43"
  href: /short-films/dan-pool
  id: LqBw8UVvfXg
  url: https://www.youtube.com/embed/LqBw8UVvfXg?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  fontStyles:
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
  date: 2010 JANUARY
  year: 2010
  length: "1:37"
  href: /short-films/justin-felix-vs-gavin-drago
  description:
  website: 
  id: KCizRihPlU0
  url: https://www.youtube.com/embed/KCizRihPlU0?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1
  embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/KCizRihPlU0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  info: Written & Directed by Matthew & Brett Celestre
    Animated by Brett & Matthew Celestre

    Voice Actors
    Scott Celestre
    Ryan Schmidt

    Actors
    Justin Felix
    Cole
    Kevin Luker
    Allyza
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
