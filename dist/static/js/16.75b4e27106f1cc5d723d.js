webpackJsonp([16],{840:function(t,a,e){function i(t){e(920)}var n=e(1)(e(865),e(968),i,"data-v-a07445fc",null);t.exports=n.exports},865:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(6),n=e(8);a.default={name:"sensornetwork",data:function(){return{tableData:[],HistoryData:[],allData:[],type:"AQI",currentRow:null,pagesize:10,currentPage:1,totalCount:0,value1:"",value2:"",uptime:"",FENoptions:[{value:"",label:"全部"}],KeyDvalue:"请选择分类",zhuangtai:"实时"}},created:function(){var t=this;n.a.GetSixParmAirListRes().then(function(a){var e=t;e.InitializationDataMethod(a.data.Data,e.type)}),i.a.$on("refreshTarget",this.refreshTable),n.a.GetSixParamTypeListRes().then(function(a){var e=a.data.Data;console.log(e),e.forEach(function(a){var e={};e.value=a,e.label=a,t.FENoptions.push(e)})})},mounted:function(){var t=this;$(".first .tables a").on("click",function(){$(this).addClass("bai").siblings().removeClass("bai")}),setInterval(function(){t.uptime=t.UpTimesData()},5e3)},methods:{UpTimesData:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1,i=t.getDate(),n=t.getHours()-1,s=t.getMinutes(),o=t.getSeconds();return e<10&&(e="0"+e),i<10&&(i="0"+i),n<10&&(n="0"+n),s<10&&(s="0"+s),o<10&&(o="0"+o),a+"-"+e+"-"+i+" "+n+":"+s+":"+o},compare:function(t){return function(a,e){var i=a[t];return e[t]-i}},InitializationDataMethod:function(t,a){console.log(t),this.type=a,this.SetDataList(t,a),this.totalCount=this.allData.length,this.setPageTable(10,1)},ObjectDeweighting:function(t){for(var a=t,e={},i=[],n=0;n<a.length;n++){var s=a[n],o=s.stationname;e[o]||(i.push(s),e[o]=s)}return i},refreshTable:function(t){this.type=this.Tochangelabeltype(t),this.SetDataList(this.data,t),this.totalCount=this.allData.length,this.setPageTable(10,1)},Tochangelabeltype:function(t){var a=t;switch(t.toUpperCase()){case"AQI":a="AQI";break;case"PM25":a="PM2.5";break;case"PM10":a="PM10";break;case"SO2":a="SO2";break;case"NO2":a="NO2";break;case"CO":a="CO";break;case"O3":a="O3";break;case"COMPLEXINDEX":a="综指";break;case"TEMP":a="温度";break;case"HUMI":a="湿度";break;case"WINDANGLE":a="风向";break;case"WINDSPEED":a="风力"}return a},SetDataList:function(t,a){var e=this;this.data=t,this.allData=[];var i=1;this.getPointByType(this.ptType).sort(this.compare(a.toLowerCase())).forEach(function(t){var n={};n.ranking=i++,n.stationname=t.stationname,n.stationid=t.stationid,n.latitude=t.latitude,n.longitude=t.longitude,n.Grid=t.gridName?t.gridName:"----",n.aqi=t[a.toLowerCase()],n.dataType=t.hasOwnProperty("dataType")?t.dataType:void 0,e.allData.push(n)})},ChaXunJianCe:function(){var t=this,a=this.zhuangtai;switch(console.log(this.KeyDvalue),a){case"实时":case"累计":t.ClassificationQuery(a)}},ClassificationQuery:function(t){var a=this,e=encodeURI(this.KeyDvalue);switch(t){case"实时":console.log("实时监控测试"),n.a.GetClassification(e).then(function(t){var e=t.data.Data;a.InitializationDataMethod(e,a.type),i.a.$emit("loadCumulative",e,"layer_cgq_lcs",a.type,"stationname")});break;case"累计":console.log("累计监控测试"),n.a.GetClassificationleijiR(e).then(function(t){var e=t.data.Data;a.InitializationDataMethod(e,a.type),i.a.$emit("loadCumulative",e,"layer_cgq_lcs",a.type,"stationname")})}},RealTimeFatch:function(){var t=this,a=this;this.zhuangtai="实时",n.a.GetSixParmAirListRes().then(function(e){var n=t,s=e.data.Data;n.InitializationDataMethod(s,n.type),i.a.$emit("loadCumulative",s,"layer_cgq_lcs",a.type,"stationname")})},CumulativeFatch:function(){var t=this,a=this;this.zhuangtai="累计";var e=[];n.a.GetClassificationleijiR("").then(function(n){e=n.data.Data,t.InitializationDataMethod(e,a.type),i.a.$emit("loadCumulative",e,"layer_cgq_lcs",a.type,"stationname")})},RowCurrentChange:function(t){this.currentRow=t,i.a.$emit("locationClick","layer_cgq_lcs",this.currentRow,this.type)},handleCurrentChange:function(t){this.setPageTable(10,t)},setPageTable:function(t,a){for(var e=[],i=t*(a-1),n=0;n<t&&!(i+n+1>this.allData.length);n++)e.push(this.allData[i+n]);this.tableData=e},switchRender:function(t){this.type=t,this.setdata(this.data,this.type)},getPointByType:function(t){var a=[],e=this.data;if(e)for(var i=0,n=e.length;i<n;i++){var s=e[i];s.type===t&&a.push(e[i])}return a},TimeConversion:function(t,a){var e={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours()-1,"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t}},components:{}}},896:function(t,a,e){a=t.exports=e(831)(!1),a.push([t.i,".sensornetwork[data-v-a07445fc]{width:430px;height:auto}.sensornetwork img[data-v-a07445fc]{position:absolute;top:40%;left:-17px;cursor:pointer;float:left}.sensornetwork .main[data-v-a07445fc]{height:auto}.sensornetwork .main .kbiaoti[data-v-a07445fc]{padding:10px 0}.sensornetwork .main .bluexian[data-v-a07445fc]{width:26px;border:1px solid #1080cc;margin:0 auto}.sensornetwork .main .first[data-v-a07445fc]{width:100%;height:96px;margin-top:10px}.sensornetwork .main .first .tables[data-v-a07445fc]{float:left;margin-left:14px;width:100%;border-bottom:1px solid #ccc}.sensornetwork .main .first .tables .bai[data-v-a07445fc]{color:#4696ff;border-bottom:2px solid #4696ff}.sensornetwork .main .first .tables a[data-v-a07445fc]{float:left;text-decoration:none;font-size:16px;font-weight:700;color:#666;display:inline-block;line-height:34px;padding:0 30px;width:auto;height:34px}.sensornetwork .main .first .tables[data-v-a07445fc] :hover{cursor:pointer}.sensornetwork .main .first .tables .time2[data-v-a07445fc]{line-height:34px;padding-right:20px;font-size:12px}.sensornetwork .main .first .btnns[data-v-a07445fc],.sensornetwork .main .first .shijian[data-v-a07445fc]{float:left;margin-left:6px}.sensornetwork .main .first .btnns button[data-v-a07445fc]{border:none;width:80px;height:34px;background:#4696ff;color:#fff;border-radius:4px}.sensornetwork .main .tqbiaoti[data-v-a07445fc]{width:100%;height:22px;padding-left:20px;text-align:left;margin-left:16px;border-left:3px solid #2a6496}.sensornetwork .main .table_container[data-v-a07445fc]{margin-left:16px}",""])},920:function(t,a,e){var i=e(896);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(832)("ea4ed25e",i,!0,{})},968:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sensornetwork"},[e("div",{staticClass:"main"},[e("div",{staticClass:"first"},[e("div",{staticClass:"tables"},[e("a",{staticClass:"bai",attrs:{id:"shishi"},on:{click:function(a){t.RealTimeFatch()}}},[t._v("实时")]),t._v(" "),e("a",{attrs:{id:"leiji"},on:{click:function(a){t.CumulativeFatch()}}},[t._v("累计")]),t._v(" "),e("font",{staticClass:"time2"},[t._v("更新时间："+t._s(t.uptime))])],1),t._v(" "),e("div",{staticClass:"query24",staticStyle:{width:"100%",height:"50px","padding-top":"49px","padding-left":"10px"}},[e("div",{staticClass:"shijian"},[e("span",{staticStyle:{"font-size":"15px","font-weight":"bold","padding-right":"10px"}},[t._v("监测点分类")]),t._v(" "),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.KeyDvalue,callback:function(a){t.KeyDvalue=a},expression:"KeyDvalue"}},t._l(t.FENoptions,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),e("span",{staticStyle:{"padding-right":"8px"}})],1),t._v(" "),e("div",{staticClass:"btnns"},[e("button",{on:{click:t.ChaXunJianCe}},[t._v("查询")])])])]),t._v(" "),e("div",{staticClass:"table_container"},[e("el-table",{staticStyle:{width:"400px"},attrs:{data:t.tableData,border:"",stripe:"","highlight-current-row":""},on:{"current-change":t.RowCurrentChange}},[e("el-table-column",{attrs:{property:"ranking",label:"排名"}}),t._v(" "),e("el-table-column",{attrs:{property:"Grid",label:"网格名称"}}),t._v(" "),e("el-table-column",{attrs:{property:"stationname",label:"名称",width:"160"}}),t._v(" "),e("el-table-column",{attrs:{property:"aqi",label:t.type}})],1),t._v(" "),e("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)],1)])])},staticRenderFns:[]}}});