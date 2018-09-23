const ymlLoader = require('js-yaml');

const tags = [
  'painter',
  'photographer',
  'musician',
  'film maker',
  'software engineer',
  'graphic designer',
  'illustrator',
  'skateboarder',
  'concept designer',
  'ux designer',
  'fashion designer',
  'sculptor'
];

const data = ymlLoader.load(`
- title: Jeanne-Marie Garcia
  tags:
    - painter
    - photographer
  appearsOn:
    - url: "/short-films/del-rio"
      title: Del Rio
      credit: Actor
    - url: "/short-films/ballroom-dance-floor"
      title: Ballroom Dance Floor
      credit: Actor
  links:
    - type: Portfolio
      url: http://www.jeannemariegarcia.com/
- title: Matthew Celestre
  links:
    - type: Portfolio
      url: http://www.matthewcelestre.com/
  appearsOn:
    - url: "/short-films/del-rio"
      title: Del Rio
      credit: Co-Writer/Co-Director
    - url: "/short-films/ballroom-dance-floor"
      title: Ballroom Dance Floor
      credit: Co-Writer/Co-Director
  tags:
    - painter
    - musician
    - film maker
- title: Ryan Schmidt
  links:
    - type: SoundCloud
      url: https://soundcloud.com/the-bozos-1
  tags:
    - musician
- title: Andrew Jinkins
  links:
    - type: BandCamp
      url: https://feelingsparty.bandcamp.com/
  tags:
    - musician
- title: Kyle Luman
  links:
    - type: Portfolio
      url: https://www.kylelumanphotography.com/
  tags:
    - photographer
- title: Jake Vincent
  links:
    - type: Flickr
      url: https://www.flickr.com/photos/snowmonsterrr/
  tags:
    - photographer
- title: Andrew Zhou
  links:
    - type: Portfolio
      url: http://www.zhoucow.com/
    - type: Instagram
      url: https://www.instagram.com/zhoucow/
  tags:
    - photographer
- title: Jesse Gale
  links:
    - type: BandCamp
      url: https://youngestofelders.bandcamp.com/
  tags:
    - musician
- title: Corey Duffel
  links:
    - type: Instagram
      url: https://www.instagram.com/coreyduffel
  tags:
    - skateboarder
- title: Kevin Stewart
  links:
    - type: BandCamp
      url: https://athletesmouth.bandcamp.com/
  tags:
    - musician
- title: Andrew Tsao
  links:
    - type: Portfolio
      url: http://andrewtsao.io/
  tags:
    - software engineer
- title: Maria Gabriela Sanchez Mallona
  links:
    - type: Portfolio
      url: https://magasama.com/
  tags:
    - illustrator
    - graphic designer
- title: Sean Hipkin
  links:
    - type: Portfolio
      url: https://www.seanhipkin.com/
  tags:
    - illustrator
- title: Sarah Jaffe
  links:
    - type: Portfolio
      url: https://www.sarahsimkajaffe.com/
  tags:
    - film maker
    - photographer
- title: Sarah Watters
  links:
    - type: Portfolio
      url: http://www.wattersdesign.com/
  tags:
    - graphic designer
- title: Stephen Chow
  links:
    - type: Portfolio
      url: https://www.stephenchowphoto.com/
  tags:
    - photographer
- title: Brad Terres
  links:
    - type: Portfolio
      url: http://terresdesign.com/
  tags:
    - graphic designer
- title: Nick Di Tomasso
  links:
    - type: Portfolio
      url: http://nickdito9.wixsite.com/mindtime9
  tags:
    - illustrator
    - musician
- title: Vincenzo Barkasy
  links:
    - type: Portfolio
      url: http://www.vincenzobarkasy.com/
    - type: Instagram
      url: https://www.instagram.com/vxvinny/
  tags:
    - illustrator
    - concept designer
- title: Nick Bers
  links:
    - type: Portfolio
      url: http://nickbers.com/
  tags:
    - graphic designer
- title: Emily Bers
  links:
    - type: Portfolio
      url: https://www.emiliebersphotography.com/
  tags:
    - photographer
- title: Journey Coward
  links:
    - type: Portfolio
      url: http://journeycoward.bigcartel.com/products
    - type: Instagram
      url: https://www.instagram.com/journeycoward/
  tags:
    - painter
- title: Lulu Martinez
  links:
    - type: Portfolio
      url: https://www.lulumartinezdesigns.com/
  tags:
    - graphic designer
- title: Maaike Scherff
  links:
    - type: Portfolio
      url: https://maaikescherff.com/
  tags:
    - illustrator
- title: Jonny Clugston
  links:
    - type: Portfolio
      url: https://www.jonnyclugston.com/
  tags:
    - photographer
- title: Marcus Tedesco
  links:
    - type: Portfolio
      url: http://marcustedesco.com/index.html
  tags:
    - software engineer
- title: John Madrak
  links:
    - type: Portfolio
      url: http://madrak.net/
  tags:
    - software engineer
- title: Samantha Ives
  links:
    - type: Portfolio
      url: http://www.makerandmineral.com/
  tags:
    - fashion designer
- title: Mike Buzzard
  links:
    - type: Blog
      url: http://www.zopilote.co/
  tags:
    - ux designer
- title: Kevin Brown
  links:
    - type: Portfolio
      url: http://funandconvenience.com/
    - type: Instagram
      url: https://www.instagram.com/good_online_content/
  tags:
    - photographer
- title: Kristopher Shinn
  links:
    - type: Portfolio
      url: https://www.kshinnphotography.com/products
  tags:
    - photographer
- title: Erik Bender
  links:
    - type: Portfolio
      url: http://erikbender.net/
  tags:
    - sculptor, painter
`);

module.exports = { data, tags };


// Scott Celestre
// jaymercury
// Farhankhan Daya
// Andrew Dawkin
// Brittany Budge
// Ricky Garcia
// Grant Selland
// Danielle Luz Belanger
// Alec Moore
// Catherine Garcia

// website broken
//   {
//     'title': 'Jason Abad',
//     'tags': [graphicDesigner],
//     'links': [
//       {
//         'type': 'Portfolio',
//         'url': 'https://jayabad.carbonmade.com/'
//       }
//     ]
//   },

module.exports = { data, tags };