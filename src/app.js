import Kando from "./js/models/Kando/Kando";
import List from "./js/models/List/List";
import Task from "./js/models/Task/Task";

// Assigning modules to window object, can be accessed through browser console
// webpack encapsulates everything into a module to stop polluting global scope
window.Task = Task;
window.List = List;
window.Kando = Kando;