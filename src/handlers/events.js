const fs = require('fs');
module.exports = {
  async execute(client) {
    //   Events
    let c = 0;
    fs.readdirSync(`${process.cwd()}/src/events/`).filter((file) => file.endsWith('.js')).forEach((event) => {
      const eve = require(`${process.cwd()}/src/events/${event}`);
      if (eve) eve.execute(client);
      c++;
    })

    setTimeout(() => {
      client.logger(`Loaded ${c} Events`.bold)
    }, 1000)
    //  Module
    let x = 0;
    fs.readdirSync(`${process.cwd()}/src/modules/`).filter((file) => file.endsWith('.js')).forEach((modules) => {
      const mod = require(`${process.cwd()}/src/modules/${modules}`)
      if (mod) mod.execute(client);
      x++;
      client.logger(`Loaded ${modules.split(`.js`)[0]} Module`)
    })
    setTimeout(() => {
      client.logger(`Loaded ${x} Modules`.bold)
    }, 2000)
  }
};
