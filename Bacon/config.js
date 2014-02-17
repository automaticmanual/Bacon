require.config({
  paths: {
    Microvent: '../lib/Microvent/Microvent',
    Gizmo: '../lib/Gizmo/Gizmo',
    Promiz: '../lib/promiz/promiz',
    Bacon: '../Bacon'
  },

  shim: {
    Promiz: {
      exports: 'Promiz'
    }
  }
});