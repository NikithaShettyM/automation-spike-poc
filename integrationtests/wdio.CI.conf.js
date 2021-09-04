const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [
  {
    browserName: 'chrome',
    maxInstances: 1,
    'goog:chromeOptions': {
      args: [
        '--headless',
        '--disable-infobars',
        '--window-size=1280,800',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--allow-insecure-localhost',
      ],
    },
  },
];

exports.config = wdioConfig.config;
