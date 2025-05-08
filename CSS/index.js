$(document).ready(function () {
  // Mapping of day classes to their exact CSS-defined heights
  var heightMap = {
    mon: "17.45",
    tue: "34.91",
    wed: "52.36",
    thur: "31.07",
    fri: "23.39",
    sat: "43.28",
    sun: "25.48",
  };

  // Add hover event to elements with class .pie-chat
  $(".pie-chat").hover(
    function (e) {
      // Get the day class (e.g., 'mon', 'tue') from the current .pie-chat
      var dayClass = $(this)
        .attr("class")
        .split(" ")
        .find((cls) => heightMap[cls]);

      // Get the exact height from the mapping
      var height = heightMap[dayClass] || "Unknown";

      // Create a tooltip div to show the height
      var $tooltip = $('<div class="height-tooltip"></div>')
        .text("$" + height)
        .css({
          position: "absolute",
          background: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "5px 10px",
          borderRadius: "4px",
          zIndex: 1000,
          top: $(this).offset().top - 40,
          left: $(this).offset().left + $(this).width() / 2 - 20, // Center tooltip horizontally
        });

      // Append tooltip to body
      $("body").append($tooltip);
    },
    function () {
      // On hover out: Remove the tooltip
      $(".height-tooltip").remove();
    }
  );
});
