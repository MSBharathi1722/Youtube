import { helper } from '@ember/component/helper';

export default helper(function viewCount(count) {
  if(count > 10000000){
    return ((count/1000000).toFixed(0)).toString().concat("M");
  }
  else if(count > 1000000){
    return ((count/1000000).toFixed(1)).toString().concat("M");
  }
  else if(count > 10000){
    return (count/1000).toFixed(0).concat("K");
  }
  else if(count > 1000){
    return (count/1000).toFixed(1).concat("K");
  }
  return count;
});
