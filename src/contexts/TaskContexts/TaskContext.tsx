import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './InitialTaskState';
import type { TaskActionModel } from './taskActions';

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
}

const initialStateContextValue = {
  state: initialTaskState,
  dispatch: () => { }
}

export const TaskContext = createContext<TaskContextProps>(initialStateContextValue)

