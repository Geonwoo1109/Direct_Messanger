const scriptName = "문자받기";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  try {
    replier.reply("문자받는방", sender + "\n" + msg);
  } catch(e) {}
}
