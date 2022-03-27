// todo get all number buttons

const rateBtns = document.querySelectorAll(".rating-btn");

rateBtns.forEach((btn) => {
  // todo add a event listener to each btn

  btn.addEventListener("click", (e) => {
    // todo add the class clicked to the button to change its color
    btn.classList.toggle("clicked");

    // todo remove the clicked class from previously clicked if want to click to another rating

    [...rateBtns]
      .filter((btn) => btn !== e.target)
      .forEach((btn) => {
        btn.classList.remove("clicked");
      });

    //   todo the rating you choose
    const rate = e.target.dataset.rating;

    // todo insert the rate value to the text rating

    const ratingText = document.getElementById("rate");
    ratingText.innerText = rate;
  });
});

// todo add an event listener to submit btn

const submitBtn = document.querySelector(".rating-submit");

submitBtn.addEventListener("click", (e) => {
  //   todo get the rating and submitted container to replace it and display on screen

  const ratingDiv = document.querySelector(".rating");
  const ratingSubmittedDiv = document.querySelector(".rating-submitted");
  const rating = document.getElementById("rate");

  if (rating.innerText !== "") {
    ratingDiv.classList.add("hide");
    ratingSubmittedDiv.classList.remove("hide");
  } else {
    alert("Please select a rating");
  }
});
