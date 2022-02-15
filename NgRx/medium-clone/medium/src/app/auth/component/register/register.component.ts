import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selector';
import { IAppState } from '../../../shared/types/appState.interfaces';
import { IRegisterRequest } from '../../types/registerRequest.interface';
import { IBackendErrors } from '../../../shared/types/backendErrors.interface';


@Component({
  selector: 'mc-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>


  constructor(
    private fb: FormBuilder,
    // private store: Store,
    private store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })

    // console.log('valid', this.form.valid)
    // console.log('invalid', this.form.invalid)
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    // console.log('isSubmitting$', this.isSubmitting$);
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    console.log('onSubmit', this.form.value);
    const request: IRegisterRequest = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}));
  }


}
