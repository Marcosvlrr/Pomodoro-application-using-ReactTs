import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContexts/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContexts/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";




export function MainForm() {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

  //cycles
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)



  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warning("Insira o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      durationInMinutes: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask })

    showMessage.success('Tarefa iniciada com sucesso!')
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.info('Tarefa interrompida!')
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK })
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action="">
      <div className="formRow">
        <DefaultInput labelText='task' id='meuInput' type='text'
          placeholder="Digite algo" ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton aria-label='iniciar nova tarefa'
            title="iniciar nova tarefa" type="submit"
            icon={<PlayCircleIcon />}
            key='Este e o botao de submit'

          />
        )}

        {!!state.activeTask && (
          <DefaultButton aria-label='Interromper tarefa'
            title="interromper tarefa"
            type="button"
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
          />
        )}
      </div>

    </form>
  )
}
