export default function Footer({
  company = "Mi Empresa",
  email = "contacto@empresa.com",
  phone = "+34 600 000 000",
  year = new Date().getFullYear(),
}) {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "40px 20px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Empresa */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>{company}</h3>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Construyendo soluciones modernas con React.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Enlaces</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={linkStyle}>Inicio</a></li>
            <li><a href="#" style={linkStyle}>Servicios</a></li>
            <li><a href="#" style={linkStyle}>Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Contacto</h4>
          <p>Email: {email}</p>
          <p>Tel: {phone}</p>
        </div>

        {/* Redes */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Síguenos</h4>
          <p>
            <a href="#" style={linkStyle}>Facebook</a> |{" "}
            <a href="#" style={linkStyle}>Twitter</a> |{" "}
            <a href="#" style={linkStyle}>Instagram</a>
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        © {year} {company}. Todos los derechos reservados.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};