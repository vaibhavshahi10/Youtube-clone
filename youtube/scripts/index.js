const api_key="AIzaSyDFgUdPRSn8m1ZcdZH6GBiPYU4qsL7VmO0"

let fetching= async(query) =>{
    try{
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
        let res= await fetch(url);
        let data= await res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
    }

}
let append= (data) =>{
    document.querySelector("#container").innerHTML=null;
    data.forEach(({id:{videoId},snippet:{thumbnails:{high:{url}},title}})=>{
        let box=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("id","imageID");
        image.src=url;
        let heading=document.createElement("h3");
        heading.innerText=title;
        box.append(image,heading);
        let video_details={
            videoId,title
        }
        box.addEventListener("click",()=>{
            localStorage.setItem("youtube",JSON.stringify(video_details));
            window.location.href="watch.html";
        })
        document.querySelector("#container").append(box);
        
    })
}


let main= async() =>{
    let query=document.querySelector("#searchbar").value;
    let data= await fetching(query);
    append(data.items);

}

let defaultappend=(data)=>{
    document.querySelector("#container").innerHTML=null;
    data.forEach(({id , snippet:{thumbnails:{high:{url}},title}})=>{
        let box=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("id","defaultimageID");
        image.src=url;
        let heading=document.createElement("h3");
        heading.innerText=title;
        box.append(image,heading);
        let video_details={
            id,title
        }
        box.addEventListener("click",()=>{
            localStorage.setItem("youtube",JSON.stringify(video_details));
            window.location.href="watch.html";
        })
        document.querySelector("#container").append(box);
    })
}

let defaultfetch= async() =>{
    let url=`https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&regionCode=IN&maxResults=32&key=${api_key}`
    let res= await fetch(url);
    let data=await res.json();
    console.log(data);
    defaultappend(data.items);
    

}

defaultfetch();




/* <iframe width="853" height="480" 
src="https://www.youtube.com/embed/hIiz8Km2tpo" 
title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen></iframe> */