jQuery(document).ready(function($){
	var $container = $('#record'),
	$table = $container.children('table'),
	hourParse = function(input){
		var hour = parseInt(input.match(/\d+/g)[0], 10);
		if(input.substr(-2) == 'pm') hour += 12;
		return [hour, '00'].join(':')
	},
	template = '<a href="javascript:booking(\'{date}\', \'{time}\')">free</a>';
	$('#btnview').click(function(){
		$container.trigger('enable-booking')
	})
	$container.bind('enable-booking.BAtT', function(event){
		dates = [],
		$unavailable = $table.find('td:contains("not yet")');
		
		$table.find('th[id^="date"]').each(function(){
			dates.push($(this).text().split(/\//g).reverse().join('/'));
		})
				
		$unavailable.each(function(){
			var $this = $(this),
			date = dates[$this.index()-1],
			time = hourParse($this.prevAll('th').text().trim())
			$this.html(template.replace('{date}', date).replace('{time}', time))
		})
		
	})
})