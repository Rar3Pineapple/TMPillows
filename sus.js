url = "https://api.ipify.org/?format=json";
function ip() {
    fetch(url).then(res => results.json()).then(result => {console.log(result)});
}
