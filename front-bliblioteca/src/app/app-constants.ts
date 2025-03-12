import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class AppConstants {

  private get baseUrl(): string {
    return "http://localhost/api"
  }

  public get AutorsUrl():string{
    return this.baseUrl + "api/autor";
  }

  public get loginUrl(): string {
    return this.baseUrl + "/user/login";
  }

  public get booksUrl(): string {
    return this.baseUrl + "/book";
  }

  public get GenresUrl():string{
    return this.baseUrl + "/genre";
  }

}
