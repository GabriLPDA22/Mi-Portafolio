import { initAchievements, initBoot, initKonami, initMascot, initPressStart } from './game';
import { initArcMarquee, initContactCurtain, initPinnedAbout, initProjectsStack, initReveal, initScrub } from './motion';
import { initContactForm, initCookieBanner, initHeader, initScrollToTop } from './ui';

initHeader();
initCookieBanner();
initScrollToTop();
initContactForm();

initReveal();
initScrub();
initArcMarquee();
initPinnedAbout();
initProjectsStack();
initContactCurtain();

initBoot();
initAchievements();
initPressStart();
initMascot();
initKonami();
