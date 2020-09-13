window.addEventListener('scroll', event => { 
    let nav = document.querySelector('#dot-nav'); 
    
    (window.scrollY >= 500) ? nav.classList.add('active') : nav.classList.remove('active');
});


window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY + 44;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop  &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
	} 
	else {
      link.classList.remove('active');
    }
  });
});

"use strict";
document.addEventListener('DOMContentLoaded',function () {
	function t() {
		$(".section").each(function () {
			var t = $('#dot-nav a[href="#' + $(this).attr("id") + '"]').data("number"),
				e = $(this).offset().top,
				n = $(window).height() / 2,
				o = $(window).scrollTop(),
				i = e - n < o,
				r = e + $(this).height() - n > o;
			i && r ? $("#dot-nav a").eq(t).addClass("is-selected") : $("#dot-nav a").eq(t).removeClass("is-selected")
		})
	}

	function e(t) {
		$("body, html").animate({
			scrollTop: t.offset().top + 50
		}, 500)
	}

	
	function o() {
		l.classList.toggle("active"), d.classList.toggle("open"), document.body.classList.toggle("noScroll")
	}

	function i() {
		this.parentElement.classList.add("is-active", "is-completed")
	}

	function r() {
		this.parentElement.classList.remove("is-active", "is-completed")
	}

	function c() {
		f.style.height = "", f.style.height = Math.min(f.scrollHeight, v) + "px"
	}
	t(), window.addEventListener("scroll", t), $(".scroll-down").on("click", function (t) {
		t.preventDefault(), e($(this.hash))
	}), $("#dot-nav a").on("click", function (t) {
		t.preventDefault(), e($(this.hash))
	}), $("#overlay a").on("click", function (t) {
		t.preventDefault(), e($(this.hash)), $("#toggle").click()
	});
	var a = document.querySelector("#dot-nav"),
		s = document.querySelector("#about-section"),
		l = document.querySelector("#toggle"),
		d = document.querySelector("#overlay");
		document.querySelector("#toggle").addEventListener("click", o);
	var u = {
		Android: function () {
			return navigator.userAgent.match(/Android/i)
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i)
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i)
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i)
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i)
		},
		any: function () {
			return u.Android() || u.BlackBerry() || u.iOS() || u.Opera() || u.Windows()
		}
	};
	var h = document.querySelectorAll(".contact-input");
	h.forEach(function (t) {
		return t.addEventListener("focus", i)
	}), h.forEach(function (t) {
		return t.addEventListener("blur", r)
	});
	var f = document.querySelector("#message"),
		v = 300;
});