(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,t,s){e.exports={App:"catering_App__1lPgK",catering:"catering_catering__1TNAb",sectionTitle:"catering_sectionTitle__2uk3k",cateringBtn:"catering_cateringBtn__2ZSlB"}},11:function(e,t,s){e.exports={App:"hero_App__3ShGF",hero:"hero_hero__2aKUK",heroTitle:"hero_heroTitle__1mTKx",heroText:"hero_heroText__3j1a9"}},12:function(e,t,s){e.exports={App:"navbar_App__2QRvm",navBar:"navbar_navBar__21Bsl",navList:"navbar_navList__2R0Mq",cart:"navbar_cart__2GP3X"}},13:function(e,t,s){e.exports={App:"cartBtns_App__1BQ3V",hidden:"cartBtns_hidden__2GxBt",cartBtns:"cartBtns_cartBtns__QMctM",count:"cartBtns_count__3VpZ7"}},14:function(e,t,s){e.exports={App:"main_App__28uD_"}},31:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(16),r=s(1),n=s(4),i=s(10),o=s.n(i),l=s(18),j=s(0);function d(){var e=Object(l.a)(),t=e.register,s=e.handleSubmit,a=Object(c.useState)(""),i=Object(n.a)(a,2),d=(i[0],i[1]);return Object(j.jsxs)("section",{className:o.a.catering,children:[Object(j.jsx)("h2",{className:o.a.sectionTitle,children:"Catering"}),Object(j.jsx)("p",{children:"(we'll get back to you as soon as possible!)"}),Object(j.jsxs)("form",{onSubmit:s((function(e){return d(JSON.stringify(e))})),children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",Object(r.a)({},t("email")))]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Message:"}),Object(j.jsx)("textarea",Object(r.a)({},t("message")))]}),Object(j.jsx)("input",{className:o.a.cateringBtn,type:"submit",value:"Send"})]})]})}var b=s(6),h=s.n(b);function u(){return Object(j.jsxs)("footer",{children:[Object(j.jsx)("p",{className:h.a.footerText,children:"Our company values are based and shaped by our values as people. We only use ingredients that we would want use ourselves. Only the best for our customers, employees and the planet."}),Object(j.jsxs)("div",{className:h.a.footerInfo,children:[Object(j.jsxs)("div",{className:h.a.newsLetter,children:[Object(j.jsx)("h3",{children:"Don't miss out on new treats!"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Enter your email to sign up for our newsletter:"}),Object(j.jsx)("input",{type:"email",name:"email"}),Object(j.jsx)("button",{className:h.a.newsBtn,type:"submit",children:"Send"})]})]}),Object(j.jsxs)("div",{className:h.a.visitUs,children:[Object(j.jsx)("h3",{children:"Visit our shop"}),Object(j.jsxs)("p",{children:["Cakes and stuff ",Object(j.jsx)("br",{}),"Sweet Road 12 ",Object(j.jsx)("br",{}),"12345 Sweetness",Object(j.jsx)("br",{}),"Sweet county"]}),Object(j.jsx)("a",{href:"mailto:webmaster@example.com",children:"cakesnstuff@mail.se"})]}),Object(j.jsxs)("div",{className:h.a.footerLinks,children:[Object(j.jsx)("a",{href:"/",children:"About us"}),Object(j.jsx)("a",{href:"/",children:"Allergy Information"}),Object(j.jsx)("a",{href:"/",children:"Career"}),Object(j.jsx)("a",{href:"/",children:"Suggestion Box"}),Object(j.jsx)("a",{href:"/",children:"Privacy"})]})]}),Object(j.jsxs)("small",{className:h.a.copyRight,children:["\xa9 Copyright ",(new Date).getFullYear(),", CakesAndStuffIsNotARealCompany"]})]})}var p=s(11),x=s.n(p);function O(){return Object(j.jsxs)("section",{className:x.a.hero,children:[Object(j.jsx)("h1",{className:x.a.heroTitle,children:"Cakes and Stuff"}),Object(j.jsxs)("div",{className:x.a.heroText,children:[Object(j.jsx)("p",{children:"In the mood for something sweet?"}),Object(j.jsx)("p",{children:"You've come to the right place!"})]})]})}var m=s(12),_=s.n(m),f=s(19),g=s(17);function v(){return Object(j.jsx)("header",{children:Object(j.jsxs)("nav",{className:_.a.navBar,children:[Object(j.jsxs)("ul",{className:_.a.navList,children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Treats"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Contact"})})]}),Object(j.jsx)("div",{className:_.a.cart,children:Object(j.jsxs)("a",{href:"/",children:["Shop ",Object(j.jsx)(f.a,{icon:g.a})]})})]})})}var y=s(13),k=s.n(y);function T(){var e=Object(c.useState)(1),t=Object(n.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(n.a)(r,2),o=i[0],l=i[1];return Object(j.jsxs)(j.Fragment,{children:[!o&&Object(j.jsx)("div",{onClick:function(){return l(!0)},className:k.a.cartBtns,children:Object(j.jsx)("p",{children:"Add to cart"})}),o&&Object(j.jsxs)("div",{className:k.a.cartBtns,children:[Object(j.jsx)("button",{onClick:function(){0!==s&&a(s-1)},children:"-"}),Object(j.jsx)("p",{children:Object(j.jsx)("span",{className:k.a.count,children:s})}),Object(j.jsx)("button",{onClick:function(){a(s+1)},children:"+"})]})]})}var N=s(5),w=s.n(N);function B(e){var t=e.title,s=e.picOne,c=e.picTwo,a=e.picThree;return Object(j.jsxs)("div",{className:w.a.treat,children:[Object(j.jsx)("h2",{className:w.a.sectionTitle,children:t}),Object(j.jsxs)("ul",{className:w.a.treatList,children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:s.url,alt:"Baked goods"}),Object(j.jsxs)("p",{className:w.a.treatText,children:[s.description," "]}),Object(j.jsx)(T,{})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:c.url,alt:"Baked goods"}),Object(j.jsxs)("p",{className:w.a.treatText,children:[c.description," "]}),Object(j.jsx)(T,{})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:a.url,alt:"Baked goods"}),Object(j.jsxs)("p",{className:w.a.treatText,children:[a.description," "]}),Object(j.jsx)(T,{})]})]})]})}function A(){var e=Object(c.useState)([{id:1,title:"Pastries",bgColor:"#FAF3F3",picOne:{url:"/assets/pi-1.svg",description:"Cake shortbread sugar plum marshmallow tootsie roll chupa chups cake icecream croissant gummy jelly honey-roasted beans."},picTwo:{url:"/assets/pi-2.svg",description:"Jujubes marshmallow oat cake sweet roll sugar plum cake muffin. Tootsie roll gummi bears tart candy canes muffin gummies."},picThree:{url:"/assets/pi-3.svg",description:"Candy cheesecake cake shortbread muffin pastry muffin gummies. Pastry jelly powder pudding sweet donut marzipan."}},{id:2,title:"Donuts",bgColor:"#F6F8F9",picOne:{url:"/assets/bu-1.svg",description:"Fruitcake donut sugar plum cookie sugar plum apple pie marzipan bear claw tiramisu icing."},picTwo:{url:"/assets/bu-2.svg",description:"Dessert candy canes cotton candy biscuit cheesecake cheesecake tiramisu chocolate donut. "},picThree:{url:"/assets/bu-3.svg",description:"Marshmallow jelly-o chocolate cake muffin lemon. Pudding gingerbread donut cake. "}},{id:3,title:"Cupcakes",bgColor:"#F7F7F2",picOne:{url:"/assets/gr-1.svg",description:"Candy canes tart apple pie bonbon cotton candy cotton candy toffee muffin. "},picTwo:{url:"/assets/gr-2.svg",description:"Pie tart halvah dessert croissant muffin. Bonbon cookie jelly beans brownie sugar plum. "},picThree:{url:"/assets/gr-3.svg",description:" Chocolate cake tiramisu pastry topping dessert cheesecake cookie cake bears muffin.  "}}]),t=Object(n.a)(e,2),s=t[0];t[1];return Object(j.jsx)(j.Fragment,{children:s.map((function(e){return Object(j.jsx)("section",{style:{background:e.bgColor},className:w.a.treats,children:Object(c.createElement)(B,Object(r.a)(Object(r.a)({},e),{},{key:e.id}))})}))})}var C=s(14),S=s.n(C);function F(){return Object(j.jsxs)("div",{className:S.a.App,id:"home",children:[Object(j.jsx)(v,{}),Object(j.jsx)(O,{}),Object(j.jsx)(A,{}),Object(j.jsx)(d,{}),Object(j.jsx)(u,{})]})}var L=document.getElementById("root");Object(a.createRoot)(L).render(Object(j.jsx)(c.StrictMode,{children:Object(j.jsx)(F,{})}))},5:function(e,t,s){e.exports={App:"treats_App__panzM",treats:"treats_treats__3yH5h",treat:"treats_treat__3TFU_",sectionTitle:"treats_sectionTitle__21ouy",treatList:"treats_treatList__oEzSR",treatText:"treats_treatText__3lDdX",addToCart:"treats_addToCart__1ntky"}},6:function(e,t,s){e.exports={App:"footer_App__1lO4z",footerText:"footer_footerText__1Nygx",footerInfo:"footer_footerInfo__3BQUV",newsLetter:"footer_newsLetter__2fvD1",visitUs:"footer_visitUs__1610V",footerLinks:"footer_footerLinks__B95OY",copyRight:"footer_copyRight__FX53r"}}},[[31,1,2]]]);
//# sourceMappingURL=main.f33c78d0.chunk.js.map