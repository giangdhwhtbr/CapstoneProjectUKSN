//cores
import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject,
  OnDestroy,
  AfterViewChecked
} from '@angular/core'; import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
import { Subscription }       from 'rxjs/Subscription';
//services
import { UserService } from '../../../../services/users';
import { AuthService } from '../../../../services/auth';
import { NotificationService } from '../../../../services/notification';
import { ReportComponent } from '../../report/report';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';
import { Notification } from '../../../../interface/notification';

import { RatingPoint } from '../../../shared/ratingPoint';
declare var $: any;
declare var Materialize: any;
@Component({
  selector: 'user-profile-bar',
  templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/user-profile-bar.html',
  styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ReportComponent,
    RatingPoint
  ]
})

export class UserProfileBarComponent {

  //name of user in current profile page
  name: string;
  filesToUpload: Array<File>;
  linkImg: string;
  isFriend: boolean;
  roleToken: string;
  userToken: string;
  private sub: Subscription;

  //check if profile page of current user, hide "addFriend" button
  checkUser: boolean;
  //check if a user was sent friend request by current user
  checkSentRequestUser: boolean;
  //check if a current user is received a request of a user
  checkIsRecivedRequest: boolean;

  userProfile: User;
  friendList: FriendShip[];

  constructor(public router: Router, private route: ActivatedRoute, public _userService: UserService,
    public _noti: NotificationService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }

  ngOnInit(): void {
    $('#loading').show();
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
        this.linkImg = '';
        this._userService.getUserByUserName(this.name).subscribe(
          (user) => {
            let localeDate = new Date(user.createdAt);
            this.userProfile = user;
            this.userProfile.createdAt = localeDate.toLocaleDateString();
            this.linkImg = user.linkImg;
            console.log(this.userProfile);
            $('#loading').hide();
          }, (error) => {
            console.log(error);
          }
        );

        //check if current user is staying in his/her profile page
        if (this.name === this.userToken) {
          this.checkUser = true;
        }
        this.getFriendList();
      });
    $('ul.tabs').tabs();
    $('.tooltipped').tooltip({ delay: 5 });
  }

  openReport():void{
        $('#myModal').openModal();
  }

  ngOnDestroy() {
    $(".material-tooltip").remove();
  }

  openChooseFile() {
    $('#chFileImg').trigger("click");
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    if (this.filesToUpload) {
      $('#loading').show();
      this._userService.makeFileRequest("/api/media", [], this.filesToUpload).then((r) => {
        this.linkImg = '/uploads/' + r[0].filename;
        this.userProfile.linkImg = this.linkImg;
        this.userProfile.username = localStorage.getItem('username');
        this._userService.updateUser(this.userProfile, []).subscribe(r => {
          $('#loading').hide();
        });
      }, (error) => {
        console.error(error);
      });
    }
  }

  addFriend(): void {
    if (this.isFriend === false) {
      this._userService
        .addFriend(this.userToken, this.name)
        .subscribe((r) => {
          console.log('friendship was created by ' + this.userToken + ' and ' + this.name);
        })

      //create a notification to user who get accepted a friend request
      var title = 'Lời mời kết bạn từ ' + this.userToken;
      var link = '/user/' + this.name + '/friends';


      //call function using socket io to send notification
      this._noti.alertNotification(title, this.name, link);

      //save notification to database
      this._noti.createNotification(title, this.name, link).subscribe(
        (notification) => {
        });
      this.isFriend = true;
    } else {
    }
    this.checkSentRequestUser = true;
    this.isFriend = false;
  }

  deleteFriend(): void {
    var r = confirm("Bạn có muốn hủy kết bạn");
    if (r == true) {
      this._userService
        .deleteFriendRequest(this.userToken, this.name)
        .subscribe(() => {
          console.log('delete successfull');
        });
      this._userService
        .deleteFriendRequest(this.name, this.userToken)
        .subscribe(() => {
        });
      this._userService
        .deactivateChatRoom(this.name, this.userToken)
        .subscribe(() => {

        });
      this.getFriendList();
      this.isFriend = false;
    }
  }

  //get friend list: pending and accepted
  getFriendList(): void {
    this.checkSentRequestUser = false;
    this._userService
      .getFriendList(this.userToken)
      .subscribe((friendlist) => {
        this.friendList = friendlist;
        this.checkIsFriend();
        //check sent request
        for (var i = 0; i < this.friendList.length; i++) {
          if (friendlist[i].user2 === this.name && this.friendList[i].status === "pending") {
            this.checkSentRequestUser = true;
            break;
          }
        }

        for (var i = 0; i < this.friendList.length; i++) {
          if (friendlist[i].user1 === this.name && this.friendList[i].status === "pending") {
            this.checkIsRecivedRequest = true;
            break;
          }
        }

      })
  }

  public checkIsFriend() {
    this.isFriend = false;
    for (var i = 0; i < this.friendList.length; i++) {
      if ((this.name === this.friendList[i].user1 && this.friendList[i].status === "accepted") ||
        (this.name === this.friendList[i].user2 && this.friendList[i].status === "accepted")) {
        this.isFriend = true;
        break;
      }
    }
  }

}
