import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredinitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='0';
  enteredDuration='0';


  onSubmit(){
    console.log("Submit");
  }
}
