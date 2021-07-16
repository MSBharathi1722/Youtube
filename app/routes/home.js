import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
export default class HomeRoute extends Route {

  @tracked nextPageToken;

  async model(){
    let response = await fetch("https://www.googleapis.com/youtube/v3/videos?regionCode=IN&chart=mostPopular&part=snippet,contentDetails,statistics&key=AIzaSyBcpT7HItomkDp467X_P2SVGCucWSWPj8U&type=video&maxResults=24");
    let data = await response.json();
    this.nextPageToken = data.nextPageToken;
    return data.items;
  }

}
