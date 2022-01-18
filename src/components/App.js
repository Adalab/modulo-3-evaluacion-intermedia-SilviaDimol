import {useState} from "react";
import '../styles/App.css';
import studentsList from '../data/students.json';

function App() {
  const [search, setSearch] = useState ('');

  const [data, setData] = useState(studentsList)

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const filterData = data.filter((oneStudent) => {
   oneStudent.name.includes(search));
  };

  const htmlStudents = data.results.map((student, index) => {
    return (
    <tr key={index}>
    <td>{student.name}</td>
    <td>{student.counselor}</td>
    <td>{student.speciality}</td>
  </tr>
     );
    });

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
            onChange = {handleChangeSearch}
            value = {search}
          />
        </form>
      </header>
      {/* main*/}
      <main>
        <table className="students_list">
          {/* cabecera*/}
          <thead><tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr></thead>
          {/*fin de cabecera*/}
          <tbody>
            {htmlStudents}
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
            name="counselor"
            id="counselor"
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
