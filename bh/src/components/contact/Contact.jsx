import React from "react";

export const Contact = () => {
    return (
        <section className="container">
          <div className="row">
            <h3 className="center-align">CONTACTO</h3>
            <article className="col s6 offset-s3">
              <form method="POST" action="formulario-contacto.php">
                <div className="input-field">
                  <i className="material-icons prefix">perm_identity</i>
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" name="nombre" required />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">person_pin</i>
                  <label htmlFor="apellido">Apellido</label>
                  <input type="text" name="apellido" required />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" required />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">mode_edit</i>
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    name="mensaje"
                    id=""
                    rows="10"
                    className="materialize-textarea"
                    length="140"
                    required
                  ></textarea>
                </div>

                <p className="center-align">
                  <button className="waves-effect waves-light btn" type="submit">
                    <i className="material-icons right">send</i>enviar
                  </button>
                </p>
              </form>
            </article>
          </div>
        </section>
  );
}

