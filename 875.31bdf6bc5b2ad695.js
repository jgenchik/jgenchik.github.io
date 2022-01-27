"use strict";var it=Object.defineProperty,at=Object.defineProperties,st=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,$=(g,c,i)=>c in g?it(g,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):g[c]=i,Z=(g,c)=>{for(var i in c||(c={}))lt.call(c,i)&&$(g,i,c[i]);if(M)for(var i of M(c))ct.call(c,i)&&$(g,i,c[i]);return g},T=(g,c)=>at(g,st(c));(self.webpackChunkcvs=self.webpackChunkcvs||[]).push([[875],{875:(g,c,i)=>{i.r(c),i.d(c,{WebauthnModule:()=>ot});var b=i(9808),C=i(9516),f=i(655);function O(n,o,e,r,s,a,u){try{var l=n[a](u),m=l.value}catch(E){return void e(E)}l.done?o(m):Promise.resolve(m).then(r,s)}function W(n){return function(){var o=this,e=arguments;return new Promise(function(r,s){var a=n.apply(o,e);function u(m){O(a,r,s,u,l,"next",m)}function l(m){O(a,r,s,u,l,"throw",m)}u(void 0)})}}function F(n){return(new TextEncoder).encode(n)}function v(n){const o=new Uint8Array(n);let e="";for(const s of o)e+=String.fromCharCode(s);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function w(n){const o=n.replace(/-/g,"+").replace(/_/g,"/"),r=o.padEnd(o.length+(4-o.length%4)%4,"="),s=atob(r),a=new ArrayBuffer(s.length),u=new Uint8Array(a);for(let l=0;l<s.length;l++)u[l]=s.charCodeAt(l);return a}function I(){return void 0!==(null==window?void 0:window.PublicKeyCredential)&&"function"==typeof window.PublicKeyCredential}function x(n){const{id:o}=n;return T(Z({},n),{id:w(o)})}function S(){return(S=W(function*(n){if(!I())throw new Error("WebAuthn is not supported in this browser");const o=T(Z({},n),{challenge:w(n.challenge),user:T(Z({},n.user),{id:F(n.user.id)}),excludeCredentials:n.excludeCredentials.map(x)}),e=yield navigator.credentials.create({publicKey:o});if(!e)throw new Error("Registration was not completed");const{id:r,rawId:s,response:a,type:u}=e,l={id:r,rawId:v(s),response:{attestationObject:v(a.attestationObject),clientDataJSON:v(a.clientDataJSON)},type:u,clientExtensionResults:e.getClientExtensionResults()};return"function"==typeof a.getTransports&&(l.transports=a.getTransports()),l})).apply(this,arguments)}function B(n){return new TextDecoder("utf-8").decode(n)}function N(){return(N=W(function*(n){var o,e;if(!I())throw new Error("WebAuthn is not supported in this browser");let r;0!==(null===(o=n.allowCredentials)||void 0===o?void 0:o.length)&&(r=null===(e=n.allowCredentials)||void 0===e?void 0:e.map(x));const s=T(Z({},n),{challenge:w(n.challenge),allowCredentials:r}),a=yield navigator.credentials.get({publicKey:s});if(!a)throw new Error("Authentication was not completed");const{id:u,rawId:l,response:m,type:E}=a;let P;return m.userHandle&&(P=B(m.userHandle)),{id:u,rawId:v(l),response:{authenticatorData:v(m.authenticatorData),clientDataJSON:v(m.clientDataJSON),signature:v(m.signature),userHandle:P},type:E,clientExtensionResults:a.getClientExtensionResults()}})).apply(this,arguments)}var h=i(3075),t=i(5e3),d=i(8966),A=i(7322),Y=i(8833),U=i(7423);function _(n,o){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Login ID required"),t.qZA())}function L(n,o){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"User name required"),t.qZA())}let H=(()=>{class n{constructor(e,r){this.fb=e,this.dialogRef=r,this.form=this.makeForm()}ngOnInit(){}submitForm(){this.dialogRef.close(this.form.value)}makeForm(){return this.fb.group({loginId:["",[h.kI.required]],userName:["",[h.kI.required]]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.qu),t.Y36(d.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-egister-dialog"]],decls:19,vars:4,consts:[["mat-dialog-title",""],["novalidate","",3,"formGroup","ngSubmit"],["matInput","","placeholder","Login Id","formControlName","loginId"],[4,"ngIf"],["matInput","","placeholder","User Name","formControlName","userName"],["mat-button","","color","primary","type","submit",3,"disabled"],["mat-button","","mat-dialog-close",""]],template:function(e,r){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Register User"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return r.submitForm()}),t.TgZ(3,"mat-dialog-content"),t.TgZ(4,"mat-form-field"),t._UZ(5,"input",2),t.TgZ(6,"mat-hint"),t._uU(7,"Use your email"),t.qZA(),t.YNc(8,_,2,0,"mat-error",3),t.qZA(),t.TgZ(9,"mat-form-field"),t._UZ(10,"input",4),t.TgZ(11,"mat-hint"),t._uU(12,"Full name"),t.qZA(),t.YNc(13,L,2,0,"mat-error",3),t.qZA(),t.qZA(),t.TgZ(14,"mat-dialog-actions"),t.TgZ(15,"button",5),t._uU(16,"REGISTER"),t.qZA(),t.TgZ(17,"button",6),t._uU(18,"Cancel"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",r.form),t.xp6(6),t.Q6J("ngIf",r.form.get("loginId").hasError("required")),t.xp6(5),t.Q6J("ngIf",r.form.get("userName").hasError("required")),t.xp6(2),t.Q6J("disabled",!r.form.valid))},directives:[d.uh,h._Y,h.JL,h.sg,d.xY,A.KE,Y.Nt,h.Fj,h.JJ,h.u,A.bx,b.O5,A.TO,d.H8,U.lW,d.ZT],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),n})();var D=i(1059),q=i(2198),z=i(4107),k=i(508);function K(n,o){if(1&n&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}let Q=(()=>{class n{constructor(e,r){this.dialogRef=e,this.data=r,this.allUserIds$=this.data,this.selectedUserId=void 0}ngOnInit(){}selectLoginId(){this.dialogRef.close(this.selectedUserId)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.so),t.Y36(d.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-select-userid"]],decls:14,vars:5,consts:[["mat-dialog-title",""],["appearance","fill"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"disabled","click"],["mat-button","","mat-dialog-close",""],[3,"value"]],template:function(e,r){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Select User"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t.TgZ(3,"mat-form-field",1),t.TgZ(4,"mat-label"),t._uU(5,"User Id"),t.qZA(),t.TgZ(6,"mat-select",2),t.NdJ("valueChange",function(a){return r.selectedUserId=a}),t.YNc(7,K,2,2,"mat-option",3),t.ALo(8,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"mat-dialog-actions"),t.TgZ(10,"button",4),t.NdJ("click",function(){return r.selectLoginId()}),t._uU(11,"LOGIN"),t.qZA(),t.TgZ(12,"button",5),t._uU(13,"Cancel"),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("value",r.selectedUserId),t.xp6(1),t.Q6J("ngForOf",t.lcZ(8,3,r.allUserIds$)),t.xp6(3),t.Q6J("disabled",!r.selectedUserId))},directives:[d.uh,d.xY,A.KE,A.hX,z.gD,b.sg,k.ey,d.H8,U.lW,d.ZT],pipes:[b.Ov],styles:[""]}),n})();var j=i(4850),y=i(2340),X=i(520);let V=(()=>{class n{constructor(e){this.http=e}getRegistrationOptions(e,r){return(0,f.mG)(this,void 0,void 0,function*(){return this.http.get(`${y.N.WEBAUTHN_DOMAIN}/webauthn/registration-options?username=${r}&id=${e}`).toPromise()})}startRegistration(e,r,s){return(0,f.mG)(this,void 0,void 0,function*(){return this.http.post(`${y.N.WEBAUTHN_DOMAIN}/webauthn/start-registration?username=${s}&id=${r}`,e).toPromise()})}getAllUserids(){return this.http.get(`${y.N.WEBAUTHN_DOMAIN}/webauthn/all-users`).pipe((0,j.U)(e=>Object.keys(e)))}getAuthenticationOptions(e){return(0,f.mG)(this,void 0,void 0,function*(){return this.http.get(`${y.N.WEBAUTHN_DOMAIN}/webauthn/authentication-options?id=${e}`).toPromise()})}verifyAuthentication(e,r){return(0,f.mG)(this,void 0,void 0,function*(){return this.http.post(`${y.N.WEBAUTHN_DOMAIN}/webauthn/verify-authentication?id=${r}`,e).toPromise()})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(X.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var tt=i(7261),p=i(9224);let et=(()=>{class n{constructor(e,r,s,a){this.webauthnService=e,this.dialog=r,this.router=s,this.snackBar=a,this.allUserIds$=this.getAllUserIds().pipe((0,D.O)([]))}ngOnInit(){return(0,f.mG)(this,void 0,void 0,function*(){let e=navigator.credentials;if(console.log("credentialsContainer",e),"credentials"in navigator)try{let r=yield navigator.credentials.get({});console.log("creds",r)}catch(r){console.log("error:",r)}finally{console.log("credentials GET done")}})}showRegisterDialog(){this.dialog.open(H,{}).afterClosed().pipe((0,q.h)(r=>!!r)).subscribe(r=>{console.log("registrationData: ",r),this.register(r.loginId,r.userName)})}register(e="test@email.com",r="John Smith"){return(0,f.mG)(this,void 0,void 0,function*(){const s=yield this.webauthnService.getRegistrationOptions(e,r);let a,u;try{a=yield function G(n){return S.apply(this,arguments)}(s)}catch(l){"InvalidStateError"===(null==l?void 0:l.name)?console.log("Error: Authenticator was probably already registered by user"):console.log("error",l)}a&&(u=yield this.webauthnService.startRegistration(a,e,r),u&&u.verified?(console.log("Success"),this.snackBar.open(`Success! User ${r} registered.`,"",{duration:3e3}),this.allUserIds$=this.getAllUserIds()):console.log("Error"))})}authenticate(e){return(0,f.mG)(this,void 0,void 0,function*(){const r=yield this.webauthnService.getAuthenticationOptions(e);let s;try{s=yield function J(n){return N.apply(this,arguments)}(r)}catch(a){console.error(a)}if(s){const a=yield this.webauthnService.verifyAuthentication(s,e);a&&a.verified?(console.log("Success!"),this.router.navigate(["./webauthn/auth-success"],{queryParams:{loginId:a.loginId,userName:a.userName}})):(console.error("Not authorized"),this.snackBar.open("Not Authorized","",{duration:3e3}))}})}showSelectUserDialog(){this.dialog.open(Q,{data:this.allUserIds$}).afterClosed().pipe((0,q.h)(r=>!!r)).subscribe(r=>{console.log("The dialog was closed. result",r),this.authenticate(r)})}getAllUserIds(){return this.webauthnService.getAllUserids().pipe((0,D.O)([]))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(V),t.Y36(d.uw),t.Y36(C.F0),t.Y36(tt.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-webauthn"]],decls:12,vars:3,consts:[[1,"mat-elevation-z12"],["mat-card-md-image","","src","../../assets/images/webauthn.jpg"],["mat-raised-button","",3,"click"],["mat-raised-button","",3,"disabled","click"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-title"),t._uU(2,"Web Authentication"),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4,"Biometrics"),t.qZA(),t._UZ(5,"img",1),t.TgZ(6,"mat-card-actions"),t.TgZ(7,"button",2),t.NdJ("click",function(){return r.showRegisterDialog()}),t._uU(8,"REGISTER"),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){return r.showSelectUserDialog()}),t.ALo(10,"async"),t._uU(11,"AUTHENTICATE"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("disabled",0==t.lcZ(10,1,r.allUserIds$).length))},directives:[p.a8,p.n5,p.$j,p.nc,p.hq,U.lW],pipes:[b.Ov],styles:["mat-card[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem;margin-top:2rem;width:auto}@media (min-width: 768px){mat-card[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}mat-card[_ngcontent-%COMP%]{max-width:56rem}}img[_ngcontent-%COMP%]{width:auto}"]}),n})();var nt=i(4466);const rt=[{path:"",component:et},{path:"auth-success",component:(()=>{class n{constructor(e,r){this.router=e,this.route=r,this.loginId=null,this.userName=null}ngOnInit(){this.route.queryParamMap.subscribe(e=>{this.userName=e.get("userName")})}goBack(){this.router.navigate(["/webauthn"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.F0),t.Y36(C.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth-success"]],decls:12,vars:1,consts:[[1,"container","mx-auto"],[1,"mat-elevation-z12"],[1,"user-name"],["mat-button","","color","primary",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-title"),t.TgZ(3,"h2"),t._uU(4,"Authentication sucessfull"),t.qZA(),t.qZA(),t.TgZ(5,"mat-card-content"),t.TgZ(6,"div",2),t._uU(7),t.qZA(),t._uU(8," You had succesfully authenticated. Welcome! "),t.qZA(),t.TgZ(9,"mat-card-actions"),t.TgZ(10,"button",3),t.NdJ("click",function(){return r.goBack()}),t._uU(11,"GO BACK"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Oqu(r.userName))},directives:[p.a8,p.n5,p.dn,p.hq,U.lW],styles:["mat-card[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem;margin-top:1rem;width:auto}@media (min-width: 768px){mat-card[_ngcontent-%COMP%]{margin-left:0;margin-right:0}mat-card[_ngcontent-%COMP%]{max-width:56rem}}.mat-card-title[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity));padding:1rem}mat-card-content[_ngcontent-%COMP%]{margin-top:1.5rem;padding-top:1.5rem;text-align:center;font-size:1.25rem;line-height:1.75rem}.user-name[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}"]}),n})()}];let ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[b.ez,nt.m,C.Bz.forChild(rt)]]}),n})()}}]);