import { Component, OnInit, Inject, Input } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';

import { ReportService } from '../../../services/report';
import { NotificationService } from '../../../services/notification';
import { UserService } from '../../../services/users';
import { Report } from '../../../interface/report';
@Component({
  selector: 'report',
  templateUrl: 'client/dev/app/components/front-end/report/templates/report.html',
  styleUrls: [],
  directives: [
    FORM_DIRECTIVES,
  ]
})


export class ReportComponent {
  user: string;
  link: string;
  @Input('reportedUser') reportedUser: string;
  reportForm: ControlGroup;

  constructor(fb: FormBuilder, private _reportService: ReportService, private _noti: NotificationService,
    private _userService: UserService) {
    this.user = localStorage.getItem('username');
    this.link = window.location.pathname;

    this.reportForm = fb.group({
      "title": [""],
      "content": [""],
      "user": [""],
      "reportedUser": [""],
      "link": [""]
    });

  }
  ngOnInit(): void {

  }
  addReport(report:Report) {
    this._reportService.addReport(report).subscribe((report) => {

      //call function send notification for admin realtime
      //user === null means sending notification for every user roles admin
      var title = "Nhận được một báo cáo vi phạm";
      var link = report.link;

      this._userService.getAllUsers().subscribe((users) => {
        for (var i = 0; i < users.length; i++) {
          if (users[i].role === 'admin') {
            this._noti.alertNotification(title, users[i].username, link);
            //add notification into database
            this._noti.createNotification(title, users[i].username, link).subscribe((r) => {
            });
          }
        }
        window.location.reload();
      })

    },
      (error) => {
        console.log(error);
      });
  }
}
