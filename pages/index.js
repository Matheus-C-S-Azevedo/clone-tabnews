import Image from "next/image";

function Home() {
  return (
    <main style={styles.page}>
        <h1 style={styles.title}>Muito obrigado bb, te amo</h1>

        <figure style={styles.figure}>
            <Image
            src="/paca.jpg"
            alt="Pacas"
            width={400}
            height={400}
            title="Pacas"
            style={styles.image}
            priority
            />
            <figcaption style={styles.caption}>
            <b>Pacas</b>
            </figcaption>
        </figure>
      
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
            
        <h1 style={styles.subtitle}>PS: tava muito gostoso (que nem vc :3)</h1>

        <figure style={styles.figure}>
            <Image
            src="/eu.jpg"
            alt="Eu"
            width={300}
            height={400}
            title="Eu"
            style={styles.image}
            />
        </figure>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    gap: "18px",
    padding: "24px",
    background: "#f7f7fb",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    margin: 0,
    textAlign: "center",
  },
  subtitle: {
    margin: "8px 0 0 0",
    textAlign: "center",
  },
  figure: {
    margin: 0,
    padding: "12px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    maxWidth: "fit-content",
  },
  image: {
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    display: "block",
    height: "auto",
  },
  caption: {
    marginTop: "10px",
    fontSize: "28px",
    color: "#4b5563",
    fontStyle: "italic",
    textAlign: "center",
  },
};

export default Home;
