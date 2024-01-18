/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6mepcwya",
    "name": "messages",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // remove
  collection.schema.removeField("6mepcwya")

  return dao.saveCollection(collection)
})
