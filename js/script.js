$(document).ready(function(){

	
});
var pokemon = {

	slideHome:function(){
		
		var array = [];
	
		$.ajax({
		  method:"get",
		  url: "",
		  dataType:"json",
		  success:function(response) {

		  },
			error:function(error){
				console.log(error);
			}
		});
	},
	getSlider:function (){
		$('#slider-pokemon').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  nextArrow:'<div class="next arrow bg-dark"><svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></svg>',
		  prevArrow:'<div class="prev arrow bg-dark"><svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0   c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744   c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"/></svg></div>"',		
		});
	},
	getImagemPokemon:function (id){

		var str = "" + id;
		var pad = "000";
		var ans = pad.substring(0, pad.length - str.length) + str;

		var src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ans+".png";
		return src;	
	},
}







