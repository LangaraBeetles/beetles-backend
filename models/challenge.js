import { Schema, model } from "mongoose";

const schema = new Schema({
  creator_id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  start_at: { type: Date, required: true },
  end_at: { type: Date, required: true },
  goal: { type: Number, required: true },
});

export default model("Challenge", schema);
