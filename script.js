// We find some buttons and toys on the webpage and give them names.
const starButton = document.querySelector("button");
const thankYouMessage = document.querySelector(".post");
const starRatingWidget = document.querySelector(".star-widget");
const editButton = document.querySelector(".edit");


starButton.onclick = () => {

    starRatingWidget.style.display = "none";//invisible
    thankYouMessage.style.display = "block";//visible

    editButton.onclick = () => {
        starRatingWidget.style.display = "block";
        thankYouMessage.style.display = "none";
    }
    return false;
}
