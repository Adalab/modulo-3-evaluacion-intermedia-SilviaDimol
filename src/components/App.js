import { useState, useEffect} from "react";
import '../styles/App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(()=>{
fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
.then(response => response.json())
.then(responseData => {
  setData (responseData.results);
 });
 
}, [] );

  const [newStudent, setNewStudent] = useState({
    name:'',
    counselor:'',
    speciality:'',
  });
  
  const [name, setName] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const handleChangeName = (ev) => {
    setNewStudent(
      {
        ...newStudent,
        name: ev.currentTarget.value
      }
    );
  };

  const handleChangeCounselor = (ev) => {
    setNewStudent(
      {
        ...newStudent,
        counselor: ev.currentTarget.value
      }
    );
  };

  const handleChangeSpeciality = (ev) => {
    setNewStudent(
      {
        ...newStudent,
        speciality: ev.currentTarget.value
      }
    );
  };

  const handleClickNewStudent = (ev) => {
    newStudent.id = data.length;
    setData([...data, newStudent]);
    setNewStudent ({
      name:'',
      counselor:'',
      speciality:'',
    });
    }
    
  const htmlStudents = data.map((student) => {
    return (
      <tr key={student.id}>
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
            onChange={handleChangeSearch}
            value={search}
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
        <form className="new-student__form" onSubmit={(ev) => ev.preventDefault()}>
          <h2 className="new-student__title">Añadir una Adalaber</h2>
          <input
            className="new-student__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleChangeName}
            value={newStudent.name}
          />
          <input
            className="new-student__input"
            type="text"
            name="counselor"
            id="counselor"
            placeholder="Tutora"
            onChange={handleChangeCounselor}
            value={newStudent.counselor}
          />
          <input
            className="new-student__input"
            type="text"
            name="speciality"
            id="speciality"
            placeholder="Especialidad"
            onChange={handleChangeSpeciality}
            value={newStudent.speciality}
          />
          <input className="new-student__btn" type="submit" value="Añadir una nueva Adalaber" onClick={handleClickNewStudent} />
        </form>
      </main>
    </div >
  );
}

export default App;
