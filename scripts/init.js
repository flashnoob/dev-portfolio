import Darkmode from 'darkmode-js';


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