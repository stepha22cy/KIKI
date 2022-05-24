function timeToWalk(steps,footPrintMeters,speedInKmH){
    let distance=steps*footPrintMeters;
    let speedMetersInSsec=speedInKmH/3.6;
    let rest=Math.floor(distance/500);
    let time=distance/speedMetersInSsec;
    console.log(rest)
    let timeMin=Math.floor(time/60);
    let seconds=Math.round(time-(timeMin*60))
    let timeHr=time/3600;
    console.log(`(timeHr<10?'0':'')+timeHr:(timeMin+rest<10?'0':''{minutes}:${seconds}`);

}
timeToWalk(4000, 0.60, 5)