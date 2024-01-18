/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ha87lcdo",
    "name": "userId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // remove
  collection.schema.removeField("ha87lcdo")

  return dao.saveCollection(collection)
})
