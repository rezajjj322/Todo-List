import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";
import AppProvider from "./Context";

function App() {
  
  return (
    <AppProvider>
      <div className="w-full h-full flex justify-center">
        <div className="w-1/2 h-auto m-4 p-3 bg-gray-400 rounded-md">
          <TodoForm/>
          <TodoItem/>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;