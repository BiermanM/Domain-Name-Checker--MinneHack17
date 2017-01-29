#include <iostream>
#include <iomanip>
#include <string>
#include <math.h>   // used for log (which is ln)
#include <cmath>
using namespace std;

double ratingBasedOnLength(string str)
{
    // Max number of characters for a domain name (excluding extension) is 253 characters
    double x = (1.8 * (log(4 * pow(str.length(), 2)))) - 4;
    if (x > 10)
        x = 10;
    else if (x < 0)
        x = 0;
    return abs(10 - x);
}

double ratingBasedOnKeyDist(string str)
{
    double total = 0;

    for (int index = 0; index < str.length() - 1; index++)
    {
        char ch1 = str[index];
        char ch2 = str[index + 1];

        if (ch1 >= 65 && ch1 <= 90)
            ch1 += 32;
        if (ch2 >= 65 && ch2 <= 90)
            ch2 += 32;


        else if (ch1 == 'a')
        {
            if (ch2 == 'q' || ch2 == 'w' || ch2 == 's' || ch2 == 'z')
                total += 1;
            else if (ch2 == '1' || ch2 == '2' || ch2 == '3' || ch2 == 'e' || ch2 == 'd' || ch2 == 'x')
                total += 2;
            else if (ch2 == '4' || ch2 == 'r' || ch2 == 'f' || ch2 == 'c')
                total += 3;
            else if (ch2 == '5' || ch2 == 't' || ch2 == 'g' || ch2 == 'v')
                total += 4;
            else if (ch2 == '6' || ch2 == 'y' || ch2 == 'h' || ch2 == 'b')
                total += 5;
            else if (ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'n')
                total += 6;
            else if (ch2 == '8' || ch2 == 'i' || ch2 == 'k' || ch2 == 'm')
                total += 7;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 8;
            else if (ch2 == '0' || ch2 == 'p')
                total += 9;
        }
        else if (ch1 == 'b')
        {
            if (ch2 == 'v' || ch2 == 'g' || ch2 == 'h' || ch2 == 'n')
                total += 1;
            else if (ch2 == 'c' || ch2 == 'f' || ch2 == 't' || ch2 == 'y' || ch2 == 'j' || ch2 == 'm')
                total += 2;
            else if (ch2 == 'v' || ch2 == 'g' || ch2 == 'h' || ch2 == 'n')
                total += 3;
            else if (ch2 == 'x' || ch2 == 'd' || ch2 == 'r' || ch2 == '5' || ch2 == '6' || ch2 == '7' || ch2 == 'u' || ch2 == 'k')
                total += 4;
            else if (ch2 == 'z' || ch2 == 's' || ch2 == 'e' || ch2 == '4' || ch2 == '8' || ch2 == 'i' || ch2 == 'l')
                total += 5;
            else if (ch2 == 'a' || ch2 == 'w' || ch2 == '3' || ch2 == '9' || ch2 == 'o')
                total += 6;
            else if (ch2 == 'q' || ch2 == '2' || ch2 == '0' || ch2 == 'p')
                total += 7;
            else if (ch2 == '1')
                total += 8;
        }
        else if (ch1 == 'c')
        {
            if (ch2 == 'x' || ch2 == 'd' || ch2 == 'f' || ch2 == 'v')
                total += 1;
            else if (ch2 == 'z' || ch2 == 's' || ch2 == 'e' || ch2 == 'r' || ch2 == 'g' || ch2 == 'b')
                total += 2;
            else if (ch2 == 'a' || ch2 == 'w' || ch2 == '3' || ch2 == '4' || ch2 == '5' || ch2 == 't' || ch2 == 'h' || ch2 == 'n')
                total += 3;
            else if (ch2 == 'q' || ch2 == '2' || ch2 == '6' || ch2 == 'y' || ch2 == 'j' || ch2 == 'm')
                total += 4;
            else if (ch2 == '1' || ch2 == '7' || ch2 == 'u' || ch2 == 'k')
                total += 5;
            else if (ch2 == '8' || ch2 == 'i' || ch2 == 'l')
                total += 6;
            else if (ch2 == '9' || ch2 == 'o')
                total += 7;
            else if (ch2 == '0')
                total += 8;
        }
        else if (ch1 == 'd')
        {
            if (ch2 == 'w' || ch2 == 's' || ch2 == 'x' || ch2 == 'c' || ch2 == 'f' || ch2 == 'r' || ch2 == 'e')
                total += 1;
            else if (ch2 == 'z' || ch2 == 'a' || ch2 == 'q' || ch2 == '2' || ch2 == '3' || ch2 == '4' || ch2 == '5' || ch2 == 't' || ch2 == 'g' || ch2 == 'v')
                total += 2;
            else if (ch2 == '1' || ch2 == '6' || ch2 == 'y' || ch2 == 'h' || ch2 == 'b')
                total += 3;
            else if (ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'n')
                total += 4;
            else if (ch2 == '8' || ch2 == 'i' || ch2 == 'k' || ch2 == 'm')
                total += 5;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 6;
            else if (ch2 == '0' || ch2 == 'p')
                total += 7;
        }
        else if (ch1 == 'e')
        {
            if (ch2 == 'w' || ch2 == 's' || ch2 == 'd' || ch2 == 'f' || ch2 == 'r' || ch2 == '4' || ch2 == '3' || ch2 == '2')
                total += 1;
            else if (ch2 == '1' || ch2 == 'q' || ch2 == 'a' || ch2 == 'z' || ch2 == 'x' || ch2 == 'c' || ch2 == 'v' || ch2 == 'g' || ch2 == 't' || ch2 == '5')
                total += 2;
            else if (ch2 == '6' || ch2 == 'y' || ch2 == 'h' || ch2 == 'b')
                total += 3;
            else if (ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'n')
                total += 4;
            else if (ch2 == '8' || ch2 == 'i' || ch2 == 'k' || ch2 == 'm')
                total += 5;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 6;
            else if (ch2 == '0' || ch2 == 'p')
                total += 7;
        }
        else if (ch1 == 'f')
        {
            if (ch2 == 'r' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c' || ch2 == 'v' || ch2 == 'g' || ch2 == 't')
                total += 1;
            else if (ch2 == 'x' || ch2 == 's' || ch2 == 'w' || ch2 == '3' || ch2 == '4' || ch2 == '5' || ch2 == '6' || ch2 == 'y' || ch2 == 'h' || ch2 == 'b')
                total += 2;
            else if (ch2 == 'z' || ch2 == 'a' || ch2 == 'q' || ch2 == '2' || ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'n')
                total += 3;
            else if (ch2 == '1' || ch2 == '8' || ch2 == 'i' || ch2 == 'k' || ch2 == 'm')
                total += 4;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 5;
            else if (ch2 == '0' || ch2 == 'p')
                total += 6;
        }
        else if (ch1 == 'g')
        {
            if (ch2 == 'v' || ch2 == 'f' || ch2 == 'r' || ch2 == 't' || ch2 == 'y' || ch2 == 'h' || ch2 == 'b')
                total += 1;
            else if (ch2 == 'c' || ch2 == 'd' || ch2 == 'e' || ch2 == '4' || ch2 == '5' || ch2 == '6' || ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'n')
                total += 2;
            else if (ch2 == 'x' || ch2 == 's' || ch2 == 'w' || ch2 == '3' || ch2 == '8' || ch2 == 'i' || ch2 == 'k' || ch2 == 'm')
                total += 3;
            else if (ch2 == 'z' || ch2 == 'a' || ch2 == 'q' || ch2 == '2' || ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 4;
            else if (ch2 == '1' || ch2 == '0' || ch2 == 'p')
                total += 5;
        }
        else if (ch1 == 'h')
        {
            if (ch2 == 'y' || ch2 == 't' || ch2 == 'g' || ch2 == 'b' || ch2 == 'n' || ch2 == 'j' || ch2 == 'u')
                total += 1;
            else if (ch2 == 'v' || ch2 == 'f' || ch2 == 'r' || ch2 == '5' || ch2 == '6' || ch2 == '7' || ch2 == '8' || ch2 == 'i' || ch2 == 'k' || ch2 == 'm')
                total += 2;
            else if (ch2 == 'c' || ch2 == 'd' || ch2 == 'e' || ch2 == '4' || ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 3;
            else if (ch2 == 'x' || ch2 == 's' || ch2 == 'w' || ch2 == '3' || ch2 == 'p' || ch2 == '0')
                total += 4;
            else if (ch2 == 'z' || ch2 == 'a' || ch2 == 'q' || ch2 == '2')
                total += 5;
            else if (ch2 == '1')
                total += 6;
        }
        else if (ch1 == 'i')
        {
            if (ch2 == 'u' || ch2 == 'j' || ch2 == 'k' || ch2 == 'l' || ch2 == 'o' || ch2 == '9' || ch2 == '8')
                total += 1;
            else if (ch2 == '0' || ch2 == 'p' || ch2 == '7' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n' || ch2 == 'm')
                total += 2;
            else if (ch2 == '6' || ch2 == 't' || ch2 == 'g' || ch2 == 'b')
                total += 3;
            else if (ch2 == '5' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v')
                total += 4;
            else if (ch2 == '4' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c')
                total += 5;
            else if (ch2 == '3' || ch2 == 'w' || ch2 == 's' || ch2 == 'x')
                total += 6;
            else if (ch2 == '2' || ch2 == 'q' || ch2 == 'a' || ch2 == 'z')
                total += 7;
            else if (ch2 == '1')
                total += 8;
        }
        else if (ch1 == 'j')
        {
            if (ch2 == 'u' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n' || ch2 == 'm' || ch2 == 'k' || ch2 == 'i')
                total += 1;
            else if (ch2 == 'b' || ch2 == 'g' || ch2 == 't' || ch2 == '6' || ch2 == '7' || ch2 == '8' || ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 2;
            else if (ch2 == '0' || ch2 == 'p' || ch2 == 'v' || ch2 == 'f' || ch2 == 'r' || ch2 == '5')
                total += 3;
            else if (ch2 == 'c' || ch2 == 'd' || ch2 == 'e' || ch2 == '4')
                total += 4;
            else if (ch2 == 'x' || ch2 == 's' || ch2 == 'w' || ch2 == '3')
                total += 5;
            else if (ch2 == 'z' || ch2 == 'a' || ch2 == 'q' || ch2 == '2')
                total += 6;
            else if (ch2 == '1')
                total += 7;
        }
        else if (ch1 == 'k')
        {
            if (ch2 == 'l' || ch2 == 'o' || ch2 == 'i' || ch2 == 'u' || ch2 == 'j' || ch2 == 'm')
                total += 1;
            else if (ch2 == 'p' || ch2 == '0' || ch2 == '9' || ch2 == '8' || ch2 == '7' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n')
                total += 2;
            else if (ch2 == 'b' || ch2 == 'g' || ch2 == 't' || ch2 == '6')
                total += 3;
            else if (ch2 == 'v' || ch2 == 'f' || ch2 == 'r' || ch2 == '5')
                total += 4;
            else if (ch2 == 'c' || ch2 == 'd' || ch2 == 'e' || ch2 == '4')
                total += 5;
            else if (ch2 == 'x' || ch2 == 's' || ch2 == 'w' || ch2 == '3')
                total += 6;
            else if (ch2 == 'z' || ch2 == 'a' || ch2 == 'q' || ch2 == '2')
                total += 7;
            else if (ch2 == '1')
                total += 8;
        }
        else if (ch1 == 'l')
        {
            if (ch2 == 'p' || ch2 == 'o' || ch2 == 'i' || ch2 == 'k')
                total += 1;
            else if (ch2 == '0' || ch2 == '9' || ch2 == '8' || ch2 == 'u' || ch2 == 'j' || ch2 == 'm')
                total += 2;
            else if (ch2 == '7' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n')
                total += 3;
            else if (ch2 == '6' || ch2 == 't' || ch2 == 'g' || ch2 == 'b')
                total += 4;
            else if (ch2 == '5' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v')
                total += 5;
            else if (ch2 == '4' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c')
                total += 6;
            else if (ch2 == '3' || ch2 == 'w' || ch2 == 's' || ch2 == 'x')
                total += 7;
            else if (ch2 == '2' || ch2 == 'q' || ch2 == 'a' || ch2 == 'z')
                total += 8;
            else if (ch2 == '1')
                total += 9;
        }
        else if (ch1 == 'm')
        {
            if (ch2 == 'k' || ch2 == 'j' || ch2 == 'n')
                total += 1;
            else if (ch2 == 'b' || ch2 == 'h' || ch2 == 'u' || ch2 == 'i' || ch2 == 'l')
                total += 2;
            else if (ch2 == 'o' || ch2 == '9' || ch2 == '8' || ch2 == '7' || ch2 == 'y' || ch2 == 'g' || ch2 == 'v')
                total += 3;
            else if (ch2 == 'c' || ch2 == 'f' || ch2 == 't' || ch2 == '6' || ch2 == '0' || ch2 == 'p')
                total += 4;
            else if (ch2 == '5' || ch2 == 'r' || ch2 == 'd' || ch2 == 'x')
                total += 5;
            else if (ch2 == 'z' || ch2 == 's' || ch2 == 'e' || ch2 == '4')
                total += 6;
            else if (ch2 == '3' || ch2 == 'w' || ch2 == 'a')
                total += 7;
            else if (ch2 == 'q' || ch2 == '2')
                total += 8;
            else if (ch2 == '1')
                total += 9;
        }
        else if (ch1 == 'n')
        {
            if (ch2 == 'm' || ch2 == 'j' || ch2 == 'h' || ch2 == 'b')
                total += 1;
            else if (ch2 == 'v' || ch2 == 'g' || ch2 == 'y' || ch2 == 'u' || ch2 == 'k')
                total += 2;
            else if (ch2 == 'c' || ch2 == 'f' || ch2 == 't' || ch2 == '6' || ch2 == '7' || ch2 == '8' || ch2 == 'i' || ch2 == 'l')
                total += 3;
            else if (ch2 == 'o' || ch2 == '9' || ch2 == 'x' || ch2 == 'd' || ch2 == 'r' || ch2 == '5')
                total += 4;
            else if (ch2 == 'p' || ch2 == '0' || ch2 == 'z' || ch2 == 's' || ch2 == 'e' || ch2 == '4')
                total += 5;
            else if (ch2 == 'a' || ch2 == 'w' || ch2 == '3')
                total += 6;
            else if (ch2 == 'q' || ch2 == '2')
                total += 7;
            else if (ch2 == '1')
                total += 8;
        }
        else if (ch1 == 'o')
        {
            if (ch2 == '0' || ch2 == '9' || ch2 == 'i' || ch2 == 'k' || ch2 == 'l' || ch2 == 'p')
                total += 1;
            else if (ch2 == '8' || ch2 == 'u' || ch2 == 'j' || ch2 == 'm')
                total += 2;
            else if (ch2 == '7' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n')
                total += 3;
            else if (ch2 == '6' || ch2 == 't' || ch2 == 'g' || ch2 == 'b')
                total += 4;
            else if (ch2 == '5' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v')
                total += 5;
            else if (ch2 == '4' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c')
                total += 6;
            else if (ch2 == '3' || ch2 == 'w' || ch2 == 's' || ch2 == 'x')
                total += 7;
            else if (ch2 == '2' || ch2 == 'q' || ch2 == 'a' || ch2 == 'z')
                total += 8;
            else if (ch2 == '1')
                total += 9;
        }
        else if (ch1 == 'p')
        {
            if (ch2 == '0' || ch2 == 'o' || ch2 == 'l')
                total += 1;
            else if (ch2 == '9' || ch2 == 'i' || ch2 == 'k')
                total += 2;
            else if (ch2 == '8' || ch2 == 'u' || ch2 == 'j' || ch2 == 'm')
                total += 3;
            else if (ch2 == '7' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n')
                total += 4;
            else if (ch2 == '6' || ch2 == 't' || ch2 == 'g' || ch2 == 'b')
                total += 5;
            else if (ch2 == '5' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v')
                total += 6;
            else if (ch2 == '4' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c')
                total += 7;
            else if (ch2 == '3' || ch2 == 'w' || ch2 == 's' || ch2 == 'x')
                total += 8;
            else if (ch2 == '2' || ch2 == 'q' || ch2 == 'a' || ch2 == 'z')
                total += 9;
            else if (ch2 == '1')
                total += 10;
        }
        else if (ch1 == 'q')
        {
            if (ch2 == 'w' || ch2 == 's' || ch2 == 'a' || ch2 == '1' || ch2 == '2')
                total += 1;
            else if (ch2 == 'e' || ch2 == 'd' || ch2 == 'x' || ch2 == 'z' || ch2 == '3')
                total += 2;
            else if (ch2 == 'r' || ch2 == 'f' || ch2 == 'c' || ch2 == '4')
                total += 3;
            else if (ch2 == 't' || ch2 == 'g' || ch2 == 'v' || ch2 == '5')
                total += 4;
            else if (ch2 == 'y' || ch2 == 'h' || ch2 == 'b' || ch2 == '6')
                total += 5;
            else if (ch2 == 'u' || ch2 == 'j' || ch2 == 'n' || ch2 == '7')
                total += 6;
            else if (ch2 == 'i' || ch2 == 'k' || ch2 == 'm' || ch2 == '8')
                total += 7;
            else if (ch2 == 'o' || ch2 == 'l' || ch2 == '9')
                total += 8;
            else if (ch2 == 'p' || ch2 == '0')
                total += 9;
        }
        else if (ch1 == 'w')
        {
            if (ch2 == '2' || ch2 == 'q' || ch2 == 'a' || ch2 == 's' || ch2 == 'd' || ch2 == 'e' || ch2 == '3')
                total += 1;
            else if (ch2 == '1' || ch2 == 'z' || ch2 == 'x' || ch2 == 'c' || ch2 == 'f' || ch2 == 'r' || ch2 == '4' || ch2 == '3')
                total += 2;
            else if (ch2 == 'v' || ch2 == 'g' || ch2 == 't' || ch2 == '5')
                total += 3;
            else if (ch2 == 'b' || ch2 == 'h' || ch2 == 'y' || ch2 == '6')
                total += 4;
            else if (ch2 == 'n' || ch2 == 'j' || ch2 == 'u' || ch2 == '7')
                total += 5;
            else if (ch2 == 'm' || ch2 == 'k' || ch2 == 'i' || ch2 == '8')
                total += 6;
            else if (ch2 == 'l' || ch2 == 'o' || ch2 == '9')
                total += 7;
            else if (ch2 == 'p' || ch2 == '0')
                total += 8;
        }
        else if (ch1 == 'x')
        {
            if (ch2 == 'z' || ch2 == 's' || ch2 == 'd' || ch2 == 'c')
                total += 1;
            else if (ch2 == 'a' || ch2 == 'w' || ch2 == 'e' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v')
                total += 2;
            else if (ch2 == 'q' || ch2 == '2' || ch2 == '3' || ch2 == '4' || ch2 == '5' || ch2 == 't' || ch2 == 'g' || ch2 == 'b')
                total += 3;
            else if (ch2 == '1' || ch2 == '6' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n')
                total += 4;
            else if (ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'm')
                total += 5;
            else if (ch2 == '8' || ch2 == 'i' || ch2 == 'k')
                total += 6;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 7;
            else if (ch2 == '0' || ch2 == 'p')
                total += 8;
        }
        else if (ch1 == 'y')
        {
            if (ch2 == '6' || ch2 == 't' || ch2 == 'g' || ch2 == 'h' || ch2 == 'j' || ch2 == 'u' || ch2 == '7')
                total += 1;
            else if (ch2 == '5' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v' || ch2 == 'b' || ch2 == 'n' || ch2 == 'm' || ch2 == 'k' || ch2 == 'i' || ch2 == '8')
                total += 2;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l' || ch2 == '4' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c')
                total += 3;
            else if (ch2 == '3' || ch2 == 'w' || ch2 == 's' || ch2 == 'x' || ch2 == '0' || ch2 == 'p')
                total += 4;
            else if (ch2 == '2' || ch2 == 'q' || ch2 == 'a' || ch2 == 'z')
                total += 5;
            else if (ch2 == '1')
                total += 6;
        }
        else if (ch1 == 'z')
        {
            if (ch2 == 'a' || ch2 == 's' || ch2 == 'x')
                total += 1;
            else if (ch2 == 'q' || ch2 == 'w' || ch2 == 'e' || ch2 == 'd' || ch2 == 'c')
                total += 2;
            else if (ch2 == '1' || ch2 == '2' || ch2 == '3' || ch2 == '4' || ch2 == 'r' || ch2 == 'f' || ch2 == 'v')
                total += 3;
            else if (ch2 == '5' || ch2 == 't' || ch2 == 'g' || ch2 == 'b')
                total += 4;
            else if (ch2 == '6' || ch2 == 'y' || ch2 == 'h' || ch2 == 'n')
                total += 5;
            else if (ch2 == '7' || ch2 == 'u' || ch2 == 'j' || ch2 == 'm')
                total += 6;
            else if (ch2 == '8' || ch2 == 'i' || ch2 == 'k')
                total += 7;
            else if (ch2 == '9' || ch2 == 'o' || ch2 == 'l')
                total += 8;
            else if (ch2 == '0' || ch2 == 'p')
                total += 9;
        }
    }

    return (10 - (total / (str.length() - 1)));
}

double ratingBasedOnExtension(string str)
{
    if (str.length() <= 2 && (str.length() == 1 || str[0] == str[1]))
        return 10;
    else if (str.length() <= 2)
        return 9.5;
    else if (str.length() <= 3)
        return 9;
    else if (str.length() <= 4)
        return 8;
    else if (str.length() > 4 && str.length() <= 13)
        return str.length() * 0.7;
    else // str.length() > 13
        return 0;
}

bool validation(string str)
{
    if (str.find('.') > str.length())
    {
        cout << "ERROR: Invalid domain name; needs an extension" << endl;
        return false;
    }
    else if (str.find('-') == 0 || str.find("-.") < str.length())
    {
        cout << "ERROR: Invalid domain name; cannot start or end with a hyphen" << endl;
        return false;
    }
    else
    {
        int periodIndex = str.find('.');
        string temp = str.substr(periodIndex + 1);
        if (!(temp.find('.') == 2 || temp.find('.') == 3 || temp.find('.') > temp.length()))
        {
            cout << "ERROR: Invalid domain name; only certain extensions are allowed to have two periods" << endl;
            return false;
        }

        for (int index = 0; index < str.length(); index++)
        {
            if (index == periodIndex || (str[index] == '.' && index > periodIndex))
                index++;
            if (!((str[index] >= 48 && str[index] <= 57) || str[index] == 45 || (str[index] >= 65 && str[index] <= 90) || (str[index] >= 97 && str[index] <= 122)))
            {
                cout << "ERROR: Invalid character \'" << str[index] << "\'; the only valid characters are: a-z, A-Z, 0-9, and -" << endl;
                return false;
            }
        }
    }

    return true;
}

int main()
{
    string websiteName;
    cout << "What is your website name?" << endl;
    cin >> websiteName;

    if (validation(websiteName))
    {
        int periodIndex = websiteName.find('.');

        // separates input into name and extension
        string extension = websiteName.substr(periodIndex + 1);
        websiteName = websiteName.substr(0, periodIndex);
        double rbol = ratingBasedOnLength(websiteName);
        double rbokd = ratingBasedOnKeyDist(websiteName) * 1.1; // adds a 10% increase
        double rboe = ratingBasedOnExtension(extension);
        double rbokde = ratingBasedOnKeyDist(extension) * 1.1; // adds a 10% increase
        cout << fixed << setprecision(1) << ((((rbol + rbokd) / 2) + (((rboe + rbokde) / 2)) * 1.05) / 2) << endl;
    }

    return 0;
}
