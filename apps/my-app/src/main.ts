import { setRemoteDefinitions } from '@nrwl/angular/mf';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

fetch('/assets/module-federation.manifest.json', {
  headers: {
    "Content-Type": "application/javascript",
  },
})
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));


// import('./bootstrap').catch((err) => console.error(err));

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
