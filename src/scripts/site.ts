import { initAchievements, initArcade, initBoot, initDialog, initInventory, initLevelSelect, initMascot, initPressStart } from './game';
import { initReveal, initScrub } from './motion';
import { initContactForm, initCookieBanner, initHeader, initScrollToTop } from './ui';

initHeader();
initCookieBanner();
initScrollToTop();
initContactForm();

initReveal();
initScrub();

initBoot();
initAchievements();
initPressStart();
initMascot();
initArcade();
initLevelSelect();
initInventory();
initDialog();
