webpackJsonp([3],{GwHp:function(t,e){},IF3j:function(t,e){},MWAP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("Dd8w"),o=i.n(l),n=i("D/cR"),a=i("BGi1"),r=i("NYxO"),s={props:["info"],computed:o()({},Object(r.c)({list:"menu/list"})),data:function(){return{form:{pid:0,title:"",icon:"",type:1,url:"",status:1},icons:["el-icon-setting","el-icon-user","el-icon-help","el-icon-s-home","el-icon-s-grid"],urls:["menu","role","manage","goods","cate","spec","goods"],formLabelWidth:"120px",value:!0}},methods:o()({empty:function(){this.form={pid:0,title:"",icon:"",type:1,url:"",status:1}},cancel:function(){this.info.show=!1,this.info.isAdd||this.empty()},add:function(){var t=this;this.info.show=!1,Object(n.s)(this.form).then(function(e){200===e.data.code?(Object(a.a)(e.data.msg),t.empty(),t.cancel(),t.requestList()):Object(a.b)(e.data.msg)})},getDetail:function(t){var e=this;Object(n.w)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t})},update:function(){var t=this;Object(n.u)(this.form).then(function(e){200==e.data.code?(Object(a.a)("修改成功"),t.empty(),t.cancel(),t.requestList()):Object(a.b)("修改失败")})}},Object(r.b)({requestList:"menu/menuList"}))},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"菜单名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"上级菜单","label-width":t.formLabelWidth}},[i("el-select",{model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"--请选择--",value:"",readonly:""}}),t._v(" "),i("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"菜单类型","label-width":t.formLabelWidth}},[i("el-radio",{attrs:{label:1},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("目录")]),t._v(" "),i("el-radio",{attrs:{label:2},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("菜单")])],1),t._v(" "),1==t.form.type?i("el-form-item",{attrs:{label:"菜单图标","label-width":t.formLabelWidth}},[i("el-select",{model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}},[i("el-option",{attrs:{label:"--请选择--",value:"",readonly:""}}),t._v(" "),t._l(t.icons,function(t){return i("el-option",{key:t,attrs:{value:t}})})],2)],1):i("el-form-item",{attrs:{label:"菜单地址","label-width":t.formLabelWidth}},[i("el-select",{model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}},[i("el-option",{attrs:{label:"--请选择--",value:"",readonly:""}}),t._v(" "),t._l(t.urls,function(t){return i("el-option",{key:t,attrs:{value:t}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"菜单状态","label-width":t.formLabelWidth}},[i("el-switch",{attrs:{"active-color":"blue","inactive-color":"grey","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),1==t.info.isAdd?i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]):i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(s,c,!1,function(t){i("vrq/")},null,null).exports,d={computed:o()({},Object(r.c)({list:"menu/list"})),methods:o()({},Object(r.b)({requestList:"menu/menuList"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;this.$confirm("确定要删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.t)({id:t}).then(function(t){200==t.data.code?(Object(a.a)("删除成功！！！"),e.requestList()):Object(a.b)("删除失败")})}).catch(function(t){return t})}}),mounted:function(){this.requestList()}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":"id",border:""}},[i("el-table-column",{attrs:{prop:"id",label:"菜单编号",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"菜单名称",width:"140"}}),t._v(" "),i("el-table-column",{attrs:{prop:"icon",label:"菜单图标",width:"300"}}),t._v(" "),i("el-table-column",{attrs:{prop:"url",label:"菜单地址",width:"300"}}),t._v(" "),i("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"操作",width:"*"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var m={data:function(){return{info:{show:!1,title:"",isAdd:!0}}},components:{vAdd:u,vList:i("VU/8")(d,f,!1,function(t){i("IF3j")},"data-v-42e86797",null).exports},methods:{add:function(){this.info.show=!0,this.info.title="添加菜单",this.info.isAdd=!0},edit:function(t){this.info.show=!0,this.info.title="编辑菜单",this.info.isAdd=!1,this.$refs.add.getDetail(t)}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{staticClass:"add",attrs:{type:"primary"},on:{click:this.add}},[this._v("添加")]),this._v(" "),e("v-add",{ref:"add",attrs:{info:this.info}}),this._v(" "),e("v-list",{on:{edit:this.edit}})],1)},staticRenderFns:[]};var b=i("VU/8")(m,p,!1,function(t){i("GwHp")},"data-v-9f55dd60",null);e.default=b.exports},"vrq/":function(t,e){}});
//# sourceMappingURL=3.2fb36c5ae331f495b638.js.map