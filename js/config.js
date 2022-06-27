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
Config.announcementLength = 3000;

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
      "Welcome!",
      "Realy close"
    ]
  },
  "ru": {
    "file": "Файл",
    "welcome_to": "Добро пожаловать",
    "map": "Текущая карта: ",
    "title": "Где-то в городе террористов",
    "first_load": "Это ваша первая загрузка, пожалуйста, дождитесь загрузки файлов",
    "announcements": [
      "Добро пожаловать!",
      "Действительно близко"
    ]
  }
}