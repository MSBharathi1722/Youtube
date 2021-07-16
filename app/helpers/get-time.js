import { helper } from '@ember/component/helper';

export default helper(function getTime(isoTime) {
  var stringPattern = /^PT(?:(\d+)D)?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d{1,3})?)S)?$/;
  var stringParts = stringPattern.exec( isoTime );
  let seconds = (((( stringParts[1] === undefined ? 0 : stringParts[1]*1 )  /* Days */
                        * 24 + ( stringParts[2] === undefined ? 0 : stringParts[2]*1 ) /* Hours */
                     )
                      * 60 + ( stringParts[3] === undefined ? 0 : stringParts[3]*1 ) /* Minutes */
                    )
                      * 60 + ( stringParts[4] === undefined ? 0 : stringParts[4]*1 ) /* Seconds */
  );

  let hours = (Math.floor(seconds / 3600)).toString();
  let mins = Math.floor(((seconds%3600)/60)).toString();
  let secs = ((seconds%3600)%60)%60;

  if(hours == 0){
    if(secs<10){
      return mins.concat(":").concat("0").concat(secs);
    }
    return mins.concat(":").concat(secs);
  }
  else {
    if(mins<10 && secs<10){
      return hours.concat(":").concat("0").concat(mins).concat("0").concat(secs);
    }
    else if(mins<10){
      return hours.concat(":").concat("0").concat(mins).concat(secs);
    }
    return hours.concat(":").concat(mins).concat("0").concat(secs);
  }
});
