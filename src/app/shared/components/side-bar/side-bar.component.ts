import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  subNav: boolean = false;
  isActiveMenuItem: boolean = false;
  isActiveChildSubNav: boolean = false;
  selectedSubNav: string = '';
  selectdChildOfSubNav: string = '';
  currentRoute: string = '';
  sideBarData = [
    {
      title: 'Quản lý người dùng',
      path: '/overview',
      icon: 'fa-regular fa-user',
      iconClosed: 'fa-solid fa-chevron-right',

      subNav: [
        {
          title: 'Thêm người dùng',
          path: '/admin/manage-user/add-user',
        },
        {
          title: 'Danh sách người dùng',
          path: '/admin/manage-user/users',
        },
      ],
    },
    {
      title: 'Quản lý sản phẩm',
      path: '/reports',
      icon: 'fa-solid fa-boxes-stacked',
      iconClosed: 'fa-solid fa-chevron-right',

      subNav: [
        {
          title: 'Reports',
          path: '/reports/reports1',
        },
        {
          title: 'Reports 2',
          path: '/reports/reports2',
        },
        {
          title: 'Reports 3',
          path: '/reports/reports3',
        },
      ],
    },
    {
      title: 'Quản lý loại sản phẩm',
      path: '/products',
      icon: 'fa-regular fa-copyright',
      iconClosed: 'fa-solid fa-chevron-right',
    },
    {
      title: 'Quản lý bài viết',
      path: '/messages',
      icon: 'fa-solid fa-blog',
      iconClosed: 'fa-solid fa-chevron-right',

      subNav: [
        {
          title: 'Message 1',
          path: '/messages/message1',
        },
        {
          title: 'Message 2',
          path: '/messages/message2',
        },
      ],
    },
    {
      title: 'Quản lý nhãn hiệu',
      path: '/support',
      icon: 'fa-regular fa-copyright',
      iconClosed: 'fa-solid fa-chevron-right',
    },
  ];

  constructor(private router: Router) {
    router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log(event.url);
      });
  }

  showClassOfItemSubNav(item: any) {
    if (item.title === this.selectedSubNav) {
      this.isActiveMenuItem = true;
      return 'side-bar__item open';
    } else {
      this.isActiveMenuItem = false;
      return 'side-bar__item';
    }
  }
  showClassChildSubNav(item: any): void {
    if (item.path === this.currentRoute) {
      this.isActiveChildSubNav = true;
    } else this.isActiveChildSubNav = false;
  }

  showSubnav(title: string) {
    this.selectedSubNav = title;
    this.subNav = !this.subNav;
  }
}
