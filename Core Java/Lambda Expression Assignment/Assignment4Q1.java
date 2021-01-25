package JavaFiles;

import java.util.Scanner;

public class Assignment4Q1 {
    public double addition(int num1,int num2){
		return num1+num2;}
    public double subtraction(int num1,int num2){
		return num1-num2;}
    public double multiplication(int num1,int num2){
		return num1*num2;}
    public double division(int num1,int num2){
		return num1/num2;}
    public static void main(String[] args) {
    	Scanner scan=new Scanner(System.in);
    	int a,b;
    	a=scan.nextInt();
    	b=scan.nextInt();
    	Assignment4Q1 answer=new Assignment4Q1();
    	System.out.println(answer.addition(a,b));
    	System.out.println(answer.subtraction(a,b));
    	System.out.println(answer.multiplication(a,b));
    	System.out.println(answer.division(a,b));
    }
}
