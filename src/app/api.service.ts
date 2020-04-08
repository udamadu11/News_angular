import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = 'e69ccc2a5fd348f78df8722bbda96ae4';
  constructor(private api: HttpClient) { }

  getNews():Observable<NewsComponent[]>{
    return this.api.get<NewsComponent[]>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
