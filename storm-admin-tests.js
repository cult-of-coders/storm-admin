// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by storm-admin.js.
import { name as packageName } from "meteor/cultofcoders:storm-admin";

// Write your tests here!
// Here is an example.
Tinytest.add('storm-admin - example', function (test) {
  test.equal(packageName, "storm-admin");
});
