const services = [
  {
    icon: "01",
    title: "Frontend Development",
    description:
      "Responsive React interfaces with clean component structure and modern CSS.",
  },
  {
    icon: "02",
    title: "Responsive Design",
    description:
      "Interfaces designed to work smoothly across desktop, tablet, and mobile screens.",
  },
  {
    icon: "03",
    title: "UI Development",
    description:
      "Clean layouts, interactive elements, animations, and user-focused interfaces.",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <p>SERVICES</p>
          <h2>What I focus on.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-number">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;