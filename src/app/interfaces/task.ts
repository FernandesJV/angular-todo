export interface task {
    description: string;
    status: TASK_STATUS;
    deadline: Date;
}

export type TASK_STATUS = 'TODO' | 'WIP' | 'DONE';