import { Certificate } from "./../../models/certificate";
import { MatDialogRef } from "@angular/material/dialog";
import { CertificateService } from "./../../services/certificate.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-certificates-dialog",
  templateUrl: "./certificates-dialog.component.html",
  styleUrls: ["./certificates-dialog.component.css"],
})
export class CertificatesDialogComponent implements OnInit {
  certificates$!: Observable<Certificate[]>;
  selected!: Certificate;

  constructor(
    private certificateService: CertificateService,
    public dialogRef: MatDialogRef<CertificatesDialogComponent>
  ) {}

  ngOnInit(): void {
    this.certificates$ = this.certificateService.list();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
