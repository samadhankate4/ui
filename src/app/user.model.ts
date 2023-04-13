export class User{
    constructor(public email:string,public id:string,private _token:string,private _tokenExpirationDate:Date){

    }
// can be used to access User.token property  special kind of method
    get token(){
        if(!this._tokenExpirationDate|| new Date()>this._tokenExpirationDate){
            return null;
        }
        return this._token;

    }
}