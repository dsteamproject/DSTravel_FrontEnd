<script>
import {Line} from 'vue3-chart-v2'
import axios from 'axios'

export default {
	extends: Line,

	async mounted(){
		const url = `/REST/admin/worldcup?city=6`;
		const headers = { "Content-Type" : "application/json", token : this.token };
		const response = await axios.get(url, {headers});

		if(response.data.status === 200){
			for(let i = 0; i < response.data.list.length; i++){
				this.labels.push(response.data.list[i].title);
				this.data.push(response.data.list[i].cnt);
			}

			console.log(this.labels);
			console.log(this.data);
		}

		this.renderChart({
			labels : this.labels,
			datasets : [{
				label: '부산 인기여행지',
				data: this.data,
				backgroundColor: this.backgroundColor,
				hoverBackgroundColor: this.hoverBackgroundColor
			}],
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [ {
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: true
				},
				responsive: true,
				maintainAspectRatio: false
			}
		})
	},

	data () {
		return {
			token : sessionStorage.getItem("TOKEN"),
			data : [],
			labels : [],
			backgroundColor : [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(201, 203, 207, 0.2)',
				'rgba(255, 99, 132, 0.2)',
			],
			hoverBackgroundColor : [
				'rgba(255, 99, 132, 0.5)',
				'rgba(255, 159, 64, 0.5)',
				'rgba(255, 205, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(201, 203, 207, 0.5)',
				'rgba(255, 99, 132, 0.5)',
			]
			// datacollection: {
			// 	labels: ["dfdsafs", "12313121", "asiufjh9ad"],
			// 	datasets: [
			// 		{
			// 			label: 'DestinationRank',
			// 			backgroundColor: '#f8797900',
			// 			pointBackgroundColor: 'white',
			// 			borderWidth: 1,
			// 			pointBorderColor: '#249EBF',
			// 			data: this.data,
			// 		}
			// 	]
			// },
			// options: {
			// 	scales: {
			// 		yAxes: [{
			// 			ticks: {
			// 				beginAtZero: true
			// 			},
			// 			gridLines: {
			// 				display: true
			// 			}
			// 		}],
			// 		xAxes: [ {
			// 			gridLines: {
			// 				display: false
			// 			}
			// 		}]
			// 	},
			// 	legend: {
			// 		display: true
			// 	},
			// 	responsive: true,
			// 	maintainAspectRatio: false
			// }
		}
	},
}
</script>

<style scoped>
</style>