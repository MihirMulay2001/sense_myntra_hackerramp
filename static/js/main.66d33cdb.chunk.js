(this["webpackJsonpmyntra-sense"]=this["webpackJsonpmyntra-sense"]||[]).push([[0],{17:function(e,t,n){e.exports={header:"Results_header__1JeZq",patternMatches:"Results_patternMatches__3F8wd",patternMatchCarousel:"Results_patternMatchCarousel__Fp1BQ",matchingOutfit:"Results_matchingOutfit__3xZcL"}},21:function(e,t,n){e.exports={container:"Loader_container__1xGPZ",loader:"Loader_loader__gcqy0",loading:"Loader_loading__2IqMH"}},25:function(e,t,n){e.exports={header:"Header_header__259OT"}},3:function(e,t,n){e.exports={App:"Landing_App__2KQ4o",landing_btn:"Landing_landing_btn__380yZ",came:"Landing_came__rJrVg",capture:"Landing_capture__3FVhG",hero__Section:"Landing_hero__Section__2A454",hero__inner:"Landing_hero__inner__2i2pG",main:"Landing_main__1v3ks",title:"Landing_title__2rkGl",stripe:"Landing_stripe__2cvTj",rectangle1:"Landing_rectangle1__2xFjA",rectangle2:"Landing_rectangle2__3GPbO",illustartion:"Landing_illustartion__3zMkL",landing__info:"Landing_landing__info__2zKwr",landing__content:"Landing_landing__content__8jqz4",landing__content_title:"Landing_landing__content_title__1eBP0",landing__content_img:"Landing_landing__content_img__dA7w4",landing__content_para:"Landing_landing__content_para__YMEBa",footer:"Landing_footer__2SeVX",icon_style:"Landing_icon_style__3Br3Y"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(14),s=n.n(i),r=n(8),l=n(6),d=n(2),o=n(5),j=n(3),_=n.n(j),u=n(0),b=function(e){var t=e.onClick;return Object(u.jsx)("button",{className:_.a.landing_btn,onClick:t,children:"Start exploring"})},m=function(){return Object(u.jsxs)("div",{className:_.a.landing__content,children:[Object(u.jsx)("p",{className:_.a.landing__content_title,children:"Find the perfect match for your clothing in 3 easy steps"}),Object(u.jsxs)("p",{className:_.a.landing__content_para,children:[Object(u.jsx)("img",{src:"../assests/1.png",className:_.a.landing__content_img,alt:""}),"Click a picture of your clothing item"]}),Object(u.jsxs)("p",{className:_.a.landing__content_para,children:[Object(u.jsx)("img",{src:"../assests/2.png",className:_.a.landing__content_img,alt:""}),"Choose from a wide variety of AI recommended items to match your outfit"]}),Object(u.jsxs)("p",{className:_.a.landing__content_para,children:[Object(u.jsx)("img",{src:"../assests/3.png",className:_.a.landing__content_img,alt:""}),"Adjust filters to match your taste"]})]})},h=n(16),O=function(){return Object(u.jsx)("div",{className:_.a.footer,children:Object(u.jsxs)("span",{className:_.a.footer__text,children:["Made with ",Object(u.jsx)(h.a,{className:_.a.icon_style}),"and ",Object(u.jsx)(h.b,{className:_.a.icon_style,style:{color:"red"}})]})})};function g(e){var t=e.onClick;return Object(u.jsx)("div",{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:_.a.hero__Section,children:Object(u.jsxs)("div",{className:_.a.hero__inner,children:[Object(u.jsxs)("div",{className:_.a.stripe,children:[Object(u.jsx)("img",{src:"../assests/Rectangle1.png",className:_.a.rectangle1,alt:""}),Object(u.jsx)("img",{src:"../assests/Rectangle1.png",className:_.a.rectangle2,alt:""})]}),Object(u.jsxs)("div",{className:_.a.main,children:[Object(u.jsx)("h2",{className:_.a.title,children:"Sense"}),Object(u.jsx)("img",{src:"../assests/illustration1.png",className:_.a.illustartion,alt:""}),Object(u.jsx)("p",{className:_.a.landing__info,children:"Smart AI driven outfit recommendation engine"}),Object(u.jsx)(b,{onClick:t})]})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{})}),Object(u.jsx)(O,{})]})})}var x=n(23),f=n.n(x),p=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!0),d=Object(o.a)(s,2),j=d[0],b=d[1],m=Object(l.b)(),h=a.useCallback((function(){var t=e.current.getScreenshot();m({type:"SET_IMAGE",image:t.substring(23)}),i(t),b(!j)}),[e,i,j]);return Object(u.jsxs)("div",{className:_.a.came,children:[j&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f.a,{audio:!1,ref:e,screenshotFormat:"image/jpeg",videoConstraints:{width:317,height:336,facingMode:"user"}}),Object(u.jsx)("button",{className:"".concat(_.a.landing_btn," ").concat(_.a.capture),onClick:h,children:"Capture photo"})]}),c&&!j&&Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:c,alt:""}),Object(u.jsxs)("div",{className:_.a.confirm,children:[Object(u.jsx)(r.b,{to:"/Results",children:Object(u.jsx)("button",{className:"".concat(_.a.landing_btn," ").concat(_.a.capture),children:"Proceed"})}),Object(u.jsx)("button",{className:"".concat(_.a.landing_btn," ").concat(_.a.capture),onClick:function(){b(!0)},children:"Retake"})]})]})]})};function v(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)(u.Fragment,{children:n?Object(u.jsx)(p,{}):Object(u.jsx)(g,{onClick:function(){console.log(n),c(!n)}})})}var N=n(9),y=n.n(N);function I(e){var t=e.item;return Object(u.jsx)(r.b,{to:"/Item/".concat(t._id),children:Object(u.jsxs)("div",{className:y.a.card,children:[Object(u.jsxs)("div",{className:y.a.image,children:[Object(u.jsx)("img",{src:t.imageUrl,alt:"item",width:"170",height:"125"}),Object(u.jsxs)("div",{className:y.a.rating,children:[Object(u.jsx)("i",{className:"fas fa-star"}),t.rating]})]}),Object(u.jsx)("div",{className:y.a.brand,children:t.brand}),Object(u.jsx)("div",{className:y.a.label,children:t.label}),Object(u.jsxs)("div",{className:y.a.value,children:[Object(u.jsxs)("div",{className:y.a.price,children:["\u20b9  ",t.price]}),t.discount&&Object(u.jsxs)("div",{className:y.a.discount,children:["(-",t.discount,"%)"]})]})]})})}var C=n(17),L=n.n(C),k=n(20),S=n.n(k),M=n(24),z=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),d=r[0],j=r[1],_=Object(a.useState)(!0),u=Object(o.a)(_,2),b=u[0],m=u[1],h=Object(l.b)(),O=Object(l.c)((function(e){return e.itemsList})),g={image:Object(l.c)((function(e){return e.image}))};return Object(a.useEffect)((function(){var e=function(){var e=Object(M.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m(!0),!(O.length<1)){e.next=14;break}return e.next=5,fetch("https://myntra-sense-backend.herokuapp.com/item/findSimilarItems",{method:"POST",body:JSON.stringify(g),headers:{"Content-Type":"application/json"}});case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,console.log(n.itemsArray),h({type:"ADD_ITEM_LIST",itemList:n.itemsArray}),i(n.itemsArray),e.next=15;break;case 14:i(O);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),j(e.t0),console.log(e.t0);case 21:m(!1);case 22:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{loading:b,error:d,data:c}},A=n(21),D=n.n(A);function E(){return Object(u.jsx)("div",{className:D.a.container,children:Object(u.jsx)("div",{className:D.a.loader,children:" "})})}var F=n(25),T=n.n(F);var q=function(){return Object(u.jsx)("div",{className:T.a.header,children:Object(u.jsx)(r.b,{to:"/Cart",children:"Cart"})})};function w(){var e=z("https://myntra-sense-backend.herokuapp.com/item/findMatchedItems"),t=e.data,n=e.loading,a=e.error;return n?Object(u.jsx)(E,{}):a?Object(u.jsx)("div",{className:"",children:"Error occured"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(q,{}),Object(u.jsxs)("div",{className:L.a.patternMatches,children:[Object(u.jsx)("h1",{children:"Pattern Matches"}),Object(u.jsx)("div",{className:L.a.patternMatchCarousel,children:t.map((function(e){return Object(u.jsx)(I,{item:e},e._id)}))})]}),Object(u.jsx)("h1",{children:" Matches found "}),Object(u.jsx)("div",{className:L.a.matchingOutfit,children:t.map((function(e){return Object(u.jsx)(I,{item:e},e._id)}))})]})}var R=function(){var e=Object(l.c)((function(e){return e.cart})),t=Object(l.c)((function(e){return e.itemsList})),n=e.map((function(e){var n=t.find((function(t){return t._id===e.id}));return{image:n.image,brand:n.brand,label:n.label,quantity:e.quantity,price:n.price}}));return Object(u.jsx)("div",{children:JSON.stringify(n)})},G=function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.cart}));console.log(n);return{addItem:function(n){var a=n.size;t(function(e,t){return{type:"ADD_ITEM",id:e,size:t}}(e,a))},itemQuantity:function(){var t=n.find((function(t){return t.id===e}));return t?t.quantity:0},modifyItemQuantity:function(n){t(function(e,t){return{type:"MODIFY_ITEM",itemid:e,change:t}}(e,n))}}},J=n(4),K=n.n(J);function P(){var e=Object(l.c)((function(e){return e.itemsList})),t=Object(d.g)().id,n=void 0!==t?t:"",c=Object(a.useState)("m"),i=Object(o.a)(c,2),s=i[0],r=i[1],j=e.find((function(e){return e._id===n})),_=G(n),b=_.addItem,m=_.modifyItemQuantity,h=_.itemQuantity,O=function(e){r(e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(q,{}),Object(u.jsxs)("div",{className:K.a.container,children:[Object(u.jsx)("div",{className:K.a.image,children:Object(u.jsx)("img",{src:j.imageUrl,alt:"item",width:"355",height:"325"})}),Object(u.jsx)("div",{className:K.a.brand,children:j.brand}),Object(u.jsx)("div",{className:K.a.label,children:j.label}),Object(u.jsxs)("div",{className:K.a.price,children:["\u20b9",j.price,Object(u.jsx)("div",{className:K.a.discount,children:j.discount&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:K.a.oldprice,children:["\u20b9 ",Math.round(j.price/.63)]}),"(",j.discount,"% off)"]})})]}),Object(u.jsxs)("div",{className:K.a.sizes,children:[Object(u.jsx)("h3",{children:"Select size"}),Object(u.jsxs)("div",{className:K.a.selectSizes,children:[Object(u.jsx)("div",{className:K.a.size+" "+("xs"===s?K.a.active:""),onClick:function(e){e.preventDefault(),O("xs")},children:"XS"}),Object(u.jsx)("div",{className:K.a.size+" "+("s"===s?K.a.active:""),onClick:function(e){e.preventDefault(),O("s")},children:"S"}),Object(u.jsx)("div",{className:K.a.size+" "+("m"===s?K.a.active:""),onClick:function(e){e.preventDefault(),O("m")},children:"M"}),Object(u.jsx)("div",{className:K.a.size+" "+("l"===s?K.a.active:""),onClick:function(e){e.preventDefault(),O("l")},children:"L"}),Object(u.jsx)("div",{className:K.a.size+" "+("xl"===s?K.a.active:""),onClick:function(e){e.preventDefault(),O("xl")},children:"XL"})]})]})]}),Object(u.jsx)("div",{className:K.a.addtocart,children:0===h()?Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),b({size:s})},children:" Add to cart"}):Object(u.jsxs)("div",{className:K.a.modifyquantity,children:[Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),m(1)},children:"+"}),Object(u.jsx)("div",{children:h()}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),m(-1)},children:"-"})]})})]})}var Q=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",element:Object(u.jsx)(v,{})}),Object(u.jsx)(d.a,{path:"/Cart",element:Object(u.jsx)(R,{})}),Object(u.jsx)(d.a,{path:"/Results",element:Object(u.jsx)(w,{})}),Object(u.jsx)(d.a,{path:"/Item/:id",element:Object(u.jsx)(P,{})})]})})},B=(n(38),n(15)),V=n(13),Z=n(11),U=function(e,t){var n=t.itemid,a=t.change,c=e.findIndex((function(e){return e.id===n})),i=e[c].quantity+a,s=e;return 0!==i?s[c]=Object(Z.a)(Object(Z.a)({},s[c]),{},{quantity:i}):s.splice(c,1),Object(V.a)(s)},X=function(e,t){var n=t.id,a=t.size,c=e.findIndex((function(e){return e.id===n})),i=e;return-1===c?i.push({id:n,quantity:1,size:a,fit:"slim"}):i[c].quantity+=1,i},Y=[],H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return X(e,t);case"MODIFY_ITEM":return U(e,t);default:return e}},W=[],$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"ADD_ITEM_LIST"===t.type?Object(V.a)(t.itemList):Object(V.a)(e)},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SET_IMAGE"===t.type?t.image:e},te=Object(B.a)({cart:H,itemsList:$,image:ee}),ne=Object(B.b)(te);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(r.a,{basename:"/sense_myntra_hackerramp",children:Object(u.jsx)(l.a,{store:ne,children:Object(u.jsx)(Q,{})})})}),document.getElementById("root"))},4:function(e,t,n){e.exports={container:"Item_container__K1Cj9",image:"Item_image__381Kb",brand:"Item_brand__1wSn9",label:"Item_label__14cr2",addtocart:"Item_addtocart__xoj8V",modifyquantity:"Item_modifyquantity__1KEU9",price:"Item_price__1-oEZ",discount:"Item_discount__12AtT",oldprice:"Item_oldprice__1FSM9",selectSizes:"Item_selectSizes__uU53K",size:"Item_size__2kGiS",active:"Item_active__3PX9u"}},9:function(e,t,n){e.exports={card:"Card_card__xpnhO",image:"Card_image__3G4bb",rating:"Card_rating__3fKzT",brand:"Card_brand__3LV0O",value:"Card_value__1-cI3",label:"Card_label__erqu_",price:"Card_price__mJOH8",discount:"Card_discount__2u2Jb"}}},[[39,1,2]]]);
//# sourceMappingURL=main.66d33cdb.chunk.js.map