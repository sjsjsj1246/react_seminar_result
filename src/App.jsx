import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/todo" component={TodoListPage} />
    </BrowserRouter>
  );
}

export default App;
