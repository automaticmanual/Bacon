require.config({
  paths: {
    Microvent: '../lib/Microvent/Microvent',
    Promiz: '../lib/promiz/promiz',
    Bacon: '../Bacon'
  },

  shim: {
    Promiz: {
      exports: 'Promiz'
    }
  }
});