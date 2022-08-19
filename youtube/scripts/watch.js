let obj=JSON.parse(localStorage.getItem("youtube"));

let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${obj.id || obj.videoId}`;
iframe.allow="fullscreen";
let heading=document.createElement("h3");
heading.innerText=obj.title;
document.querySelector("#container").append(iframe,heading);