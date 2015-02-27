require("source-map-support").install(),_ki={init:function(n,t){void 0===_ki.namespaces[t]&&(_ki.namespaces[t]={vars:{}}),n._ki_ns_name=t,n._ki_ns_ctx=n,_ki.intern.bind(n)(_ki.modules.core),_ki.intern.bind(n)(_ki.modules.mori),_ki.intern.bind(n)(_ki.modules),_ki.intern.bind(n)(_ki.namespaces[_ki_ns_name].vars)},intern:function(n){for(var t in n)this[t]=n[t]},namespaces:{},modules:{core:{truthy:function(n){return n===!1||null==n?!1:!0},falsey:function(n){return!truthy(n)},not:function(n){return!truthy(n)},eq:function(){return equals.apply(null,arguments)},neq:function(){return!equals.apply(null,arguments)},add:function(){for(var n=0,t=0;t<arguments.length;t++)n+=arguments[t];return n},sub:function(){for(var n=arguments[0],t=1;t<arguments.length;t++)n-=arguments[t];return n},mul:function(){for(var n=1,t=0;t<arguments.length;t++)n*=arguments[t];return n},div:function(){for(var n=arguments[0],t=1;t<arguments.length;t++)n/=arguments[t];return n},mod:function(n,t){return n%t},lt:function(){for(var n=!0,t=0;t<arguments.length-1&&(n=n&&arguments[t]<arguments[t+1],n);t++);return n},gt:function(){for(var n=!0,t=0;t<arguments.length-1&&(n=n&&arguments[t]>arguments[t+1],n);t++);return n},leq:function(){for(var n=!0,t=0;t<arguments.length-1&&(n=n&&arguments[t]<=arguments[t+1],n);t++);return n},geq:function(){for(var n=!0,t=0;t<arguments.length-1;t++)n=n&&arguments[t]>=arguments[t+1];return n},prn:function(){console.log.apply(console,arguments)},str:function(){return String.prototype.concat.apply("",arguments)}},mori:function(){try{return require("ki/node_modules/mori")}catch(n){try{return require("mori")}catch(t){return mori}}}()}},function(){return _ki.init(this,"_ki"),function(){return _ki.init(this,"datomiki"),function(){return _ki_ns_ctx.request=require("request"),_ki.namespaces[_ki_ns_name].vars.request=_ki_ns_ctx.request,_ki_ns_ctx.request}(),function(){return _ki_ns_ctx.d=require("dbin").use(),_ki.namespaces[_ki_ns_name].vars.d=_ki_ns_ctx.d,_ki_ns_ctx.d}(),function(){return _ki_ns_ctx.edn=require("jsedn"),_ki.namespaces[_ki_ns_name].vars.edn=_ki_ns_ctx.edn,_ki_ns_ctx.edn}(),function(){return _ki_ns_ctx.base=hashMap("uri",d.cfg.rest.uri,"alias",d.cfg.rest.alias,"db",d.cfg.rest.alias,"url","/","basis","-","method","get","data",hashMap(),"content-type","application/edn","accept","application/edn","format","json","pre",!1,"resmod",!0),_ki.namespaces[_ki_ns_name].vars.base=_ki_ns_ctx.base,_ki_ns_ctx.base}(),function(){return _ki_ns_ctx.edenize=function(n){return toClj(n)},_ki.namespaces[_ki_ns_name].vars.edenize=_ki_ns_ctx.edenize,_ki_ns_ctx.edenize}(),function(){return _ki_ns_ctx.jsonize=function(n){return function(){try{return edn.toJS(edn.parse(n))}catch(t){return console.error("Exception: string isn't edn - "+t),console.error(n),n}}.call(this)},_ki.namespaces[_ki_ns_name].vars.jsonize=_ki_ns_ctx.jsonize,_ki_ns_ctx.jsonize}(),function(){return _ki_ns_ctx.preopts=function(n){return merge(base,edenize(n),hashMap("pre",!0))},_ki.namespaces[_ki_ns_name].vars.preopts=_ki_ns_ctx.preopts,_ki_ns_ctx.preopts}(),function(){return _ki_ns_ctx.opts=function(){var n={0:function(){return base},1:function(n){return function(){return function(n){var t=n;return assoc(t,"uri",str(get(t,"uri"),get(t,"url")),"headers",hashMap("Accept",get(t,"accept"),"Content-Type",get(t,"content-type")))}.call(this,function(){return truthy(get(n,"pre"))?n:merge(base,edenize(n))}.call(this))}.call(this)}},t=0;for(var e in n)t=e>t?e:t;return n[null]=n[t],function(){var t=n[arguments.length]||n[null];return t.apply(this,arguments)}}.call(this),_ki.namespaces[_ki_ns_name].vars.opts=_ki_ns_ctx.opts,_ki_ns_ctx.opts}(),function(){return _ki_ns_ctx.response=function(n,t){return function(){return truthy(t.resmod)?function(){return truthy(equals("json",t.format))?{code:n.statusCode,body:"application/edn"==t.accept?jsonize(n.body):n.body}:hashMap(keyword("code"),n.statusCode,keyword("body"),n.body)}.call(this):n}.call(this)},_ki.namespaces[_ki_ns_name].vars.response=_ki_ns_ctx.response,_ki_ns_ctx.response}(),function(){return _ki_ns_ctx.req=function(n,t){return function(){return function(n){var e=n;return request(e,function(n,r){return t(n,response(r,e))})}.call(this,toJs(opts(n)))}.call(this)},_ki.namespaces[_ki_ns_name].vars.req=_ki_ns_ctx.req,_ki_ns_ctx.req}(),function(){return _ki_ns_ctx.aliases=function(){var n={1:function(n){return aliases(hashMap(),n)},2:function(n,t){return req(merge(edenize(n),hashMap("url","/data/")),t)}},t=0;for(var e in n)t=e>t?e:t;return n[null]=n[t],function(){var t=n[arguments.length]||n[null];return t.apply(this,arguments)}}.call(this),_ki.namespaces[_ki_ns_name].vars.aliases=_ki_ns_ctx.aliases,_ki_ns_ctx.aliases}(),function(){return _ki_ns_ctx.cdb=function(){var n={1:function(n){return cdb(get(base,"db"),hashMap(),n)},2:function(n,t){return cdb(n,hashMap(),t)},3:function(n,t,e){return function(){return function(t){var r=t;return req(merge(r,hashMap("url",str("/data/",get(r,"alias"),"/"),"method","post","body",str('{:db-name "',n,'"}'))),e)}.call(this,preopts(t))}.call(this)}},t=0;for(var e in n)t=e>t?e:t;return n[null]=n[t],function(){var t=n[arguments.length]||n[null];return t.apply(this,arguments)}}.call(this),_ki.namespaces[_ki_ns_name].vars.cdb=_ki_ns_ctx.cdb,_ki_ns_ctx.cdb}(),function(){return _ki_ns_ctx.dbs=function(){return"list databases"},_ki.namespaces[_ki_ns_name].vars.dbs=_ki_ns_ctx.dbs,_ki_ns_ctx.dbs}(),function(){return _ki_ns_ctx.info=function(){return"retrieve database info"},_ki.namespaces[_ki_ns_name].vars.info=_ki_ns_ctx.info,_ki_ns_ctx.info}(),function(){return _ki_ns_ctx.transact=function(){return"process transaction"},_ki.namespaces[_ki_ns_name].vars.transact=_ki_ns_ctx.transact,_ki_ns_ctx.transact}(),function(){return _ki_ns_ctx.datoms=function(){return"retrieve datoms"},_ki.namespaces[_ki_ns_name].vars.datoms=_ki_ns_ctx.datoms,_ki_ns_ctx.datoms}(),function(){return _ki_ns_ctx.entity=function(){return"retrieve entity"},_ki.namespaces[_ki_ns_name].vars.entity=_ki_ns_ctx.entity,_ki_ns_ctx.entity}(),function(){return _ki_ns_ctx.q=function(){var n={2:function(n,t){return q(n,hashMap(),t)},3:function(n,t,e){return function(){return function(t){var r=t;return function(t){var s=t;return function(t){var i=t;return function(t){var s=t;return req(merge(edenize(r),hashMap("url","/api/query","method","post","body",str("{:q ",n,i,s,' :args [{:db/alias "',get(r,"alias"),"/",get(r,"db"),'"}]}'))),e)}.call(this,function(){return truthy(get(s,"offset"))?str(" :offset ",get(s,"offset")):""}.call(this))}.call(this,function(){return truthy(get(s,"limit"))?str(" :limit ",get(s,"limit")):""}.call(this))}.call(this,get(r,"data"))}.call(this,preopts(t))}.call(this)}},t=0;for(var e in n)t=e>t?e:t;return n[null]=n[t],function(){var t=n[arguments.length]||n[null];return t.apply(this,arguments)}}.call(this),_ki.namespaces[_ki_ns_name].vars.q=_ki_ns_ctx.q,_ki_ns_ctx.q}(),function(){return _ki_ns_ctx.events=function(){return"subscribe to events"},_ki.namespaces[_ki_ns_name].vars.events=_ki_ns_ctx.events,_ki_ns_ctx.events}(),exports.opts=opts,exports.req=req,exports.aliases=aliases,exports.cdb=cdb,exports.q=q}()}();
//# sourceMappingURL=datomiki.js.map