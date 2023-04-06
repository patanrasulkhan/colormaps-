const colorMapContainer = d3.select("#color-map");

// Generate a sequential color map using D3.js
const colorMap = d3.scaleSequential()
  .interpolator(d3.interpolateViridis)
  .domain([0, 1000]); // Define the range of the color map

// Create a color box for each value in the range of the color map
for (let i = 0; i <= 1000; i++) {
  colorMapContainer.append("div")
    .attr("class", "color-box")
    .style("background-color", colorMap(i));
}
