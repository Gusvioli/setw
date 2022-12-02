import OutrosUpadate from "./utils/Outros.utils";
import Processador from "./utils/Processador.utils";
import Context from "./context/Context";
import "./App.css";
import { useContext } from "react";

function App() {
  const {
    tempInput,
    setTempInput,
    data,
    setData,
    errors,
    setErrors,
    configs } = useContext(Context);

  OutrosUpadate(data);

  const handleProcessador = async () => {
    try {
      if (!tempInput) return setErrors({
          status: true,
          msg: 'Por favor, adicione o texto que deseja processar.',
      });

      const dataFinal = Processador(tempInput);
      setErrors({ status: false, msg: errors.msg });
      await setData(dataFinal);
    } catch (error) {
      new Error();
    }
  };

  const handleProcessadorClear = () => {
    setTempInput('');
    setErrors({ status: false, msg: '' });
    setData({
      outros: [
        { title: 'Palavras', q: '', p: 100 },
        { title: 'Frases', q: '', p: 100 },
        { title: 'Vogais', q: '', p: 100 },
        { title: 'Caracteres especiais', q: '', p: 100 },
        { title: '<tags>', q: '', p: 100 },
        { title: 'Caracteres', q: '', p: 100 },
        { title: 'Espaços em branco', q: '', p: 100 },
      ]
    })
  };

  return (
    <>
      <header>
        <div className="errors" style={{
          display: errors.status ? 'flex' : 'none'
        }}
        >
          {errors.msg}
        </div>
        <div className='namePage' id='namePage'>
          <span>SetW</span>
        </div>
        <div className='urlInputPage' id='urlInputPage'>
          <form>
            <textarea
              id="valor"
              name="valor"
              className="inputUrlFormPage"
              rows="4"
              cols="50"
              maxLength={configs.limitCaract}
              placeholder="Adicione o seu texto aqui, com um limite de 1.000 caracteres."
              onChange={(e) => setTempInput([e.target.value])}
              value={tempInput}
            ></textarea>
            <div className="urlButtons">
              <button
                className="urlButtonFormPage"
                type="button"
                onClick={handleProcessador}
              >
                <span className='urlTextFormPage'>Go</span>
              </button>
              <button
                className="urlButtonFormPage"
                type="button"
                onClick={handleProcessadorClear}
              >
                <span className='urlTextFormPage'>Clear</span>
              </button>
            </div>
          </form>
        </div>
        <div className='infoPage' id='infoPage'>
          <a href='/' alt='informations'>
            <span>Info</span>
          </a>
        </div>
      </header>
      <main>
        {data.outros.map((outro, index) => (
          <div className='outrosMainDivPage' key={index} style={{}}>
            <div className="outrosPage">
              <div className="textoOutrosMainDivPage">
                <span>{outro.title}</span>
              </div>
              <div className="progressBarOutrosMainDivPage" style={{
                minWidth: `10%`,
                width: `${outro.p !== 0 ? outro.p : 0}%`,
                transition: `width 2s`
              }}>
                <div><span>{outro.q}</span></div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className='letrasMainDivPage'></div>
        <div className='tagsMainDivPage'></div> */}
      </main>
      <footer>
        <span>Site de Estatistifica de textos - SetW - feito com React</span>
      </footer>
    </>
  );
}

export default App;
