"use strict";(self.webpackChunkcvs=self.webpackChunkcvs||[]).push([[231],{6231:(x,d,e)=>{e.r(d),e.d(d,{TryMarkdownModule:()=>w});var g=e(9808),l=e(9516),t=e(5e3),s=e(9224),M=e(8833),h=e(4533),p=e(3075),i=e(2970),C=e(7423);function _(n,c){if(1&n){const r=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(r),t.oxw().unescape()}),t._uU(1," UNESCAPE \\n "),t.qZA()}}let O=(()=>{class n{constructor(){this.DEFAULT_TEXT="\n  # Header #\n  ## Subheader ##\n  ---\n  __Lorem ipsum__\n\n  Lorem ipsum dolor *sit amet*, consectetur adipiscing elit, __*sed do eiusmod*__ tempor  \n  incididunt ut labore et dolore magna aliqua.\n  ",this.DEFAULT_WITH_LINEBREAKS_TEXT="  # Header #\n## Subheader ##\n---\n__Lorem ipsum__\n\nLorem ipsum dolor *sit amet*, consectetur adipiscing elit, __*sed do eiusmod*__ tempor\nincididunt ut labore et dolore magna aliqua.",this.UMMARKED_TEXT="\n  Header\n  Subheader\n\n  Lorem ipsum\n\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  \n  incididunt ut labore et dolore magna aliqua.\n  ",this.markedText=""}ngOnInit(){this.setMarkedToDefault()}onReady(){}setMarkedToDefault(){this.markedText=this.DEFAULT_TEXT}setMarkedToDefaultWithLinebreaks(){this.markedText=this.DEFAULT_WITH_LINEBREAKS_TEXT}setMarkedToUnmarked(){this.markedText=this.UMMARKED_TEXT}unescape(){for(;this.markedText.includes("\\n");)this.markedText=this.markedText.replace("\\n","  \n")}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-markdown"]],decls:20,vars:7,consts:[[1,"mt-6"],[1,"escaped-text"],["matInput","","cdkTextareaAutosize","",1,"phrase",3,"ngModel","cdkAutosizeMinRows","ngModelChange"],["markdown","",1,"prose","lg:prose-xl",3,"data","ready"],[1,"unescaped-text"],["id","defaultText","mat-raised-button","","color","primary",3,"click"],["id","unescape","mat-raised-button","","color","primary",3,"click",4,"ngIf"],["id","unmarkedText","mat-raised-button","","color","accent",3,"click"],["id","unescape","mat-raised-button","","color","primary",3,"click"]],template:function(r,o){1&r&&(t.TgZ(0,"main"),t.TgZ(1,"mat-card"),t.TgZ(2,"mat-card-title"),t.TgZ(3,"h2"),t._uU(4,"ngx-markdown"),t.qZA(),t.qZA(),t.TgZ(5,"mat-card-content",0),t.TgZ(6,"div",1),t.TgZ(7,"textarea",2),t.NdJ("ngModelChange",function(u){return o.markedText=u}),t.qZA(),t.TgZ(8,"div",3),t.NdJ("ready",function(){return o.onReady()}),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"h4"),t._uU(11,"Unescaped Text"),t.qZA(),t._uU(12),t.ALo(13,"json"),t.qZA(),t.qZA(),t.TgZ(14,"mat-card-actions"),t.TgZ(15,"button",5),t.NdJ("click",function(){return o.setMarkedToDefault()}),t._uU(16," DEFAULT "),t.qZA(),t.YNc(17,_,2,0,"button",6),t.TgZ(18,"button",7),t.NdJ("click",function(){return o.setMarkedToUnmarked()}),t._uU(19," UNMARKED "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(7),t.Q6J("ngModel",o.markedText)("cdkAutosizeMinRows",5),t.xp6(1),t.Q6J("data",o.markedText),t.xp6(4),t.hij(" ",t.lcZ(13,5,o.markedText)," "),t.xp6(5),t.Q6J("ngIf",o.markedText.includes("\\n")))},directives:[s.a8,s.n5,s.dn,M.Nt,h.IC,p.Fj,p.JJ,p.On,i.lF,s.hq,C.lW,g.O5],pipes:[g.Ts],styles:['main[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:1.5rem;padding:1rem}mat-card[_ngcontent-%COMP%]{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / .04)) drop-shadow(0 4px 3px rgb(0 0 0 / .1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}mat-card-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-left:30px}mat-card-content[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:1rem;margin-bottom:1rem;column-gap:0px}@media (min-width: 768px){mat-card-content[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}mat-card-content[_ngcontent-%COMP%]{column-gap:1rem}}mat-card-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;flex-wrap:wrap;align-items:stretch}.escaped-text[_ngcontent-%COMP%]{margin-bottom:1rem;column-gap:0px;padding:0}@media (min-width: 768px){.escaped-text[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}.escaped-text[_ngcontent-%COMP%]{column-gap:1rem}.escaped-text[_ngcontent-%COMP%]{padding:1.5rem}}.escaped-text[_ngcontent-%COMP%]{width:100%;display:flex!important;flex-direction:row;flex-wrap:wrap;align-items:stretch}.phrase[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:.5rem;font-size:1.125rem;line-height:1.75rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);width:30%;flex:1 1 auto}div[markdown][_ngcontent-%COMP%]{border-radius:.375rem;border-width:2px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:1rem;font-size:1.125rem;line-height:1.75rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);flex:1 1 auto}button[_ngcontent-%COMP%]{margin-top:1rem;--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity));font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.unescaped-text[_ngcontent-%COMP%]{color:var(--tw-prose-body);max-width:65ch}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where([class~="lead"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(a):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-links);text-decoration:underline;font-weight:500}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(strong):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-bold);font-weight:600}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:decimal;padding-left:1.625em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="A"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:upper-alpha}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="a"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:lower-alpha}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="A" s]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:upper-alpha}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="a" s]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:lower-alpha}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="I"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:upper-roman}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="i"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:lower-roman}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="I" s]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:upper-roman}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="i" s]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:lower-roman}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol[type="1"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:decimal}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{list-style-type:disc;padding-left:1.625em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol    > li)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]::marker{font-weight:400;color:var(--tw-prose-counters)}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul    > li)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]::marker{color:var(--tw-prose-bullets)}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(hr):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(blockquote):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-left-width:.25rem;border-left-color:var(--tw-prose-quote-borders);quotes:"\\201c""\\201d""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(blockquote   p[_ngcontent-%COMP%]:first-of-type):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]:before{content:open-quote}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(blockquote   p[_ngcontent-%COMP%]:last-of-type):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]:after{content:close-quote}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h1):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h1   strong)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-weight:900}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2   strong)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-weight:800}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3   strong)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-weight:700}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h4):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h4   strong)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-weight:700}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(figure    > *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(figcaption):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(code):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-code);font-weight:600;font-size:.875em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(code):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]:before{content:"`"}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(code):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]:after{content:"`"}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(a   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-links)}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(pre):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(pre   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(pre   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]:before{content:none}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(pre   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]:after{content:none}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(table):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead   th)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   tr)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   tr[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{border-bottom-width:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   td)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{vertical-align:baseline;padding:.5714286em}.unescaped-text[_ngcontent-%COMP%]{--tw-prose-body: #374151;--tw-prose-headings: #111827;--tw-prose-lead: #4b5563;--tw-prose-links: #111827;--tw-prose-bold: #111827;--tw-prose-counters: #6b7280;--tw-prose-bullets: #d1d5db;--tw-prose-hr: #e5e7eb;--tw-prose-quotes: #111827;--tw-prose-quote-borders: #e5e7eb;--tw-prose-captions: #6b7280;--tw-prose-code: #111827;--tw-prose-pre-code: #e5e7eb;--tw-prose-pre-bg: #1f2937;--tw-prose-th-borders: #d1d5db;--tw-prose-td-borders: #e5e7eb;--tw-prose-invert-body: #d1d5db;--tw-prose-invert-headings: #fff;--tw-prose-invert-lead: #9ca3af;--tw-prose-invert-links: #fff;--tw-prose-invert-bold: #fff;--tw-prose-invert-counters: #9ca3af;--tw-prose-invert-bullets: #4b5563;--tw-prose-invert-hr: #374151;--tw-prose-invert-quotes: #f3f4f6;--tw-prose-invert-quote-borders: #374151;--tw-prose-invert-captions: #9ca3af;--tw-prose-invert-code: #fff;--tw-prose-invert-pre-code: #d1d5db;--tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);--tw-prose-invert-th-borders: #4b5563;--tw-prose-invert-td-borders: #374151;font-size:1rem;line-height:1.75}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(p):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.25em;margin-bottom:1.25em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(img):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:2em;margin-bottom:2em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(video):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:2em;margin-bottom:2em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(figure):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:2em;margin-bottom:2em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.875em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.9em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(li):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:.5em;margin-bottom:.5em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol    > li)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:.375em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul    > li)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:.375em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ul    > li[_ngcontent-%COMP%]   p)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:.75em;margin-bottom:.75em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ul    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.25em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ul    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-bottom:1.25em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ol    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.25em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ol    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-bottom:1.25em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ol)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:.75em;margin-bottom:.75em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(hr    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h4    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead   th[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead   th[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-right:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   td[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   td[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-right:0}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-bottom:0}.unescaped-text[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:1.5rem;border-radius:.375rem;border-width:0px;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:1rem}@media (min-width: 1024px){.unescaped-text[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.7777778}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(p):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.3333333em;margin-bottom:1.3333333em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where([class~="lead"]):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(blockquote):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h1):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h4):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(img):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.7777778em;margin-bottom:1.7777778em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(video):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.7777778em;margin-bottom:1.7777778em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(figure):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.7777778em;margin-bottom:1.7777778em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(figure    > *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(figcaption):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.8888889em;line-height:1.5;margin-top:1em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(code):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.8888889em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.8666667em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3   code)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.875em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(pre):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:1.5555556em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:1.5555556em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(li):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:.6666667em;margin-bottom:.6666667em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ol    > li)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:.4444444em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul    > li)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:.4444444em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ul    > li[_ngcontent-%COMP%]   p)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:.8888889em;margin-bottom:.8888889em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ul    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.3333333em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ul    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-bottom:1.3333333em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ol    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:1.3333333em}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(ol    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-bottom:1.3333333em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(ul   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ol)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:.8888889em;margin-bottom:.8888889em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(hr):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:3.1111111em;margin-bottom:3.1111111em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(hr    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h2    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h3    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(h4    + *)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(table):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{font-size:.8888889em;line-height:1.5}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead   th)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead   th[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(thead   th[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-right:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   td)[_ngcontent-%COMP%]:not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding:.75em}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   td[_ngcontent-%COMP%]:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-left:0}.unescaped-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(tbody   td[_ngcontent-%COMP%]:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{padding-right:0}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(:first-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-top:0}.unescaped-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:where(:last-child):not(:where([class~="not-prose"]   *))[_ngcontent-%COMP%]{margin-bottom:0}}h1[_ngcontent-%COMP%]{display:block!important;font-size:2em;margin-block-start:.67em;margin-block-end:.67em;margin-inline-start:0px;margin-inline-end:0px;font-weight:700!important}']}),n})();var P=e(4466);const m=[{path:"",component:O}];let w=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[i.Zy],imports:[[g.ez,P.m,i.JP.forChild(),l.Bz.forChild(m)]]}),n})()}}]);