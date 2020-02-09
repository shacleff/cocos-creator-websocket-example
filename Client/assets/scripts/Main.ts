import * as pomelo from "./pomelo-creator-client"

const {ccclass, property} = cc._decorator;

const HOST = "127.0.0.1:8080"
const PORT = null

@ccclass
export default class Main extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // public onLoad() {
    //     // let ws = new WebSocket("ws://echo.websocket.org");
    //     let ws = new WebSocket("ws://127.0.0.1:8080/ws");
        
    //     ws.onopen = function (event) {
    //         console.log("Send Text WS was opened.");
    //     };
    //     ws.onmessage = function (event) {
    //         console.log("response text msg: " + event.data);
    //     };
    //     ws.onerror = function (event) {
    //         console.log("Send Text fired an error");
    //     };
    //     ws.onclose = function (event) {
    //         console.log("WebSocket instance closed.");
    //     };
       
    //     setTimeout(function () {
    //         if (ws.readyState === WebSocket.OPEN) {
    //             ws.send("Hello WebSocket, I'm a text message.");
    //         }
    //         else {
    //             console.log("WebSocket instance wasn't ready...");
    //         }
    //     }, 3000);
    // }

    public onLoad() {
        this.connectServer()
        setTimeout(() =>{
            pomelo.request("Test", {msg: "Test"}, function(r_data: any){
                console.log(r_data);
            })
        }, 3000)
        
    }

    public connectServer() {
        pomelo.init({
    		host: HOST,
            port: PORT
    	}, function(r_data: any) {
            // this.guestEntryConnector(target)
            console.log("Connect Success")
        }.bind(this));
    }
}
