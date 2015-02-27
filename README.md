# Line-up-divs-with-jquery
Imagine you have two columns side by side, one has more content than the other but you want them to have the same height. 

This JQuery solution checks which column is taller and then adjusts the other one, 
this is a dynamic solution, so whenever you change the content, the divs will adjust.

##How it works
Prepare your HTML elements, it could be `<div>` or `<li>`, lets give them IDs: Col1 and Col2.

Do not set a height in CSS as this might mess things up, but feel free to set a width.

#The JQuery

When the document is ready, call the eqDivs function 
```
$(document).ready(function() {
	eqDivs();

```	

This is the function that checks which of the 2 columns is taller then changes the height of the shorter one. 
First I declared a variable `newHeight;` this would store a value temporarily.
Then the If statement checks whether `#Col1` is taller than `#Col2` and if the condition is true the variable `newHeight' is 
assigned a value that's equivalent to the height of `#Col1`. in the next statement, `#Col2` is assigned a new height, the value of which comes from 
the `newHeight` variable. 
If the condition is false, we move onto the `else` section which does the opposite.  
```
	function eqDivs(){
		var newHeight;
		if($('#Col1').height() > $('#Col2').height()) {
			newHeight = $('#Col1').height();
			$('#Col2').height(newHeight);	
		}else{
			newHeight = $('#Col2').height();
			$('#Col1').height(newHeight);		
		}
	}
	
});

```
**See demo page: [equal divs] (http://simonxlk.github.io/div-height.html) **
   
