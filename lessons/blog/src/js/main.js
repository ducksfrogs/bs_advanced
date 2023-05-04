import '../scss/styles.scss'
import {Tooltip, Toast, Popover} from "bootstrap";
import Alert from 'bootstrap/js/dist/alert';

import img1 from '../img/img1_half.jpg';
import img2 from '../img/img2.jpg';
import loopI from '../img/img4.jpg';


const testImg = document.createElement('img');
testImg.classList.add('card-img-top');
testImg.src = img1;
document.getElementsById('card').appendChild(testImg);

const loopImg = new Image(); 
loopImg.src = loopI;
document.getElementById('unsp').appendChild(loopImg);

const test1Img = document.createElement('img');
test1Img.src = img2;
document.getElementById("momo").appendChild(test1Img);