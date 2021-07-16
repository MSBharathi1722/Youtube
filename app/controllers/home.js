import Controller from '@ember/controller';

export default class HomeController extends Controller {
  getTime(t){
    console.log("hello");
    return t;
  }
}
