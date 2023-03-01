import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MockService } from 'src/app/shared/mock/mock.service';
import { Product, Products } from 'src/app/shared/models/product';
import { CdkLayoutService } from 'src/app/shared/service/cdk-layout.service';
import { swapAnimation } from '../animate/animate-triger';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [swapAnimation]
})
export class HomeComponent implements OnInit {
  smallSize?: boolean;
  products: Product[] = <Product[]>[];
  activeCategory: any;

  // resbonse on slider caption animation 
  slide = false;
  direction = 'inital'
  timeOut: any;

  /*Slider Image list  */
  bgImgList: string[] = []
  index: number = 0
  constructor(
    private mockDate: MockService,
    private layout: CdkLayoutService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  /*on component init trace the url query and call cdkLayout 
  Service that resbonse on handling of responsive of application  */
  ngOnInit(): void {
    this.products = new Products(this.mockDate.products).products
    this.bgImgList = this.mockDate.bgImages
    this.layout.isSmallMode.pipe(
      switchMap(isTabletMode => {
        this.smallSize = isTabletMode
        return this.router.queryParamMap
      }))
      .subscribe(param => this.setCategoryNavigator(param.get('category')))
  }

  /**
   * @param param string value carry selected category 
   * @summary determine which products to view, which is only activated when the application is in tablet mode. .
   * @example setCategoryNavigator(param.get('category'))
   * @example param:ActivatedRouteSnapshot.paramMap
   */

  private setCategoryNavigator(param: string | null) {
    this.activeCategory = param

    this.smallSize ?
      !this.activeCategory ? this.route.navigate(['/'], { queryParams: { 'category': 'new' } }) : null :
      this.route.navigate(['/'])

  }
  /**
   * @param direction string input indicate the direction of animation (right,left)
   * @implements this method has Trick that after 600ms it set slide propery to true to 
   * return the state in animation trigger to initial state
   */

  bgCaptionImg(direction: string) {
    this.direction = direction
    this.slide = false

    // // to make change in state of animation sensor
    this.timeOut = setTimeout(() => {
      // this mean return to initial state 
      this.slide = true
    }, 600);
  }
}
