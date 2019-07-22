import { Component } from "@angular/core";
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.css"]
})
export class ProfileEditorComponent {
  profileForm: FormGroup;
  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      address: {
        street: "123 Drew Street"
      }
    });
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      lastName: [""],
      address: this.fb.group({
        street: [""],
        city: [""],
        state: [""],
        zip: [""]
      }),
      aliases: this.fb.array([this.fb.control("")])
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get name() {
    return this.profileForm.get("firstname");
  }
}
