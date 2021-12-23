import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);
const STORAGE_KEY_TIME = 'videoplayer-current-time';

const savedTime = localStorage.getItem(STORAGE_KEY_TIME)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY_TIME))
  : 0;

player.setCurrentTime(savedTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem(STORAGE_KEY_TIME, JSON.stringify(evt.seconds));
}
