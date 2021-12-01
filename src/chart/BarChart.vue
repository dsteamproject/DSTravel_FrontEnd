<script>
import { Bar } from 'vue3-chart-v2'
import axios from 'axios'

export default {
  extends: Bar,
	
  async mounted () {
    // Overwriting base render method with actual data.
		const url = `/REST/admin/visitorTotal`;
		const headers = { "Content-Type" : "application/json", token : this.token };
		const response = await axios.get(url, {headers});

		if(response.data.status == 200){
			for(let i = 0; i < response.data.totalVisitor.length; i++){
				this.totalVisitor.push(response.data.totalVisitor[i]);

				this.labels.push(this.totalVisitor[i].visit_regdate.substring(0, 10));
				this.data.push(this.totalVisitor[i].visit_count);
			}

			console.log("bar labels - ", this.labels);

			this.renderChart({
				labels: this.labels,
				datasets: [
					{
						label: 'visit',
						data: this.data,
						backgroundColor: this.backgroundColor,
						hoverBackgroundColor: this.hoverBackgroundColor
					}
				],
				options:{
				}
			})
		}
  },

	data(){
		return{
			totalIndex : 5,	// 방문자수를 보여줄 총 갯수
			token : sessionStorage.getItem("TOKEN"),
			totalVisitor : [],
			labels : [],
			data : [],
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
		}
	},
}
</script>