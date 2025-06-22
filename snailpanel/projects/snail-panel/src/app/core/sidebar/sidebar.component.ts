import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarButton } from './sidebar-button';

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public buttons: SidebarButton[] = [
    {
      icon: "",
      label: "Dashboard",
      redirect: "/"
    },
    {
      icon: "",
      label: "Servers",
      redirect: "/servers"
    },
    {
      icon: "",
      label: "Templates",
      redirect: "/templates"
    },
    {
      icon: "",
      label: "Users",
      redirect: "/users"
    },
    {
      icon: "",
      label: "Settings",
      redirect: "/settings"
    }
  ]

  constructor(private router: Router) {}

  goToDashboard(link: string) {
    this.router.navigate([link]);
  }
}
