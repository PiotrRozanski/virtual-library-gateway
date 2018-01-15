import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'
import { EbookCard } from './ebook-card';

@Component({
    selector: 'jhi-ebook-card',
    templateUrl: './ebook-card.component.html',
    styleUrls: ['ebook-card.component.css']
})
export class EbookCardComponent implements OnInit {
    public ebooks: Array<EbookCard> = [];

    jsonRespose: Observable<any>;

    constructor(private http: Http) {
        const headers = new Headers(
            {
                'Access-Control-Allow-Origin': '*'
            }
        );
        const options = new RequestOptions({headers: headers});

        this.getDetailsOfEbooks(options);
    }

    ngOnInit(): void {
        this.jsonRespose.subscribe(
            data => {
                if (Array.isArray(data)) {
                    console.log(data);
                    this.ebooks = data;
                } else {
                    this.ebooks.push(data);
                }
            },
            err => console.log('The books can not be downloaded. Error code: %s, URL: %s', err.status, err.url),
            () => console.log('The files have been successfully downloaded'))
    }

    private getDetailsOfEbooks(options: RequestOptions) {
        this.jsonRespose = this.http.get('http://localhost:8080/virtuallibrary/google/books/details', options)
            .map(res => res.json())
    }
}
