function convertToRoman(num) {
	const arrayOne = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const arrayTen = ["","X", "XX", "XXX", "XL", "L" ,"LX", "LXX" ,"LXXX", "XC"];
    const arrayHundred = ["","C", "CC", "CCC", "CD", "D" ,"DC" ,"DCC" ,"DCCC" ,"CM"];
    const arrayThousand = ["","M", "MM", "MMM", "MMMM"];
	
  let a = num.toString().split("");
  let romNum = ""
  
  if (a.length >3){
  romNum += arrayThousand[a[a.length-4]]
  }
  if (a.length >2){
  romNum += arrayHundred[a[a.length-3]]
  }
  if (a.length >1){
  romNum += arrayTen[a[a.length-2]]
  }
  if (a.length >0){
  romNum += arrayOne[a[a.length-1]]
  }
  
  return romNum  
  }
convertToRoman(36)