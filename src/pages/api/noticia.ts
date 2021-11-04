import { NextApiRequest, NextApiResponse } from "next";

interface Noticia {
  titulo: string;
  autor: string;
  conteudo: string;
}

export default function handle(req: NextApiRequest, res: NextApiResponse<Noticia>) {
  return res.json({
    titulo: 'Nextjs with v2',
    autor: 'Nato Legado',
    conteudo: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
  })
}