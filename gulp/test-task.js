var run = require('childish-process')
var eho = require('./event-handlers') // event handlers object
var options = require('./childish-options')
var args = require('yargs')
  .string("t").alias("t", "--test").describe("t", "tell gulp what to test")
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers recipe")
  .argv

module.exports = function (opts) {
  var o = opts || {}
  o.testCmd = o.testCmd || 'npm test'
  o.testsRe = o.testsRe || /\.js$/

  return function (event) {
    if (typeof event !== "function" && typeof event === "object") {
      if (event.type === "changed" || event.type === "added") {
        if (o.testsRe.test(event.path)) {
          o.testCmd += ' ' + event.path
        }
      }
    }
    else if (args.t) {
      o.testCmd += ' ' + args.t
    }

    run(o.testCmd, {childish: options(args.e || 'test')})
  }
}
