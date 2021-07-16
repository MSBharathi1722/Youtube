import EmberRouter from '@ember/routing/router';
import config from 'youtube/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('watch',{path: "/watch/:videoId"});
  this.route('search',{path: "/search/:searchQuery"});
});
