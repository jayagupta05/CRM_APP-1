import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Controllers } from 'src/app/models/controllers';
import { IConfig } from 'src/app/models/iconfig';
import { LoginDetail } from 'src/app/models/logindetail.model';
import { ReturnResult } from 'src/app/models/return-result';
import { UserDetail } from 'src/app/models/userdetail.model';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base/base.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>
  ) {
    super(httpClient, config.getSettingsObject().apiUrl);
  }

  public async getUserDetails(
    loginDetailData: LoginDetail
  ): Promise<ReturnResult<UserDetail>> {
    return this.PostReturn<LoginDetail, ReturnResult<UserDetail>>(
      this.controllers.login,
      loginDetailData
    );
  }

  public async getUsers(
    userDetailData: UserDetail
  ): Promise<ReturnResult<UserDetail[]>> {
    return this.PostReturn<UserDetail, ReturnResult<UserDetail[]>>(
      this.controllers.getuserdetails,
      userDetailData
    );
  }
}
