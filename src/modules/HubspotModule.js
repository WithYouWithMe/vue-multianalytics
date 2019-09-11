import { MODULE_HUBSPOT } from '../analyticsTypes'
import BasicModule from './BasicModule'

export default class HubspotModule extends BasicModule {

    constructor () {
        super(MODULE_HUBSPOT)
    }

    init (initConf = {}) {
      //Load the HubSpot tracking code
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.setAttribute('defer', '');
        e.src = (`https://js.hs-scripts.com/${initConf.token}.js`);
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
      })();

      this.config.debug = initConf.debug
      
    }

    trackView () { /* Overriden by modules */ }

    trackEvent () { /* Overriden by modules */ }
  
    trackException () { /* Overriden by modules */ }
  
    trackTiming () { /* Overriden by modules */ }
  
    setAlias () { /* Overriden by modules */ }
  
    identify () { /* Overriden by modules */ }
  
    setUsername () { /* Overriden by modules */ }
  
    setUserProperties () { /* Overriden by modules */ }
  
    setUserPropertiesOnce () { /* Overriden by modules */ }
  
    incrementUserProperties () { /* Overriden by modules */ }
  
    setSuperProperties () { /* Overriden by modules */ }
  
    setSuperPropertiesOnce () { /* Overriden by modules */ }
  
    ecommerceTrackEvent () { /* Overriden by modules */ }
    
    addTransaction () { /* Overriden by modules */}
  
    addItem () { /* Overriden by modules */}
  
    trackTransaction () { /* Overriden by modules */}
  
    clearTransactions () { /* Overriden by modules */}
  
    reset () { /* Overriden by modules */}
}