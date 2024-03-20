var lengthOfLongestSubstring = function(s) {
    if(s.length ==0){return 0}
    let max=1,cur=s[0],check;
  for(let i = 1 ;i < s.length;i++){
      check=cur.indexOf(s[i]);
        if(check>=0){
          if(cur.length>max){
              max=cur.length;
          }
          cur=cur.slice(check+1);
        }
        cur+=s[i];
  }
  if(cur.length>max){
    max=cur.length;
  }
  return max;
};
console.log(lengthOfLongestSubstring('asdsadsadwh1hdhiu1heo2'))