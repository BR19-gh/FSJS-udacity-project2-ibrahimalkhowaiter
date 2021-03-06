"use strict";

var dbm;
var type;
var seed;

/**
 * Receiving the dbmigrate dependency from dbmigrate initially.
 * It enables to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable("users", {
    id: { type: "string", primaryKey: true },
    firstname: "string",
    lastname: "string",
    password: "string",
    superuser: "boolean",
  });
};

exports.down = function (db) {
  return db.dropTable("users");
};

exports._meta = {
  version: 1,
};
