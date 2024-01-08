import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public createUserForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      mobile: ["", Validators.required],
      password: ["", Validators.required],
      address: ["", Validators.required],
    })
  }
}
