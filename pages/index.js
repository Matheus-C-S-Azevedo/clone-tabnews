import Image from "next/image";

function Home() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>🚧 EM CONSTRUÇÃO 🚧</h1>
      <p style={styles.body}>
        Estou construindo esse pedacinho da internet, aqui ainda há ideías em
        branco, tavez seja um território livre para aprender e testar idéias,
        talvez seja o meu futuro, ou talvez seja só a minha primeira e
        insignificante marca na internet.
      </p>
    </main>
  );
}

const styles = {
  page: {
    placeItems: "center",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    margin: 0,
    textAlign: "center",
    padding: "10px",
  },
  body: {
    margin: 0,
    textAlign: "center",
  },
};

export default Home;
