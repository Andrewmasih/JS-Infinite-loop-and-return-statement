let i = 0

/*iv decleared a function named loop,  */
function loop ()  {
  for (i; i < 1; i --) {
    /* variable i is decreasing by 1 and since the condition i<1 is never met, so a infinte loop is created*/ 

    /*i stopped the iteration when i became -3 because of the 'return' statement. 'return' exits the function immediatly*/ 

    if (i === -3) {
      
      return i; /*it would be a infinte loop if i didnt stop it with the 'return' statement */
    }   
  }  
}
/*3 is returned as a result of the loop() function */
loop ();
