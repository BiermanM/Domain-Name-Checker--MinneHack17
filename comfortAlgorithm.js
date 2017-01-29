function main(websiteName)
{
  if (validation(websiteName))
  {
      var periodIndex = websiteName.indexOf('.');

      // separates input into name and extension
      var extension = websiteName.substring(periodIndex + 1);
      websiteName = websiteName.substring(0, periodIndex);
      var rbol = ratingBasedOnLength(websiteName);
      var rbokd = ratingBasedOnKeyDist(websiteName) * 1.1; // adds a 10% increase
      var rboe = ratingBasedOnExtension(extension);
      var rbokde = ratingBasedOnKeyDist(extension) * 1.1; // adds a 10% increase
      var rating = Math.round (((((rbol + rbokd) / 2) + (((rboe + rbokde) / 2)) * 1.05) / 2) * 10) / 10;
      if (rating >= 6.5)
        alert( rating + " out of 10. You have a great domain name!" );
      else
      {
        if ( ((rbol + rbokd) / 2) < (((rboe + rbokde) / 2) * 1.05) )
          alert (rating + " out of 10. There may be a few things you could fix. How about choosing a shorter domain name?");
        else
          alert (rating + " out of 10. There may be a few things you could fix. How about choosing a shorter extension?");
      }
  }
}

function ratingBasedOnLength(str)
{
  // Max number of characters for a domain name (excluding extension) is 253 characters
  var x = (1.8 * (Math.log(4 * Math.pow(str.length, 2)))) - 4;
  if (x > 10)
      x = 10;
  else if (x < 0)
      x = 0;
  return Math.abs(10 - x);
}

function ratingBasedOnExtension(str)
{
  if (str.length <= 2 && (str.length == 1 || str.charCodeAt(0) == str.charCodeAt(1)))
      return 10;
  else if (str.length <= 2)
      return 9.5;
  else if (str.length <= 3)
      return 9;
  else if (str.length <= 4)
      return 8;
  else if (str.length > 4 && str.length <= 13)
      return str.length * 0.7;
  else // str.length > 13
      return 0;
}

