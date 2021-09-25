// http server
import { Server, ConnInfo } from "https://deno.land/std@0.108.0/http/server.ts";
import { config as loadenv } from "https://deno.land/x/dotenv@v3.0.0/mod.ts"

const env = loadenv()
// change port from .env
const port:number = parseInt(env["PORT"])
// change hostname from .env
const hostname:string = env["HOSTNAME"]

const addr = `${hostname}:${port}`
const handler = async (request: Request, connInfo: ConnInfo) => {
    return await new Response("hello")
}
const server = new Server({ addr, handler})
await server.listenAndServe()