const set = require(`${process.cwd()}/Assets/Config/settings`)
  module.exports = {
  async execute(client) {
    if (set.REPL_SETTINGS.EXPRESS && set.REPL_USER) {
      const express = require('express');
      const app = express();
      const port = 8080;
      app.all('/', (req, res) => {
        res.send(`Express Activated`);
        res.end();
      });
      app.listen(port, () => client.logger(`Bot running on http://localhost:${port}`));
    }
  }
}