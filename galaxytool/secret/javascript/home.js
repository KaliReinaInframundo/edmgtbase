var galaxytool=window.galaxytool||{};
galaxytool.Home={getNewToken:function(){require(["dojo/dom","dojo/request","dijit/registry","galaxytool/MessageHandling"],function(a,b,c,d){a.byId("plugin_token").innerHTML='<img src="../images/loading_small.gif">';c.byId("new_token").set("disabled",!0);b.post("ajax/ajax_index.php",{data:{type:"new_token"},handleAs:"json"}).then(function(b){null!=b.messages?(new d(b.messages,"../images")).showMessages():(a.byId("plugin_token").innerHTML=b.result,register.byId("new_token").set("disabled",!1))},function(a){console.log("Error:");
console.log(a)})})},deleteFormatter:function(a,b,c){return a='<img src="../images/trash.png" onclick="galaxytool.Home.deleteComment('+shoutbox_store.getValues(shoutbox_grid.getItem(b),"id")+')" style="cursor: pointer;" height="16" width="16">'},deleteComment:function(a){a=parseInt(a);1>a||require(["dojo/request","galaxytool/MessageHandling"],function(b,c){b.post("ajax/ajax_shoutbox.php",{data:{type:"delete",id:a},handleAs:"json"}).then(function(a){null!=a.messages?(new c(a.messages,"../images")).showMessages():
galaxytool.Home.reloadShoutBox()},function(a){console.log("Error:");console.log(a)})})},addComment:function(){require(["dojo/request","dijit/registry","galaxytool/MessageHandling"],function(a,b,c){b=b.byId("shouttext").get("value");""!=b&&a.post("ajax/ajax_shoutbox.php",{data:{type:"insert",comment:b},handleAs:"json"}).then(function(a){null!=a.messages?(new c(a.messages,"../images")).showMessages():galaxytool.Home.reloadShoutBox()},function(a){console.log("Error:");console.log(a)})})},reloadShoutBox:function(){require(["dijit/registry",
"dojox/grid/DataGrid","dojo/data/ItemFileReadStore"],function(a,b,c){shoutbox_store.close();shoutbox_store=new c({url:"ajax/ajax_shoutbox.php?type=read"});shoutbox_grid.setStore(shoutbox_store);a.byId("shouttext").set("value","")})},addCommentOnEnter:function(a){null!=a&&13!=a.keyCode||galaxytool.Home.addComment()}};
require("dojo/parser dojo/on dijit/registry dojo/ready dijit/layout/ContentPane dijit/layout/BorderContainer dojox/grid/DataGrid dojo/data/ItemFileWriteStore dijit/form/TextBox dijit/form/Button dijit/TitlePane dijit/Dialog dijit/form/Select".split(" "),function(a,b,c,d,e,f,g,h,k,l,m,n,p){d(function(){b(c.byId("shouttext"),"KeyPress",galaxytool.Home.addCommentOnEnter)})});