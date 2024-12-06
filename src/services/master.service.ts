import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProject } from "../models/interfaces/IProject";
import { APIResponse } from "../models/interfaces/APIResponse";

@Injectable({
  providedIn: "root"
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<APIResponse> {
    return this.http.get<APIResponse>("https://localhost:7152/api/projects");
  }
  getOneProject(projectId: string | null): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      `https://localhost:7152/api/projects/${projectId}`
    );
  }
}
