// Add addon registers here



// ------ Stencil JS Dev Server ------
/**
 * Adding environment to the window object.
 * Needed for socket communication.
 */
import { stencil } from '../package.json';
const {host, port} = stencil;
window.STENCIL_DEV_HOST = host;
window.STENCIL_DEV_PORT = port;
// ------ Stencil JS Dev Server ------
