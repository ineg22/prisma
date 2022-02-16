let modalVisible = false;

const modalEl = document.querySelector("#modal");
const closeEl = document.querySelector("#close");
const modalContentEl = document.querySelector("#modalContent");

const showModal = () => {
    modalVisible = true;
    modalEl.classList.remove("hidden");

};

const hideModal = () => {
    modalVisible = false
    modalEl.classList.add("hidden");
};

const triggers = [
    document.querySelector("#contactUs1"),
    document.querySelector("#contactUs2"),
    document.querySelector("#contactUs3"),
]

triggers.forEach((it) => {
    it.addEventListener("click", showModal)
})

modalContentEl.addEventListener("click", (e) => e.stopPropagation())

modalEl.addEventListener("click", hideModal)

closeEl.addEventListener("click", hideModal)

const submitEl = document.querySelector("#submit");

submitEl.addEventListener("click", () => {
    const mailEl = document.querySelector("#mail");
    if (mailEl.validationMessage) {
        console.warn(mailEl.validationMessage);
        return;
    }
    const formEl = document.querySelector("#form");

    const formData = new FormData(formEl)
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    const link = document.createElement("a");
    const linkValue = `mailto:info@prizma.by?subject=${encodeURIComponent("from plug")}&body=${encodeURIComponent(JSON.stringify(data, undefined, 2))}`;

    link.setAttribute("href", linkValue);
    link.setAttribute("id", "link");

    document.querySelector("body").appendChild(link);
    document.querySelector("#link").click();
})