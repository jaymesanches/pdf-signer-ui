import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { take } from "rxjs/operators";
import { Certificate } from "./../models/certificate";
import { SignService } from "./../services/sign.service";
import { CertificatesDialogComponent } from "./certificates-dialog/certificates-dialog.component";

@Component({
  selector: "app-sign",
  templateUrl: "./sign.component.html",
  styleUrls: ["./sign.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SignComponent implements OnInit {
  form!: FormGroup;
  file!: File;
  filename: any;
  isPdf: any;
  data: any;

  constructor(
    private signService: SignService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      file: ["", Validators.required],
    });
  }

  public onFileChange(event: any) {
    // this.file = null;
    const files: File[] = event.target.files;
    if (files.length > 0) {
      this.file = files[0];
      this.filename = this.file.name;
      if (typeof FileReader !== "undefined") {
        const reader = new FileReader();

        reader.onloadend = (e: any) => {
          if (this.file.type === "application/pdf") {
            this.isPdf = true;
            this.data = e.target.result;
          } else {
            this.isPdf = false;
          }
        };

        reader.readAsArrayBuffer(this.file);
      }
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CertificatesDialogComponent);

    dialogRef.afterClosed().subscribe((result: Certificate) => {
      console.log(`Dialog result: ${result}`);

      const body = new FormData();
      body.append('file', this.file);
      body.append('certificate', JSON.stringify(result));

      this.signService
        .signA1(body)
        .pipe(take(1))
        .subscribe((data:any) => {
          const url = window.URL.createObjectURL(data)
          window.open(url);
        });
    });
  }

  reset(){
    this.form.reset();
    this.data = null;
  }

  get f() {
    return this.form.controls;
  }
}
