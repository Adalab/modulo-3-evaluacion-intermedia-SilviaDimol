import '../styles/App.css';

function App() {
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
          />
        </form>
      </header>
      {/* main*/}
      <main>
        <table>
          {/* cabecera*/}
          <thead><tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
          </tr></thead>
          {/*fin de cabecera*/}
          <tbody>
            {/*primera fila*/}
            <tr>
              <td>Columa 1 de la fila 1</td>
              <td>Columa 2 de la fila 1</td>
              <td>Columa 3 de la fila 1</td>
            </tr>
            {/*segunda fila*/}
            <tr>
              <td>Columa 1 de la fila 2</td>
              <td>Columa 2 de la fila 2</td>
              <td>Columa 3 de la fila 2</td>
            </tr>
          </tbody>
        </table>
        {/* new contact */}
        <form className="new-student__form">
          <h2 className="new-student__title">Añadir una Adalaber</h2>
          <input
            className="new-student__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            className="new-student__input"
            type="text"
            name="tutor"
            id="tutor"
            placeholder="Tutora"
          />
          <input
            className="new-student__input"
            type="text"
            name="speciality"
            id="speciality"
            placeholder="Especialidad"
          />
          <input className="new-student__btn" type="submit" value="Añadir una nueva Adalaber" />
        </form>
      </main>
    </div >
  );
}

export default App;
