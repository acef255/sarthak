(function(t){function e(e){for(var n,o,l=e[0],r=e[1],d=e[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10e7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("EntryStage")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bodi"}},[a("div",{attrs:{id:"container"}},[a("form",{attrs:{id:"entryStage"},on:{submit:function(t){t.preventDefault()}}},[a("div",{attrs:{id:"fieldset1"}},[a("div",{attrs:{id:"FSchild1"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputYear"}},[t._v("Financial year")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData1,mode:"Delimiter",id:"financialyear",allowCustom:"true",hideSelectedItem:!1,allowMultiSelection:!0,allowFiltering:t.allowFiltering,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}}),a("span",{staticClass:"bar"})],1),t._m(0)]),a("div",{attrs:{id:"FSchild2"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputVendorField"}},[t._v("Vendor name")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData2,allowCustomValue:"allowCustomValue",id:"inputvendor",mode:"Delimiter",hideSelectedItem:!1,allowMultiSelection:!0,onkeydown:"return (event.keyCode!=13);",fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}}),a("span",{staticClass:"bar"})],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputInvoiceN°"}},[t._v("Invoice n°")]),a("input",{attrs:{type:"number",id:"inputInvoiceN°",name:"invoiceN°",onkeydown:"return (event.keyCode!=13);"},on:{change:function(e){return t.autofill()}}}),a("span",{staticClass:"bar"})]),t._m(1)]),a("div",{attrs:{id:"FSchild3"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputAssetType"}},[t._v("Asset type")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData4,allowCustomValue:"allowCustomValue",id:"inputAssetType",mode:"Delimiter",hideSelectedItem:!1,allowMultiSelection:!0,onkeydown:"return (event.keyCode!=13);",fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}})],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputFund"}},[t._v("Fund")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData3,allowCustomValue:"allowCustomValue",id:"inputFund",mode:"Delimiter",hideSelectedItem:!1,allowMultiSelection:!0,onkeydown:"return (event.keyCode!=13);",fields:t.remoteFieldsInvoiceFund,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}})],1)])]),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),t._m(2),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{attrs:{id:"fieldset2"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputPurchaseFor"}},[t._v("Purchase for")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData7,id:"purchasefor",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"purchaseforp"}},[t._v(t._s(t.pf))])],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputStockReg/MainCat"}},[t._v("Stock Register/ Main Category")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData5,mode:"Delimiter",id:"StockRegMainCat",onkeydown:"return (event.keyCode!=13);",hideSelectedItem:!1,allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.mc,callback:function(e){t.mc=e},expression:"mc"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"StockRegMainCatp"}},[t._v(t._s(t.mc))])],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputStockReg/SubC"}},[t._v("Stock Register/ sub Category")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData6,mode:"Delimiter",id:"StockRegSubC",hideSelectedItem:!1,allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",onkeydown:"return (event.keyCode!=13);",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.sc,callback:function(e){t.sc=e},expression:"sc"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"StockRegSubCp"}},[t._v(t._s(t.sc))])],1),t._m(3),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemNameAsForCoding"}},[t._v("Item name for coding")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData8,mode:"Delimiter",id:"ItemNameAsForCoding",onkeydown:"return (event.keyCode!=13);",hideSelectedItem:!1,allowMultiSelection:!0,fields:t.remoteFieldsItemNameCoding,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.ic,callback:function(e){t.ic=e},expression:"ic"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"ItemNameAsForCodingp"}},[t._v(t._s(t.ic))])],1),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)])]),a("div",{staticStyle:{cursor:"pointer",margin:"15px"},attrs:{id:"addItem"},on:{click:function(e){return t.addItem()}}},[t._v("Add item")]),a("div",{attrs:{id:"tableContainer"}},[a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data1||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data2||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data3||[],"not-found-msg":" "},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data4||[],"not-found-msg":" "},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data5||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data6||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data7||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data8||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data9||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data10||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data11||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data12||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data13||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data14||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data15||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data16||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data17||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data18||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data19||[],"not-found-msg":""},scopedSlots:t._u([{key:"actions",fn:function(e){return a("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"x"},on:{click:function(a){return t.dtEditClick(e)}}})}}])})],1),t._m(18),a("div",{attrs:{id:"divConfirm"}},[a("label",[t._v("Confirm Entry")]),a("button",{attrs:{id:"yes",value:"sendEntry",onkeydown:"return (event.keyCode!=13);"},on:{click:function(e){return t.sendJSON()}}},[t._v("Yes")]),a("button",{attrs:{id:"no",value:"cancel",onkeydown:"return (event.keyCode!=13);"}},[t._v("No")])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDateOfEntry"}},[t._v("Date of entry")]),a("input",{attrs:{type:"date",id:"inputDateOfEntry",name:"dateOfEntry",placeholder:"DD/MM/YY",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDateOfInvoice"}},[t._v(" Date of invoice")]),a("input",{attrs:{type:"date",id:"inputDateOfInvoice",name:"dateOfInvoice",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fieldsetMiddle"}},[a("div",{staticClass:"field",attrs:{id:"fieldInputSN°"}},[a("label",{attrs:{for:"inputS.N°"}},[t._v("S.N°")]),a("input",{attrs:{type:"number",id:"inputS.N°",name:"S.N°",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})]),a("div",{staticClass:"field",attrs:{id:"fieldInputPO"}},[a("label",{attrs:{for:"inputPO"}},[t._v("PO Number/ Requisition below 25000/-")]),a("input",{attrs:{type:"text",id:"inputPO",name:"PO",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemNameAsPerInvoice"}},[t._v("Item name as per Invoice")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"inputItemNameAsPerInvoice",name:"itemNameAsPerInvoice",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputAssetCode"}},[t._v("Asset Code")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"inputAssetCode",name:"assetCode",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemQ(RECD.viaInvoice)"}},[t._v("Item Quantity (Recd. Via Invoice)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemQ(RECD.viaInvoice)",name:"itemQ(RECD.viaInvoice)",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemQ(Prev.AvailableStore)"}},[t._v("Item Quantity (Previous available to Store)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemQ(Prev.AvailableStore)",name:"itemQ(Prev.AvailableStore)",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputTotaltemQ"}},[t._v("Total Item Quantity")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputTotaltemQ",name:"totaltemQ",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputPrevAvailableSr.No"}},[t._v("Previous available Sr.No")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputPrevAvailableSr.No",name:"prevAvailableSr.No",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"lastSrlNoAssigned"}},[t._v("Item Last Sr. No. (As per coding)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"lastSrlNoAssigned",name:"itemItemLastSr.N°",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemNewNumber"}},[t._v("Item New Number")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemNewNumber",name:"itemNewNumber",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemMake"}},[t._v("Item Make")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"inputItemMake",name:"itemMake",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemS.N°"}},[t._v("Item S.N°")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemS.N°",name:"itemS.N°",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputBasicRate"}},[t._v("Basic Rate")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputBasicRate",name:"basicRate",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDiscount(%)"}},[t._v("Discount (%)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputDiscount(%)",name:"discount(%)",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputTax(%)"}},[t._v("Tax (%)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputTax(%)",name:"tax(%)",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputAmount"}},[t._v("Amount")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputAmount",name:"amount",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputStockRegPageN°"}},[t._v("Stock Register Page No.")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputStockRegPageN°",name:"stockRegPageN°",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field",attrs:{id:"fieldInputTA"}},[a("label",{attrs:{for:"inputTotalAmount"}},[t._v("Total Amount")]),a("input",{attrs:{type:"number",id:"inputTotalAmount",name:"totalamount",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])}],r=(a("b0c0"),a("d3b7"),a("2af1")),d=a("eda0"),u=a("46f1"),c=a("4f3e"),p=a("0f5f"),m=a("dd65");n["a"].use(r["a"]),n["a"].use(d["a"]),n["a"].use(u["a"]);var f=[],v=[],b=[],y=[],C=[],h=[],k=[],_=[],g=[],S=[],I=[],D=[],w=[],x=[],F=[],E=[],N=[],T=[],A=[],B=[],P=new c["a"]({url:"http://zumaran.tech/store-app/financialyear/all",adaptor:new p["e"],crossDomain:!0}),j=new c["a"]({url:"http://zumaran.tech/store-app/vendor/all",adaptor:new p["e"],crossDomain:!0}),R=new c["a"]({url:"http://zumaran.tech/store-app/invoice/all",adaptor:new p["e"],crossDomain:!0}),O=new c["a"]({url:"http://zumaran.tech/store-app/assettype/all",adaptor:new p["e"],crossDomain:!0}),M=new c["a"]({url:"http://zumaran.tech/store-app/maincategory/all",adaptor:new p["e"],crossDomain:!0}),$=new c["a"]({url:"http://zumaran.tech/store-app/subcategory/all",adaptor:new p["e"],crossDomain:!0}),Q=new c["a"]({url:"http://zumaran.tech/store-app/department/all",adaptor:new p["e"],crossDomain:!0}),V=new c["a"]({url:"http://zumaran.tech/store-app/items/all",adaptor:new p["e"],crossDomain:!0}),z=new c["a"]({url:"http://zumaran.tech/store-app/invoice/findno/2001",adaptor:new p["e"],crossDomain:!0});window.onload=function(){};var H=n["a"].extend({name:"form1",components:{DataTable:m["DataTable"]},data:function(){return{remoteData1:P,remoteData2:j,remoteData3:R,remoteData4:O,remoteData5:M,remoteData6:$,remoteData7:Q,remoteData8:V,remoteData9:z,remoteFields:{value:"id",text:"name"},remoteFieldsInvoiceN:{value:"id",text:"number"},remoteFieldsInvoiceDateEntry:{value:"id",text:"entryDate"},remoteFieldsInvoiceDate:{value:"id",text:"date"},remoteFieldsInvoiceFinancialYear:{value:"financialYear.id",text:"financialYear.name"},remoteFieldsInvoiceVendor:{value:"vendor.id",text:"vendor.name"},remoteFieldsInvoiceAssetType:{value:"assetType.id",text:"assetType.name"},remoteFieldsInvoiceFund:{value:"id",text:"fund"},remoteFieldsInvoiceTotalAmount:{value:"id",text:"totalAmount"},remoteFieldsItemNameCoding:{value:"id",text:"itemCode"},keySettings:{saveRequest:""},localData:[{Id:"1",item:"a"},{Id:"2",item:"b"},{Id:"3",item:"c"}],localFields:{value:"Id",text:"item"},pf:null,mc:null,sc:null,ic:null,headerFields:[{name:"F1",label:""}],data1:f,data2:v,data3:b,data4:y,data5:C,data6:h,data7:k,data8:_,data9:g,data10:S,data11:I,data12:D,data13:w,data14:x,data15:F,data16:E,data17:N,data18:T,data19:A,allowFiltering:!0,customValue:"",newItem:"",query:""}},methods:{sendJSON:function(){for(var t=document.getElementById("inputPO").value,e=[],a=0,n={item:{id:1},itemQuantity:k[a].F1,itemNewSerialNumber:D[a].F1,basicRate:F[a].F1,discount:E[a].F1,tax:N[a].F1,amount:T[a].F1},i=1;i<=f.length;i++)e.push(n);var s={invoice:{id:z[0].id},poNumber:t,purchaseFor:{id:B[0].F1},items:e},o="http://zumaran.tech/store-app/fixedasset/newentry",l={method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}};fetch(o,l).then((function(t){return t.json()})).then((function(t){return console.log(t)})),console.log("Items sent:"+f.length,s)},addItem:function(){var t=document.getElementById("purchasefor").ej2_instances[0].element.value,e=document.getElementById("purchasefor").value;f.push({F1:t}),B.push({inputvalue1id:e}),console.log(B);var a=document.getElementById("StockRegMainCat").ej2_instances[0].element.value;v.push({F1:a});var n=document.getElementById("StockRegSubC").ej2_instances[0].element.value;b.push({F1:n});var i=document.getElementById("inputItemNameAsPerInvoice").value;y.push({F1:i});var s=document.getElementById("ItemNameAsForCoding").ej2_instances[0].element.value;C.push({F1:s});var o=document.getElementById("inputAssetCode").value;h.push({F1:o});var l=document.getElementById("inputItemQ(RECD.viaInvoice)").value;k.push({F1:l});var r=document.getElementById("inputItemQ(Prev.AvailableStore)").value;_.push({F1:r});var d=document.getElementById("inputTotaltemQ").value;g.push({F1:d});var u=document.getElementById("inputPrevAvailableSr.No").value;S.push({F1:u});var c=document.getElementById("inputItemLastSr.N°").value;I.push({F1:c});var p=document.getElementById("inputItemNewNumber").value;D.push({F1:p});var m=document.getElementById("inputItemMake").value;w.push({F1:m});var P=document.getElementById("inputItemS.N°").value;x.push({F1:P});var j=document.getElementById("inputBasicRate").value;F.push({F1:j});var R=document.getElementById("inputDiscount(%)").value;E.push({F1:R});var O=document.getElementById("inputTax(%)").value;N.push({F1:O});var M=document.getElementById("inputAmount").value;T.push({F1:M});var $=document.getElementById("inputStockRegPageN°").value;A.push({F1:$})},autofill:function(){var t,e=document.getElementById("inputInvoiceN°"),a=document.getElementById("financialyear"),n=document.getElementById("inputvendor"),i=document.getElementById("inputAssetType"),s=document.getElementById("inputFund"),o=document.getElementById("inputTotalAmount"),l=document.getElementById("StockRegMainCat"),r=document.getElementById("StockRegSubC"),d=document.getElementById("inputItemNameAsPerInvoice"),u=document.getElementById("ItemNameAsForCoding"),c=document.getElementById("lastSrlNoAssigned"),p=new XMLHttpRequest;p.onreadystatechange=function(){4==this.readyState&&200==this.status&&(t=JSON.parse(p.responseText),console.log("fetched data:"+t))},p.open("GET","filename",!0),p.send(),2001==e.value&&(a.ej2_instances[0].element.value=t.financialYear.name,n.ej2_instances[0].element.value=t.vendor.name,i.ej2_instances[0].element.value=t.assetType.name,s.ej2_instances[0].element.value=t.fund,o.value=t.totalAmount,l.ej2_instances[0].element.value=t.items[0].item.mainCategory,r.ej2_instances[0].element.value=t.items[0].item.subCategory,d.value=t.items[0].item.name,u.ej2_instances[0].element.value=t.items[0].itemCode,c.value=t.items[0].item.lastSrlNoAssigned,console.log(e.value))}}}),W=H,Y=(a("e75c"),a("2877")),J=Object(Y["a"])(W,o,l,!1,null,"db955f6a",null),q=J.exports,L={components:{EntryStage:q},data:function(){return{}}},G=L,X=Object(Y["a"])(G,i,s,!1,null,null,null),K=X.exports,U=a("f309");n["a"].use(U["a"]);var Z=new U["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Z,render:function(t){return t(K)}}).$mount("#app")},e75c:function(t,e,a){"use strict";var n=a("10e7"),i=a.n(n);i.a}});
//# sourceMappingURL=app.9a7007e1.js.map