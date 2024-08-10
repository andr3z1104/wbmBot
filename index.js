const wbm = require('wbm');

wbm.start(({showBrowser: true, session: false})
.then).then(async () => {
    const phones = ['584122618582', '4915753062487', '584242086718'];
    const message = 'Epale chamo, mensaje automatizado';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));