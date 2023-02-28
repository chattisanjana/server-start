const { Model } = require("objection");

class first extends Model {
  static get tableName() {
    return "first";
  }
  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],

      properties: {
        id: { type: ["integer", "null"] },
        name: { type: ["integer", "null"] },
        branch: { type: ["string", "null"] },
        sec: { type: ["string", "null"] },
      },
    };
  }
}

module.exports = first;
