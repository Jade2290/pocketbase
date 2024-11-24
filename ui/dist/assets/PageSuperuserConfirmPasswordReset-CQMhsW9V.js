import{S as y,i as E,s as G,F as I,c as R,m as H,t as J,a as N,d as T,J as M,f as D,h as _,z as P,j as h,k as f,l as K,n as b,o as c,q as j,u as O,C as Q,D as U,v as w,w as V,p as L,K as X,r as Y,H as Z,A as q}from"./index-BtQUXyu6.js";function W(r){let e,n,s;return{c(){e=P("for "),n=_("strong"),s=P(r[3]),f(n,"class","txt-nowrap")},m(l,t){b(l,e,t),b(l,n,t),c(n,s)},p(l,t){t&8&&Z(s,l[3])},d(l){l&&(w(e),w(n))}}}function x(r){let e,n,s,l,t,i,p,d;return{c(){e=_("label"),n=P("New password"),l=h(),t=_("input"),f(e,"for",s=r[8]),f(t,"type","password"),f(t,"id",i=r[8]),t.required=!0,t.autofocus=!0},m(u,a){b(u,e,a),c(e,n),b(u,l,a),b(u,t,a),q(t,r[0]),t.focus(),p||(d=j(t,"input",r[6]),p=!0)},p(u,a){a&256&&s!==(s=u[8])&&f(e,"for",s),a&256&&i!==(i=u[8])&&f(t,"id",i),a&1&&t.value!==u[0]&&q(t,u[0])},d(u){u&&(w(e),w(l),w(t)),p=!1,d()}}}function ee(r){let e,n,s,l,t,i,p,d;return{c(){e=_("label"),n=P("New password confirm"),l=h(),t=_("input"),f(e,"for",s=r[8]),f(t,"type","password"),f(t,"id",i=r[8]),t.required=!0},m(u,a){b(u,e,a),c(e,n),b(u,l,a),b(u,t,a),q(t,r[1]),p||(d=j(t,"input",r[7]),p=!0)},p(u,a){a&256&&s!==(s=u[8])&&f(e,"for",s),a&256&&i!==(i=u[8])&&f(t,"id",i),a&2&&t.value!==u[1]&&q(t,u[1])},d(u){u&&(w(e),w(l),w(t)),p=!1,d()}}}function te(r){let e,n,s,l,t,i,p,d,u,a,g,S,C,v,k,F,z,m=r[3]&&W(r);return i=new D({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:o})=>({8:o}),({uniqueId:o})=>o?256:0]},$$scope:{ctx:r}}}),d=new D({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:o})=>({8:o}),({uniqueId:o})=>o?256:0]},$$scope:{ctx:r}}}),{c(){e=_("form"),n=_("div"),s=_("h4"),l=P(`Reset your superuser password
                `),m&&m.c(),t=h(),R(i.$$.fragment),p=h(),R(d.$$.fragment),u=h(),a=_("button"),g=_("span"),g.textContent="Set new password",S=h(),C=_("div"),v=_("a"),v.textContent="Back to login",f(s,"class","m-b-xs"),f(n,"class","content txt-center m-b-sm"),f(g,"class","txt"),f(a,"type","submit"),f(a,"class","btn btn-lg btn-block"),a.disabled=r[2],K(a,"btn-loading",r[2]),f(e,"class","m-b-base"),f(v,"href","/login"),f(v,"class","link-hint"),f(C,"class","content txt-center")},m(o,$){b(o,e,$),c(e,n),c(n,s),c(s,l),m&&m.m(s,null),c(e,t),H(i,e,null),c(e,p),H(d,e,null),c(e,u),c(e,a),c(a,g),b(o,S,$),b(o,C,$),c(C,v),k=!0,F||(z=[j(e,"submit",O(r[4])),Q(U.call(null,v))],F=!0)},p(o,$){o[3]?m?m.p(o,$):(m=W(o),m.c(),m.m(s,null)):m&&(m.d(1),m=null);const A={};$&769&&(A.$$scope={dirty:$,ctx:o}),i.$set(A);const B={};$&770&&(B.$$scope={dirty:$,ctx:o}),d.$set(B),(!k||$&4)&&(a.disabled=o[2]),(!k||$&4)&&K(a,"btn-loading",o[2])},i(o){k||(J(i.$$.fragment,o),J(d.$$.fragment,o),k=!0)},o(o){N(i.$$.fragment,o),N(d.$$.fragment,o),k=!1},d(o){o&&(w(e),w(S),w(C)),m&&m.d(),T(i),T(d),F=!1,V(z)}}}function se(r){let e,n;return e=new I({props:{$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},m(s,l){H(e,s,l),n=!0},p(s,[l]){const t={};l&527&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){n||(J(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){T(e,s)}}}function le(r,e,n){let s,{params:l}=e,t="",i="",p=!1;async function d(){if(!p){n(2,p=!0);try{await L.collection("_superusers").confirmPasswordReset(l==null?void 0:l.token,t,i),X("Successfully set a new superuser password."),Y("/")}catch(g){L.error(g)}n(2,p=!1)}}function u(){t=this.value,n(0,t)}function a(){i=this.value,n(1,i)}return r.$$set=g=>{"params"in g&&n(5,l=g.params)},r.$$.update=()=>{r.$$.dirty&32&&n(3,s=M.getJWTPayload(l==null?void 0:l.token).email||"")},[t,i,p,s,d,l,u,a]}class ae extends y{constructor(e){super(),E(this,e,le,se,G,{params:5})}}export{ae as default};
