$(function() {
	var $aside = $('aside');
	var $asideButton = $('#menuSlider'); // 슬라이드 버튼 요소

	// sticky_header 커스텀 수행 시작
	var headerOffset = $('#head').offset().top;

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > headerOffset) {
			$('#head').addClass("sticky_header");

			$('#topBoard').stop().animate({
				'height' : 180 + 'px'
			}, 300);

			$('#loginBtn').css({
				'padding' : '10px',
				'margin' : '20px'
			});

			$('#headInner').css('display', 'none');
			$('#homeLogo').attr('src', 'image/logoSmall.png').css({
				'height' : '50px',
				'margin' : '15px'
			});
			$('#head #menuSlider').css('display', 'block');
			$('#topBoard div').css('visibility', 'hidden');
			$aside.css('visibility', 'visible');

		} else {
			$('#head').removeClass("sticky_header");

			$('#topBoard').stop().animate({
				'height' : 55 + '%'
			}, 300);
			$('#loginBtn').css({
				'padding' : '30px 10px 30px 10px',
				'margin' : '14px 20px 14px 30px'
			});
			$('#headInner').css('display', 'block');
			$('#homeLogo').attr('src', 'image/logo.png').css({
				'height' : '90px',
				'margin' : '10px'
			});
			$('#head #menuSlider').css('display', 'none');
			$('#topBoard div').css('visibility', 'visible');
			$aside.css('visibility', 'hidden');
			$aside.stop().animate({
				'left' : '-250px'
			}, 300);
			$aside.removeClass("asideOpen");

		}

	}); // sticky_header 커스텀 끝

	// 슬라이드 다운시 메뉴 슬라이더 버튼 등 시작
	$('#menuSlider').on('mouseover click', function() {
		$(this).find('img').attr('src', 'image/menuSlider2.png');
	});
	$('#menuSlider').on('mouseout', function() {
		$(this).find('img').attr('src', 'image/menuSlider1.png');
	});

	$asideButton.on('click', function() {
		$aside.toggleClass("asideOpen"); // boolean 대신에 가상 클래스로 줌. 다른 방식도
		// 가능

		if ($aside.hasClass("asideOpen")) {
			
				$aside.stop().animate({
					'left' : '-10px'
				}, 300);
			

		} else {
			
				$aside.stop().animate({
					'left' : '-250px'
				}, 300);
			
		}
	});

	// 메뉴 슬라이더내 내부 이벤트

	$('.ms_li1').on('mouseenter click focusin', function() {
		$('.ms_li1').removeClass('listOpen');
		$('.ms_li1').find('ul').css('display', 'none');
		var $this = $(this);
		$this.addClass('listOpen');

		if ($this.hasClass('listOpen')) {
			$this.find('ul').css('display', 'block');
			$this.find('ul').animate({
				'opacity' : '1'
			}, 500);
			$this.find('span').text('▲');
		}

	});
	$('.ms_li1').on('mouseleave blur', function() {

		var $this = $(this);
		if ($this.not('listOpen')) {

			$this.find('ul').css('display', 'none');
			$('.ms_li1').not('.listOpen').find('ul').css('opacity', 0);
			$this.find('span').text('▼');
		}
	});

});