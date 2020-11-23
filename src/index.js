import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/skeleton.css';
import './assets/css/normalize.css';
import './index.css';

import App from './Components/App/App.js';
import Home from './Components/Home/Home.js';
import ImageSections from './Components/ImageSections/ImageSections.js';
import ShortFilmsSections from './Components/ShortFilmsSections/ShortFilmsSections.js';
import ShortFilmsPlayer from './Components/ShortFilmsPlayer/ShortFilmsPlayer.js';
import ShortFilmsCredits from './Components/ShortFilmsCredits/ShortFilmsCredits.js';
import ShortFilmsDetails from './Components/ShortFilmsDetails/ShortFilmsDetails.js';
import Applications from './Components/Applications/Applications.js';
import Creatives from './Components/Creatives/Creatives.js';
// import Resources from './Components/Resources/Resources.js';
// import About from './Components/About/About.js';
import Resume from './Components/Resume/Resume.js';
import ImageViewer from './Components/ImageViewer/ImageViewer.js';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App}>
      </Route>
      <Switch>
        <Route name="short-films" path="/short-films/credits/:film" component={ShortFilmsCredits} lastViewed=""/>
        <Route name="short-films" path="/short-films/:film/:filmTarget" component={ShortFilmsPlayer} lastViewed=""/>
        {/* <Route name="short-films" path="/short-films/behind-the-scenes/:film" component={ShortFilmsPlayer} lastViewed=""/> */}
        <Route name="short-films" path="/short-films/:film" component={ShortFilmsDetails} lastViewed=""/>
        <Route name="short-films" path="/short-films" component={ShortFilmsSections} lastViewed=""/>
        <Route name="images" path="/:section/:category/:subCategory/:piece" component={ImageViewer} />
        <Route name="images" path="/:section/:category/sections" component={ImageSections} />
        <Route name="images" path="/:section/:category/:piece" component={ImageViewer} />
        <Route name="images" path="/:section/:category/:piece/zoom" component={ImageViewer} />
        <Route name="images" path="/:section/:piece" component={ImageViewer} />
        <Route name="applications" path="/applications" component={Applications} />
        <Route name="creatives" path="/creatives" component={Creatives} />
        {/* <Route name="resources" path="/resources" component={Resources} /> */}
        {/* <Route name="about" path="/about" component={About} /> */}
        <Route name="resume" path="/resume" component={Resume} />
        <Route name="home" path="/home" component={Home} />
        <Route name="gallery-sections" path="/:section" component={ImageSections} />
        <Redirect to={{ pathname: `/photography` }}/>
        {/* <Route component={ErrorRedirect} /> */}
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
