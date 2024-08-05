import { MessageType } from "../types";

function handleMessage(msg: MessageEvent) {
    switch (msg.data.messageType) {
        case MessageType.Joined:
            console.log(msg.data.playerType);
            console.log(msg.data.gameState);
            break;
        case MessageType.Move:
            console.log(msg.data.gameState);
            break;
        case MessageType.Error:
            console.log(msg.data.error);
            break;
    }
}

export default handleMessage;