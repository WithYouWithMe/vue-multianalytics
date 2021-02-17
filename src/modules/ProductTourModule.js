import { MODULE_PRODUCT_TOUR } from '../analyticsTypes'
import BasicModule from './BasicModule'

export default class ProductTourModule extends BasicModule {

  constructor () {
      super(MODULE_PRODUCT_TOUR)
  }

  init (initConf = {}) {

    (function () {
      var e = document.createElement("script");
      e.text = `!function(d,w){var t="${initConf.token}",c="chmln",m="identify alias track clear set show on off custom help _data".split(" "),i=d.createElement("script");if(w[c]||(w[c]={}),!w[c].root){w[c].accountToken=t,w[c].location=w.location.href.toString(),w[c].now=new Date;for(var s=0;s<m.length;s++){!function(){var t=w[c][m[s]+"_a"]=[];w[c][m[s]]=function(){t.push(arguments);};}();}i.src="https://fast.trychameleon.com/messo/"+t+"/messo.min.js",i.async=!0,d.head.appendChild(i);}}(document,window);`;
      e.type = "text/javascript";
      e.async = true;
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(e, n)
    })();

    
    this.config.debug = initConf.debug
  }
  identify ({ userId, options }) {
    chmln.identify(userId, {
      email: options.email,
      created: options.createdAt,
      name: options.name,
      role: options.role,
    })
  }

  // more options available, see https://app.trychameleon.com/setup/install
}
