/**
 * 
 */
import java.util.function.IntPredicate;
import java.util.stream.IntStream;
/**
 * @author Jay Patel
 *
 */

/*
 * Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print “Fizz” instead of the number and 
 * for the multiples of five print “Buzz”. For numbers which are 
 * multiples of both three and five print "FizzBuzz"
 * */
public class Java8Predicates {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		// Predicates are just lambda functions !
		IntPredicate divideBy3 = s -> {
			return s%3==0;
		};
		
		IntPredicate divideBy5 = s-> {
			return s%5 == 0;
		};
		// You can make new predicates using other predicates!
		// But it is not required here :(
		IntPredicate divideByNone = divideBy3.negate().and(divideBy5.negate());
		
		IntStream.range(1,100).forEach(i -> {
			String s  = "";
			s = divideBy3.test(i) ? "Fizz " : "";
			s += divideBy5.test(i) ? "Buzz " : "";
			if(!s.isEmpty()) System.out.println(s);
		});

	}

}
