import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
  async model(params){
    const {
      searchQuery
    } = params;
    console.log(params);
    let response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBcpT7HItomkDp467X_P2SVGCucWSWPj8U&type=video&maxResults=5&q="+searchQuery);
    let data = await response.json();
    console.log(data.items);
    return data.items;
  }
}
