import '../scss/styles.scss'

import {Tooltip, Toast, Popover} from "bootstrap";

import Alert from 'bootstrap/js/dist/alert';
// Tree-shaking Example
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import heroImg from '../img/img2.jpg';

const heroI = document.createElement('img');
heroI.src = heroImg;
document.getElementById('HeroImg').appendChild(heroI);