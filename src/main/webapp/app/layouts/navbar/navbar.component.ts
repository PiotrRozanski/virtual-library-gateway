import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Component({
    selector: 'jhi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        'navbar.css'
    ]
})
export class NavbarComponent implements OnInit {
    headers: Headers;
    options: RequestOptions;
    jsonRespose: Observable<any>;

    constructor(private http: Http, private router: Router) {
        this.headers = new Headers(
            {
                'Access-Control-Allow-Origin': '*'
            }
        );
        this.options = new RequestOptions({ headers: this.headers });
    }

    ngOnInit(): void {
    }

    private downloadEbooksFromGoogle(options: RequestOptions) {
        this.http.get('http://localhost:8080/virtuallibrary/google/books/download/details', options).subscribe(
            () => {console.log('Preparing...') },
            err => console.log('The details of books can not be downloaded with Google Books API. Error code: %s, URL: %s', err.status, err.url),
            () => console.log('The details of books have been successfully downloaded with Google Books API'));

    }

    public async downloadAllEbooks(options: RequestOptions) {
        Observable.interval(2000).subscribe(() => this.downloadEbooksFromGoogle(options));
        this.http.get('http://localhost:8080/virtuallibrarydropbox/dropbox/download/ebooks', options).subscribe(
            () => {
                console.log('Preparing...')
            },
            err => console.log('The books can not be downloaded with Dropbox. Error code: %s, URL: %s', err.status, err.url),
            () => console.log('The files have been successfully downloaded with Dropbox'));

    }
}
