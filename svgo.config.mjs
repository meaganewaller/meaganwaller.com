export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIDs: false,
          removeUselessDefs: false,
          removesUnknownsAndDefaults: {
            keepDataAttrs: false,
          },
        },
      },
    },
  ],
};
