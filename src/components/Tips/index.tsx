import { useTaskContext } from "../../contexts/TaskContexts/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

//tips
export function Tips() {
  const { state } = useTaskContext()

  //cycles
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  //tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por <b>{state.config.workTime}min </b></span>,
    shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}min </b></span>,
    longBreakTime: <span>Descanse por <b>{state.config.longBreakTime}min </b></span>,
  }

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de <b>{state.config.workTime}min </b></span>,
    shortBreakTime: <span>Próximo descanso é de <b>{state.config.shortBreakTime}min </b></span>,
    longBreakTime: <span>Próximo descanso é de <b>{state.config.longBreakTime}min </b></span>,
  }

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  )
}