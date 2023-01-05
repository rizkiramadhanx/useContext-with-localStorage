import React, { useContext, useState } from 'react';
import { GlobalContext } from '../store/GlobalState';

const Landing = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [name, setName] = useState<string>('');

  const handleName = () => {
    dispatch({ type: 'CHANGE_NAME', payload: name });
  };

  const handleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };

  const theme = state.theme ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`container ${theme} h-screen`}>
      <div className="flex justify-between m-2">
        <div>Profile : {state.username}</div>
        <button onClick={handleTheme}>{state.theme ? '🌙' : '☀️'}</button>
      </div>
      <div className="mt-5">{JSON.stringify(state)}</div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="mt-5 bg-gray-500 outline-none"
      />
      <button onClick={handleName} className="bg-red-600">
        ganti nama
      </button>
    </div>
  );
};

export default Landing;
