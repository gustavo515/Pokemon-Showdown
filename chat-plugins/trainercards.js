// Trainer Cards for Ultimate

exports.commands = {
   /*********************************************************
    * Trainer Cards Section
    *********************************************************/

  Evil: 'evil',
  evil: function(target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center> <img src = "http://31.media.tumblr.com/0a946c2ad0fa96d1e4f4fa2645d07f32/tumblr_inline_ncfjnmEKDL1s8lqzb.gif"> <br> <font size="4"><b><i><font color="#9C0D0D">Evil-kun</i><br></font><b> <blink> Ace: Dis is an ivol zing </blink></b><br><b>Elmo sabe donde vives...</b></center>')
  },

    /*********************************************************
     * Commands Section
     *********************************************************/

  gai: function(room, user, cmd) {
      return this.parse('/pm The Bleeding, http://data7.lustich.de/bilder/l/30292-selfmade-scheisse.jpg');
  },
  
  jara: function(target, room, user) {
      if (!this.canBroadcast()) return;
      this.sendReplyBox('<center>Lost Seso: A que chica de ps os zumbabais</center><b><big><big><big><marquee><blink>%LloydJara: Irene *Shot*</blink></marquee></big></big></big></b>');
  },

};
