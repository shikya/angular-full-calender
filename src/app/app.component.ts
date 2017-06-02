import { Component } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  ngOnInit(){
		$('#calendar').fullCalendar({
			header: {
				left: '',
				center: 'prev,title,next',
				right: 'month,basicWeek,basicDay'
			},
			dayNames:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: 1, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'All Day Event',
					start: '2017-05-01'
				}
			]
		});    
  }
}
