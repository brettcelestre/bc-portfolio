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
import ShortFilms from './Components/ShortFilms/ShortFilms.js';
import Applications from './Components/Applications/Applications.js';
import Friends from './Components/Friends/Friends.js';
import Resources from './Components/Resources/Resources.js';
import About from './Components/About/About.js';
import Resume from './Components/Resume/Resume.js';
import ImageViewer from './Components/ImageViewer/ImageViewer.js';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} zoom="false">
      </Route>
      <Switch>
        <Route path="/short-films/:film" key="player" component={ShortFilms}/>
        <Route path="/short-films" key="short-films" component={ShortFilmsSections}/>
        <Route path="/:section/:category/:subCategory/:piece" key="subcategory-piece" component={ImageViewer} />
        <Route path="/:section/:category/sections" key="category-sections" component={ImageSections} />
        <Route path="/:section/:category/:piece" key="category-piece" component={ImageViewer} />
        <Route path="/:section/:piece" key="section-piece" component={ImageViewer} />
        <Route path="/applications" key="applications" component={Applications} />
        <Route path="/friends" key="friends" component={Friends} />
        <Route path="/resources" key="resources" component={Resources} />
        <Route path="/about" key="about" component={About} />
        <Route path="/resume" key="resume" component={Resume} />
        <Route path="/:section" key="sections" component={ImageSections} />
        <Route path="/" key="home-page" component={Home} />
        <Redirect to={{ pathname: `/` }}/>
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
