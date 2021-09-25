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
  return db.createTable("products", {
    id: { type: "int", primaryKey: true, autoIncrement: true },
    name: "string",
    price: "int",
  });
};

exports.down = function (db) {
  return db.dropTable("products");
};

exports._meta = {
  version: 1,
};
