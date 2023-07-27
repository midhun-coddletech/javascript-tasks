/* eslint-disable no-console */
console.log(`Question 3: Create a private variable and console it by accessing it.`);
class MyVar {
    constructor() {
        this._privateVariable = 'Private variable';
    }

    printPrivateVariable() {
        console.log(this._privateVariable);
    }
}
const variableClass = new MyVar();
variableClass.printPrivateVariable();

console.log(`Question 4: Create a static variable and console it by accessing it.`);

const StaticVariable = {
    static_variable: 1,
    get_static_var() {
        return this.static_variable;
    },
};
console.log(StaticVariable.get_static_var());
