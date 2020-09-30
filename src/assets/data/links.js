const ymlLoader = require('js-yaml');

const tags = [
  'burlesque',
  'concept designer',
  'drag',
  'fashion designer',
  'film maker',
  'florist',
  'graphic designer',
  'illustrator',
  'musician',
  'painter',
  'photographer',
  'product designer',
  'production technician',
  'sculptor',
  'skateboarder',
  'software engineer',
  'television director',
  'ux designer',
  'videographer',
  'visual designer'
];

const data = ymlLoader.load(`
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
    - skateboarder

- title: Scott Celestre
  links:
    - type: Portfolio
      url: https://medium.com/@directorscott2
  tags:
    - television director

- title: Ryan Schmidt
  links:
    - type: SoundCloud
      url: https://thebozosthebozosthebozos.bandcamp.com/
  tags:
    - musician

- title: Andrew Jinkins
  links:
    - type: BandCamp
      url: https://feelingsparty.bandcamp.com/
  tags:
    - musician

- title: Brittany Budge
  links:
    - type: Portfolio
      url: http://brittanybudge.com/
  tags:
    - painter

- title: Grant Selland
  links:
    - type: SoundCloud
      url: https://soundcloud.com/messboard/tracks
  tags:
    - musician

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
    - skateboarder

- title: Jesse Gale
  links:
    - type: BandCamp
      url: https://youngestofelders.bandcamp.com/
  tags:
    - musician
    - skateboarder

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

- title: Emjay Mercury
  links:
    - type: Portfolio
      url: https://emjaymercury.com/
    - type: Instagram
      url: https://www.instagram.com/emjaymercury/
  tags:
    - burlesque
    - drag

- title: Sean Hipkin
  links:
    - type: Portfolio
      url: https://www.seanhipkin.com/
  tags:
    - illustrator
    - skateboarder

- title: Kyle Luman
  links:
    - type: Portfolio
      url: https://www.kylelumanphotography.com/
  tags:
    - photographer
    - skateboarder

- title: Cybelle Dabner
  links:
    - type: YouTube
      url: https://www.youtube.com/user/Cybski420/videos
  tags:
    - musician

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

- title: John Peña
  links:
    - type: Portfolio
      url: https://www.jpena.io/
  tags:
    - software engineer

- title: Jia Gao
  links:
    - type: Portfolio
      url: https://www.jia-gao.com/
  tags:
    - graphic designer
    - product designer

- title: Jackie Ngo
  links:
    - type: Portfolio
      url: http://jackiengo.com/
  tags:
    - visual designer
    - graphic designer

- title: Krishi Patel
  links:
    - type: Portfolio
      url: https://krishipatel.com/
  tags:
    - ux designer
    - product designer
    - graphic designer

- title: Maria Gabriela Sanchez Mallona 
  links:
    - type: Portfolio
      url: https://magasama.com/
  tags:
    - illustrator
    - graphic designer

- title: Michelle Fernandez
  links:
    - type: Portfolio
      url: https://www.michellemfernandez.com/
  tags:
    - ux designer
    - skateboarder
    - photographer

- title: Emilio Villalba
  links:
    - type: Portfolio
      url: http://emiliovillalbaart.com/
  tags:
    - painter
    - skateboarder

- title: Nick Di Tomasso
  links:
    - type: Portfolio
      url: http://nickdito9.wixsite.com/mindtime9
  tags:
    - illustrator
    - musician
    - skateboarder

- title: Vincenzo Barkasy
  links:
    - type: Portfolio
      url: http://www.vincenzobarkasy.com/
    - type: Instagram
      url: https://www.instagram.com/vxvinny/
  tags:
    - concept designer
    - illustrator
    - skateboarder
    
- title: Jason Abad
  links:
    - type: Portfolio
      url: https://www.jayabad.com/
  tags:
    - graphic designer

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

- title: Joel Jutagir
  links:
    - type: Portfolio
      url: https://www.instagram.com/metroskateboarding/?hl=en
  tags:
    - skateboarder

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

- title: Dan Newman
  links:
    - type: Portfolio
      url: https://open.spotify.com/artist/5G5CCKuPlY35KEecEm1DtP?si=Ds7ja-QuQC2veox-62dEBQ
  tags:
    - musician

- title: Maaike Scherff
  links:
    - type: Portfolio
      url: https://maaikescherff.com/
  tags:
    - illustrator
- title: Alexander Johnson
  links:
    - type: Portfolio
      url: https://metasyn.pw/
  tags:
    - software engineer
- title: Jonny Clugston
  links:
    - type: Portfolio
      url: https://www.jonnyclugston.com/
  tags:
    - photographer
    - skateboarder

- title: Marcus Tedesco
  links:
    - type: Portfolio
      url: http://marcustedesco.com/index.html
  tags:
    - software engineer

- title: Colin McDonald
  links:
    - type: Portfolio
      url: http://www.colinlmcdonald.com/
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

- title: Kelly Hackett
  links:
    - type: Portfolio
      url: https://www.milkweed.studio/
  tags:
    - florist

- title: Mike Buzzard
  links:
    - type: Blog
      url: http://www.zopilote.co/
  tags:
    - ux designer
    - skateboarder

- title: Belinda Huang
  links:
    - type: Portfolio
      url: https://www.belindahuang.com/
  tags:
    - product designer

- title: Kevin Brown
  links:
    - type: Portfolio
      url: http://kevinedward.com/
    - type: Instagram
      url: https://www.instagram.com/good_online_content/
  tags:
    - photographer

- title: Jarred Hodgdon
  links:
    - type: Portfolio
      url: http://jarred-hodgdon.com/
  tags:
    - production technician

- title: Kristopher Shinn
  links:
    - type: Portfolio
      url: https://www.kshinnphotography.com/products
    - type: Instagram
      url: https://www.instagram.com/kristophershinn/
  tags:
    - photographer

- title: Erik Bender
  links:
    - type: Portfolio
      url: http://erikbender.net/
  tags:
    - painter
    - sculptor

- title: Theodore Reid
  links:
    - type: Portfolio
      url: https://vimeo.com/user2466028/videos?fbclid=IwAR3Fi8rCf-ZLdAbiTKOeIW0HtETCrIPDK25JqPYeaLyIWxnfeqFSMJDUbAU
  tags:
    - videographer

- title: Bill Kiley
  links:
    - type: Portfolio
      url: https://billkiley.bandcamp.com/
  tags:
    - musician
`);

module.exports = { data, tags };


/////////////////
// ADD LATER
/////////////////

// - title: Jeanne-Marie Garcia
//   tags:
//     - painter
//     - photographer
//   appearsOn:
//     - url: "/short-films/del-rio"
//       title: Del Rio
//       credit: Actor
//     - url: "/short-films/ballroom-dance-floor"
//       title: Ballroom Dance Floor
//       credit: Actor
//   links:
//     - type: Portfolio
//       url: http://www.jeannemariegarcia.com/

// surg

// Farhankhan Daya
// Andrew Dawkin
// Ricky Garcia
// Grant Selland
// Danielle Luz Belanger
// Alec Moore
// Catherine Garcia

// website broken
// - title: Jason Abad
//   links:
//     - type: Portfolio
//       url: https://www.jayabad.com/
//   tags:
//     - graphic designer



module.exports = { data, tags };