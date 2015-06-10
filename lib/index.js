/*!
**  bauer-crawler-fetch -- Plugin for bauer-crawler to make http requests.
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-crawler-fetch>
*/
// - -------------------------------------------------------------------- - //

"use strict";


module.exports = {
  
  config: {
    workers: 1,
    request: {},
    cache: {}
  },
  
  worker: __dirname + "/worker.js",
  master: __dirname + "/master.js",
  promise: __dirname + "/promise.js"
  
};

// - -------------------------------------------------------------------- - //