const $submitYourLover = document.getElementById("submitYourLover");
const $typeYourLover = document.getElementById("typeYourLover")
const $loverName = document.getElementById("loverName");
const $video = document.getElementById("video");
/*
* Hidden
*/

$loverName.style.display = "none";
$video.style.display = "none";
$video.pause();
//

$submitYourLover.addEventListener("click", () => {
    serenata();
});

function serenata(){
    let nomeAmada = $typeYourLover.value;
    if($typeYourLover.value.length == 0){
        alert("Você precisa escrever o nome da amada!");
    } else {
        $submitYourLover.style.display = "none"
        $typeYourLover.style.display = "none"
        $loverName.style.display = "block";
        $loverName.innerHTML = "Essa é pra você: " + nomeAmada;
        $video.style.display = "block";
        $video.play();
    }
}