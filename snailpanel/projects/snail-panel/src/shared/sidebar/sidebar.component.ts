import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

export interface SidebarButton {
  icon: string,
  label: string,
  redirect: string
}

@Component({
  selector: 'app-sidebar',
  imports: [ButtonModule],
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
