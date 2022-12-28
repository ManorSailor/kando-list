import dataController from "./js/lib/DataController";
import Kando from "./js/models/Kando/Kando";
import List from "./js/models/List/List";
import Task from "./js/models/Task/Task";

// Initialize a new Kando Instance
const kando = new Kando();

// Assigning modules to window object, can be accessed through browser console
// webpack encapsulates everything into a module to stop polluting global scope
window.Task = Task;
window.List = List;
window.Kando = kando;

dataController.init(kando, List, Task);