import { State } from 'src/enums/state.enum';

export interface IKeyboardKey {
  id: string;
  dataKey: string;
  state: State;
  content: JSX.Element;
}
