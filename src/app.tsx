import { MessagesContainer } from './components/MessagesContainer'
import { TaskContextProvider } from './contexts/TaskContexts/TaskContextProvider'
import { MainRouter } from './routers/MainRouter'
import './styles/global.css'
import './styles/theme.css'




export function App() {
    return (
        <TaskContextProvider >
            <MessagesContainer>
                <MainRouter />
            </MessagesContainer>
        </TaskContextProvider>
    )
}

