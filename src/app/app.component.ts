import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fiftythirtytwenty';
  fifty = "50";
  thirty = "30";
  twenty = "20";
  messageDisplay = 'none';
  numberRequired = '';
  featureMessage = '';

  calcBudget(budget:any){
    this.messageDisplay = 'flex';
    this.numberRequired = '';
    this.fifty = (parseInt(budget.target.value) * 0.50).toFixed(2).toString();
    this.thirty = (parseInt(budget.target.value) * 0.30).toFixed(2).toString();
    this.twenty = (parseInt(budget.target.value) * 0.20).toFixed(2).toString();
    if(isNaN(budget.target.value) || budget.target.value == ''){
      this.numberRequired = 'please enter a valid number'
      this.messageDisplay = 'none'
      this.fifty = "50";
      this.thirty = "30";
      this.twenty = "20";
    }
  }

  noFeatureYet(){
    if(this.featureMessage == ''){
      this.featureMessage = 'feature not available yet';
    }else{
      this.featureMessage = '';
    }
  }

}
