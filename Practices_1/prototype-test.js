function employee()
{
    this.ename="Pavan"
}
employee.prototype.esal=200000;
let obj = new employee();
console.log(obj.ename,obj.esal)