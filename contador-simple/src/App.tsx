import React, { useEffect, useState } from "react";

function App() {


  const [numero, setNumero] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
  }, [numero]);

  const incrementar = () => {
    setNumero(numero + 1);
  }

  const decrementar = () => {
    setNumero(numero - 1);
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <h1 className=" flex text-4xl">{numero}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <button onClick = {incrementar} className="flex bg-slate-800 text-white p-2 rounded-lg font-bold">
              Incrementar
            </button>
            <button onClick={decrementar} className="flex bg-slate-800 text-white p-2 rounded-lg font-bold">
              Decrementar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
