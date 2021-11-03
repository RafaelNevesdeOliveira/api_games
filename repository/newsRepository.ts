import mongoose from "mongoose";
import { News } from "../models/news";

const NewsSchema = new mongoose.Schema<News>({
  titulo: { type: String },
  descricao: { type: String },
  sinopse: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: Date }, 
  tags: { type: String },
  link: { type: String },
  ativo: { type: Boolean }
});

export const NewsRepository = mongoose.model<News>("news", NewsSchema);