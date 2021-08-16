var pic=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","brother.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var fam_name=["my family","SuNeel jain","AdArSh jain","aYuSh jain ","NeHa jain"];
var i=0;
function next(){
    if(i==5){
        i=0;
    }
    document.getElementById("member").src=pic[i];
    document.getElementById("name").innerHTML=fam_name[i];
    i++;
}