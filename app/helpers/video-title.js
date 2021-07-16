import { helper } from '@ember/component/helper';

export default helper(function videoTitle(params) {
  console.log(params);
  const {
    fullTitle
  } = params;
  // let len = fullTitle.length;
  console.log(fullTitle);
  // if(len > 30){
  //   return (fullTitle.slice(0,25).concat("..."));
  // }
  return params;
});
