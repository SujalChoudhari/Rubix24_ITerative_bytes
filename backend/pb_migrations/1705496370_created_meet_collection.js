/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wcq49iqqkj5vipv",
    "created": "2024-01-17 12:59:30.394Z",
    "updated": "2024-01-17 12:59:30.394Z",
    "name": "meet_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4bv5c3hy",
        "name": "code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wcq49iqqkj5vipv");

  return dao.deleteCollection(collection);
})
