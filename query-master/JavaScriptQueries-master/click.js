//declare samecolor() here
function samecolor(){
    const doc = document;
    let color= "aqua";
    let divs = doc.querySelectorAll("#samecolor div");

    divs[0].style.backgroundColor="purple";
    divs[1].style.backgroundColor="purple";
    divs[2].style.backgroundColor="purple";
    divs[3].style.backgroundColor="purple";
    divs[0].style.opacity=0.3;
    divs[1].style.opacity=0.5;
    divs[2].style.opacity=0.7;
    divs[3].style.opacity=0.9;
}
function diffcolor(){
    let doc=document;
    let divs2=doc.querySelectorAll("#diffcolor div")
    divs2[0].style.backgroundColor="gold";
    divs2[1].style.backgroundColor="green";
    divs2[2].style.backgroundColor="gold";
    divs2[3].style.backgroundColor="green";
    divs2[4].style.backgroundColor="gold";
    divs2[5].style.backgroundColor="green";
    divs2[6].style.backgroundColor="gold";
    divs2[7].style.backgroundColor="green";

}
