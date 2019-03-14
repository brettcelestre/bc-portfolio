const ymlLoader = require('js-yaml');

const resources = ymlLoader.load(`
Books:
  - title: "This Changes Everything: Climate vs. Capitalism"
    header: Naomi Klein
    url: https://amzn.to/2EfnRqX
  - title: The Last Hours of Ancient Sunlight
    header: Thom Hartmann
    url: https://amzn.to/2XacDLU
  - title: "The Sixth Extinction: An Unnatural History"
    header: A powerful account of the mass extinction unfolding before our eyes
    url: https://www.amazon.com/Sixth-Extinction-Unnatural-History/dp/1250062187/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1550982265&sr=1-1
  - title: The Story of Stuff
    header: Critical of excessive consumerism and promotes sustainability
    url: https://www.amazon.com/The-Story-Stuff-Overconsumption-Communities/dp/1451610297
  - title: "Transgender History: The Roots of Today's Revolution"
    header: Covering American transgender history from the mid-twentieth century to today
    url: https://www.amazon.com/Transgender-History-second-Todays-Revolution/dp/158005689X/ref=pd_sim_14_1/146-2916249-1511617?_encoding=UTF8&pd_rd_i=158005689X&pd_rd_r=99693848-37ec-11e9-ba03-d93446ec90f0&pd_rd_w=1Wnr0&pd_rd_wg=wiVUR&pf_rd_p=90485860-83e9-4fd9-b838-b28a9b7fda30&pf_rd_r=HXA4QATYBYK8KRGFKB59&psc=1&refRID=HXA4QATYBYK8KRGFKB59

Organizations:
  - title: National Alliance on Mental Illness
    header: The nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.
    url: https://www.nami.org/
  - title: Showing Up For Racial Justice
    header: Moves white people to act as part of a multi-racial majority for justice with passion and accountability
    url: http://www.surjbayarea.org/
  - title: The Story of Stuff
    header: Critical of excessive consumerism and promotes sustainability
    url: https://storyofstuff.org/
  - title: 350
    header: Building the global grassroots climate movement that can hold our leaders accountable to science and justice
    url: https://350.org/
  - title: Equality California
    header: LGBTQ civil rights organization working at the local, state and national levels
    url: https://www.eqca.org/

Art:
  - title: WikiArt
    header: Visual Art Encyclopedia
    url: https://www.wikiart.org/
  - title: Encyclopedia Pictura
    header:  Film and animation studio
    url: http://encyclopediapictura.com/
  - title: But does it Float
    header:
    url: https://butdoesitfloat.com/Index
  - title: This is Colossal
    header: Art, design, and visual culture
    url: https://www.thisiscolossal.com/
  - title: Chihiro Kabata
    header: Drawings and sculptures accumulate delicate ink lines into powerful visions
    url: http://chihiro.kabata.info/index.html

Websites:

Apps:
  - title: ??
    header: ??
    url: ??

Documentaries:
  - title: "Water & Power: A California Heist"
    header: Uncovers the alarming exploits of California's most notorious water barons
    url: https://www.imdb.com/title/tt6290202/
  - title: "The Internet's Own Boy: The Story of Aaron Swartz"
    header: Explores the life and work of programming prodigy and information activist Aaron Swartz
    url: https://www.youtube.com/watch?v=3Q6Fzbgs_Lg
  - title: Truth and Power
    header: Focuses on people who expose freedom-crushing practices in private corporations and the government
    url: https://www.imdb.com/title/tt5376740/
  - title: Fed Up
    header: Investigates how the American food industry may be responsible for more sickness than previously realized
    url: http://fedupmovie.com
  - title: Revenge of the Electric Car
    header: Examines four entries in the race to create a viable alternative to traditional gas- or diesel-powered vehicles
    url: https://www.imdb.com/title/tt1413496/

People:
  - title: Naomi Klein
    header: Author, social activist, and filmmaker known for her political analyses and criticism of corporate globalization and of capitalism
    url: http://www.naomiklein.org/main
  - title: Noam Chomsky
    header: Linguist, philosopher, cognitive scientist, historian, political activist, and social critic
    url: https://chomsky.info/
  - title: Shaun King
    header: Writer, civil rights activist, and co-founder of Real Justice PAC and The North Star
    url: https://www.shaunking.org/
  - title: Aaron Schwartz
    header: Computer programmer, entrepreneur, writer, political organizer, and Internet hacktivist
    url: https://en.wikipedia.org/wiki/Aaron_Swartz
  - title: Lawrence Lessig
    header: Academic, attorney, and political activist
    url: http://www.lessig.org/about/
  - title: Paul Stamets
    header: Mycologist, author and advocate of bioremediation and medicinal fungi
    url: https://fungi.com/pages/about-us
  - title: Michael Pollan
    header: Author, journalist, activist, and the Lewis K. Chan Arts Lecturer and Professor of Practice of Non-Fiction at Harvard University
    url: https://michaelpollan.com/

Companies:
  - title: Host Defense
    header: Harnessing the power of mushrooms to support your health
    url: https://hostdefense.com/
  - title: Eco Bags
    header: Ethically and sustainably sourced, durable-reusable bags that inspire people to reduce, reuse, recycle and re-imagine the world we live in
    url: https://www.ecobags.com/
  - title: Plastic Freedom
    header: A plastic free online store
    url: https://www.plasticfreedom.co.uk/
  - title: Green Magic Homes
    header: Advanced eco-housing construction system
    url: https://greenmagichomes.com/
  - title: Maker & Mineral
    header: Eco-conscious, ethically hand-crafted, and well-crafted home wears, accessories, and clothing for the modern person
    url: http://www.makerandmineral.com/
  - title: Bios Urn
    header: World’s first biodegradable urn designed to return you to the nature
    url: https://urnabios.com/

Products:
  - title: F-301 Ballpoint Retractable Pen
    header: The greatest pen in the history of writing utensils
    url: https://www.zebrapen.com/product/f-301-ball-point-retractable/?source=pen-type

Videos:
  - title: David Foster Wallace
    header: This Is Water
    url: https://www.youtube.com/watch?v=PhhC_N6Bm_s

Papers:
  - title: Millions projected to be at risk from sea-level risein the continental United States
    header: Mathew E. Hauer, Jason M. Evans and Deepak R. Mishra
    url: https://www.nature.com/articles/nclimate2961.epdf?referrer_access_token=DolaWtHyh5GIiLkSVnl45tRgN0jAjWel9jnR3ZoTv0NW5dzPCV1LQTM2JMQvXgeV5kcoIiVItcAo6QabUR9-178DTC5AmyL7sqoUXtYx2FydBJB3NZXi69rwMlAJSFnb4PbI1CrMlUnNDDLj1lRtE1FdsgdlaP7hfzAT8rce5yP_2UibeTtvtA4ujTyZbUPBpq6TupE43pAd4TGEvo5yPWwaNMBgJ5JLMuV25oc-mCqBX7ky5Zb1jW1MjrKSTE8tyq5bwIKbyC1agHJarEirlA%3D%3D&tracking_referrer=www.nytimes.com
  - title: "The AI Revolution: The Road to Superintelligence"
    header: Tim Urban
    url: https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html
  - title: "Climate Change: A Grand Software Challenge"
    header: Steve Easterbrook
    url: http://www.cs.toronto.edu/~sme/papers/2010/Easterbrook-FSE2010-wkshp.pdf
`);

module.exports = { resources };
