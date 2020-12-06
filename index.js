function curTime() {
    let htmlTime = document.querySelector("#time")
    moment.locale('ru'); // 'en'
    let time = moment().format('LTS');
    htmlTime.textContent = time
    setTimeout(curTime, 1000);
}
curTime();

const cors = "https://cors-anywhere.herokuapp.com/";
const api = `${cors}https://api.darksky.net/forecast/cc9e244b77bb846cea081a8e1c4e8550/47.4693,84.8718?units=si`
const degree = document.querySelector(".loc")
fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const {
            temperature,
            summary,
            icon
        } = data.currently;
        console.log(data);
        degree.textContent = temperature + "˚C";
        setIcons(icon, document.querySelector("#icon"))
    });


function setIcons(icon, iconId) {
    const skycons = new Skycons({color: "white"});
    const curIcon = icon.replace(/-/g, "_").toUpperCase()
    skycons.play()
    return skycons.set(iconId, Skycons[curIcon]);
    
}

