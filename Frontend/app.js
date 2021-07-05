const socket = new WebSocket('ws://localhost:8080');

qs = (elem) => document.querySelector(elem);
head = qs('ul');
textdata = qs('#data');



button = qs('button');
button.onclick = () => {
    console.log("Button");
    let data = {
        name : 'this',
        dttext : textdata.value
    }
    socket.send(JSON.stringify(data));
}



textdata.addEventListener("keydown",(e) => {
    if(e.keyCode == 13) {
        button.click();
    };
    console.log("send");
});



socket.onmessage = ({data}) => {
    console.log(data);

    li = document.createElement('li');
    li.textContent = 'Hallo';
    head.appendChild(li);
};

