import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { placementService} from './placement.service'; 
import { Placement } from './placement.model'; 

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  title = 'placementservice';
  placementDetails: Placement[] = [];  

  // Model structure for the placement to be updated
  placementToUpdate: Placement = {
    id: 0,
    companyName: '',
    jobTitle: '',
    placementDate:new Date(),
    studentId: 0
  };

  constructor(private placementService: placementService) {}

  ngOnInit() {
    this.getAllPlacement();
  }

  // Fetch all placements from the backend
  getAllPlacement() {
    this.placementService.getAllPlacement().subscribe(
      (data: Placement[]) => {
        this.placementDetails = Array.isArray(data) ? data : []; 
      },
      (err: any) => console.error('Error fetching placement:', err)
    );
  }

  // Register a new placement
  register(registerForm: NgForm) {
    if (registerForm.invalid) return;

    // Pass the form values to add a new placement
    this.placementService.createPlacement(registerForm.value).subscribe(
      (response) => {
        registerForm.reset();
        this.getAllPlacement();
      },
      (error) => {
        console.error('Error adding placement:', error);
      }
    );
  }

  // Open the edit form and pre-fill with current placement data
  edit(placement: Placement) {
    this.placementToUpdate = { ...placement };
  }

  // Update the placement data
  updatePlacement() {
    if (!this.placementToUpdate.id) return;

    this.placementService.updatePlacement(this.placementToUpdate).subscribe(
      (response: any) => {
        this.getAllPlacement();
        this.closeModal();
      },
      (error: any) => {
        console.error('Error updating placement :', error);
      }
    );
  }

  // Delete a placement
  deletePlacement(placement: Placement) {
    console.log('Delete placement:', placement);
    this.placementService.deletePlacement(placement.id).subscribe(
      () => this.getAllPlacement(),
      (err: any) => console.error('Error deleting placement:', err)
    );
  }

  // Close the modal after update
  closeModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.hide();
    }
  }
}
