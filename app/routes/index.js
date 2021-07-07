import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model(){
    console.log(this.query);
    var response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBcpT7HItomkDp467X_P2SVGCucWSWPj8U&type=video&maxResults=6&q=java");
    var data = await response.json();
    return data.items;
  }
}
