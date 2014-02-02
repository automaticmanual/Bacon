require.config({
  paths: {
    Microvent: '../lib/Microvent/Microvent',
    Promise: '../lib/promiscuous/index'
  },

  shim: {
    Promise: {
      exports: 'Promise'
    }
  }
});