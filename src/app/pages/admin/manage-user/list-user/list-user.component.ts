import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { ManageUserService } from 'src/app/core/services/manage-user.service';
import { SET_HIDE_LOADING_ACTION } from 'src/app/store/actions/loading.action';
import { AppState } from 'src/app/store/app.interface';
import { ListUserResponse, UserDetailResponse } from 'src/app/models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  manageListUser: UserDetailResponse[] = [];
  displayedColumns: string[] = [
    'position',
    'fullName',
    'email',
    'mobile',
    'role',
    'isBlocked',
    'action',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private manageUserService: ManageUserService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.manageUserService.getListUserAdmin().subscribe((res: ListUserResponse) => {
      if (res.status) {
        this.manageListUser = res.data;
        this.store.dispatch({
          type: SET_HIDE_LOADING_ACTION,
          status: false,
        });
        console.log(this.manageListUser);
      }
    });
  }

  checkStatusUser(isBlocked: boolean) {
    if(!isBlocked) {
      return "Đang hoạt động"
    } else {
      return "Ngừng hoạt động"
    }
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
