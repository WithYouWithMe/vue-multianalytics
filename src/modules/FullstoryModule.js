import { MODULE_FULLSTORY } from '../analyticsTypes'
import BasicModule from './BasicModule'

export default class FullStoryModule extends BasicModule {

  constructor () {
    super(MODULE_FULLSTORY)
  }

  init (initConf = {}) {
    console.log("[INFO] loading fullstory module");
    // Apply default configuration
    // initConf = { ...pluginConfig, ...initConf }
    const mandatoryParams = [ 'token' ];
    mandatoryParams.forEach(el => {
      if (!initConf[ el ]) throw new Error(`VueAnalytics : Please provide a "${el}" from the config.`)
    })

    window['_fs_debug'] = false;
    window['_fs_host'] = 'fullstory.com';
    window['_fs_org'] = initConf.token;
    window['_fs_namespace'] = 'fullstory';
    window['_fs_run_in_iframe'] = initConf.runInIframe || false;
    (function(m,n,e,t,l,o,g,y){
        if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
        g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
        o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_host+'/s/fs.js';
        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
        g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
        g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
        g.log = function(a,b) { g("log", [a,b]) };
        g.consent=function(a){g("consent",!arguments.length||a)};
        g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
        g.clearUserCookie=function(){};
    })(window,document,window['_fs_namespace'],'script','user');
  }

  trackView () { /* Overriden by modules */ }

  trackEvent () { /* Overriden by modules */ }

  trackException () { /* Overriden by modules */ }

  trackTiming () { /* Overriden by modules */ }

  setAlias () { /* Overriden by modules */ }

  identify ({ userId, options }) {
    fullstory.identify(userId, {
      displayName: options.name,
      email: options.email
    })
  }

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
