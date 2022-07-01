"use sctrict";

var isGmod = false;
var isTest = false;
var totalFiles = 50;
var totalCalled = false;
var downloadingFileCalled = false;
var percentage = 0;

var Lang = "en";
var Pharases = Config.Languages[ Lang ];
var Announcements = Pharases.announcements;

/**
 * Gmod Called functions
 */
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
  Lang = language;
  debug("GameDetails called");
  isGmod = true;
  if (!isTest) {
    loadAll();
  }

  var newPhrases = Config.Languages[ Lang ];
  if (newPhrases){
    Pharases = newPhrases;
    Announcements = newPhrases.announcements;
  }

  document.title = Pharases.title;

  $("#title").html(servername);
  $("#title").fadeIn();

  $(".welcome").html( Pharases.welcome_to );

  var transition_speed = Config.ImagesTransitionSpeed / 1000;
  $(".background").css( "-webkit-transition", 'all ' + transition_speed + 's ease-in-out' );
  $(".background").css( "-moz-transition", 'all ' + transition_speed + 's ease-in-out' );
  $(".background").css( "transition", 'all ' + transition_speed + 's ease-in-out' );

  if (Config.enableMap) {
    $("#map").html( Pharases.map + mapname );
    $("#map").fadeIn();
  } else {
    $("#map").hide();
  }

  if (Config.enableSteamID) {
    $("#steamid").html(steamid);
  }

  $("#steamid").fadeIn();
}

function SetFilesTotal(total) {
  debug("SetFilesTotal called total: " + total);
  totalCalled = true;
  totalFiles = total;
}

function SetFilesNeeded(needed) {
  debug("SetFilesNeeded called needed: " + needed);
  if (totalCalled) {
    var sPercentage = 100 - Math.round((needed / totalFiles) * 100);
    percentage = sPercentage;
    setLoad(sPercentage);
  }
}

var fileCount = 0;
function DownloadingFile(filename) {
  filename = filename.replace("'", "").replace("?", "");
  debug("DownloadingFile called '" + filename + "'");
  downloadingFileCalled = true;
  $("#history").prepend('<div class="history-item">' + filename + "</div>");
  $(".history-item").each(function(i, el) {
    if (i > 10) {
      $(el).remove();
    }
    $(el).css("opacity", "" + 1 - i * 0.1);
  });
}

var allow_increment = true;
function SetStatusChanged(status) {
  debug("SetStatusChanged called '" + status + "'");
  $("#history").prepend('<div class="history-item">' + status + "</div>");
  $(".history-item").each(function(i, el) {
    if (i > 10) {
      $(el).remove();
    }
    $(el).css("opacity", "" + 1 - i * 0.1);
  });
  if (status === "Workshop Complete") {
    allow_increment = false;
    setLoad(80);
  } else if (status === "Client info sent!") {
    allow_increment = false;
    setLoad(95);
  } else if (status === "Starting Lua...") {
    setLoad(100);
  } else {
    if (allow_increment) {
      percentage = percentage + 0.1;
      setLoad(percentage);
    }
  }
}

/**
 * External Functions
 */
function loadAll() {
  $("nav").fadeIn();
  $("main").fadeIn();

  // first time loading if DownloadingFile isn't called after some time
  setTimeout(function() {
    debug("Checking if first time loading.. " + downloadingFileCalled);
    if (downloadingFileCalled) {
      announce( Pharases.first_load );
    }
  }, 10000);
}

{
  var current_image = 1;
  var len = Config.backgroundImage.length;
  function nextImage() {
    current_image++;
    if (current_image >= len)
      current_image = 0;

    return Config.backgroundImage[ current_image ];
  }
}

function loadBackground() {
  if (Config.backgroundImage) {
    $(".background").css( "background-image", 'url("images/' + nextImage() + '")' );
  }

  setTimeout( loadBackground, Config.ImagesChangeSpeed )
}
function setLoad(percentage) {
  debug(percentage + "%");
  $(".overhaul").css("left", percentage + "%");
}
var permanent = false;
function announce(message, ispermanent) {
  if (Config.enableAnnouncements && !permanent) {
    $("#announcement").hide();
    $("#announcement").html(message);
    $("#announcement").fadeIn();
  }

  if (ispermanent) {
    permanent = true;
  }
}

function debug(message) {
  if (Config.enableDebug) {
    console.log(message);
    $("#debug").prepend(message + "<br>");
  }
}

var announce_num = 0;
function next_announce() {
  var text = Announcements[ announce_num ];
  announce( text );

  announce_num++;
  if (announce_num >= Announcements.length) {
    announce_num = 0;
  }

  setTimeout( function() {
    next_announce();
  }, Config.announcementLengthForOneChar * text.length )
}

/**
 * Initial function
 */
$(document).ready(function() {
  // load everything in when ready
  loadBackground();

  // print announcement messages every few seconds
  if (Announcements && Config.enableAnnouncements && Config.announcementLengthForOneChar) {
    if (Announcements.length > 0) {
      next_announce();
    }
  }

  // if it isn't loaded by gmod load manually
  setTimeout(function() {
    if (!isGmod) {
      debug("No Garry's mod testing..");
      isTest = true;
      loadAll();

      GameDetails(
        "Servername",
        "Serverurl",
        "Mapname",
        "Maxplayers",
        "SteamID",
        "Gamemode",
        1,
        "ru"
      );

      var totalTestFiles = 100;
      SetFilesTotal(totalTestFiles);

      var needed = totalTestFiles;
      setInterval(function() {
        if (needed > 0) {
          needed = needed - 1;
          SetFilesNeeded(needed);
          DownloadingFile( Pharases.file + " " + needed);
        }
      }, 500);

      SetStatusChanged("Testing..");
    }
  }, 1000);
});
