import { io } from "socket.io-client";

export default class LoaderScene extends Phaser.Scene {
  public preload() {

    try{
        var socket = io("http://localhost:3010");

        socket.emit('get_shop_weapon_list', "");

        socket.on('output_weapon_shop', function(msg) {
          console.log("msg", msg)
        });

    }catch(e){
        console.log(e)
    }

    this.load.tilemapTiledJSON("tilemap", "./assets/tilemaps/tilemap.json");
    this.load.image("tiles", "./assets/images/tiles.png");
    this.load.audio("jump", "./assets/audio/jump.mp3");
    this.load.spritesheet("player", "./assets/images/player.png", {
      frameWidth: 16,
      frameHeight: 32,
    });
  }

  public create() {
    this.scene.start("game");
  }
}
