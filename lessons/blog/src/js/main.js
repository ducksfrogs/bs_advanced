import '../scss/styles.scss'
import {Tooltip, Toast, Popover} from "bootstrap";
import Alert from 'bootstrap/js/dist/alert';

import img1 from '../img/img1_half.jpg';
// import img2 from '../img/img2.jpg';


const testImg = document.createElement('img');
testImg.classList.add('card-img-top');
testImg.src = img1;
document.getElementById('card').appendChild(testImg);

