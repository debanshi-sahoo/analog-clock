setInterval(() => {
    dt=new Date();
    hrtime=dt.getHours();
    mintime=dt.getMinutes();
    sectime=dt.getSeconds();
    hrotation=30*hrtime+mintime/2;
    mrotation=6*mintime;
    srotation=6*sectime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

},1000);