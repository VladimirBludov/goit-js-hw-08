import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);

const savedTime = localStorage.getItem('videoplayer-current-time')
  ? JSON.parse(localStorage.getItem('videoplayer-current-time'))
  : 0;

player.setCurrentTime(savedTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
}
