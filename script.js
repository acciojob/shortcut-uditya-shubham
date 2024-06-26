function shortcut(s1, s2) {
// your code here
   

if(s1.size==0)
return s1;
else if(s2.size==0)
return s2;

else
return s[0]+s[1];
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));