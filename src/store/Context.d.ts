type Taction = {
  type: string;
  payload?: any;
};

type TinitialValue = {
  theme: boolean;
  username: string;
};

type TactionContext =
  | { type: 'SWITCH_THEME' }
  | { type: 'CHANGE_NAME'; payload: string };

type TinitialValue = {
  theme: boolean;
  username: string;
};
