require.config({
  paths: {
    Microvent: '../lib/Microvent/Microvent',
    Promise: '../lib/promiscuous/index',
    Bacon: '../Bacon'
  },

  shim: {
    Promise: {
      exports: 'Promise'
    }
  }
});