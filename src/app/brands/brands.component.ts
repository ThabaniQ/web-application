import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: any[] = [];
  searchText: string = ''; 

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.apiService.getBrands().subscribe((brandsData: any) => {
      this.brands = brandsData;

      this.brands.forEach(brand => {
        this.apiService.getBrandByName(brand.brandName).subscribe((imageData: any) => {
          brand.svgImage = this.sanitizer.bypassSecurityTrustHtml(imageData.svgImage);
        });
      });
    });
  }


  filterBrands() {
    if (!this.searchText) {
      return this.brands; 
    }

    return this.brands.filter(brand =>
      brand.brandName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
