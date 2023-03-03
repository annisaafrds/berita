import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/Material-Module';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
