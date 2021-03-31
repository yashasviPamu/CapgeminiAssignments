function BankAccount(accountNumber,accountHolderName,accountBalance,isSalary,odLimit,amount)
{
this.accountNumber=accountNumber;
this.accountHolderName=accountHolderName;
this.accountBalance=accountBalance;
this.isSalary=isSalary;
this.odLimit=odLimit;
this.amount=amount;


if(this.isSalary==true)
{
   if(this.accountBalance>this.amount)
     {
         this.accountBalance=this.accountBalance-(this.amount);
         console.log(this.accountBalance);
     }
    else
    {
    console.log("Insufficient funds");
    }
}
else
{
     if(this.amount < this.accountBalance + this.odLimit)
      {
                  this.accountBalance =this.accountBalance- this.amount;
                  console.log(this.accountBalance);
      }
     else
     {
     console.log('Insufficient Funds');
     }
}
}
Savings=new BankAccount(150,"Yash",1000,true,0,150);
Current=new BankAccount(300,"Yashasvi",2000,false,100,300);
