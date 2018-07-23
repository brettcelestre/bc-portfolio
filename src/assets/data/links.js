const ymlLoader = require('js-yaml');

const painter = 'painter';
const photographer = 'photographer';
const musician = 'musician';
const filmMaker = 'film maker';
const softwareEngineer = 'software engineer';
const graphicDesigner = 'graphic designer';
const illustrator = 'illustrator';
const skateboarder = 'skateboarder';
const conceptDesigner = 'concept designer';
const uxDesigner = 'ux designer';
const fashionDesigner = 'fashion designer'

const tags = [
  painter,
  photographer,
  musician,
  filmMaker,
  softwareEngineer,
  graphicDesigner,
  illustrator,
  skateboarder,
  conceptDesigner,
  uxDesigner,
  fashionDesigner
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
    - graphicDesigner
- title: Stephen Chow
  links:
    - type: Portfolio
      url: https://www.stephenchowphoto.com/
  tags:
    - photographer
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
    - fashionDesigner
- title: Mike Buzzard
  links:
    - type: Blog
      url: http://www.zopilote.co/
  tags:
    - ux designer
`);

module.exports = { data, tags };


const old = [
  {
    'title': 'Jeanne-Marie Garcia',
    'tags': [painter, photographer],
    'appearsOn': [
      {
        'url': '/short-films/del-rio',
        'title': 'Del Rio',
        'credit': 'Actor'
      },
      {
        'url': '/short-films/ballroom-dance-floor',
        'title': 'Ballroom Dance Floor',
        'credit': 'Actor'
      }
    ],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://www.jeannemariegarcia.com/'
      }
    ]
  },
  {
    'title': 'Matthew Celestre',
    'tags': [painter, musician, filmMaker],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://www.matthewcelestre.com/'
      }
    ],
    'appearsOn': [
      {
        'url': '/short-films/del-rio',
        'title': 'Del Rio',
        'credit': 'Co-Writer/Co-Director'
      },
      {
        'url': '/short-films/ballroom-dance-floor',
        'title': 'Ballroom Dance Floor',
        'credit': 'Co-Writer/Co-Director'
      }
    ],
  },
  {
    'title': 'Ryan Schmidt',
    'tags': [musician],
    'links': [
      {
        'type': 'SoundCloud',
        'url': 'https://soundcloud.com/the-bozos-1'
      }
    ]
  },
  {
    'title': 'Andrew Jinkins',
    'tags': [musician],
    'links': [
      {
        'type': 'BandCamp',
        'url': 'https://feelingsparty.bandcamp.com/'
      }
    ]
  },
  {
    'title': 'Kyle Luman',
    'tags': [photographer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.kylelumanphotography.com/'
      }
    ]
  },
  {
    'title': 'Jake Vincent',
    'tags': [photographer],
    'links': [
      {
        'type': 'Flickr',
        'url': 'https://www.flickr.com/photos/snowmonsterrr/'
      }
    ]
  },
  {
    'title': 'Andrew Zhou',
    'tags': [photographer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://www.zhoucow.com/'
      },
      {
        'type': 'Instagram',
        'url': 'https://www.instagram.com/zhoucow/'
      }
    ]
  },
  {
    'title': 'Jesse Gale',
    'tags': [musician],
    'links': [
      {
        'type': 'BandCamp',
        'url': 'https://youngestofelders.bandcamp.com/'
      }
    ]
  },
  {
    'title': 'Corey Duffel',
    'tags': [skateboarder],
    'links': [
      {
        'type': 'Instagram',
        'url': 'https://www.instagram.com/coreyduffel'
      }
    ]
  },
  {
    'title': 'Kevin Stewart',
    'tags': [musician],
    'links': [
      {
        'type': 'BandCamp',
        'url': 'https://athletesmouth.bandcamp.com/'
      }
    ]
  },
  {
    'title': 'Andrew Tsao',
    'tags': [softwareEngineer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://andrewtsao.io/'
      }
    ]
  },
  {
    'title': 'Maria Gabriela Sanchez Mallona',
    'tags': [illustrator, graphicDesigner],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://magasama.com/'
      }
    ]
  },
  {
    'title': 'Sean Hipkin',
    'tags': [illustrator],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.seanhipkin.com/'
      }
    ]
  },
  {
    'title': 'Sarah Jaffe',
    'tags': [filmMaker, photographer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.sarahsimkajaffe.com/'
      }
    ]
  },
  {
    'title': 'Sarah Watters',
    'tags': [graphicDesigner],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://www.wattersdesign.com/'
      }
    ]
  },
  {
    'title': 'Stephen Chow',
    'tags': [photographer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.stephenchowphoto.com/'
      }
    ]
  },
  {
    'title': 'Nick Di Tomasso',
    'tags': [illustrator, musician],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://nickdito9.wixsite.com/mindtime9'
      }
    ]
  },
  {
    'title': 'Vincenzo Barkasy',
    'tags': [illustrator, conceptDesigner],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://www.vincenzobarkasy.com/'
      },
      {
        'type': 'Instagram',
        'url': 'https://www.instagram.com/vxvinny/'
      }
    ]
  },
  {
    'title': 'Nick Bers',
    'tags': [graphicDesigner],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://nickbers.com/'
      }
    ]
  },
  {
    'title': 'Emily Bers',
    'tags': [photographer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.emiliebersphotography.com/'
      }
    ]
  },
  {
    'title': 'Journey Coward',
    'tags': [painter],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://journeycoward.bigcartel.com/products'
      },
      {
        'type': 'Instagram',
        'url': 'https://www.instagram.com/journeycoward/'
      }
    ]
  },
  {
    'title': 'Lulu Martinez',
    'tags': [graphicDesigner],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.lulumartinezdesigns.com/'
      }
    ]
  },
  {
    'title': 'Maaike Scherff',
    'tags': [illustrator],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://maaikescherff.com/'
      }
    ]
  },
  {
    'title': 'Jonny Clugston',
    'tags': [photographer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'https://www.jonnyclugston.com/'
      }
    ]
  },
  {
    'title': 'Marcus Tedesco',
    'tags': [softwareEngineer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://marcustedesco.com/index.html'
      }
    ]
  },
  {
    'title': 'John Madrak',
    'tags': [softwareEngineer],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://madrak.net/'
      }
    ]
  },
  {
    'title': 'Samantha Ives',
    'tags': [fashionDesigner],
    'links': [
      {
        'type': 'Portfolio',
        'url': 'http://www.makerandmineral.com/'
      }
    ]
  },
  {
    'title': 'Mike Buzzard',
    'tags': [uxDesigner],
    'links': [
      {
        'type': 'Blog',
        'url': 'http://www.zopilote.co/'
      }
    ]
  }
];

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