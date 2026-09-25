import { initAchievements, initBoot, initArcade, initLevelSelect, initMascot, initPressStart } from './game';
import { initArcMarquee, initContactCurtain, initPinnedAbout, initReveal, initScrub } from './motion';
import { initContactForm, initCookieBanner, initHeader, initScrollToTop } from './ui';

initHeader();
initCookieBanner();
initScrollToTop();
initContactForm();

initReveal();
initScrub();
initArcMarquee();
initPinnedAbout();
initContactCurtain();

initBoot();
initAchievements();
initPressStart();
initMascot();
initArcade();
initLevelSelect();
