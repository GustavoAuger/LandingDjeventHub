import React from 'react';
import './PreFooter.scss';


const PreFooter = () => {
  return (
    <section className="pre-footer">
      <div className="pre-footer-content">
        <h2>¡No te pierdas los próximos eventos!</h2>
        <p>Suscríbete a nuestra lista de correo y mantente al tanto de las mejores fiestas y eventos underground.</p>
        <form className="subscription-form">
          <input type="email" placeholder="Tu email..." required />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </section>
  );
};

export default PreFooter;