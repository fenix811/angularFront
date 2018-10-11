import { Component, OnInit } from '@angular/core';
import Company from '../interfaces/company';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  selectedCompany: Company = null;
  companies: Company[];

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getCompanies().pipe().subscribe(res => {
      this.companies = res;
    });

  }

  onSelect(company: Company) {
    this.selectedCompany = company;
  }

}
