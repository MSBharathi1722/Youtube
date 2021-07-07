import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class IndexController extends Controller {
  @tracked result;
  @tracked first = false;
  @tracked ready=false;
  @tracked vid;
  @action
  async search(){
    console.log(this.query);
    var response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBcpT7HItomkDp467X_P2SVGCucWSWPj8U&type=video&maxResults=10&q="+this.query);
    var data = await response.json();
    this.result = data.items;
  }
  play(videoId){
    // //console.log(this.vid);
    // var setVid = ()=>{this.vid = videoId};
    this.setVid(videoId);
    //console.log(this.vid);
  }
  setVid(videoId){
    this.vid=videoId;
  }
  vidPlay(videoId){
    
    this.vid=videoId;
    console.log(this.vid);
    this.first=true;
    this.ready=true;
  }
}
