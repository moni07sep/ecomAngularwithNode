export class Regx {
    static Username(control) {
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {username:true}
    }
    static Password(control) {
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {password:true}
    }
    static Email(control) {
        let regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {email:true}
     }
    static Userid(control) { 
        let regx = /^[a-zA-Z0-9]+$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {userid:true}
    }
    static MobileNo(control) {
        let regx = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {mobileNo:true}
    }
    static FirstCharCapital(control){
        let regx = /^[A-Z][a-z0-9_-]{1,19}$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : {firstCharCapital:true}
    }
    static ddmmyyyyDate(control){
        let regx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? "09-09-99" : {ddmmyyyyDate:true}
    }
}