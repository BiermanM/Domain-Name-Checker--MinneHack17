function main(websiteName)
{
  alert("***" + websiteName + "***");

  if (validation(websiteName))
  {
      var periodIndex = websiteName.indexOf('.');

      // separates input into name and extension
      var extension = websiteName.substring(periodIndex + 1);
      alert(extension);
      websiteName = websiteName.substring(0, periodIndex);
      alert(websiteName);
      var rbol = ratingBasedOnLength(websiteName);
      var rbokd = ratingBasedOnKeyDist(websiteName) * 1.1; // adds a 10% increase
      var rboe = ratingBasedOnExtension(extension);
      var rbokde = ratingBasedOnKeyDist(extension) * 1.1; // adds a 10% increase
      alert( ((((rbol + rbokd) / 2) + (((rboe + rbokde) / 2)) * 1.05) / 2) );
  }
}

function ratingBasedOnLength(str)
{
  alert("");
}

function ratingBasedOnExtension(str)
{
  if (str.length <= 2 && (str.length == 1 || str[0] == str[1]))
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
  alert("");
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
