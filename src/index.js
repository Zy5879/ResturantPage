import { createNav, createUl } from "./modules/home";

const content = document.getElementById('content');
content.append(createNav(),createUl());