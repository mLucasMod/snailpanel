import { IncomingMessage } from "http";
import { Duplex } from "stream";
import { WebSocket, WebSocketServer } from "ws";

// XXX authentication ? improvement ?
export class WebSocketManager {
    private clients: Set<WebSocket>;
    private wss: WebSocketServer;

    public get server() {
        return this.wss;
    }

    constructor(
        private onMessage?: (message: string) => void
    ) {
        this.clients = new Set();
        this.wss = new WebSocketServer({ noServer: true });

        this.wss.on("connection", (ws) => this.onConnection?.(ws));
    }

    private onConnection(ws: WebSocket) {
        this.clients.add(ws);

        ws.on("close", () => this.clients.delete(ws));
        ws.on("message", (msg) => this.onMessage?.(msg.toString()));
    }

    public handleUpgrade(request: IncomingMessage, socket: Duplex, head: Buffer<ArrayBufferLike>) {
        this.wss.handleUpgrade(request, socket, head, (ws) => {
            this.wss.emit("connection", ws, request);
        });
    }

    public broadcast(message: string) {
        for (const client of this.clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        }
    }
}
