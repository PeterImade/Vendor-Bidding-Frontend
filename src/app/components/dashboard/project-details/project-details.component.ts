import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../../../services/master.service';
import { APIResponse } from '../../../../models/interfaces/APIResponse';

@Component({
  selector: 'app-project-details',
  imports: [FormsModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  
  project: any;

  route = inject(ActivatedRoute)
  masterService = inject(MasterService)

  ngOnInit(): void { 
    const projectId = this.route.snapshot.paramMap.get('id');
    
    this.masterService.getOneProject(projectId).subscribe((response: APIResponse) => {
    }); 
  }

  bidAmount: number = 0

  onSubmitBid() {
    
  }
}
