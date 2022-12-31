import dataController from "./js/lib/DataController";
import Kando from "./js/models/Kando/Kando";
import List from "./js/models/List/List";
import DetailedTask from "./js/models/Task/DetailedTask";

// Initialize a new Kando Instance
const kando = new Kando();

// Assigning modules to window object, can be accessed through browser console
// webpack encapsulates everything into a module to stop polluting global scope
window.Task = DetailedTask;
window.List = List;
window.Kando = kando;

dataController.init(kando, List, DetailedTask);