import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-8f475953.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["wc-starter",[[1,"wc-starter",{"text":[1],"image":[1]}]]],["wc-ui-input",[[1,"wc-ui-input",{"value":[1]}]]]], options);
});
