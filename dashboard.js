// Sample data for the chart
const accidentData = {
    labels: ['2015', '2016', '2017', '2018', '2019'],
    datasets: [{
        label: 'Number of Accidents',
        data: [1200, 1500, 1700, 1600, 1400],
        backgroundColor: 'rgba(30, 144, 255, 0.5)',
        borderColor: 'rgba(30, 144, 255, 1)',
        borderWidth: 1
    }]
};

// Chart configuration
const config = {
    type: 'bar',
    data: accidentData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Road Accidents Over the Years'
            }
        }
    }
};

// Render the chart
const ctx = document.getElementById('accidentChart').getContext('2d');
new Chart(ctx, config);

