package JavaFiles;

import java.util.Scanner;

class ResultDeclaration{
    public String declareResults( double subject1Marks, double subject2Marks, double subject3Marks) {
    	String str=" ";
        if((subject1Marks+subject2Marks+subject3Marks)<60||subject1Marks>60||subject2Marks>60||subject3Marks>60)
        {
            str="failed";
        }
        else if((subject1Marks+subject2Marks>60)||(subject2Marks+subject3Marks>60)||(subject3Marks+subject1Marks>60))
        {
            str= "passed\npromoted";
        }
        else if ((subject1Marks+subject2Marks+subject3Marks)>60)
        {
            str="passed";
        }

        return str;
    	
    }
}
public class Assignment1Q4 {
    public static void main(String[] args) {
    	int sub1,sub2,sub3;
    	Scanner scan=new Scanner(System.in);
    	sub1=scan.nextInt();
    	sub2=scan.nextInt();
    	sub3=scan.nextInt();
    	ResultDeclaration result=new ResultDeclaration();
    	System.out.println(result.declareResults(sub1, sub2, sub3));
    }
}

