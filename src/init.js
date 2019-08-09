
import '../styles/style.less';
import { controller } from './controller/controller.js';
console.log('loaded function init()');
function init() {
    console.log('loaded first init')
    controller.init();
};
init();