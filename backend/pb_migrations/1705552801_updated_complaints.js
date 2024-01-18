/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gyhxtsyq",
    "name": "Receipt",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // remove
  collection.schema.removeField("gyhxtsyq")

  return dao.saveCollection(collection)
})
