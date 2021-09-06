export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


export interface IScheduledJob {
  name: string;
  description: string;
  cron?: string;
  executionHistory: IExecutionHistory | null
  running: boolean;
  pending: boolean;
  canceled: boolean
}

export interface IExecutionHistory {
  success: boolean;
  finished: string;
  duration: number;
  realUser: string;
  started: string;
}
