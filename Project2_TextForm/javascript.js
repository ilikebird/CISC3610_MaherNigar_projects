function changeBackground(){
    let backgroundC = document.getElementById("rgbcolor").value;
    document.body.style.backgroundColor = backgroundC;
    document.getElementById('rgbcolor').value = backgroundC;


}

function chnageText(){
    const myText = document.getElementById('heading');
    const button = document.getElementById('myButton');
    const input = document.getElementById('myInput'); 
    button.addEventListener('click', ()=>{
        myText.style.color = input.value;
    })
}

