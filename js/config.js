// ignore
var Config = {};

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLengthForOneChar = 100;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png"
];

/**
 * Time for change current image to next.
 */
Config.ImagesChangeSpeed = 5000;

/**
 * Image transition speed.
 */
Config.ImagesTransitionSpeed = 2500;

/**
 * Enable debug messages?
 */
Config.enableDebug = false;

/**
 * Languages
 */
Config.Languages = {
  "en": {
    "file": "File",
    "welcome_to": "Welcome to,",
    "map": "Current map: ",
    "title": "Somewhere in terrorist town",
    "first_load": "This is your first time loading please wait for the files to download",
    "announcements": [
      "Traitors can search a corpse silently, without confirming the death, by holding LALT and pressing E on the corpse.",
      "Arming a C4 explosive with a longer timer will increase the number of wires that cause it to explode instantly when an innocent attempts to disarm it. It will also beep softer and less often.",
      "Detectives can search a corpse to find who is 'reflected in its eyes'. This is the last person the dead guy saw. That does not have to be the killer if they were shot in the back.",
      "No one will know you have died until they find your dead body and identify you by searching it.",
      "When a Traitor kills a Detective, they instantly receive a credit reward.",
      "When a Traitor dies, all Detectives are rewarded equipment credits.",
      "When the Traitors have made significant progress in killing innocents, they will receive an equipment credit as reward.",
      "Traitors and Detectives can collect unspent equipment credits from the dead bodies of other Traitors and Detectives.",
      "The Poltergeist can turn any physics object into a deadly projectile. Each punch is accompanied by a blast of energy hurting anyone nearby.",
      "As Traitor or Detective, keep an eye on red messages in the top right. These will be important for you.",
      "As Traitor or Detective, keep in mind you are rewarded extra equipment credits if you and your comrades perform well. Make sure you remember to spend them!",
      "The Detectives' DNA Scanner can be used to gather DNA samples from weapons and items and then scan to find the location of the player who used them.",
      "Useful when you can get a sample from a corpse or a disarmed C4!",
      "When you are close to someone you kill, some of your DNA is left on the corpse. This DNA can be used with a Detective's DNA Scanner to find your current location.",
      "Better hide the body after you knife someone!",
      "The further you are away from someone you kill, the faster your DNA sample on their body will decay.",
      "Are you Traitor and going sniping? Consider trying out the Disguiser. If you miss a shot, run away to a safe spot, disable the Disguiser, and no one will know it was you who was shooting at them.",
      "As Traitor, the Teleporter can help you escape when chased, and allows you to quickly travel across a big map. Make sure you always have a safe position marked.",
      "Are the innocents all grouped up and hard to pick off? Consider trying out the Radio to play sounds of C4 or a firefight to lead some of them away.",
      "Using the Radio as Traitor, you can play sounds through your Equipment Menu after the radio has been placed. Queue up multiple sounds by clicking multiple buttons in the order you want them.",
      "As Detective, if you have leftover credits you could give a trusted Innocent a Defuser. Then you can spend your time doing the serious investigative work and leave the risky bomb defusal to them.",
      "The Detectives' Binoculars allow long-range searching and identifying of corpses. Bad news if the Traitors were hoping to use a corpse as bait.",
      "Of course, while using the Binoculars a Detective is unarmed and distracted...",
      "The Detectives' Health Station lets wounded players recover. Of course, those wounded people could be Traitors...",
      "The Health Station records a DNA sample of everyone who uses it. Detectives can use this with the DNA Scanner to find out who has been healing up.",
      "Unlike weapons and C4, the Radio equipment for Traitors does not contain a DNA sample of the person who planted it. Don't worry about Detectives finding it and blowing your cover.",
      "Press F1 to view a short tutorial or modify some TTT-specific settings. For example, you can permanently disable these tips there.",
      "When a Detective searches a body, the result is available to all players via the scoreboard by clicking on the name of the dead person.",
      "In the scoreboard, a magnifying glass icon next to someone's name indicates you have search information about that person.",
      "If the icon is bright, the data comes from a Detective and may contain additional information.",
      "As Detective, corpses with a magnifying glass after the nickname have been searched by a Detective and their results are available to all players via the scoreboard.",
      "Spectators can press F2 to cycle through muting other spectators or living players.",
      "If the server has installed additional languages, you can switch to a different language at any time in the Settings menu.",
      "Quickchat or 'radio' commands can be used by pressing B.",
      "As Spectator, press LCTRL to unlock your mouse cursor and click the buttons on this tips panel. Press LCTRL again to go back to mouseview.",
      "The Crowbar's secondary fire will push other players.",
      "Firing through the ironsights of a weapon will slightly increase your accuracy and decrease recoil. Crouching does not.",
      "Smoke grenades are effective indoors, especially for creating confusion in crowded rooms.",
      "As Traitor, remember you can carry dead bodies and hide them from the prying eyes of the innocent and their Detectives.",
      "The tutorial available under F1 contains an overview of the most important keys of the game.",
      "On the scoreboard, click the name of a living player and you can select a tag for them such as 'suspect' or 'friend'. This tag will show up if you have them under your crosshair.",
      "Many of the placeable equipment items (such as C4, Radio) can be stuck on walls using secondary fire.",
      "C4 that explodes due to a mistake in disarming it has a smaller explosion than C4 that reaches zero on its timer.",
      "If it says 'HASTE MODE' above the round timer, the round will at first be only a few minutes long, but with every death the available time increases (like capturing a point in TF2).",
      "This mode puts the pressure on the traitors to keep things moving."      
    ]
  },
  "ru": {
    "file": "Файл",
    "welcome_to": "Добро пожаловать",
    "map": "Текущая карта: ",
    "title": "Где-то в городе террористов",
    "first_load": "Это ваша первая загрузка, пожалуйста, дождитесь загрузки файлов",
    "announcements": [
      "Зажав LALT и нажав E, можно скрытно осмотреть тело, не подтверждая смерть игрока.",
      "Закладка С4 на большее количество времени увеличит количество проводов, которые вызовут взрыв, а также сделает пиканье более тихим и редким.",
      "Детективы могут осмотреть тело, чтобы узнать кто отразился в глазах жертвы.",
      "Это будет последний человек, которого видела жертва, но это не значит, что он убийца, так как жертва могла быть убита со спины.",
      "Никто не будет знать, что вы умерли, пока ваше тело не найдут и не опознают.",
      "Когда предатель убивает детектива, он сразу получает награду.",
      "Когда умирает предатель, все детективы получают награду.",
      "Когда предатели достигают значительных успехов в убийстве невиновных, они получают игровые кредиты в качестве награды.",
      "Предатели и детективы могут получить неиспользованные кредиты с тел других предателей и детективов.",
      "Полтергейст может превратить любой физический объект в смертоносный снаряд. Каждый толчок сопровождается энергетическим взрывом, наносящим урон всем поблизости.",
      "Будучи предателем или детективом, обращайте внимание на красные сообщения в правом верхнем углу. Они содержат важную информацию.",
      "Будучи предателем или детективом, помните, что вы получаете кредиты, если вы и ваши товарищи хорошо выполняете поставленную задачу. Также не забывайте их тратить!",
      "Сканер ДНК может быть использован для сбора образцов ДНК с оружия или предметов, а затем для нахождения местоположения владельца образца.",
      "Когда вы близко к тому, кого убиваете, часть вашей ДНК остаётся на теле. Эта ДНК может быть использована с помощью Сканера ДНК, чтобы найти ваше местоположение.",
      "Лучше спрятать тело человека после того, как вы его зарезали!",
      "Чем дальше вы от того, кого убьёте, тем быстрее разложиться образец вашего ДНК на его теле.",
      "Вы предатель и собираетесь быть снайпером? Попробуйте Маскировку.",
      "Если промажете, убегите в безопасное место, выключите Маскировку и никто не будет знать, что именно вы стреляли в них.",
      "Будучи предателем, Телепорт может помочь вам убежать от преследователей или быстро переместиться на большой карте.",
      "Всегда отмечайте безопасное место для телепортации.",
      "Все невиновные сгруппированы и их трудно разъединить? Попробуйте отвлечь некоторых из них звуками перестрелки или пиканьем С4 при помощи Радио.",
      "Будучи предателем, вы можете воспроизводить звуки через меню снаряжения после помещения Радио. Можно создать очередь из звуков, нажав на них в желаемом порядке.",
      "Будучи детективом, если у вас есть кредиты, вы можете купить и отдать доверенному невиновному Набор сапёра.",
      "Так, вы сможете заняться серьёзной следственной работой, а он займётся обезвреживанием бомбы.",
      "Бинокль позволяет осматривать и опознавать тела с дальнего расстояния. Плохая новость для предателей, если они надеялись использовать тело как приманку.",
      "Конечно, во время использования Бинокля вы безоружны и отвлеченны.",
      "Лечебная станция позволяет раненым игрокам восстановить здоровье. Конечно, этими игроками могут быть и предатели.",
      "Лечебная станция собирает образцы ДНК всех, кто ей пользовался. Детективы могут использовать образцы с помощью Сканера ДНК, чтобы найти тех, кто ей пользовался.",
      "В отличие от оружия и С4, Радио не содержит образец ДНК поставившего его человека. Не волнуйтесь о возможном раскрытии при нахождении Радио детективами.",
      "Нажмите F1, чтобы просмотреть краткое руководство или изменить некоторые настройки ТТТ. К примеру, вы можете выключить эти советы.",
      "Когда детектив осматривает тело, результаты осмотра доступны всем игрокам через таблицу счёта, нажав на имя мёртвого человека.",
      "В таблице счёта значок лупы возле чьего-либо имени означает, что у вас есть результаты осмотра тела этого человека.",
      "Если значок яркий, результаты получены от детектива и могут содержать дополнительную информацию.",
      "Тела со значком лупы после имени были осмотрены детективом, а результаты осмотра доступны всем игрокам через таблицу счёта.",
      "Наблюдатели могут нажать F2, чтобы заглушить других наблюдателей, живых игроков или всех.",
      "Если на сервере установлены дополнительные языки, вы можете переключиться на другой в любое время через меню настроек.",
      "Использовать быстрые сообщения можно нажатием B.",
      "Будучи наблюдателем, нажмите кнопку присяди, чтобы включить курсор и нажать на кнопки на этой панели. Присядьте ещё раз, чтобы выключить курсор.",
      "Дополнительная атака монтировки толкает игроков.",
      "Стрельба при прицеливании слегка увеличивает точность и уменьшает отдачу, в отличие от стрельбы вприсядку.",
      "Дымовые гранаты эффективны в помещениях, особенно для создания путаницы в переполненных комнатах.",
      "Будучи предателем, помните, что вы можете прятать тела от назойливых глаз невиновных и их детективов.",
      "Руководство, доступное по нажатию F1, содержит информацию о самых важных особенностях игры.",
      "В таблице счёта вы можете нажать на имя живого игрока и присвоить ему такие теги, как «подозреваемый» или «друг».",
      "Этот тег отобразится под вашим прицелом, если вы наведётесь на игрока.",
      "Многое размещаемое снаряжение, такое как С4 или Радио, может быть прикреплено на стены клавишей дополнительной атаки.",
      "С4, взорвавшаяся при неудачной попытке обезвреживания, имеет меньший радиус взрыва, чем С4, взорвавшаяся по истечению таймера.",
      "Если над таймером написано «Режим спешки», раунд сначала будет длиться лишь несколько минут, но с каждой смертью время увеличивается.",
      "Этот режим оказывает давление на предателей, что заставляет их действовать."
    ]
  }
}