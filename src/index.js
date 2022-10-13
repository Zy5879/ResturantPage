import { createNav } from "./modules/home";
import './style.css';

const content = document.getElementById('content');
content.appendChild(createNav());