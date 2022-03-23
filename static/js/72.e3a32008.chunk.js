(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[72],{138:function(e,t,a){"use strict";a(0);var s=a(197),c=a(173),i=a(195),r=a(1);t.a=function(e){return Object(r.jsx)(s.a,{children:Object(r.jsx)(c.a,{children:Object(r.jsxs)("div",{className:"page-title-box",children:[Object(r.jsx)("h4",{className:"page-title",children:e.title}),Object(r.jsx)("div",{className:"page-title-right",children:Object(r.jsxs)(i.a,{listProps:{className:"m-0"},children:[Object(r.jsx)(i.a.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,t){return e.active?Object(r.jsx)(i.a.Item,{active:!0,children:e.label},t):Object(r.jsx)(i.a.Item,{href:e.path,children:e.label},t)}))]})})]})})})}},985:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(197),r=a(173),l=a(175),n=a(347),d=a(138),j=a(3),o=a(30),b=a(21),h=a(930),p=a(46),m=a.n(p),u=a(1),O=function(e){var t=Object(s.useState)([]),a=Object(b.a)(t,2),i=a[0],r=a[1],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,s=t<0?0:t,c=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,i)).toFixed(s))+" "+c[i]},d=function(t,a){var s=Object(o.a)(i);s.splice(a,1),r(s),e.onFileUpload&&e.onFileUpload(s)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.a,Object(j.a)(Object(j.a)({},e),{},{onDrop:function(t){return function(t){var a,s=t;e.showPreview&&((t||[]).map((function(e){return Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:l(e.size)})})),(a=s=Object(o.a)(i)).push.apply(a,Object(o.a)(t)),r(s)),e.onFileUpload&&e.onFileUpload(s)}(t)},children:function(t){var a=t.getRootProps,s=t.getInputProps;return Object(u.jsx)("div",{className:m()("dropzone","dz-clickable",{"dz-started":i&&i.length>0}),children:Object(u.jsxs)("div",Object(j.a)(Object(j.a)({},a()),{},{children:[Object(u.jsxs)("div",{className:"dz-message needsclick",children:[Object(u.jsx)("input",Object(j.a)({},s())),Object(u.jsx)("i",{className:"h1 text-muted uil-cloud-upload"}),Object(u.jsx)("h3",{children:"Drop files here or click to upload."}),Object(u.jsxs)("span",{className:"text-muted ",children:["(This is just a demo dropzone. Selected files are ",Object(u.jsx)("strong",{children:"not"})," actually uploaded.)"]})]}),e.showPreview&&(i||[]).map((function(e,t){return Object(u.jsxs)(c.a.Fragment,{children:[e.preview&&Object(u.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"dz-preview dz-processing dz-error dz-complete dz-image-preview",children:[Object(u.jsx)("div",{className:"dz-image",children:Object(u.jsx)("img",{"data-dz-thumbnail":"",alt:e.name,src:e.preview},t)}),Object(u.jsxs)("div",{className:"dz-details",children:[Object(u.jsx)("div",{className:"dz-size",children:Object(u.jsxs)("span",{"data-dz-size":"",children:[Object(u.jsx)("strong",{children:e.formattedSize})," KB"]})}),Object(u.jsx)("div",{className:"dz-filename",children:Object(u.jsx)("span",{"data-dz-name":"",children:e.name})})]}),Object(u.jsx)("div",{className:"dz-remove",children:Object(u.jsx)(n.a,{variant:"",onClick:function(e){return d(0,t)},children:Object(u.jsx)("i",{className:"uil uil-multiply"})})})]}),!e.preview&&Object(u.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"dz-preview dz-file-preview dz-processing dz-error dz-complete",children:[Object(u.jsx)("div",{className:"dz-image",children:Object(u.jsx)("img",{"data-dz-thumbnail":"",alt:""})}),Object(u.jsxs)("div",{className:"dz-details",children:[Object(u.jsx)("div",{className:"dz-size",children:Object(u.jsxs)("span",{"data-dz-size":"",children:[Object(u.jsx)("strong",{children:e.formattedSize})," KB"]})}),Object(u.jsx)("div",{className:"dz-filename",children:Object(u.jsx)("span",{"data-dz-name":"",children:e.name})})]}),Object(u.jsx)("div",{className:"dz-remove",children:Object(u.jsx)(n.a,{variant:"",onClick:function(e){return d(0,t)},children:Object(u.jsx)("i",{className:"uil uil-multiply"})})})]})]},t)}))]}))})}}))})};O.defaultProps={showPreview:!0};var x=O;t.default=function(){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(d.a,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"File Upload",path:"/forms/upload",active:!0}],title:"File Upload"}),Object(u.jsx)(i.a,{children:Object(u.jsx)(r.a,{xs:12,children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(l.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Dropzone File Upload"}),Object(u.jsx)("p",{className:"sub-header",children:"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."}),Object(u.jsx)(x,{onFileUpload:function(e){console.log("Uploaded files - ",e)}}),Object(u.jsx)("div",{className:"clearfix text-end mt-3",children:Object(u.jsxs)(n.a,{variant:"danger",children:[Object(u.jsx)("i",{className:"uil uil-arrow-right me-1"})," Submit"]})})]})})})})]})}}}]);
//# sourceMappingURL=72.e3a32008.chunk.js.map