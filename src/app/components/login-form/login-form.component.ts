import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  imports: [CommonModule, FormsModule],
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.css"
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";
  anyError: boolean = false;

  router = inject(Router);

  login() {
    if (this.email != "" && this.password != "") {
      localStorage.setItem("jwtToken", "");
      this.router.navigate(["/dashboard"]);
    } else {
      this.anyError = true;
    }
  }
}
