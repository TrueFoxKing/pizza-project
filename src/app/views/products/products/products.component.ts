import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductType[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap( () => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log(' next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
    // this.products = this.productService.getProducts();
  }
}
