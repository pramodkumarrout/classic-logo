// Weather widget Section start here 
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '54134075d34ae6e7e1904ccb558f7239';
    const city = 'Bengaluru';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Function to fetch and update weather data
    function updateWeather() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const temp = data.main.temp;
                const conditions = data.weather[0].description;
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                document.getElementById('temp').textContent = `${temp}°C`;
                document.getElementById('conditions').textContent = conditions;
                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.src = iconUrl;
                weatherIcon.style.display = 'block';
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Initial call to update weather on page load
    updateWeather();

    // Update weather every 1 minutes (6000 milliseconds)
    setInterval(updateWeather, 6000); // 1 minutes in milliseconds
});

// Weather widget Section end here 


// Slider image section start here 


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider__item');
    const dots = document.querySelectorAll('.slider__page-item');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('slider__item--active', i === index);
        dots[i].classList.toggle('slider__page-item--active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });

  
  // Slider image section end here 
  


