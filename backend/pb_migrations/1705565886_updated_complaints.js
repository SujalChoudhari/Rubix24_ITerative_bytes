/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtuodwgn",
    "name": "progress",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdcxdg2rv17gly0")

  // remove
  collection.schema.removeField("dtuodwgn")

  return dao.saveCollection(collection)
})
