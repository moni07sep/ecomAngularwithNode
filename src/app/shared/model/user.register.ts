export interface IRegister{
    firstName: string,
    lastName:  string,
    newsLaterCheck:boolean,
    userLogin: {
        emailId: string,
        password: string
    },
    termAcceptCheck:boolean ,
    resetPasswordKey:string,
    resetPasswordExpire:string,
    isAdmin:boolean,
    recordDate:string,
    updateDate:string
    
}

export interface ILogin{
    userLogin: {
        emailId: string,
        password: string
    }
}