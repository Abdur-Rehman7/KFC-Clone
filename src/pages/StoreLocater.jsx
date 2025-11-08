// StoreLocater.jsx
const StoreLocater = () => {
  return (
    <>
      <section className="text-center w-[80%] mx-auto">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 600px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13049717.86508754!2d63.60567331389418!3d30.142186400699334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKFC%20in%20Pakistan!5e0!3m2!1sen!2s!4v1762587332587!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KFC Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreLocater;
