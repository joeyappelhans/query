//declare samecolor() here
function samecolor(){
    const doc = document;
    let color= "#009900";
    let section = doc.querySelectorAll("#samecolor div");
    for(let h=0; h<section.length; h++){
      section[h].style.backgroundColor=color;
    }
    section[0].style.opacity:.5;
    section[1].style.opacity:.6;
    section[2].style.opacity:.7;
    section[3].style.opacity:.8;
}