function ratingBasedOnKeyDist(str)
{
  var total = 0;

  for (var index = 0; index < str.length - 1; index++)
  {
      var ch1 = str.charCodeAt(index);
      var ch2 = str.charCodeAt(index + 1);

      if (ch1 >= 65 && ch1 <= 90)
          ch1 += 32;
      if (ch2 >= 65 && ch2 <= 90)
          ch2 += 32;

      if (ch1 == 97)
      {
          if (ch2 == 113 || ch2 == 119 || ch2 == 115 || ch2 == 122)
              total += 1;
          else if (ch2 == 49 || ch2 == 50 || ch2 == 51 || ch2 == 101 || ch2 == 100 || ch2 == 120)
              total += 2;
          else if (ch2 == 52 || ch2 == 114 || ch2 == 102 || ch2 == 99)
              total += 3;
          else if (ch2 == 53 || ch2 == 116 || ch2 == 103 || ch2 == 118)
              total += 4;
          else if (ch2 == 54 || ch2 == 121 || ch2 == 104 || ch2 == 98)
              total += 5;
          else if (ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 110)
              total += 6;
          else if (ch2 == 56 || ch2 == 105 || ch2 == 107 || ch2 == 109)
              total += 7;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 8;
          else if (ch2 == 48 || ch2 == 112)
              total += 9;
      }
      else if (ch1 == 98)
      {
          if (ch2 == 118 || ch2 == 103 || ch2 == 104 || ch2 == 110)
              total += 1;
          else if (ch2 == 99 || ch2 == 102 || ch2 == 116 || ch2 == 121 || ch2 == 106 || ch2 == 109)
              total += 2;
          else if (ch2 == 118 || ch2 == 103 || ch2 == 104 || ch2 == 110)
              total += 3;
          else if (ch2 == 120 || ch2 == 100 || ch2 == 114 || ch2 == 53 || ch2 == 54 || ch2 == 55 || ch2 == 117 || ch2 == 107)
              total += 4;
          else if (ch2 == 122 || ch2 == 115 || ch2 == 101 || ch2 == 52 || ch2 == 56 || ch2 == 105 || ch2 == 108)
              total += 5;
          else if (ch2 == 97 || ch2 == 119 || ch2 == 51 || ch2 == 57 || ch2 == 111)
              total += 6;
          else if (ch2 == 113 || ch2 == 50 || ch2 == 48 || ch2 == 112)
              total += 7;
          else if (ch2 == 49)
              total += 8;
      }
      else if (ch1 == 99)
      {
          if (ch2 == 120 || ch2 == 100 || ch2 == 102 || ch2 == 118)
              total += 1;
          else if (ch2 == 122 || ch2 == 115 || ch2 == 101 || ch2 == 114 || ch2 == 103 || ch2 == 98)
              total += 2;
          else if (ch2 == 97 || ch2 == 119 || ch2 == 51 || ch2 == 52 || ch2 == 53 || ch2 == 116 || ch2 == 104 || ch2 == 110)
              total += 3;
          else if (ch2 == 113 || ch2 == 50 || ch2 == 54 || ch2 == 121 || ch2 == 106 || ch2 == 109)
              total += 4;
          else if (ch2 == 49 || ch2 == 55 || ch2 == 117 || ch2 == 107)
              total += 5;
          else if (ch2 == 56 || ch2 == 105 || ch2 == 108)
              total += 6;
          else if (ch2 == 57 || ch2 == 111)
              total += 7;
          else if (ch2 == 48)
              total += 8;
      }
      else if (ch1 == 100)
      {
          if (ch2 == 119 || ch2 == 115 || ch2 == 120 || ch2 == 99 || ch2 == 102 || ch2 == 114 || ch2 == 101)
              total += 1;
          else if (ch2 == 122 || ch2 == 97 || ch2 == 113 || ch2 == 50 || ch2 == 51 || ch2 == 52 || ch2 == 53 || ch2 == 116 || ch2 == 103 || ch2 == 118)
              total += 2;
          else if (ch2 == 49 || ch2 == 54 || ch2 == 121 || ch2 == 104 || ch2 == 98)
              total += 3;
          else if (ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 110)
              total += 4;
          else if (ch2 == 56 || ch2 == 105 || ch2 == 107 || ch2 == 109)
              total += 5;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 6;
          else if (ch2 == 48 || ch2 == 112)
              total += 7;
      }
      else if (ch1 == 101)
      {
          if (ch2 == 119 || ch2 == 115 || ch2 == 100 || ch2 == 102 || ch2 == 114 || ch2 == 52 || ch2 == 51 || ch2 == 50)
              total += 1;
          else if (ch2 == 49 || ch2 == 113 || ch2 == 97 || ch2 == 122 || ch2 == 120 || ch2 == 99 || ch2 == 118 || ch2 == 103 || ch2 == 116 || ch2 == 53)
              total += 2;
          else if (ch2 == 54 || ch2 == 121 || ch2 == 104 || ch2 == 98)
              total += 3;
          else if (ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 110)
              total += 4;
          else if (ch2 == 56 || ch2 == 105 || ch2 == 107 || ch2 == 109)
              total += 5;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 6;
          else if (ch2 == 48 || ch2 == 112)
              total += 7;
      }
      else if (ch1 == 102)
      {
          if (ch2 == 114 || ch2 == 101 || ch2 == 100 || ch2 == 99 || ch2 == 118 || ch2 == 103 || ch2 == 116)
              total += 1;
          else if (ch2 == 120 || ch2 == 115 || ch2 == 119 || ch2 == 51 || ch2 == 52 || ch2 == 53 || ch2 == 54 || ch2 == 121 || ch2 == 104 || ch2 == 98)
              total += 2;
          else if (ch2 == 122 || ch2 == 97 || ch2 == 113 || ch2 == 50 || ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 110)
              total += 3;
          else if (ch2 == 49 || ch2 == 56 || ch2 == 105 || ch2 == 107 || ch2 == 109)
              total += 4;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 5;
          else if (ch2 == 48 || ch2 == 112)
              total += 6;
      }
      else if (ch1 == 103)
      {
          if (ch2 == 118 || ch2 == 102 || ch2 == 114 || ch2 == 116 || ch2 == 121 || ch2 == 104 || ch2 == 98)
              total += 1;
          else if (ch2 == 99 || ch2 == 100 || ch2 == 101 || ch2 == 52 || ch2 == 53 || ch2 == 54 || ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 110)
              total += 2;
          else if (ch2 == 120 || ch2 == 115 || ch2 == 119 || ch2 == 51 || ch2 == 56 || ch2 == 105 || ch2 == 107 || ch2 == 109)
              total += 3;
          else if (ch2 == 122 || ch2 == 97 || ch2 == 113 || ch2 == 50 || ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 4;
          else if (ch2 == 49 || ch2 == 48 || ch2 == 112)
              total += 5;
      }
      else if (ch1 == 104)
      {
          if (ch2 == 121 || ch2 == 116 || ch2 == 103 || ch2 == 98 || ch2 == 110 || ch2 == 106 || ch2 == 117)
              total += 1;
          else if (ch2 == 118 || ch2 == 102 || ch2 == 114 || ch2 == 53 || ch2 == 54 || ch2 == 55 || ch2 == 56 || ch2 == 105 || ch2 == 107 || ch2 == 109)
              total += 2;
          else if (ch2 == 99 || ch2 == 100 || ch2 == 101 || ch2 == 52 || ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 3;
          else if (ch2 == 120 || ch2 == 115 || ch2 == 119 || ch2 == 51 || ch2 == 112 || ch2 == 48)
              total += 4;
          else if (ch2 == 122 || ch2 == 97 || ch2 == 113 || ch2 == 50)
              total += 5;
          else if (ch2 == 49)
              total += 6;
      }
      else if (ch1 == 105)
      {
          if (ch2 == 117 || ch2 == 106 || ch2 == 107 || ch2 == 108 || ch2 == 111 || ch2 == 57 || ch2 == 56)
              total += 1;
          else if (ch2 == 48 || ch2 == 112 || ch2 == 55 || ch2 == 121 || ch2 == 104 || ch2 == 110 || ch2 == 109)
              total += 2;
          else if (ch2 == 54 || ch2 == 116 || ch2 == 103 || ch2 == 98)
              total += 3;
          else if (ch2 == 53 || ch2 == 114 || ch2 == 102 || ch2 == 118)
              total += 4;
          else if (ch2 == 52 || ch2 == 101 || ch2 == 100 || ch2 == 99)
              total += 5;
          else if (ch2 == 51 || ch2 == 119 || ch2 == 115 || ch2 == 120)
              total += 6;
          else if (ch2 == 50 || ch2 == 113 || ch2 == 97 || ch2 == 122)
              total += 7;
          else if (ch2 == 49)
              total += 8;
      }
      else if (ch1 == 106)
      {
          if (ch2 == 117 || ch2 == 121 || ch2 == 104 || ch2 == 110 || ch2 == 109 || ch2 == 107 || ch2 == 105)
              total += 1;
          else if (ch2 == 98 || ch2 == 103 || ch2 == 116 || ch2 == 54 || ch2 == 55 || ch2 == 56 || ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 2;
          else if (ch2 == 48 || ch2 == 112 || ch2 == 118 || ch2 == 102 || ch2 == 114 || ch2 == 53)
              total += 3;
          else if (ch2 == 99 || ch2 == 100 || ch2 == 101 || ch2 == 52)
              total += 4;
          else if (ch2 == 120 || ch2 == 115 || ch2 == 119 || ch2 == 51)
              total += 5;
          else if (ch2 == 122 || ch2 == 97 || ch2 == 113 || ch2 == 50)
              total += 6;
          else if (ch2 == 49)
              total += 7;
      }
      else if (ch1 == 107)
      {
          if (ch2 == 108 || ch2 == 111 || ch2 == 105 || ch2 == 117 || ch2 == 106 || ch2 == 109)
              total += 1;
          else if (ch2 == 112 || ch2 == 48 || ch2 == 57 || ch2 == 56 || ch2 == 55 || ch2 == 121 || ch2 == 104 || ch2 == 110)
              total += 2;
          else if (ch2 == 98 || ch2 == 103 || ch2 == 116 || ch2 == 54)
              total += 3;
          else if (ch2 == 118 || ch2 == 102 || ch2 == 114 || ch2 == 53)
              total += 4;
          else if (ch2 == 99 || ch2 == 100 || ch2 == 101 || ch2 == 52)
              total += 5;
          else if (ch2 == 120 || ch2 == 115 || ch2 == 119 || ch2 == 51)
              total += 6;
          else if (ch2 == 122 || ch2 == 97 || ch2 == 113 || ch2 == 50)
              total += 7;
          else if (ch2 == 49)
              total += 8;
      }
      else if (ch1 == 108)
      {
          if (ch2 == 112 || ch2 == 111 || ch2 == 105 || ch2 == 107)
              total += 1;
          else if (ch2 == 48 || ch2 == 57 || ch2 == 56 || ch2 == 117 || ch2 == 106 || ch2 == 109)
              total += 2;
          else if (ch2 == 55 || ch2 == 121 || ch2 == 104 || ch2 == 110)
              total += 3;
          else if (ch2 == 54 || ch2 == 116 || ch2 == 103 || ch2 == 98)
              total += 4;
          else if (ch2 == 53 || ch2 == 114 || ch2 == 102 || ch2 == 118)
              total += 5;
          else if (ch2 == 52 || ch2 == 101 || ch2 == 100 || ch2 == 99)
              total += 6;
          else if (ch2 == 51 || ch2 == 119 || ch2 == 115 || ch2 == 120)
              total += 7;
          else if (ch2 == 50 || ch2 == 113 || ch2 == 97 || ch2 == 122)
              total += 8;
          else if (ch2 == 49)
              total += 9;
      }
      else if (ch1 == 109)
      {
          if (ch2 == 107 || ch2 == 106 || ch2 == 110)
              total += 1;
          else if (ch2 == 98 || ch2 == 104 || ch2 == 117 || ch2 == 105 || ch2 == 108)
              total += 2;
          else if (ch2 == 111 || ch2 == 57 || ch2 == 56 || ch2 == 55 || ch2 == 121 || ch2 == 103 || ch2 == 118)
              total += 3;
          else if (ch2 == 99 || ch2 == 102 || ch2 == 116 || ch2 == 54 || ch2 == 48 || ch2 == 112)
              total += 4;
          else if (ch2 == 53 || ch2 == 114 || ch2 == 100 || ch2 == 120)
              total += 5;
          else if (ch2 == 122 || ch2 == 115 || ch2 == 101 || ch2 == 52)
              total += 6;
          else if (ch2 == 51 || ch2 == 119 || ch2 == 97)
              total += 7;
          else if (ch2 == 113 || ch2 == 50)
              total += 8;
          else if (ch2 == 49)
              total += 9;
      }
      else if (ch1 == 110)
      {
          if (ch2 == 109 || ch2 == 106 || ch2 == 104 || ch2 == 98)
              total += 1;
          else if (ch2 == 118 || ch2 == 103 || ch2 == 121 || ch2 == 117 || ch2 == 107)
              total += 2;
          else if (ch2 == 99 || ch2 == 102 || ch2 == 116 || ch2 == 54 || ch2 == 55 || ch2 == 56 || ch2 == 105 || ch2 == 108)
              total += 3;
          else if (ch2 == 111 || ch2 == 57 || ch2 == 120 || ch2 == 100 || ch2 == 114 || ch2 == 53)
              total += 4;
          else if (ch2 == 112 || ch2 == 48 || ch2 == 122 || ch2 == 115 || ch2 == 101 || ch2 == 52)
              total += 5;
          else if (ch2 == 97 || ch2 == 119 || ch2 == 51)
              total += 6;
          else if (ch2 == 113 || ch2 == 50)
              total += 7;
          else if (ch2 == 49)
              total += 8;
      }
      else if (ch1 == 111)
      {
          if (ch2 == 48 || ch2 == 57 || ch2 == 105 || ch2 == 107 || ch2 == 108 || ch2 == 112)
              total += 1;
          else if (ch2 == 56 || ch2 == 117 || ch2 == 106 || ch2 == 109)
              total += 2;
          else if (ch2 == 55 || ch2 == 121 || ch2 == 104 || ch2 == 110)
              total += 3;
          else if (ch2 == 54 || ch2 == 116 || ch2 == 103 || ch2 == 98)
              total += 4;
          else if (ch2 == 53 || ch2 == 114 || ch2 == 102 || ch2 == 118)
              total += 5;
          else if (ch2 == 52 || ch2 == 101 || ch2 == 100 || ch2 == 99)
              total += 6;
          else if (ch2 == 51 || ch2 == 119 || ch2 == 115 || ch2 == 120)
              total += 7;
          else if (ch2 == 50 || ch2 == 113 || ch2 == 97 || ch2 == 122)
              total += 8;
          else if (ch2 == 49)
              total += 9;
      }
      else if (ch1 == 112)
      {
          if (ch2 == 48 || ch2 == 111 || ch2 == 108)
              total += 1;
          else if (ch2 == 57 || ch2 == 105 || ch2 == 107)
              total += 2;
          else if (ch2 == 56 || ch2 == 117 || ch2 == 106 || ch2 == 109)
              total += 3;
          else if (ch2 == 55 || ch2 == 121 || ch2 == 104 || ch2 == 110)
              total += 4;
          else if (ch2 == 54 || ch2 == 116 || ch2 == 103 || ch2 == 98)
              total += 5;
          else if (ch2 == 53 || ch2 == 114 || ch2 == 102 || ch2 == 118)
              total += 6;
          else if (ch2 == 52 || ch2 == 101 || ch2 == 100 || ch2 == 99)
              total += 7;
          else if (ch2 == 51 || ch2 == 119 || ch2 == 115 || ch2 == 120)
              total += 8;
          else if (ch2 == 50 || ch2 == 113 || ch2 == 97 || ch2 == 122)
              total += 9;
          else if (ch2 == 49)
              total += 10;
      }
      else if (ch1 == 113)
      {
          if (ch2 == 119 || ch2 == 115 || ch2 == 97 || ch2 == 49 || ch2 == 50)
              total += 1;
          else if (ch2 == 101 || ch2 == 100 || ch2 == 120 || ch2 == 122 || ch2 == 51)
              total += 2;
          else if (ch2 == 114 || ch2 == 102 || ch2 == 99 || ch2 == 52)
              total += 3;
          else if (ch2 == 116 || ch2 == 103 || ch2 == 118 || ch2 == 53)
              total += 4;
          else if (ch2 == 121 || ch2 == 104 || ch2 == 98 || ch2 == 54)
              total += 5;
          else if (ch2 == 117 || ch2 == 106 || ch2 == 110 || ch2 == 55)
              total += 6;
          else if (ch2 == 105 || ch2 == 107 || ch2 == 109 || ch2 == 56)
              total += 7;
          else if (ch2 == 111 || ch2 == 108 || ch2 == 57)
              total += 8;
          else if (ch2 == 112 || ch2 == 48)
              total += 9;
      }
      else if (ch1 == 119)
      {
          if (ch2 == 50 || ch2 == 113 || ch2 == 97 || ch2 == 115 || ch2 == 100 || ch2 == 101 || ch2 == 51)
              total += 1;
          else if (ch2 == 49 || ch2 == 122 || ch2 == 120 || ch2 == 99 || ch2 == 102 || ch2 == 114 || ch2 == 52 || ch2 == 51)
              total += 2;
          else if (ch2 == 118 || ch2 == 103 || ch2 == 116 || ch2 == 53)
              total += 3;
          else if (ch2 == 98 || ch2 == 104 || ch2 == 121 || ch2 == 54)
              total += 4;
          else if (ch2 == 110 || ch2 == 106 || ch2 == 117 || ch2 == 55)
              total += 5;
          else if (ch2 == 109 || ch2 == 107 || ch2 == 105 || ch2 == 56)
              total += 6;
          else if (ch2 == 108 || ch2 == 111 || ch2 == 57)
              total += 7;
          else if (ch2 == 112 || ch2 == 48)
              total += 8;
      }
      else if (ch1 == 120)
      {
          if (ch2 == 122 || ch2 == 115 || ch2 == 100 || ch2 == 99)
              total += 1;
          else if (ch2 == 97 || ch2 == 119 || ch2 == 101 || ch2 == 114 || ch2 == 102 || ch2 == 118)
              total += 2;
          else if (ch2 == 113 || ch2 == 50 || ch2 == 51 || ch2 == 52 || ch2 == 53 || ch2 == 116 || ch2 == 103 || ch2 == 98)
              total += 3;
          else if (ch2 == 49 || ch2 == 54 || ch2 == 121 || ch2 == 104 || ch2 == 110)
              total += 4;
          else if (ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 109)
              total += 5;
          else if (ch2 == 56 || ch2 == 105 || ch2 == 107)
              total += 6;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 7;
          else if (ch2 == 48 || ch2 == 112)
              total += 8;
      }
      else if (ch1 == 121)
      {
          if (ch2 == 54 || ch2 == 116 || ch2 == 103 || ch2 == 104 || ch2 == 106 || ch2 == 117 || ch2 == 55)
              total += 1;
          else if (ch2 == 53 || ch2 == 114 || ch2 == 102 || ch2 == 118 || ch2 == 98 || ch2 == 110 || ch2 == 109 || ch2 == 107 || ch2 == 105 || ch2 == 56)
              total += 2;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108 || ch2 == 52 || ch2 == 101 || ch2 == 100 || ch2 == 99)
              total += 3;
          else if (ch2 == 51 || ch2 == 119 || ch2 == 115 || ch2 == 120 || ch2 == 48 || ch2 == 112)
              total += 4;
          else if (ch2 == 50 || ch2 == 113 || ch2 == 97 || ch2 == 122)
              total += 5;
          else if (ch2 == 49)
              total += 6;
      }
      else if (ch1 == 122)
      {
          if (ch2 == 97 || ch2 == 115 || ch2 == 120)
              total += 1;
          else if (ch2 == 113 || ch2 == 119 || ch2 == 101 || ch2 == 100 || ch2 == 99)
              total += 2;
          else if (ch2 == 49 || ch2 == 50 || ch2 == 51 || ch2 == 52 || ch2 == 114 || ch2 == 102 || ch2 == 118)
              total += 3;
          else if (ch2 == 53 || ch2 == 116 || ch2 == 103 || ch2 == 98)
              total += 4;
          else if (ch2 == 54 || ch2 == 121 || ch2 == 104 || ch2 == 110)
              total += 5;
          else if (ch2 == 55 || ch2 == 117 || ch2 == 106 || ch2 == 109)
              total += 6;
          else if (ch2 == 56 || ch2 == 105 || ch2 == 107)
              total += 7;
          else if (ch2 == 57 || ch2 == 111 || ch2 == 108)
              total += 8;
          else if (ch2 == 48 || ch2 == 112)
              total += 9;
      }
  }

  return (10 - (total / (str.length - 1)));
}

function validation(str)
{
  if (str.indexOf('.') == -1)
  {
      alert("ERROR: Invalid domain name; needs an extension");
      return false;
  }
  else if (str.indexOf('-') == 0 || str.indexOf("-.") > -1)
  {
      alert("ERROR: Invalid domain name; cannot start or end with a hyphen");
      return false;
  }
  else
  {
      var periodIndex = str.indexOf('.');
      var temp = str.substring(periodIndex + 1);
      if (!(temp.indexOf('.') == 2 || temp.indexOf('.') == 3 || temp.indexOf('.') == -1))
      {
          alert("ERROR: Invalid domain name; only certain extensions are allowed to have two periods");
          return false;
      }

      for (var index = 0; index < str.length; index++)
      {

          if (index == periodIndex || (str.charCodeAt(index) == '.' && index > periodIndex))
              index++;
          if (!((str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57) || str.charCodeAt(index) == 45 || (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) || (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122)))
          {
              alert("ERROR: Invalid character " + str[index] + " the only valid characters are: a-z, A-Z, 0-9, and -");
              return false;
          }
      }
  }

  return true;
}
