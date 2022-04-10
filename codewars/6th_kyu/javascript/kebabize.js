// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

//Solution:

function kebabize(str) {
    let strArray = str.replace(/[0-9]/g, '').split(/(?=[A-Z])/)
    return strArray.join('-').toLowerCase()
  }