/*class to hold the Bank Account properties 
    export keyword allows to acces the class by other components
    **Note:- property names must match with the spring boot entity class during cross linking
*/
export class Bank {
    accNumber !: number;
    customerName !: string;
    accBalance !: number;   
}