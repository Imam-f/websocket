const socket = new WebSocket('ws://localhost:8080');
qs = (elem) => document.querySelector(elem);
head = qs('ul');
textdata = qs('#data');

button = qs('button').onclick = () => {
    console.log("Button");
    let data = {
        name : 'this',
        dttext : textdata.value
    }
    socket.send(JSON.stringify(data));
}

socket.onmessage = ({data}) => {
    console.log(data);

    li = document.createElement('li');
    li.textContent = 'Hallo';
    head.appendChild(li);
};

