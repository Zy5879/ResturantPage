import { createNav, createImg, catchToggle, navOptions} from "./modules/home";
import './style.css';

const content = document.getElementById('content');
content.append(createNav(), createImg(),navOptions())
catchToggle();