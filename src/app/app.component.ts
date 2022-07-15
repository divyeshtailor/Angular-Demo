import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-angula';
  data: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.functionCalled();
  }

  functionCalled() {
    // this.http.get('http://localhost:8080/api/tutorials').subscribe((res) => {
    //   this.data = res;
    // });
  }
}
