import { useReducer, useState } from 'react';

const initialValue: TinitialValue = {
  theme: true,
  username: 'Rizki Fauzian R',
};

const reducer = (state: TinitialValue, action: TactionContext) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return { ...state, theme: !state.theme };
    case 'CHANGE_NAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [data, dispatch] = useReducer(reducer, initialValue);

  const [name, setName] = useState<string>('');

  const addGoat = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };

  const changeName = () => {
    dispatch({ type: 'CHANGE_NAME', payload: name });
  };

  const theme = data.theme ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`h-screen ${theme} flex-col flex`}>
      <div>{JSON.stringify(data)}</div>
      <button
        className="bg-green-200 text-black p-1 rounded-md mt-2"
        onClick={addGoat}
      >
        Swith Theme
      </button>
      <input
        className="text-black"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="bg-green-200 text-black p-1 rounded-md mt-2"
        onClick={changeName}
      >
        Change Name
      </button>
    </div>
  );
};

export default UseReducer;
