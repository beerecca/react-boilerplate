module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      {pattern: 'src/**/*.test.js', ignore: true}
    ],

    tests: [
      'src/**/*.test.js'
    ],

    bootstrap: function(wallaby) {
      wallaby.testFramework.configure({
        //Stub any imported non-tested files
        'moduleNameMapper': {
          '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require('path').join(wallaby.localProjectDir, 'src', 'mocks', 'file-mock.js'),
          '\\.(css|less|scss)$': require('path').join(wallaby.localProjectDir, 'src', 'mocks', 'style-mock.js')
        }
      })
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        presets: [
          'es2015',
          'react',
        ],
        plugins: [
          'transform-runtime',
          'transform-decorators-legacy',
          'transform-class-properties',
          'transform-object-rest-spread'
        ],
      })
    },

    testFramework: 'jest'
  };
};
