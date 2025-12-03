import { gsap } from 'gsap';

// Section information mapping
const sectionMap: {[key: string]: {name: string, subtitle: string}} = {
  'home': { name: 'Home', subtitle: 'Welcome to NIA Construction' },
  'about': { name: 'About Us', subtitle: 'Building Excellence Since 2009' },
  'services': { name: 'Services', subtitle: 'Professional Construction Solutions' },
  'projects': { name: 'Projects', subtitle: 'Our Latest Work' },
  'contact': { name: 'Contact', subtitle: 'Get In Touch With Us' }
};

// Create curtain overlay for transitions
export const createCurtainOverlay = () => {
  if (document.querySelector('.curtain-overlay')) return;

  const curtainOverlay = document.createElement('div');
  curtainOverlay.className = 'curtain-overlay';
  curtainOverlay.innerHTML = `
    <div class="curtain-panel curtain-left"></div>
    <div class="curtain-panel curtain-right"></div>
    <div class="curtain-content">
      <div class="curtain-logo">
        <h2>NIA Construction</h2>
      </div>
      <div class="curtain-section-name">
        <h1 class="section-title"></h1>
        <div class="section-subtitle"></div>
      </div>
      <div class="curtain-loader">
        <div class="loader-bar"></div>
      </div>
    </div>
  `;
  document.body.appendChild(curtainOverlay);

  // Initial state
  gsap.set('.curtain-overlay', { display: 'none', zIndex: 9999 });
  gsap.set('.curtain-left', { x: '-100%' });
  gsap.set('.curtain-right', { x: '100%' });
  gsap.set('.curtain-content', { opacity: 0, scale: 0.9 });
};

// Play curtain transition animation
export const playCurtainTransition = (sectionName: string, sectionSubtitle: string = '') => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({
      onComplete: () => resolve(true)
    });

    // Show overlay
    tl.set('.curtain-overlay', { display: 'flex' })
      // Curtains close from sides
      .to(['.curtain-left', '.curtain-right'], {
        x: '0%',
        duration: 0.6,
        ease: 'power2.inOut'
      })
      // Content appears
      .to('.curtain-content', {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.3')
      // Update section name
      .call(() => {
        const titleEl = document.querySelector('.section-title') as HTMLElement;
        const subtitleEl = document.querySelector('.section-subtitle') as HTMLElement;
        if (titleEl) titleEl.textContent = sectionName;
        if (subtitleEl) subtitleEl.textContent = sectionSubtitle;
      })
      // Loader animation
      .fromTo('.loader-bar', {
        width: '0%'
      }, {
        width: '100%',
        duration: 0.8,
        ease: 'power2.out'
      })
      // Hold for a moment
      .to({}, { duration: 0.2 })
      // Content fades out
      .to('.curtain-content', {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: 'power2.in'
      })
      // Curtains open to sides
      .to(['.curtain-left', '.curtain-right'], {
        x: function(index) { return index === 0 ? '-100%' : '100%'; },
        duration: 0.6,
        ease: 'power2.inOut'
      }, '-=0.1')
      // Hide overlay
      .set('.curtain-overlay', { display: 'none' });
  });
};

// Navigate to section with curtain animation
export const navigateWithCurtain = async (sectionId: string) => {
  const sectionInfo = sectionMap[sectionId] || { name: sectionId, subtitle: '' };
  
  // Play curtain animation
  await playCurtainTransition(sectionInfo.name, sectionInfo.subtitle);
  
  // Navigate to section
  const element = document.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Initialize the curtain system
export const initializePageAnimations = async () => {
  if (typeof window === 'undefined') return;
  
  // Create curtain overlay
  createCurtainOverlay();
  
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    console.log('Curtain transition system initialized');
  }, 100);
};