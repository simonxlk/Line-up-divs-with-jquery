$(document).ready(function() {
	eqDivs();
	
	function eqDivs(){
		var newHeight;
		if($('#box1').height() > $('#box2').height()) {
			newHeight = $('#box1').height();
			$('#box2').height(newHeight);	
		}else{
			newHeight = $('#box2').height();
			$('#box1').height(newHeight);		
		}
	}
	
	//take text from an input box and add it to the corresponding text area
		var textHolder;
		$('#btn1').click(function() {
			textHolder = $('#newtext1').val();
			$('#p1').append(textHolder);
			$('#box1').css("height", "auto");	
			eqDivs();
				
		});
		$('#btn2').click(function() {
			textHolder = $('#newtext2').val();
			$('#p2').append(textHolder);
			$('#box2').css("height", "auto");	
			eqDivs();
		});
	
});