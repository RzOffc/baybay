import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
[38;5;205m
██╗  ██╗███████╗██╗     ██████╗  █████╗
██║ ██╔╝██╔════╝██║     ██╔══██╗██╔══██╗
█████╔╝ █████╗  ██║     ██████╔╝███████║
██╔═██╗ ██╔══╝  ██║     ██╔══██╗██╔══██║
██║  ██╗███████╗███████╗██║  ██║██║  ██║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
[0m
       和の心 • DIGITAL COMMUNICATION
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

       東京 | TOKYO NIGHT PROTOCOL
       WhatsApp Multi-Device Ecosystem

       [ SYSTEM ]  Initializing core services...
       [ ENGINE ]  Baileys Runtime ........ READY
       [ SOCKET ]  WebSocket Interface .... ONLINE
       [ AUTH   ]  Authentication ......... VERIFIED
       [ CRYPTO ]  Secure Communication ... ENABLED
       [ CLIENT ]  WhatsApp Interface ..... STANDBY

       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       日本の技術 • BUILT FOR CONNECTION
       Developed with passion by Kelra
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));

console.log(
  chalk.hex("#00c2ff")("PUTRAKELRA") +
  chalk.gray("  |  WhatsApp Web Library")
);

console.log(
  chalk.gray("  A modern, lightweight WhatsApp Web connection engine.")
);

console.log(
  chalk.gray("  ─────────────────────────────────────")
);

console.log(
  chalk.white("  TELEGRAM  ") +
  chalk.cyan("https://t.me/dontplaykelroy")
);

console.log(
  chalk.white("  PROJECT   ") +
  chalk.hex("#00c2ff")("KELRA • BAILEYS ECOSYSTEM")
);

console.log(
  chalk.gray("  Made with dedication. Inspired by PutraKelra. 日本")
);

console.log(
  chalk.hex("#00c2ff")("  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
);
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map