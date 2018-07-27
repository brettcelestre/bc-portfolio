
const ymlLoader = require('js-yaml');
const data = ymlLoader.load(`
  - title: Del Rio
    date: 2014 DECEMBER
    length: 8:24
    description:
    website: https://www.instagram.com/delriofilm/?hl=en
    embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/aw3WzAiKgY8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    info: Written & Directed by Matthew & Brett Celestre

      Original Music Written & Recorded by Ryan 'GOOMBAH' Schmidt

      Music Mixed & Mastered by Ryan Schmidt & Andrew Jinkins

      Produced by Forbidden Science From Outer Space

      Executive Producers, Storyboards, Edited & Lighting by Matthew & Brett Celestre

      Cinematography & Special Effects by Brett Celestre

      Starring:
      Corey Duffel
      Jesse Gale
      Joel Jutgair
      Caden Honda
      Steve Ruge
      Ryan Schmidt
      Andrew Jinkins
      Andy Lee
      Kevin Vanier
      Mark Smallhoover
      Justin Felix

      Additional Help From:
      Jeanne-Marie Garcia, Allyza Leongson, Kevin Luker, Rachel Banks, Brendin Lowenthal, Camille Rose, Brittany Watkins, Travis Van Oosbree, Kathy Celestre, Steve Celestre, Grant Selland, Genie Lee, John Shumaker, Conner Macleod, Darren Busby, Allen Hsiao, Derek Keller, Scott Celestre, Lauren Watkins, Barbie Vanier, Devon Blood, Monica Demaray-Blood, Keith Reader, Stephen Chow, Morgan Foster, The Schmidt Family, Helen Celestre, & Rachelle Kintzer

      Thanks to our Donators:
      Gordon Kilgore, Final Stop Films, Cedric Howe, Mark Keller, Cassie Marketos, Kyle Luman, Elisabeth Holm, Francelle, skasnotdead, Brian Boyle, Camille Rose, Olivia, Eugene Ahn, Sherrill Wagnor, Thiago Bessa, Sierra Echo Charlie, Jack, Shay Kornfeld, Daniel Green, Ryan McClain, Joel Jutagir, VelcroFathoms, Cilista, Sarah Watters, Brain Orr, Andrew Zhou, William Johnston, Jennifer Frevele, Barbie Vanier, The Performance Group, Suanne Deising, Brittany, Albert J. Ferretti, Jonathan Verducci, Jane Bers, Sarah Doherty, Woody Hunt, John Loomis, Kathryn Stewart, Scott Celestre, Steve & Kathy Celestre, George Royster, Ray Pond, & Gwen Sutton Young

      © 2014 Matthew & Brett Celestre
    sizes:
      Large:
        width: 899
        height: 1200
      Medium:
        width: 674
        height: 900
      Small:
        width: 499
        height: 600

  - title: Ballroom Dance Floor
    date: 2011 MAY
    length: 3:15
    description:
    website: 
    embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/qSpbsE7gabM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    info: Written & Directed by Matthew & Brett Celestre
      Original Song by Andrew Jinkins
      Story by Andrew Jinkins, Matthew & Brett Celestre
      Animated by Brett & Matthew Celestre
      Colored by Brett Celestre

      © Second Vision Productions 2011
    sizes:
      Large:
        width: 899
        height: 1200
      Medium:
        width: 674
        height: 900
      Small:
        width: 499
        height: 600

  - title: The Flying Disc
    date: 2012 MAY
    length: 1:18
    description:
    website: 
    embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/aw3WzAiKgY8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    info: Written, Directed, & Special Effects by Brett Celestre
    sizes:
      Large:
        width: 899
        height: 1200
      Medium:
        width: 674
        height: 900
      Small:
        width: 499
        height: 600

  - title: Justin Felix Vs. Gavin Drago
    date: 2010 JANUARY
    length: 1:37
    description:
    website: 
    embeded: <iframe width="560" height="315" src="https://www.youtube.com/embed/KCizRihPlU0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    info: Written & Directed by Matthew & Brett Celestre
      Animated by Brett & Matthew Celestre

      Voice Actors:
      Scott Celestre
      Ryan Schmidt

      Actors:
      Justin Felix
      Cole
      Kevin Luker
      Allyza
      Belly G

    sizes:
      Large:
        width: 899
        height: 1200
      Medium:
        width: 674
        height: 900
      Small:
        width: 499
        height: 600
`);

module.exports = { data };
