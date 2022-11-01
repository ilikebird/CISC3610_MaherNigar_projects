slider.oninput = () => {
    const slider = document.getElementById('slider');
    const pixels = document.getElementById('pixels');
    pixels.innerHTML = slider.value;

    document.querySelector('html').style.setProperty('--font-size','${slider.value}px');
}