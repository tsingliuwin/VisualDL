// cSpell:words autorestart
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
    apps: [
        {
            name: 'visualdl',
            script: 'index.js',
            cwd: require('path').resolve(__dirname, './dist'),
            args: '',
            instances: 'max',
            autorestart: true,
            watch: false,
            exec_mode: 'cluster', // eslint-disable-line @typescript-eslint/camelcase
            max_memory_restart: '2G', // eslint-disable-line @typescript-eslint/camelcase
            wait_ready: true, // eslint-disable-line @typescript-eslint/camelcase
            env: {
                ...process.env,
                NODE_ENV: 'production'
            }
        }
    ]
};
