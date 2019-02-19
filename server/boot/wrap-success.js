'use strict';

module.exports = function(app) {
  var remotes = app.remotes();

  remotes.after('**', function(ctx, next) {
    console.log('ctx: ', ctx);
    ctx.result = {
      code: 200,
      message: ctx.methodString + ' success',
      data: ctx.result,
      result: 'success',
    };

    next();
  });
};
