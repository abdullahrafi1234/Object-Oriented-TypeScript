// Abstraction, the 3rd pillar of OOP

// idea
// implementation pore korbo

/**
 * 1. interface
 * 2. abstract class
 */

// idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log(`Playing Music....`);
//   }
//   pause() {
//     console.log(`Music paused...`);
//   }
//   stop() {
//     console.log(`Music stooped ....`);
//   }
// }

// const myPlayer1 = new MusicPlayer();
// myPlayer1.play();
// // myPlayer1.stop();

// abstract class idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// abstract class theke kokhono instance create kora jayna

// Implementation
class RafisPlayer extends MediaPlayer {
  play(): void {
    console.log(`Music playing..`);
  }
  pause(): void {
    console.log(`Music Paused`);
  }
  stop(): void {
    console.log(`Music stooped`);
  }
}

const myPlayer1 = new RafisPlayer();

myPlayer1.play();
