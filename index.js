const wrapper=document.querySelector(".wrapper");

function getVideo(){
fetch("https://services.brid.tv/services/get/latest/26456/0/1/25/0.json",{
   //axios
    mode: "cors",
    cache: "no-cache", 
    credentials: "same-origin", 
}).then(elem=> elem.json()).then(data=> 
{
    localStorage.setItem('bazaVideo', JSON.stringify(data))
    readVideo();
}
);
}

function readVideo(){
    let data=JSON.parse(localStorage.getItem("bazaVideo"));

    for(let i = 1;i <= data.Video.length;i++){

        let div = document.createElement("div");
        div.id="div"+i;
        wrapper.appendChild(div);
   
            $bp(div, {
            "id":JSON.stringify(data.Player.id),            
            "width":"30%",
            "height":"50vh",
            "video": data.Video[i]
    })
    div.style.width="200px";
}

}
getVideo();
setTimeout(getVideo,300000);

