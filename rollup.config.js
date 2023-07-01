const banner = `// Sortr Copyright (c) 2023 Joshua Ajagbe and Annabel Nnawuihe`;
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
      preferConst: true,
      banner,
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
      exports: 'named',
      banner,
    },
  ],
};
