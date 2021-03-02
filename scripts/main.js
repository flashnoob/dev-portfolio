// Animations
import AOS from 'aos';
import Darkmode from 'darkmode-js';

import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000,
  once:true
});

// Add your javascript here

 
const options = {
  bottom: '10px', // default: '32px'
  right:'10px',
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies:true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
new Darkmode(options).showWidget();