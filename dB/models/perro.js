const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const esquemaPerros = new Schema(
  {
    nombre: { type: String},
    edad: { type: Number },
    raza: { type: String, enum: ['Si', 'No', 'si', 'no'] },
    vacuna_antirrabica: { type: String, enum: ['Si', 'No', 'si', 'no'] },
    castrado: { type: String, enum: ['Si', 'No', 'si', 'no'] },
    chip: { type: String, enum: ['Si', 'No', 'si', 'no'] },
    veterinario: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
    // veterinaria: [{type: Schema.Types.ObjectId, ref: "Veterinario"}],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Perro = mongoose.model("Perro", esquemaPerros);
module.exports = Perro;
