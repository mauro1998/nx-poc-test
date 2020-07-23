import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abs-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  @Input() width = 630;
  @Input() heading = 'Sign in with your ABS account';

  constructor() {}

  ngOnInit(): void {}
}
