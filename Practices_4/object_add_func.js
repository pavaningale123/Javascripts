let emp ={
    eid:1212,
    ename:"pavan",
    esal:1234,
    bonous:function calbonous()
    {
            return ((this.esal*10)/100)
    }
}
console.log(emp.bonous())