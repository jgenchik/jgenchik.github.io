"use strict";(self.webpackChunkcvs=self.webpackChunkcvs||[]).push([[619],{619:(N,i,s)=>{s.r(i),s.d(i,{NfcModule:()=>f});var r=s(9808),c=s(9516),m=s(655),t=s(5e3),d=s(7261),l=s(7423);let u=(()=>{class n{constructor(e){this.snackBar=e,this.message=""}ngOnInit(){"NDEFReader"in window?(this.ndef=new NDEFReader,this.ctrl=new AbortController,this.snackBar.open("NDEFReader is supported","",{duration:3e3})):this.snackBar.open("NDEFReader is NOT supported","x")}scan(){return(0,m.mG)(this,void 0,void 0,function*(){this.message="",this.ndef?this.ndef.scan({signal:this.ctrl.signal}).then(()=>{this.message="Scan started successfully.",this.ndef.onreadingerror=()=>{this.message+="\nCannot read data from the NFC tag. Try another one?"},this.ndef.onreading=e=>{this.message+="\nNDEF message read."}}).catch(e=>{this.message+=`\nError! Scan failed to start: ${e}.`}):this.message="NFC scanning is not supported on this device"})}stopScanning(){this.ctrl&&(this.ctrl.abort(),this.message="Scan aborted")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-nfc"]],decls:7,vars:1,consts:[[1,"container"],[1,"message"],["mat-raised-button","","color","primary",1,"scan",3,"click"],["mat-raised-button","",1,"scan",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return a.scan()}),t._uU(4,"SCAN"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return a.stopScanning()}),t._uU(6,"ABORT"),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(a.message))},directives:[l.lW],styles:[".message[_ngcontent-%COMP%]{min-height:60px;margin-left:auto;margin-right:auto;margin-top:2rem;width:91.666667%;border-width:2px}@media (min-width: 768px){.message[_ngcontent-%COMP%]{width:66.666667%}}button.scan[_ngcontent-%COMP%]{margin-top:2rem;margin-right:.5rem;margin-left:.25rem}"]}),n})();var h=s(4466);const g=[{path:"",component:u}];let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,h.m,c.Bz.forChild(g)]]}),n})()}}]);