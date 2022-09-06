export function generateID(){
    /* De esta forma generamos IDs aleatorias */
   return  Math.random().toString(36).substr(2, 18);
}