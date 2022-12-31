import Task from "./Task";
import { format } from "date-fns";
import { isEmptyValue } from "../../utils";

class DetailedTask extends Task {
    #date;
    #priority;
    #notes;

    constructor({ date, priority, notes, ...coreTaskInfo }) {
        // Initialize base Task instance
        super(coreTaskInfo);

        this.#date = (!isEmptyValue(date)) ? format(new Date(date), 'MMM dd, yyyy') : null;
        this.#priority = priority;
        this.#notes = notes;
    }

    get date() {
        return this.#date;
    }

    get priority() {
        return this.#priority;
    }

    get notes() {
        return this.#notes;
    }

    set date(date) {
        this.#date = (!isEmptyValue(date)) ? format(new Date(date), 'MMM dd, yyyy') : null;
        this.notifyObservers('TASK_DATE_CHANGED', { task: this, date: this.#date });
    }

    set priority(priority) {
        this.#priority = priority;
        this.notifyObservers('TASK_PRIORITY_CHANGED', { task: this, priority: this.#priority });
    }

    set notes(notes) {
        this.#notes = notes;
        this.notifyObservers('TASK_NOTES_CHANGED', { task: this, notes: this.#notes });
    }
}

export default DetailedTask;