
let usedcap=document.getElementById('current'); //815 GB
let bar=document.getElementById('use1'); //bar + color
let unit = ' GB';
let prog_move=0;
let total=1000;
let usageleft=document.getElementById('usageremain');//185 left
let dot_progress= document.getElementById('use2'); //ball that moves on the bar
let progressPercent = prog_move/total * 10000;
let image= document.getElementById('img-input');


image.addEventListener("change",()=>{
    let name = image.value;
    let size = image.files[0].size / 1000000;
    prog_move += size;
    let nameValid = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(name);
    if(nameValid){
        bar.style.width = prog_move+"%";
        usageleft.innerHTML = (1000-prog_move).toFixed(2);
        usedcap.innerHTML = (prog_move).toFixed(2);
        return;
    }else{
        alert("Please insert an image");
        return;
    }

});

