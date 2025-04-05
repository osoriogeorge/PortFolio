document.addEventListener('DOMContentLoaded', function() {
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const navItems = document.querySelectorAll('.nav-links a');

  
  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navItems.forEach(item => item.classList.remove('focus'));
  }

  
  function handleLinkFocus(e) {
    e.currentTarget.classList.add('focus');
    e.currentTarget.setAttribute('data-focused', 'true');
  }

  function handleLinkBlur(e) {
    e.currentTarget.classList.remove('focus');
    e.currentTarget.removeAttribute('data-focused');
  }

 
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  
  navItems.forEach(item => {
    
    item.addEventListener('click', closeMenu);
    
    
    item.addEventListener('focus', handleLinkFocus);
    item.addEventListener('blur', handleLinkBlur);
  });

  
  document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  
  window.addEventListener('scroll', function() {
    if (navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
});