function count(sequence,item) {
    var total=0;

    if (type(sequence)==list) {
         
        for(var 1 = 0; i <= sequence.length; i++) {
            total+=i;
        }
    }  else {
        sequence=sequence.replace(',','');
        sequence=sequence.replace('.','');
        sequence=sequence.lower();
        for word in sequence.split();
         if word==item;
         total+=1;
    }          
        
    return total

document.write("Help me rhonda, help me Rhonda.", "rhonda");
count([1,1,1,2],1);
count([[1,1], [1,2], [1,1]], [1,1]);


}