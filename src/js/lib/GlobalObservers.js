import dataObserver from "./DataObserver";

// List of Observers who wants to observe all model instances
const globalObservers = [
    dataObserver,
];

export default globalObservers;