import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ProductPage } from './app.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: ProductPage;
  thumbnailIndex: number = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log("start");
    this.appService.getItems().subscribe(
      page => {
        this.page = page;
      }
    );
  }

  showImage(event) {
    event.target.parentElement.querySelector("#thumbnails").classList.remove("hidden");
  }

  hideImage(event) {
    event.target.parentElement.classList.add("hidden");
    this.thumbnailIndex = 0;
  }

  prevImg(maxLength) {
    this.thumbnailIndex = this.thumbnailIndex == 0 ? maxLength - 1 : this.thumbnailIndex - 1;
  }

  nextImg(maxLength: number) {
    this.thumbnailIndex = this.thumbnailIndex == maxLength - 1 ? 0 : this.thumbnailIndex + 1;
    console.log(this.thumbnailIndex);
  }
}
