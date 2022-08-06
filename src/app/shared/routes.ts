import { environment } from "src/environments/environment";

export class Routes {

    static fetchLocalResponse = (pageName: string) => `${environment.apiUrl}/${pageName}.json`;

    static fetchServerResponse = (pageName: string) => `${environment.apiUrl}/${pageName}`;
}