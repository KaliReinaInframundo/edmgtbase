define({
	root: ({
		RESOURCES_ON : "Resources at",
		REPORT_WHEN : "on",
		PLAYER_BANNED : "b",
		PLAYER_VACATION_MODE : "v",
		PLAYER_NOOB : "n",
		PLAYER_INACTIVE : "i",
		PLAYER_LONG_INACTIVE : "I",
		PLAYER_OUTLAW : "o",
		L_USERNAME : "Username",
		L_PASSWORD : "Password",
		L_LOGINFAILURE : "Username or password was wrong or your account is not activated yet.",
		L_TOKENFAILURE : "Your logon key is wrong or your account is not activated yet.",
		L_LOGINTEXT : "Please login.",
		L_LANGUAGE : "Available languages:",
		L_TIMEOUT : "Session timed out!",
		L_REGISTER : "Register",
		L_PWLOST : "lost Password",
		INDEX_TITLE : "OGame Galaxietool - Overview",
		INDEX_INFO : "Information",
		INDEX_ENTRIES : "Number of all systems",
		INDEX_ENTRIES_LASTWEEK : "New systems last week",
		INDEX_ENTRIES_TO_OLD : "Systems older than one month",
		INDEX_REGISTERED_USERS : "Registered users",
		INDEX_PAGEFORWARD : "If your browser does not support page forwarding, please click here.",
		INDEX_NOTICES : "Notices",
		INDEX_PLAYERS : "Player statistics",
		INDEX_ALLIES : "Ally statistics",
		INDEX_REPORTS : "Espionage Reports",
		INDEX_VERSION : "Latest version for download",
		INDEX_LATEST_VERSION : "No newer version available",
		INDEX_SHOUTBOX : "Shoutbox",
		INDEX_NOENTRY : "No shouts yet",
		INDEX_COMMENT : "Your Shout",
		INDEX_INSERT : "Insert",
		INDEX_UMOD : "Player in Vacation mode",
		INDEX_NO_MOONS : "Number of moons",
		INDEX_NO_EMPTY_SYSTEMS : "Number of empty systems",
		INDEX_NO_FULL_SYSTEMS : "Number of completely filled systems",
		INDEX_NO_TARGETS : "Number of possible targets",
		INDEX_USERINFO : "Usernumbers",
		INDEX_ONLINE : "Now online",
		INDEX_TODAY : "Today online",
		INDEX_ALL : "Overall number of logins",
		GENERAL_LOAD_FORM : "Load form data",
		GENERAL_SAVE_FORM : "Save form data",
		GENERAL_SAVE_AS_TEXT : "Save as",
		GENERAL_SAVE : "Save",
		INDEX_USERMANAGEMENT : "Activation Overview",
		INDEX_NEEDADMIN : "Accounts to unlock",
		INDEX_NEEDEMAIL : "Unvalidated Accounts",
		INDEX_TOOLBAR_INFO : "Galaxytool plugin information",
		INDEX_TOOLBAR_URL : "Galaxytool URL",
		INDEX_TOOLBAR_VERSION_REQUIRED : "Requires at least Galaxytool plugin version",
		INDEX_TOOLBAR_INSTALL_GUIDE : "Installation instructions for plugin",
		INDEX_TOOLBAR_TOKEN : "Logon key",
		INDEX_TOOLBAR_NEW_TOKEN : "Get new key",
		INDEX_PLAYERS_WITH_N_PLANETS : "Players with more than &1 planets",
		INDEX_GETTING_STARTED : "Getting started with the Galaxytool",
		INDEX_GETTING_STARTED1 : "Welcome to the Galaxytool!",
		INDEX_GETTING_STARTED2 : "The Galaxytool will help you to analyze what is going on in your OGame universe &1",
		INDEX_GETTING_STARTED3 : "Before you can actually analyze data you have to insert it first. For this you require a browser plugin like the &1 for Firefox.",
		INDEX_GETTING_STARTED4 : "After you installed the plugin, you navigate through your OGame pages as usual and you will see a small status window whenever something was sent to your Galaxytool.",
		INDEX_GETTING_STARTED5 : "Once the plugin inserted data into the Galaxytool, you can start to analyze where the players have their colonies, how many colonies they have, what reports exist or when they are active the most.",
		INDEX_GETTING_STARTED6 : "But it will also help you to analyze how you are progressing if you compare yourself against your competitors or by analyzing your combat reports to see how much you raided during the last days or weeks.",
		INDEX_GETTING_WIKIPAGE : "There are many more features within the Galaxytool.",
		INDEX_GETTING_WIKIPAGE2 : "Check them out at our wiki page.",
		INDEX_GETTING_BOARD : "For feedback or ideas you can use our board:",
		INDEX_GETTING_CHAT1 : "Or visit us at the chatroom:",
		INDEX_GETTING_CHAT2 : "We are not online 24/7 but spare a lot of our free time there, so be patient.",
		INDEX_CLOSE : "Close",
		INDEX_LOGIN : "Login",
		GENERAL_REQUIRED_FIELDS : "Please fill all required fields",
		INDEX_MESSAGES : "Messages",
		INDEX_EXAMPLE : "Example",
		INDEX_INVALID_DATA : "Invalid data",
		GENERAL_COLUMN_HIDE_TITLE : "Manage columns",
		GENERAL_COLUMN_HIDE_INFO : "Please select which columns you want to see in the table.",
		GENERAL_ENTRIES_DELETED : "&1 entries deleted",
		GENERAL_APPLY : "Apply",
		STARTPAGE_GALAXYTOOL_DESCR : "<em>Galaxytool</em> is a tool for the browser game OGame.",
		GENERAL_OVERWRITE : "Overwrite duplicate entry",
		GENERAL_OVERWRITE_QUESTION : "Overwrite?",
		INDEX_OWN_LOGINS : "Your logins",
		GENERAL_OPEN_IN_NEW_WINDOW : "Open Link in New Window",
		GENERAL_UNIT_OF_MEASURE_DAYS : "Days",
		PROGRAM_NAME : "OGame Galaxytool",
		SHORTNAME : "Galaxytool",
		BACK_INDEX : "Back to main page",
		UNIVERSE : "Universe",
		MENU_INFO_LINKS : "Information",
		MENU_PAGE : "Overview",
		MENU_DB_SEARCH : "Search in Database",
		MENU_DB_NOTICES : "Search in Notices",
		MENU_DB_REPORTS : "Search in Reports",
		MENU_GALAXYVIEW : "View Galaxy",
		MENU_STATISTICS : "Statistics",
		MENU_ALLYHISTORY : "Historical Overview",
		MENU_FLEET_MOVEMENTS : "Fleet movements",
		MENU_COMBAT_REPORTS : "Combat reports",
		MENU_MESSAGES : "Ingame messages",
		MENU_OPTION_LINKS : "Options",
		MENU_DB_REFRESH : "Insert in Database",
		MENU_NOTICES : "Notices",
		MENU_DB_STATUS : "Status of Database",
		MENU_USEROPTIONS : "User management",
		MENU_USEROPTIONS2 : "User options",
		MENU_USEROPTIONS3 : "User information",
		MENU_ADMIN : "Administration",
		MENU_LOGOUT : "Logout",
		MENU_STUFF : "Miscellaneous",
		MENU_FORUM_THREAD : "Developer forum",
		MENU_DOWNLOADPAGE : "Download page",
		MENU_LANGUAGE : "Language",
		MENU_HELP : "Help",
		MENU_TOOLOPTIONS : "Galaxytool Options",
		PARSER_INFO1 : " was inserted into database.",
		PARSER_ERROR1 : "Error while trying to insert the following coordinates:",
		PARSER_ERROR2 : "Could not find the database!",
		PARSER_ERROR3 : "Could not find the database server!",
		PARSER_WRONG_UNIVERSE : "Wrong universe - actual: \"&1\"  expected: \"&2\"",
		SHOW_TITLE : "OGame Galaxytool - Searchpage",
		SHOW_SEARCH : "Search in Database",
		SHOW_ALLYSYMBOL : "Alliance Tag",
		SHOW_PLAYERNAME : "Player Name",
		SHOW_MOONS : "Only Planets with moon",
		SHOW_NOTICES : "Only planets with notices",
		SHOW_COLONIES : "Only Planets for colonization",
		SHOW_YES : "Yes",
		SHOW_NO : "No",
		SHOW_SEARCHRANGE : "Range",
		SHOW_SEARCH_IN : "Search in galaxy",
		SHOW_FROM_SYSTEM : "from solar system",
		SHOW_FROM_PLANET : "from planet Position",
		SHOW_TO : "to",
		SHOW_DESCRIPTION : "You can use wildcards * for player or alliance names. So you can find all players with &quot;name&quot; in their name.<br />Only fill those fields you want to specify.",
		SHOW_SORT_BY : "Arrange by",
		SHOW_GALASYSTEM : "Galaxy/System",
		SHOW_ALLYNAME : "Alliance Name",
		SHOW_SEARCHBUTTON : "Search",
		SHOW_ADDRESS : "Address",
		SHOW_ALLYSORT : "Alliance",
		SHOW_PLANET : "Planet Name",
		SHOW_STATUS : "Status",
		SHOW_CURRENTNESS : "Last Updated",
		SHOW_PLAYER_STATUS : "Player Status",
		SHOW_PLAYER_STATUS1 : "all",
		SHOW_PLAYER_STATUS2 : "possible targets",
		SHOW_PLAYER_STATUS3 : "inactive",
		SHOW_HITS : "Hits",
		SHOW_OF : "of",
		SHOW_ASC : "ascending",
		SHOW_DESC : "descending",
		SHOW_RESULTS : "hits per page",
		SHOW_MOON : "Moon",
		SHOW_UKMOONSIZE : "unknown",
		SHOW_DF : "DF",
		SHOW_DF_LONG : "Debris field",
		SHOW_METAL : "M",
		SHOW_METAL_LONG : "Metal",
		SHOW_CRYSTAL : "C",
		SHOW_CRYSTAL_LONG : "Crystal",
		SHOW_BOTH : "both together",
		SHOW_AT_LEAST : "(at least)",
		SHOW_DATE : "Date",
		SHOW_DATE_0 : "never mind",
		SHOW_DATE_1 : "older than",
		SHOW_DATE_2 : "newer than",
		SHOW_RANK : "Rank",
		SHOW_FRANK : "Fleet rank",
		SHOW_MEMBERS : "Members",
		SHOW_NOTRANKED : "No data available",
		SHOW_NOTICERES : "Notices",
		SHOW_REPORTS : "Only Planets with reports",
		SHOW_REPORTS_SHORT : "Reports",
		SHOW_NOTHING : "No Entry found.",
		SHOW_ALLIANCE_STATUS : "Alliance status",
		SHOW_NO_STATUS : "no Status",
		SHOW_NAP : "NAP",
		SHOW_ALLIED : "Allied",
		SHOW_WAR : "War",
		SHOW_BOYCOTT : "Boycott",
		SHOW_NEUTRAL : "Neutral",
		SHOW_OWN : "Own Alliance",
		SHOW_WING : "Wing",
		SHOW_EXT_OPTIONS1 : "Show more search options for range, rank, date or debrisfield search.",
		SHOW_EXT_OPTIONS2 : "Show more search options for colonies, moons, reports, notices, playerstatus or diplomatic status.",
		SHOW_EXT_OPTIONS3 : "Show more search options for sorting of search results.",
		SHOW_EXTENDED : "advanced search",
		SHOW_MOON_SELECTION : "Planet with moon",
		SHOW_REPORT_SELECTION : "Planet with report",
		SHOW_FILTER_BY : "Exclude from the list",
		SHOW_FILTER_NONE : "none",
		SHOW_PLAYERS_WITHOUT_PROGRESS : "Show players without score changes within the last few days",
		STATUS_TITLE : "OGame Galaxytool - Statuspage",
		STATUS_DB_STATUS : "Status of Database",
		STATUS_COLOR : "Color",
		STATUS_AGE1 : "Entry 1 day old.",
		STATUS_AGE2 : "Entry 2 - 4 days old.",
		STATUS_AGE3 : "Entry 4 - 7 days old.",
		STATUS_AGE4 : "Entry 1 - 2 weeks old.",
		STATUS_AGE5 : "Entry 2 - 4 weeks old.",
		STATUS_AGE6 : "Entry older than 1 month!",
		STATUS_AGE7 : "No entry available.",
		STATUS_ON : "on",
		STYLES_COLOR1 : "Color1",
		STYLES_COLOR2 : "Color2",
		STYLES_COLOR3 : "Color3",
		STYLES_COLOR4 : "Color4",
		STYLES_COLOR5 : "Color5",
		STYLES_COLOR6 : "Color6",
		STYLES_COLOR7 : "Color7",
		STATUS_DB_LEGEND : "Legend",
		STATUS_GALAXY : "Galaxy Overview",
		USER_TITLE : "User Management",
		USER_NAMES : "User",
		USER_ERROR : "Error",
		USER_NEWUSER : "New user",
		USER_OPTIONS : "Options",
		USER_USERNAME : "Username",
		USER_PASSWORD : "Password",
		USER_PASSWORD_CONFIRM : "Confirm password",
		USER_GALAXY : "Galaxy",
		USER_SEARCH : "Search",
		USER_INSERT : "Insert",
		USER_DELETE : "Delete",
		USER_DELETE_ENTRY : "Do you want to delete user ",
		USER_STATUS : "View stats",
		USER_STYLES : "Modify layout",
		USER_SUBMIT : "Submit",
		USER_RESET : "Reset",
		USER_YES : "Yes",
		USER_NO : "No",
		USER_STYLEPATH : "Path to styles.css",
		USER_PROBES : "View/Submit Espionage Reports",
		USER_EMAIL : "Email",
		USER_ERROR1 : "Password wrong or email invalid.",
		USER_ERROR2 : "Email invalid.",
		USER_INGAME : "In-game Name",
		USER_ALLYTAG : "Alliance Tag",
		USER_ALLYHISTORY : "Historical Overview",
		USER_DIPLOMATIC : "Change Diplomatic Status",
		USER_STATSPAGE : "Number of entries on statistic page",
		USER_LINKS : "Links",
		USER_LINKS2 : "Format:<br>text;url<br>text2;url2<br>text3;url3",
		USER_EXPORT_TITLE : "Export colors (BB Codes)",
		USER_BB_COORDINATES : "Coordinates",
		USER_BB_MOON : "Moon",
		USER_BB_DEBRIS : "Debris field",
		USER_BB_ALLY : "Alliance name",
		USER_BB_ALLYDETAILS : "Alliance details",
		USER_BB_PLAYERNAME : "Player name",
		USER_BB_BANNED : "banned",
		USER_BB_VACATION : "vacation mode",
		USER_BB_NOOB : "noob",
		USER_BB_INACTIVE : "Inactive",
		USER_BB_LONGINACTIVE : "Long inactive",
		USER_DELETION : "Delete",
		USER_FLEETINFO : "Fleet movements",
		USER_ACTIVITIES : "Player activities",
		USER_MAINTENANCE : "Galaxytool maintenance",
		USER_MANAGEMENT : "User management",
		USER_DELETE_MY_COMBAT_REPORTS : "Delete my combat reports",
		USER_DELETE_MY_MESSAGES : "Delete my messages",
		USER_DELETE_MY_FLEETMOVES : "Delete my fleet movements",
		USER_DELETE_MY_COMBAT_REPORTS_LIMITED : "Delete my combat reports older than &1 days",
		USER_DELETE_MY_MESSAGES_LIMITED : "Delete my messages older than &1 days",
		USER_TABLE_ENTRIES : "Number of search results for each page",
		USER_EXISTS : "User already exists",
		USER_BB_OUTLAW : "Outlaw",
		USER_INVALID_URL : "URL &1 seems to be invalid - URL will be ignored",
		VIEW_TITLE : "OGame Galaxytool - Galaxyview",
		VIEW_NODATA : "No data available.",
		VIEW_GALAXY : "Galaxy",
		VIEW_SYSTEM : "Solar system",
		VIEW_POSITION : "Pos.",
		VIEW_PLANET : "Planet",
		VIEW_MOON : "Moon",
		VIEW_TF : "DF",
		VIEW_PLAYER : "Player",
		VIEW_PLAYER_ADD : "(Rank / Status)",
		VIEW_ALLY : "Alliance",
		VIEW_ALLY_ADD : "(Rank / Member)",
		VIEW_METAL : "M",
		VIEW_CRYSTAL : "C",
		VIEW_COLONISED : "Planets inhabited",
		VIEW_UKMOONSIZE : "unknown",
		VIEW_BACK : "back",
		VIEW_NOTICE : "Notices",
		VIEW_REPORTS : "Reports",
		VIEW_MOONPHALANX : "The following moons can scan this system:",
		VIEW_NOMOONS : "No Moons found.",
		VIEW_IRAKS : "The following planet can reach this system with Interplanetary Missiles:",
		VIEW_NOIRAKS : "No Interplanetary Missiles found.",
		VIEW_MOON_DESTROY_CHANCE : "Chance to destroy a moon",
		VIEW_CHANCE_WITH_ONE : "Chance with one death star",
		VIEW_CHANCE_WITH_N : "Chance with ",
		VIEW_DEATH_STARS : "death stars",
		VIEW_DS_DESTROY_CHANCE : "Chance to loose the death star(s)",
		VIEW_TOP : "Top",
		VIEW_GO : "go",
		VIEW_DIAMETER : "Diameter",
		PW_TITLE : "OGame Galaxytool - change password",
		OLD_PASSWORD : "old password",
		NEW_PASSWORD : "new password",
		CONFIRM_NEW_PASSWORD : "confirm new password",
		PW_MISMATCH : "Passwords did not match!",
		PW_ERROR : "Old password was not correct!",
		UPDATE_DONE : "Update successful.",
		TIMEZONE_OFFSET : "Timezone offset to server",
		DELETE_ACCOUNT : "Delete this Galaxytool account",
		DELETE_ACCOUNT_SAFETY_REQUEST : "Do you really want to delete this Galaxytool account?",
		CH_PASSWD_AUTHORIZATION : "Authorizations",
		CH_PASSWD_ADMIN : "Admin",
		TIMEZONE_OGAME_OFFSET : "Timezone offset to OGame server",
		CH_PASSWD_USER_LANGUAGE : "Change to this language after logon",
		CH_PASSWD_USER_LANGUAGE_NO_CHANGE : "No change",
		CH_PASSWD_EXPAND : "Expanded",
		CH_PASSWD_COLLAPSE : "Collapsed",
		CH_PASSWD_HIDDEN : "Hidden",
		CH_PASSWD_GETTING_STARTED : "Show Getting Started Info after logon",
		CH_PASSWD_PLUGIN : "Show Plugin Info after logon",
		NOTICE_TITLE : "OGame Galaxytool - Notices",
		NOTICE_HEADER : "edit notice",
		NOTICE_HEADER2 : "Edit own notices",
		NOTICE_PUBLIC : "Accessible for others ?",
		NOTICE_YES : "yes",
		NOTICE_NO : "no",
		NOTICE_TEXT : "Notice Text",
		NOTICE_SAVE : "Save",
		NOTICE_DELETED : "Entry deleted",
		NOTICE_SAVED : "Entry saved.",
		NOTICE_RESULTS : "All results",
		NOTICE_USER : "User",
		NOTICE_DATE : "Date",
		NOTICE_EDIT : "Edit",
		NOTICE_DELETE : "Delete",
		NOTICE_NEW : "Create an own entry",
		NOTICE_NOTPUBLIC : "Notice not public.",
		NOTICE_ALL : "all",
		NOTICE_NONE : "none",
		NOTICE_SEARCH : "Search in Notices",
		NOTICE_SEARCH_SHORT : "Search",
		NOTICE_HITS : "Hits",
		NOTICE_SHOWRESULTS : "hits per page",
		NOTICE_OF : "of",
		NOTICE_NOTHING : "No Entry found",
		NOTICE_CHARS : "Characters",
		NOTICE_PLAYERNAME : "Player",
		NOTICE_SHOWALL : "Show all notices",
		REPORTS_TITLE : "OGame Galaxytool - Espionage Reports",
		REPORTS_RESOURCES : "Resources",
		REPORTS_FLEET : "Fleets",
		REPORTS_DEFENCE : "Defence",
		REPORTS_BUILDINGS : "Buildings",
		REPORTS_TECHNOLOGY : "Research",
		REPORTS_MOON : "Moon",
		REPORTS_SEARCH : "Search in espionage reports",
		REPORTS_SEARCH_SHORT : "Search",
		REPORTS_HITS : "Hits",
		REPORTS_NOTHING : "No Entry found",
		REPORTS_ADDRESS : "Address",
		REPORTS_CURRENTNESS : "Currentness",
		REPORTS_PLAYERNAME : "Playername",
		REPORTS_ALLY : "Ally",
		REPORTS_VIEW : "view Report",
		REPORTS_SEARCH_IN : "Search in Galaxy",
		REPORTS_FROM_SYSTEM : "from System",
		REPORTS_TO : "to",
		REPORTS_DELETE : "delete",
		REPORTS_DELETED : "Entry deleted",
		REPORTS_RESULTS : "hits per page",
		REPORTS_OF : "of",
		REPORTS_DATE : "Date",
		REPORTS_DATE_0 : "never mind",
		REPORTS_DATE_1 : "older than",
		REPORTS_DATE_2 : "newer than",
		REPORTS_NOTICES : "Notices",
		REPORTS_AT_LEAST_RESOURCES : "Resources (at least)",
		REPORTS_SEARCH_EXTENDED : "extended search",
		REPORTS_FLEET_RESIS : "Fleet- score",
		REPORTS_DEFENCE_RESIS : "Defense- score",
		REPORTS_ALL_RESIS : "sum scores",
		REPORTS_TECHS : "Techs",
		REPORTS_UNKNOWN_ENTRIES : "unknown entries",
		REPORTS_PARTLY_INSERTED : "partly inserted",
		REPORTS_FOR_ALL_RES : "for all raidable resources",
		REPORTS_FOR_TF : "for the debris field",
		REPORTS_KT : "Small Cargo ships",
		REPORTS_GT : "Large Cargo ships",
		REPORTS_SS : "Battleships",
		REPORTS_REC : "Recycler",
		REPORTS_RAIDABLE : "Only raidable targets",
		REPORTS_ALL_RESOURCES : "all Resources",
		REPORTS_STUFF : "Miscellaneous",
		REPORTS_SPEEDSIM : "Simulate with Speedsim",
		REPORTS_DRAGOSIM : "Simulate with Dragosim",
		REPORTS_STATUS : "Status",
		REPORTS_ERROR : "An error occured",
		REPORTS_OWN_REPORTS : "Only my reports",
		REPORTS_UPLOAD_BY : "Report uploaded by",
		REPORTS_DEPTH : "Report depth",
		REPORTS_FLEET_SCORE : "Fleet score",
		REPORTS_DEFENCE_SCORE : "Defence score",
		REPORTS_HOURS : "hours",
		REPORTS_MAX_RESULTS_HIT : "Your query returned more than &1 hits. Only the first &1 results are show. Please adjust your search request to get less results.",
		REPORTS_OSIMULATE : "Simulate with OSimulate",
		REPORTS_SHOW_ONLY : "Show only",
		REPORTS_SHOW_PLANETS : "Planets",
		REPORTS_SHOW_MOONS : "Moons",
		REPORTS_OWNER : "Reports owned by",
		STATS_TITLE : "OGame Galaxytool - Statistics",
		STATS_TBLHEAD : "Statistics",
		STATS_RANK : "Rank",
		STATS_PLAYERNAME : "Player Name",
		STATS_ALLYNAME : "Alliance Tag",
		STATS_SCORE : "Score",
		STATS_FLEET : "Fleet",
		STATS_RESEARCH : "Research",
		STATS_MEMBERS : "Members",
		STATS_STATUS : "Status",
		STATS_NOTHING : "no Status",
		STATS_NAP : "NAP",
		STATS_ALLIED : "Allied",
		STATS_WAR : "War",
		STATS_BOYCOTT : "Boycott",
		STATS_NEUTRAL : "Neutral",
		STATS_OWN : "Own Alliance",
		STATS_WING : "Wing",
		STATS_UPDATE : "Entry from",
		STATS_PLAYERSTATS : "Player Stats",
		STATS_ALLYSTATS : "Alliance Stats",
		STATS_DELETE : "Delete entry",
		STATS_CONFIRM_DELETE : "Do you realy want to delete this entry?",
		STATS_CHANGE_PLAYER_STATUS : "Player status",
		STATS_CHANGE_ALLIANCE_STATUS : "Alliance status",
		STATS_CHANGE_ALLIANCE_STATUS_HINT : "All members of this alliance get the choosen status. Any previous status will be overwritten. You may change the status of some players afterwards.",
		STATS_UNKNOWN : "Rest",
		STATS_DETAILS : "Details for",
		STATS_PLAYERSTATUS : "Player Status",
		STATS_IGNORE_STATUS : "all",
		STATS_ACTIVE : "active",
		STATS_INACTIVE : "Inactive",
		STATS_BANNED : "banned",
		STATS_VACATION : "vacation mode",
		STATS_NOOB : "noob",
		STATS_YES : "Yes",
		STATS_NO : "Only planets with notices",
		STATS_SEARCH : "Search",
		STATS_SHOW_GRAPH : "Show details for score distribution",
		STATS_LONG_INACTIVE : "Long inactive",
		STATS_STANDARD : "Standard Points",
		STATS_MILITARY : "Military Points",
		STATS_ECONOMY : "Economy",
		STATS_HONOUR : "Honour points",
		STATS_MILITARY_BUILD : "Military build",
		STATS_MILITARY_DESTROYED : "Military destroyed",
		STATS_MILITARY_LOST : "Military lost",
		REGISTER_REGISTRATE : "Register",
		REGISTER_LOGINNAME : "Login-Name",
		REGISTER_PASSWORD : "Password",
		REGISTER_PASSWORD_CONFIRM : "Confirm Password",
		REGISTER_EMAIL : "Email",
		REGISTER_INGAME : "Ingame-Name",
		REGISTER_ALLYTAG : "Allytag",
		REGISTER_EMAILVERIFICATION : "Emailcheck",
		REGISTER_EMAILTEXT : "Please visit the following link to confirm your registration at the Galaxytool.",
		REGISTER_ERROR1 : "Login-username already used.",
		REGISTER_ERROR2 : "Error while trying to send an email. Please contact your admin.",
		REGISTER_ERROR3 : "Error while trying to send data to the database!",
		REGISTER_INFO1 : "Your account was created.",
		REGISTER_INFO2 : "Please visit the link in your email to confirm the registration.",
		REGISTER_INFO3 : "Account confirmed. Your admin needs to activate it now.",
		REGISTER_BUTTON : "Back to main page",
		REGISTER_NEW_SUBJECT : "A new user registered at the Galaxytool",
		REGISTER_NEW_MAILTEXT : "A new user registered himself.",
		REGISTER_BACK : "Back to first page",
		REGISTER_MISSING_FIELDS : "Enter all required fields",
		REGISTER_ERROR4 : "Email address is not valid.",
		REGISTER_ERROR5 : "Passwords don't match.",
		REGISTER_PWS : "Password strength",
		REGISTER_PWS0 : "very weak",
		REGISTER_PWS1 : "weak",
		REGISTER_PWS2 : "good",
		REGISTER_PWS3 : "strong",
		REGISTER_PWS4 : "very strong",
		REGISTER_EMAIL_USED : "Email Address is already used",
		LOSTPW_TITLE : "Lost my Password",
		LOSTPW_INFO2 : "A new password was generated and send to your email address.",
		LOSTPW_BUTTON1 : "get new password",
		LOSTPW_BUTTON2 : "Back to main page",
		LOSTPW_LOGINNAME : "Login-Name",
		LOSTPW_EMAIL : "Email",
		LOSTPW_ERROR1 : "Error while trying to send data to the database!",
		LOSTPW_ERROR2 : "No matching entry found!",
		LOSTPW_ERROR3 : "Error while trying to send an email. Please contact your admin.",
		LOSTPW_EMAIL_SUBJECT : "Your new password you requested",
		LOSTPW_EMAIL_TEXT1 : "Here is your new login for the Galaxytool",
		LOSTPW_EMAIL_TEXT2 : "Username",
		LOSTPW_EMAIL_TEXT3 : "Password",
		LOSTPW_INFO1 : "You will receive an email to verify your password reset request.",
		LOSTPW_CONFIRM_RESET_SUBJECT : "Lost password?",
		LOSTPW_CONFIRM_RESET_MESSAGE : "Hello,\n\nyou requested a password reset for the Galaxytool. To generate a new password, click the following link:",
		USERINFO_TITLE : "OGame Galaxytool - User information",
		USERINFO_NAMES : "All users of this tool",
		USERINFO_DETAIL : "detailled information about",
		USERINFO_ERROR1 : "No user known with this ID!",
		USERINFO_USERNAME : "Login name",
		USERINFO_INGAME : "In-game name",
		USERINFO_EMAIL : "Email",
		USERINFO_ALLYTAG : "Alliance",
		USERINFO_STYLEPATH : "Skin",
		USERINFO_STATUS : "Status",
		USERINFO_ACTIVATE : "Activate player",
		USERINFO_LOGINS : "Number of Logins",
		USERINFO_LASTLOGIN : "Last Login",
		USERINFO_DATA : "Information about entered systems",
		USERINFO_NODATA : "That user has entered no systems yet!",
		USERINFO_GALAXY : "Galaxy",
		USERINFO_SYSTEMS : "Number of Systems",
		USERINFO_IP : "IP address",
		USERINFO_LOGINTIME : "Login",
		USERINFO_NOLOGIN : "The player has never logged in.",
		USERINFO_LAST_GALAXYUPDATE : "Inserted last galaxy view",
		USERINFO_LAST_PUBLIC_NOTICE : "Last public notice",
		USERINFO_LAST_PRIVATE_NOTICE : "Last private notice",
		USERINFO_NUMBEROF_PUBLIC_NOTICE : "Number of public notices",
		USERINFO_NUMBEROF_PRIVATE_NOTICE : "Number of private notices",
		USERINFO_ACTIVATED : "Account activated",
		USERINFO_ACTIVATIONTEXT : "The Galaxytool admin has activated your account.\n\nHave fun with the Galaxytool!",
		USERINFO_LAST_SUBMIT : "Inserted last data",
		ALLYHISTORY_TITLE : "OGame Galaxytool - Alliance History",
		ALLYHISTORY_TBLHEAD : "Historical overview",
		ALLYHISTORY_PLAYERNAME : "Player Name",
		ALLYHISTORY_ALLYNAME : "Alliance",
		ALLYHISTORY_LASTMONTH : "Last month",
		ALLYHISTORY_ALL_DATA : "all data",
		ALLYHISTORY_SHOW : "show statistic",
		ALLYHISTORY_TIMESPAN : "Timespan",
		ALLYHISTORY_PROGESS : "Progress",
		ALLYHISTORY_SCORE : "Scores",
		ALLYHISTORY_FSCORE : "Fleet scores",
		ALLYHISTORY_RSCORE : "Research scores",
		ALLYHISTORY_MEMBER : "Members",
		ALLYHISTORY_NOTHING : "no entries found",
		ALLYHISTORY_DETAILS : "Details",
		ALLYHISTORY_SHOW_ADDRESS : "Coordinates",
		ALLYHISTORY_ESCORE : "Economy",
		ALLYHISTORY_MSCORE : "Military Points",
		DETAILEDINFO_PLAYERINFO_TITLE : "Player information",
		DETAILEDINFO_ALLYINFO_TITLE : "Alliance information",
		DETAILEDINFO_PLAYERINFO_TBLHEAD : "Detailed information about player",
		DETAILEDINFO_ALLYINFO_TBLHEAD : "Detailed information about alliance",
		DETAILEDINFO_NO_ALLIANCE : "none",
		DETAILEDINFO_SCORE : "Score statistic",
		DETAILEDINFO_FLEET : "Fleet statistic",
		DETAILEDINFO_RESEARCH : "Research statistic",
		DETAILEDINFO_RANK : "Rank",
		DETAILEDINFO_POINTS : "Score",
		DETAILEDINFO_KNOWN_PLANETS : "known planets",
		DETAILEDINFO_MOONS : "known moons",
		DETAILEDINFO_PHALANX_AREA : "Phalanx area",
		DETAILEDINFO_NO_PHALANX_AREA : "no Phalanx found",
		DETAILEDINFO_NOTICES : "Notices",
		DETAILEDINFO_NO_NOTICES : "No Notices found",
		DETAILEDINFO_PREVIOUS_ALLIANCES : "previous Alliances",
		DETAILEDINFO_RESOURCES_PER_HOUR : "Resources per hour",
		DETAILEDINFO_RESOURCES_PER_DAY : "Resources per day",
		DETAILEDINFO_RESOURCES_PER_WEEK : "Resources per week",
		DETAILEDINFO_RESOURCES_PER_MONTH : "Resourcen per month (30 days)",
		DETAILEDINFO_METAL : "Metal",
		DETAILEDINFO_CRYSTAL : "Crystal",
		DETAILEDINFO_DEUTERIUM : "Deuterium",
		DETAILEDINFO_UNKNOWN : "unknown",
		DETAILEDINFO_SCORE_DISTRIBUTION : "Score distribution",
		DETAILEDINFO_GENERAL : "Details",
		DETAILEDINFO_MEMBERS : "Members",
		DETAILEDINFO_GRAPHS : "Graphs",
		DETAILEDINFO_RESOURCES : "Resources",
		DETAILEDINFO_FLEET_TAB : "Fleet",
		DETAILEDINFO_TECH : "Research",
		DETAILEDINFO_FLEET_DETAIL : "Sum / (players average) among all available reports",
		DETAILEDINFO_TECH_DETAIL : "Average of all available playerinformation",
		DETAILEDINFO_PLANET_TAB : "Planets",
		DETAILEDINFO_MOON_TAB : "Moons",
		DETAILEDINFO_ACTIVITIES : "Activities",
		DETAILEDINFO_NODATA : "No data available.",
		DETAILEDINFO_ACTIVITY_DESCRIPTION : "Show activities of &1 collected from:",
		DETAILEDINFO_GALAXYVIEWS : "Galaxy views",
		DETAILEDINFO_SCANS : "Espionage actions",
		DETAILEDINFO_MESSAGES : "Player messages",
		DETAILEDINFO_COMBATS : "Combat reports",
		DETAILEDINFO_ALLYPAGE : "Alliance overview",
		DETAILEDINFO_MANUAL : "Manual insertions",
		DETAILEDINFO_START : "Beginning",
		DETAILEDINFO_TO : "to",
		DETAILEDINFO_TODAY : "Today",
		DETAILEDINFO_DATA_RESTRICTION : "restricted to:",
		DETAILEDINFO_WEEKDAY_WEEKEND : "Weekend",
		DETAILEDINFO_WEEKDAY_WORKINGDAY : "Weekday",
		DETAILEDINFO_WEEKDAY_MONDAY : "Monday",
		DETAILEDINFO_WEEKDAY_TUESDAY : "Tuesday",
		DETAILEDINFO_WEEKDAY_WEDNESDAY : "Wednesday",
		DETAILEDINFO_WEEKDAY_THURSDAY : "Thursday",
		DETAILEDINFO_WEEKDAY_FRIDAY : "Friday",
		DETAILEDINFO_WEEKDAY_SATURDAY : "Saturday",
		DETAILEDINFO_WEEKDAY_SUNDAY : "Sunday",
		DETAILEDINFO_WEEKDAY_SHORTLENGTH : 3,
		DETAILEDINFO_PLAYER_CURRENTLY_ACTIVE : "The player is currently active",
		DETAILEDINFO_PLAYER_MESSAGES : "available player messages",
		DETAILEDINFO_SHOW : "show",
		DETAILEDINFO_NONE : "none available",
		DETAILEDINFO_ENTER_MANUALLY : "Enter activities for this player",
		DETAILEDINFO_PLAYER_SEEN_ON : "Player was online on",
		DETAILEDINFO_INSERT : "Insert",
		DETAILEDINFO_OGAME_SERVERTIMES : "Please note: All dates and times refer to OGame server times !",
		DETAILEDINFO_DAY_VIEW : "24 hours view",
		DETAILEDINFO_WEEK_VIEW : "weekly view",
		DETAILEDINFO_HOME_PLANET : "Homeworld",
		DETAILEDINFO_PLANETNAME : "Name",
		DETAILEDINFO_DEFENCE_SCORE : "Defence score",
		DETAILEDINFO_DEFENCE_SCORE_TOOLTIP : "Defence score = Fleet - Score + Research + Economy.<br/>All those statistics must be up to date to have a meaningful result!",
		DETAILEDINFO_SCORE_PER_SHIP : "Scores per ship",
		DETAILEDINFO_SHIPS : "Number of ships",
		DETAILEDINFO_DATE_IN_FUTURE : "Do not maintain times which are not in the past.",
		ADMIN_TITLE : "Administration of the Galaxytool",
		ADMIN_DISCLAMER : "Attention: Run any of those scripts at your own risk! Most of them are deleting data.",
		ADMIN_INCONSISTENCIES : "Inconsistencies at the database",
		ADMIN_PLANETS : "Delete planets at position 0 or greater than 15",
		ADMIN_GALAXIES : "Delete galaxies greater than &1 ",
		ADMIN_PLAYERS : "Delete players without OGame playerid - this will remove duplicate player entries",
		ADMIN_REPORTS : "Delete reports where no planet exists anymore",
		ADMIN_MISC : "Miscellaneous",
		ADMIN_RESET : "Reset Galaxytool (only user and ip table are not deleted)",
		ADMIN_OLD_PLAYERS : "Delete player entries older than &1 days",
		ADMIN_OLD_REPORTS : "Delete reports older than &1 days",
		ADMIN_LOADING : "Do not close this window while the page is loaded.",
		ADMIN_STATUS : "Status of your requests",
		ADMIN_SELECTION : "At least one entry must be selected",
		ADMIN_SAFETY : "Are you sure that you want to run these script(s) ?",
		ADMIN_DONE : "done",
		ADMIN_NOTBD : "nothing to be done",
		ADMIN_OLD_GALAXIES : "Remove galaxy views which are older than &1 days",
		ADMIN_UNUSED_PLAYERS : "Remove players who do not occur in any galaxy view",
		ADMIN_OLD_ACTIVITIES : "Remove player activities older than &1 days",
		ADMIN_OLD_COMBATS : "Remove combat reports older than &1 days",
		ADMIN_OLD_INGAME_MSG : "Remove ingame messages older than &1 days",
		ADMIN_OGAME_API : "Load public data from OGame into the Galaxytool",
		ADMIN_OGAME_ALL_DATA : "all data",
		ADMIN_OGAME_GALAXY_DATA : "View Galaxy",
		ADMIN_OGAME_STATISTICS_DATA : "Statistics",
		ERRORPAGE_PAGEFORWARD : "Click here if your browser does not support page forwarding",
		ERRORPAGE_PERMISSION_DENIED : "You don't have the permission to enter this page. Click to go back.",
		FLEETS_TITLE : "OGame Galaxytool - Fleet movements",
		FLEETS_ACTUAL_FLEETS : "Current fleet movements",
		FLEETS_YES : "Yes",
		FLEETS_NO : "Only planets with notices",
		FLEETS_DETAILS : "Details",
		FLEETS_MISSION_EXPEDITION : "Expedition",
		FLEETS_MISSION_COLONIZATION : "Colonize",
		FLEETS_MISSION_RECYCLE : "Harvest",
		FLEETS_MISSION_TRANSPORT : "Transport",
		FLEETS_MISSION_DEPLOYMENT : "Deploy",
		FLEETS_MISSION_ESPIONAGE : "Espionage",
		FLEETS_MISSION_ACS_DEFEND : "ACS Defend",
		FLEETS_MISSION_ATTACK : "Attack",
		FLEETS_MISSION_ACS_ATTACK : "ACS Attack",
		FLEETS_MISSION_MOON_DESTRUCTION : "Moon Destruction",
		FLEETS_MISSION_MISSILE_ATTACK : "Missile Attack",
		FLEETS_NO_DATA : "No applicable data found",
		FLEETS_FLEET : "Fleet",
		FLEETS_ALL_FLEETS : "Show all fleet movements",
		COMBAT_REPORT_OUDATED_GALAXYVIEW : "Your galaxy data is outdated. Please visit combat origin and target coordinates first!",
		MESSAGES_TITLE : "OGame Galaxytool - OGame Messages",
		MESSAGES_PLAYERNAME : "Playername",
		MESSAGES_SUBJECT : "Subject",
		MESSAGES_DATE : "Date",
		MESSAGES_FILTER : "Filter",
		MESSAGES_DELETE : "Delete message",
		MESSAGES_PUBLISH_DETAIL : "Publish message by adding the message content to notice text of that player.",
		MESSAGES_PUBLISH_HEADER : "&sender sent a message to &recipient on &date:\n\n &message",
		MESSAGES_PLAYER_FILTER : "Messages for player:",
		MESSAGES_CONTENT : "Content",
		COMBATS_TITLE : "OGame Galaxytool - Combat reports",
		COMBATS_ATTACKER : "Attacker",
		COMBATS_DEFENDER : "Defender",
		COMBATS_DATE : "Date",
		COMBATS_OWNER : "Owner",
		COMBATS_WINNER : "Winner",
		COMBATS_COMBATREPORT : "Combat Report",
		COMBATS_COMBAT_AT : "Combat at",
		COMBATS_LOST_UNITS : "Lost units",
		COMBATS_LOOT : "Loot",
		COMBATS_DEBRIS : "Debris",
		COMBATS_AND : "and",
		COMBATS_PUBLISH : "Make this report public",
		COMBATS_UNPUBLISH : "Unshare this report (makes it private again)",
		COMBATS_DELETE : "Delete report",
		COMBATS_CHECK_ALL : "Check All",
		COMBATS_UNCHECK_ALL : "Uncheck All",
		COMBATS_WITH_SELECTED : "With selected",
		COMBATS_PUBLIC_REPORTS : "Public reports",
		COMBATS_YES : "Yes",
		COMBATS_NO : "Only planets with notices",
		COMBATS_SEARCH_OPTIONS : "Search options",
		COMBATS_SEARCH : "Go",
		COMBATS_RESET : "Reset",
		COMBATS_COORDINATES : "Coordinates",
		COMBATS_INVALID_GALAXY_ENTERED : "Invalid Galaxy entered",
		COMBATS_INVALID_SYSTEM_ENTERED : "Invalid System entered",
		COMBATS_INVALID_PLANET_ENTERED : "Invalid Planet entered",
		COMBATS_GALAXY_FROM_TO : "Galaxy",
		COMBATS_SYSTEM_FROM_TO : "System",
		COMBATS_PLANET_FROM_TO : "Planet",
		COMBATS_APPLY : "Apply",
		COMBATS_COMBAT_SUMMARY : "Combat report summary",
		COMBATS_DOWNLOAD_CSV : "Download as CSV file",
		REPORT_ARCHIVE_TITLE : "Report archive",
		REPORT_ARCHIVE_COORDINATES : "Coordinates",
		REPORT_ARCHIVE_SCANTIME : "Scan time",
		REPORT_ARCHIVE_DELETE : "Delete these entries",
		REPORT_ARCHIVE_CONFIRM_DELETE : "Do you really want to delete these entries?",
		REPORT_ARCHIVE_GALAXY : "Galaxy",
		REPORT_ARCHIVE_SYSTEM : "System",
		REPORT_ARCHIVE_PLANET : "Planet",
		REPORT_ARCHIVE_MOON : "Moon",
		REPORT_ARCHIVE_DETAILS : "Details",
		REPORT_ARCHIVE_RESOURCES : "Resources per hour",
		REPORT_ARCHIVE_HEADER_RESOURCES : "Resources",
		REPORT_ARCHIVE_DETAILS_FOR : "Report archive for &1 [&2] (&3)",
		REPORT_ARCHIVE_FLEET_CARGO : "Fleet cargo capacity",
		REPORT_ARCHIVE_IRAK_RANGE : "Interplanetary Missiles range",
		REPORT_ARCHIVE_CHART_TYPE : "Chart type",
		INSTALL_TITLE : "Galaxytool installation for version",
		INSTALL_PROGRESS : "Overall progress",
		INSTALL_STEP : "Step",
		INSTALL_CONTINUE : "Continue",
		INSTALL_VALIDATE : "Validate",
		INSTALL_STEP1 : "Welcome",
		INSTALL_STEP2 : "Writeable check",
		INSTALL_STEP3 : "Database settings",
		INSTALL_STEP4 : "OGame settings",
		INSTALL_STEP5 : "Galaxytool settings",
		INSTALL_STEP6 : "Admin password",
		INSTALL_STEP7 : "Install Galaxytool",
		INSTALL_STEP8 : "Finalize install",
		INSTALL_FILE_DELETE_CHECK : "Please delete install.php and update.php from your webserver.",
		INSTALL_STEP1_PHP_FAILED : "Your PHP version &1 is not working with this Galaxytool version",
		INSTALL_STEP1_FOPEN_FAILED : "Your PHP version does not allow to open webpages with FOPEN() command. This is required to consume the OGame API.",
		INSTALL_STEP1_WELCOME : "Welcome to the installation wizard of the Galaxytool. You will be guided through the installation of the Galaxytool.",
		INSTALL_STEP2_DESCRIPTION : "Make sure your config.php and attributes.php files have write permissions enabled.",
		INSTALL_STEP2_DESCRIPTION2 : "If you don't know, how to achieve this, please take a look here: &1",
		INSTALL_STEP2_FILE_NOT_WRITEABLE : "File is not writeable",
		INSTALL_STEP3_SERVER : "Database server",
		INSTALL_STEP3_USERNAME : "Username",
		INSTALL_STEP3_PASSWORD : "Password",
		INSTALL_STEP3_DBNAME : "Database name",
		INSTALL_STEP3_PREFIX : "Tablename prefix",
		INSTALL_STEP3_ENTER_PREFIX : "E.g. mytool_",
		INSTALL_STEP3_ENTER_SERVER : "Enter the server address. Contact your system admin if necessary. Usually the correct value is localhost.",
		INSTALL_STEP3_ENTER_USERNAME : "Enter the username for database access",
		INSTALL_STEP3_ENTER_PASSWORD : "Enter the password for database access",
		INSTALL_STEP3_ENTER_DBNAME : "Enter the database name which shall be used for installation (must exist)",
		INSTALL_STEP3_CONNECT_FAILED : "Could not establish connection to database server",
		INSTALL_STEP3_DB_FAILED : "Database &1 not found",
		INSTALL_STEP3_MYSQL_VERSION_FAILED : "MySQL version &1 is not working with this Galaxytool version",
		INSTALL_STEP4_URL : "OGame URL",
		OGAME_URL_DETAILS : "Please enter any URL you see when you are logged on to OGame. Based on that URL the tool will derive the OGame API address which can be used to fill data into the Galaxytool without the Galaxytoolbar. This API was introduced with OGame version 4.1.",
		INSTALL_STEP4_UNIVERSE : "OGame Universe",
		INSTALL_STEP4_DEF_TO_DEBRIS : "Defense to debris",
		INSTALL_STEP4_DEBRIS_RATE : "Debris rate",
		INSTALL_STEP4_SPEED_RATE : "Speed rate",
		INSTALL_STEP4_ENTER_UNIVERSE : "Enter your OGame universe name or number (case sensitive).",
		INSTALL_STEP4_UNIVERSE_MISSING : "You must define your universe",
		INSTALL_STEP4_ENTER_URL : "Enter your OGame universe address",
		INSTALL_STEP4_URL_MISSING : "You must define your OGame address",
		INSTALL_STEP4_URL_CHECK_FAILED : "Could not find OGame API at &1",
		INSTALL_STEP4_GETSETTINGS : "Fetch settings",
		INSTALL_STEP5_TOOLNAME : "Galaxytool name",
		INSTALL_STEP5_ENTER_TOOLNAME : "This is the name which will be shown at logon page to identify your Galaxytool",
		INSTALL_STEP5_LANGUAGE : "Default language",
		INSTALL_STEP5_EMAIL_TO : "Email To",
		INSTALL_STEP5_ENTER_EMAIL_TO : "Enter the email address where you would like to receive notifications about registrations",
		INSTALL_STEP5_EMAIL_FROM : "Email From",
		INSTALL_STEP5_ENTER_EMAIL_FROM : "This email address is shown as REPLY for all mails sent from the Galaxytool",
		INSTALL_STEP5_USE_PHPMAILER : "Use PHPMailer",
		INSTALL_STEP5_MAXSHOUTS : "Maximum number of shoutbox entries",
		INSTALL_STEP5_ENTER_USE_PHPMAILER : "Use PHPMailer if your server does not support sending emails by default",
		INSTALL_PHPMAILER_HOST : "SMPT Host",
		INSTALL_PHPMAILER_HOST_EXAMPLE : "e.g. smtp.provider.com",
		INSTALL_PHPMAILER_USER : "SMPT Username",
		INSTALL_PHPMAILER_USER_EXAMPLE : "e.g. user@provider.dcom",
		INSTALL_PHPMAILER_PASS : "SMPT password",
		INSTALL_PHPMAILER_SECURE : "Authentification method (e.g. ssl)",
		INSTALL_PHPMAILER_PORT : "SMTP Port",
		INSTALL_STEP6_INTRO : "Please define a password for the <strong>admin</strong> account which you have to use for your first logon to the Galaxytool after the installation.",
		INSTALL_STEP7_CONFIG : "Configuration file created",
		INSTALL_STEP7_CONFIG_FAILED : "Configuration file not created",
		INSTALL_STEP7_ATTRIBUTES : "Attributes file created",
		INSTALL_STEP7_ATTRIBUTES_FAILED : "Attributes file not created",
		INSTALL_STEP7_CREATED_TABLES : "Database tables created",
		INSTALL_STEP8_INTRO : "You have successfully installed the Galaxytool!",
		INSTALL_STEP8_LOAD_DATA : "Downloading OGame data ...",
		INSTALL_STEP8_LOAD_DATA_FINISHED : "Download of OGame data finished",
		INSTALL_STEP8_DELETE_FILE : "You should now delete the installation files install.php and update.php from your webserver.",
		INSTALL_STEP8_LOGON : "Please logon with the <strong>admin</strong> user and the password you defined earlier.",
		UPDATE_START : "Starting update to version &1",
		UPDATE_STEP_DONE : "Done",
		UPDATE_TITLE : "Galaxytool update for version",
		UPDATE_STEP1_WELCOME : "Welcome to the update wizard of the Galaxytool. You will be guided through the update of the Galaxytool.",
		UPDATE_STEP1_BACKUP_FILES : "As a first step, make a backup of your <strong>config</strong> folder! You will have to replace the configuration content in case of errors.",
		UPDATE_STEP1_BACKUP_DB : "Then make a <a href=\"http://www.ehow.com/how_2036600_create-database-php.html\">backup</a> of your database.",
		UPDATE_STEP1_PROCEED : "Once the backups have been done, you can proceed with your update.",
		UPDATE_STEP1 : "Welcome",
		UPDATE_STEP2 : "Galaxytool settings",
		UPDATE_STEP2_OLD_VERSION : "Previous Galaxytool version",
		UPDATE_STEP3 : "Update Galaxytool",
		UPDATE_STEP3_UPDATE_RUNNING : "Update running, please wait...",
		UPDATE_STEP4 : "Finalize Update",
		UPDATE_STEP4_INTRO : "You have successfully updated the Galaxytool!",
		UPDATE_STEP4_UPDATE_DONE : "Update steps performed.",
		UPDATE_FAILED : "Update failed.",
		GALAXYTOOL_DUMMY_TEXT : "dummy"
	}),
	"ar": true,
	"bg": true,
	"cs": true,
	"da": true,
	"de": true,
	"el": true,
	"es": true,
	"fi": true,
	"fr": true,
	"hr": true,
	"hr-ba": true,
	"hu": true,
	"it": true,
	"ja": true,
	"ko": true,
	"lt": true,
	"lv": true,
	"nb-no": true,
	"nl": true,
	"pl": true,
	"pt-br": true,
	"pt-pt": true,
	"ro": true,
	"ru": true,
	"sk": true,
	"sl": true,
	"sr": true,
	"sv": true,
	"tr": true,
	"zh": true,
	"zh-tw": true
});
