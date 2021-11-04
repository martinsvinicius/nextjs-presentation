import type { GetStaticProps, NextPage } from 'next'

interface HomeProps {
  titulo: string;
  autor: string;
  conteudo: string;
}

const Home = ({ titulo, autor, conteudo }: HomeProps) => {
  return (
    <main>
      <h1>{titulo}</h1>
      <strong>por {autor}</strong>

      <hr />

      <article>
        {conteudo}
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchResponse = await fetch('http://localhost:3000/api/noticia');
  console.log(fetchResponse);
  const { titulo, conteudo, autor } = await fetchResponse.json() as HomeProps;

  return {
    props: {
      titulo,
      conteudo,
      autor
    },
    revalidate: 60 * 60 * 24, // 24 horas 
  }
}

export default Home;
