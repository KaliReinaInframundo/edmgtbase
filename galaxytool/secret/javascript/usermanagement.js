function clear_fields_for_new_user(){dojo.byId("delete_icon").style.display="none";dijit.byId("username").set("value","");dijit.byId("ogame_playerid").set("value","");dijit.byId("ogame_allyid").set("value","");dijit.byId("stylepath").set("value","styles.css");dijit.byId("email").set("value","");dijit.byId("email").set("readOnly",!1);dijit.byId("cansearchOFF").set("checked","true");dijit.byId("caninsertOFF").set("checked","true");dijit.byId("candeleteOFF").set("checked","true");dijit.byId("statusviewOFF").set("checked",
"true");dijit.byId("probeviewOFF").set("checked","true");dijit.byId("usermanOFF").set("checked","true");dijit.byId("historyOFF").set("checked","true");dijit.byId("diplomaticOFF").set("checked","true");dijit.byId("fleetinfoOFF").set("checked","true");dijit.byId("activitiesOFF").set("checked","true");dijit.byId("maintenanceOFF").set("checked","true");dojo.byId("user_id").value="dummy"}
function set_permission_read_only(c){var a=!1;!0==c&&(a=!0);dijit.byId("cansearchON").set("readOnly",a);dijit.byId("cansearchOFF").set("readOnly",a);dijit.byId("caninsertON").set("readOnly",a);dijit.byId("caninsertOFF").set("readOnly",a);dijit.byId("candeleteON").set("readOnly",a);dijit.byId("candeleteOFF").set("readOnly",a);dijit.byId("statusviewON").set("readOnly",a);dijit.byId("statusviewOFF").set("readOnly",a);dijit.byId("probeviewON").set("readOnly",a);dijit.byId("probeviewOFF").set("readOnly",
a);dijit.byId("usermanON").set("readOnly",a);dijit.byId("usermanOFF").set("readOnly",a);dijit.byId("historyON").set("readOnly",a);dijit.byId("historyOFF").set("readOnly",a);dijit.byId("diplomaticON").set("readOnly",a);dijit.byId("diplomaticOFF").set("readOnly",a);dijit.byId("fleetinfoON").set("readOnly",a);dijit.byId("fleetinfoOFF").set("readOnly",a);dijit.byId("activitiesON").set("readOnly",a);dijit.byId("activitiesOFF").set("readOnly",a);!0==user_is_admin?(dijit.byId("maintenanceON").set("readOnly",
a),dijit.byId("maintenanceOFF").set("readOnly",a)):(dijit.byId("maintenanceON").set("readOnly",!0),dijit.byId("maintenanceOFF").set("readOnly",!0))}
function switch_user(){var c=dijit.byId("user_selection").value;"new_user"==c?clear_fields_for_new_user():(dojo.byId("messageAreaContent").innerHTML="",dojo.byId("messageArea").style.display="none",dojo.xhrPost({url:"ajax/ajax_usermanagement.php?type=user_detail&id="+c,handleAs:"json",load:function(a){dojo.byId("user_id").value=c;c!=own_userid?dijit.byId("email").set("readOnly",!0):dijit.byId("email").set("readOnly",!1);dijit.byId("username").set("value",a.username);dijit.byId("ogame_playerid").set("value",
a.ogame_playerid);dijit.byId("ogame_allyid").set("value",a.ogame_allyid);dijit.byId("stylepath").set("value",a.stylepath);dijit.byId("email").set("value",a.email);"true"==a.is_admin?(dojo.byId("delete_icon").style.display="none",set_permission_read_only(!0)):(dojo.byId("delete_icon").style.display="inline",set_permission_read_only(!1));var b="true"==a.cansearch?"ON":"OFF";dijit.byId("cansearch"+b).set("checked","true");b="true"==a.caninsert?"ON":"OFF";dijit.byId("caninsert"+b).set("checked","true");
b="true"==a.candelete?"ON":"OFF";dijit.byId("candelete"+b).set("checked","true");b="true"==a.statusview?"ON":"OFF";dijit.byId("statusview"+b).set("checked","true");b="true"==a.probeview?"ON":"OFF";dijit.byId("probeview"+b).set("checked","true");b="true"==a.userman?"ON":"OFF";dijit.byId("userman"+b).set("checked","true");b="true"==a.history?"ON":"OFF";dijit.byId("history"+b).set("checked","true");b="true"==a.diplomatic?"ON":"OFF";dijit.byId("diplomatic"+b).set("checked","true");b="true"==a.fleetinfo?
"ON":"OFF";dijit.byId("fleetinfo"+b).set("checked","true");b="true"==a.activities?"ON":"OFF";dijit.byId("activities"+b).set("checked","true");b="true"==a.maintenance?"ON":"OFF";dijit.byId("maintenance"+b).set("checked","true")},error:function(a){console.log("Error: "+a)}}))}
function delete_user(){var c=dijit.byId("user_selection").value;"new_user"!=c&&dojo.xhrPost({url:"ajax/ajax_usermanagement.php?type=delete_user&id="+c,handleAs:"json",load:function(a){null!=a.messages&&showMessages(a);dijit.byId("user_selection").removeOption(c.toString())},error:function(a){console.log("Error: "+a)}})}
function validate_form(){var c=["username","stylepath","email"],a;for(a=0;a<c.length;a++)if(""!=dijit.byId(c[a]).get("state"))return dijit.byId(c[a]).set("state","Error"),!1;if(dijit.byId("pass1").value!=dijit.byId("pass2").value)return dijit.byId("pass1").set("state","Error"),dijit.byId("pass2").set("state","Error"),!1;dijit.byId("pass1").set("state","");dijit.byId("pass2").set("state","");return!0};