/*  This code can not be expected form even a 5 year old 
    who has started to learn programming. I am proud of it though XD
*/
#include<iostream>
using namespace std;
class LameFizzBuzz {
    int lastCounter, currentCounter, max;
public:
    //Constructor to initiate the counter variables
    LameFizzBuzz(int iValue, int limit) {
        lastCounter = iValue;
        max = limit;
        currentCounter = lastCounter + 1;
    }
    //Beware: the following function conatins infinitely many return statements.
    void printFizzBuzz() {
        int flag = 0;         //Because why not abuse flag.

        for(int j = 0; j <= max; j+= 15) {
            if(currentCounter == j) {
                flag = 1;
                cout << "FizzBuzz" << endl;
                return;
            }
        }

        for(int j = 0; j <= max; j+= 5) {
            if(flag) return;
            if(currentCounter == j) {
                flag = 1;
                cout << "Buzz" << endl;
                return;
            }
        }

        for(int j = 0; j <= max; j+= 3) {
            if(flag) return;
            if(currentCounter == j) {
                cout << "Fizz" << endl;
                return;
            }
        }
        cout << currentCounter << endl;
    }
};

int main() {
    int limit, i;
    i = 0;
    limit = 1000;
    do {
        LameFizzBuzz object(i++, limit); // let's abuse the memory
        object.printFizzBuzz();
    }while(i < limit);
}