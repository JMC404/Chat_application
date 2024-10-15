

var socket = new WebSocket("ws://localhost:8080/ws");



let connect = () => {
    console.log("Attempting Connection...");


    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = Event => {
        console.log("Socket Closed Connection: ", Event);
    };

    socket.onerror = error => {
        console.log("Socket Error", error)
    };
};

let sendMsg = msg => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export {connect, sendMsg}