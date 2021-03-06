 <?php
 
 @include_once "english_probes.inc.php";

$moon_name = "Луна";
$report_when = "на";

$top_array = array(
"Ресурси на" => R_RESOURCES,
"Флоти" => F_FLEET,
"Защита" => D_DEFENCE,
"Сгради" => B_BUILDINGS,
"Проучване" => RS_RESEARCH
);

$probe_array = array(
/*********************************************************************/
/***************************  Resources  *****************************/
/*********************************************************************/
"Метал" => R_METAL,
"Кристали" => R_CRYSTAL,
"Деутериум" => R_DEUTERIUM,
"Енергия" => R_ENERGY,

/*********************************************************************/
/*****************************  Fleet   ******************************/
/*********************************************************************/
"Малък Транспортьор" => F_SMALLCARGOSHIP,
"Голям Транспортьор" => F_LARGECARGOSHIP,
"Лек Изтребител" => F_LIGHFIGHTER,
"Тежък Изтребител" => F_HEAVYFIGHTER,
"Кръстосвач" => F_CRUISER,
"Боен Кораб" => F_BATTLESHIP,
"Колонизатор" => F_COLONYSHIP,
"Рециклатор" => F_RECYCLER,
"Шпионска сонда" => F_ESPIONAGEPROBE,
"Бомбардировач" => F_BOMBER,
"Унищожител" => F_DESTROYER,
"Звезда на смъртта" => F_DEATHSTAR,
"Боен Кръстосвач" => F_BATTLECRUISER,
"Соларен сателит" => F_SOLARSATELLITE,

/*********************************************************************/
/**************************  Defense  ********************************/
/*********************************************************************/
"Ракетна установка" => D_MISSILELAUNCHER,
"Лек лазер" => D_SMALLLASER,
"Тежък лазер" => D_HEAVYLASER,
"Йонно оръдие" => D_IONCANNON,
"Гаус оръдие" => D_GAUSSCANNON,
"Плазмено оръдие" => D_PLASMACANNON,
"Малък щит" => D_SMALLSHIELDDOME,
"Голям щит" => D_LARGESHILDDOME,
"Анти-балистични ракети" => D_ANTIBALLISTICMISSILE,
"Междупланетарни ракети" => D_INTERPLANETARYMISSILE,

/*********************************************************************/
/*****************************  Buildings  ***************************/
/*********************************************************************/
"Мина за метал" => B_METALMINE,
"Мина за Кристал" => B_CRYSTALMINE,
"Синтезатор за Деутериум" => B_DEUTERIUMSYNTHESIZER,
"Соларен панел" => B_SOLARPLANT,
"Ядрен Реактор" => B_FUSIONPLANT,
"Фабрика за роботи" => B_ROBOTFACTORY,
"Фабрика за наноботи" => B_NANITEFACTORY,
"Докове" => B_SHIPYARD,
"Склад за метал" => B_METALSTORAGE,
"Склад за кристали" => B_CRYSTALSTORAGE,
"Резервоар за деутериум" => B_DEUTERIUMTANK,
"Изследователска лаборатория" => B_RESAERCHLAB,
"Тераформер" => B_TERRAFORMER,
"Склад на съюза" => B_ALLIANCEDEPOT,
"Ракетен силоз" => B_ROCKETSILO,
"Лунна база" => B_LUNARBASE,
"Лунен сензор" => B_SENSORPHALANX,
"Портал" => B_JUMPGATE,

/*********************************************************************/
/*****************************  Research   ***************************/
/*********************************************************************/
"Технология за Шпионаж" => RS_ESPIONAGE,
"Компютърна технология" => RS_COMPUTER,
"Оръжейна технология" => RS_WEAPON,
"Технология за щитовете" => RS_SHIELDING,
"Технология за Броня" => RS_ARMOUR,
"Енергийна технология" => RS_ENERGY,
"Хипер Технология" => RS_HYPERSPACE,
"Реактивен Двигател" => RS_COMBUSTIONENGINE,
"Импулсен Двигател" => RS_IMPULSEENGINE,
"Хипер Двигател" => RS_HYPERSPACEENGINE,
"Лазерни технологии" => RS_LASER,
"Йонова Технология" => RS_ION,
"Плазмена Технология" => RS_PLASMA,
"Интергалактическа Проучвателна Мрежа" => RS_IRNETWORK,
"Астрофизика" => RS_EXPEDITION,
"Гравитационни Технологии" => RS_GRAVITON
);

?>