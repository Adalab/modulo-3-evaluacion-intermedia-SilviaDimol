import {useState} from "react";
import '../styles/App.css';
import studentsList from '../data/students.json';

function App() {
  const [search, setSearch] = useState ('');

  const [data, setData] = useState(studentsList)

  const [name, setName] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");


  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const handleChangeName= (ev)=>{
    setName(ev.currentTarget.value);
  };

  const handleChangeCounselor= (ev)=>{
    setCounselor(ev.currentTarget.value);
  };

  const handleChangeSpeciality= (ev)=>{
    setSpeciality(ev.currentTarget.value);
  };
  
  const handleClick = (ev)=>{
   ev.preventDefault();
   const newStudent = {
     name: name,
     counselor: counselor,
     speciality: speciality,
   };
  };

  const htmlStudents = studentsList.results.map((student, index) => {
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
            onChange={handleChangeName}
            value={name}
          />
          <input
            className="new-student__input"
            type="text"
            name="counselor"
            id="counselor"
            placeholder="Tutora"
            onChange={handleChangeCounselor}
            value={counselor}
          />
          <input
            className="new-student__input"
            type="text"
            name="speciality"
            id="speciality"
            placeholder="Especialidad"
            onChange={handleChangeSpeciality}
            value={speciality}
          />
          <input className="new-student__btn" type="submit" value="Añadir una nueva Adalaber" onClick={handleClick} />
        </form>
      </main>
    </div >
  );
}

export default App;
