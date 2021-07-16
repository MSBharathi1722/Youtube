import Route from '@ember/routing/route';

export default class WatchRoute extends Route {
  model(params){
    const {
      videoId
    } = params;
    return videoId;
  }
}
