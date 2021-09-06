import {Component, OnInit, ViewChild} from '@angular/core';
import {IScheduledJob, PeriodicElement} from "../../models/tables";
import {MatTable} from "@angular/material/table";


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const SCHEDULED_JOB_DATA: IScheduledJob[] = [
  {
    "name": "closePmSchedulesJob",
    "description": "Closes PM schedules overnight after the PM rules end date elapses.",
    "cron": "0 2 5 * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T05:02:00.114",
      "duration": 106,
      "realUser": "system-user",
      "started": "2021-09-02T05:02:00.008"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "incrementalRefreshFromQuickbaseJob",
    "description": "Executes incremental refresh from Quickbase.",
    "cron": "",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T06:20:15.000",
      "duration": 0,
      "realUser": "rcdmscron@10.222.21.132",
      "started": "2021-09-02T06:20:15.000"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "refreshMaterializedViewsJob",
    "description": "Refreshes materialized views.",
    "cron": "",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T05:31:48.000",
      "duration": 108000,
      "realUser": "event_scheduler@localhost",
      "started": "2021-09-02T05:30:00.000"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "updateEnrollmentStatusJob",
    "description": "Updates enrollment status.",
    "cron": "0 1 * * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T06:01:00.264",
      "duration": 211,
      "realUser": "system-user",
      "started": "2021-09-02T06:01:00.053"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "startUserRegistrationJob",
    "description": "Starts registration process for new users",
    "cron": "0 25 6 * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T06:25:00.221",
      "duration": 212,
      "realUser": "system-user",
      "started": "2021-09-02T06:25:00.009"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "refreshFromAzureActiveDirectoryCsvJob",
    "description": "Creates CSV file from Azure Active Directory and uploads it to S3.",
    "cron": "0 05 * * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T06:05:00.792",
      "duration": 785,
      "realUser": "system-user",
      "started": "2021-09-02T06:05:00.007"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "updateAlertsJob",
    "description": "Updates alerts.",
    "cron": "0 10 5 * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T05:10:03.104",
      "duration": 3093,
      "realUser": "system-user",
      "started": "2021-09-02T05:10:00.011"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "refreshFromAzureActiveDirectoryDbJob",
    "description": "Refresh the database by Ant (using refresh-from-aad).",
    "cron": "",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-01T06:30:05.000",
      "duration": 0,
      "realUser": "rcdmscron@10.222.21.132",
      "started": "2021-09-01T06:30:05.000"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "notifyUsersWithUpdatedLoginJob",
    "description": "Sends email to Active users' updated emails confirming their new user email.",
    "cron": "",
    "executionHistory": {
      "success": true,
      "finished": "2021-08-31T12:26:44.343",
      "duration": 25,
      "realUser": "vasylkrupka@coherentsolutions.com",
      "started": "2021-08-31T12:26:44.318"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "dumpApiDataJob",
    "description": "Dumps API data.",
    "cron": "",
    "executionHistory": null,
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "downloadQuickbaseJob",
    "description": "Downloads Quickbase reports and uploads them to S3.",
    "cron": "0 0/10 * * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T06:20:26.865",
      "duration": 26858,
      "realUser": "system-user",
      "started": "2021-09-02T06:20:00.007"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "generateCbmrJob",
    "description": "Generates CBM-R graphs (if not exist) for current year G1 students (Active or Exit on PEPM site) for which CBM-R BMA are entered",
    "cron": "0 0/20 * * * *",
    "executionHistory": {
      "success": true,
      "finished": "2021-09-02T06:20:00.237",
      "duration": 192,
      "realUser": "system-user",
      "started": "2021-09-02T06:20:00.045"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "purgeTokensJob",
    "description": "Removes invalid and/or outdated tokens from the oauth* tables.",
    "cron": "0 0 12 ? * SAT",
    "executionHistory": {
      "success": true,
      "finished": "2021-08-31T12:24:52.836",
      "duration": 511,
      "realUser": "vasylkrupka@coherentsolutions.com",
      "started": "2021-08-31T12:24:52.325"
    },
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "refreshFromAADChain",
    "description": "Performs refresh from Azure Active Directory.",
    "cron": "",
    "executionHistory": null,
    "running": false,
    "pending": false,
    "canceled": false
  },
  {
    "name": "refreshFromQBChain",
    "description": "Performs refresh from Quickbase.",
    "cron": "",
    "executionHistory": {
      "success": true,
      "finished": "2021-08-31T12:26:44.423",
      "duration": 51996,
      "realUser": "vasylkrupka@coherentsolutions.com",
      "started": "2021-08-31T12:25:52.427"
    },
    "running": false,
    "pending": false,
    "canceled": false
  }
]


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsTable2: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  displayedColumnsTable3: string[] = ['position', 'name', 'weight', 'symbol'];


  dataSource = ELEMENT_DATA;
  dataSourceTable3 = [...ELEMENT_DATA];

  dataSourceJobs = SCHEDULED_JOB_DATA;
  displayedColumnsJobs: string[] = [
    'name',
    'description',
    'cron',
    'status',
    'lastRun',
    'lasted',
    'realUser',
    'result',
    'actions'
  ]

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSourceTable3.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows()
  }

  removeData() {
    this.dataSourceTable3.pop();
    this.table.renderRows()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
