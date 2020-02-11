import { MODULE_PERSONIZELY } from '../analyticsTypes'
import BasicModule from './BasicModule'

export default class PersonizelyModule extends BasicModule {

    constructor () {
        super(MODULE_PERSONIZELY)
    }

    init (initConf = {}) {
      // Load Personizely
      (function () {
        var e = document.createElement("link");
        e.href = (`https://static.personizely.net/${initConf.token}.css`);
        e.rel = "stylesheet";

        var n = document.getElementsByTagName("link")[0];
        n.parentNode.insertBefore(e, n)
      })();

      (function () {
        var e = document.createElement("script");
        e.src = (`https://static.personizely.net/${initConf.token}.js`);
        e.type = "text/javascript";
        e.async = true;
        
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
      })();

      this.config.debug = initConf.debug
    }
}
