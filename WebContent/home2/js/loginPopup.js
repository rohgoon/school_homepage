$(document).ready(function() {//로그인 버튼 이벤트
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	$('#test-form').css({
		'margin':'0 auto',
		'background-color':'rgb(255,255,255)',
		'width':'60%',
		'padding':'5px',
		'line-height': '3em',
		'position': 'relative',
		'text-align':'center'
	});
	
	$('#test-form').find('li').css({
		'list-style': 'none'
	});
	
});