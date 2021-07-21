var images = ["PaPa.jpg","Brother.jpg","Mother.jpg","Sister.jpg"]; 
var names = ["Ome Etue", "Dafeh Etue", "Lara Etue", "Ema Etue"]; 
var i = 0;
function update(){
        document.getElementById("family_member_image").src = images[i];
        document.getElementById("family_member_name").innerHTML = names[i];
        i++;
        if(i==4){
            i=0;
        }
         }