// document.addEventListener("DOMContentLoaded", function () {
//     const logoInput = document.getElementById("upload-logo");
//     const logoPreview = document.getElementById("logo-preview");
//     const umbrella = document.getElementById("umbrella");
//     const loader = document.getElementById("loader");
//     const colorButtons = document.querySelectorAll(".color-btn");
//     const customizerContainer = document.querySelector(".customizer-container");
//     const uploadBtn = document.querySelector(".upload-btn");
//     const uploadIcon = uploadBtn.querySelector("img"); // Get the upload icon inside the button

//     let uploadedLogo = null; // Store uploaded logo

//     // Hide the logo preview initially
//     logoPreview.style.display = "none";

//     const borderColors = {
//         Pink: "rgb(245, 31, 159)",
//         Blue: "rgb(51, 153, 255)",
//         Yellow: "rgb(255, 204, 0)"
//     };

//     const loaderColors = {
//         Pink: "invert(30%) sepia(99%) saturate(4000%) hue-rotate(300deg)",
//         Blue: "invert(20%) sepia(90%) saturate(2000%) hue-rotate(200deg)",
//         Yellow: "invert(50%) sepia(90%) saturate(4000%) hue-rotate(50deg)"
//     };

//     // Hide loader initially
//     loader.classList.add("hidden");

//     function changeColor(selectedColor, showLoader = true) {
//         console.log(`Changing color to: ${selectedColor}`); // Debugging

//         if (showLoader) {
//             loader.classList.remove("hidden");
//             loader.classList.add("spin");
//             umbrella.style.display = "none";
//             logoPreview.style.display = "none";
//             loader.style.filter = loaderColors[selectedColor];
//         }

//         setTimeout(() => {
//             const umbrellaImagePath = `assets/${selectedColor} umbrella.png`;
//             console.log(`Setting umbrella image to: ${umbrellaImagePath}`); // Debugging
//             umbrella.src = umbrellaImagePath;

//             let newColor = getBackgroundColor(selectedColor);
//             document.body.style.backgroundColor = newColor;
//             customizerContainer.style.backgroundColor = newColor;
//             uploadBtn.style.backgroundColor = getDarkerShade(newColor);

//             document.documentElement.style.setProperty("--spinner-color", loaderColors[selectedColor]);

//             colorButtons.forEach(button => {
//                 if (button.dataset.color === selectedColor) {
//                     button.classList.add("selected");
//                     button.style.setProperty("--border-color", borderColors[selectedColor]);
//                 } else {
//                     button.classList.remove("selected");
//                 }
//             });

//             if (showLoader) {
//                 loader.classList.add("hidden");
//                 loader.classList.remove("spin");
//                 umbrella.style.display = "block";

//                 // Restore uploaded logo
//                 if (uploadedLogo) {
//                     logoPreview.src = uploadedLogo;
//                     logoPreview.style.display = "block";
//                 }
//             }

//         }, showLoader ? 1000 : 0);
//     }

//     colorButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             changeColor(this.dataset.color);
//         });
//     });

//     function getBackgroundColor(color) {
//         const colors = {
//             Pink: "#ffe4e4",
//             Blue: "#cfe8ff",
//             Yellow: "#fff9c4"
//         };
//         return colors[color] || "#ffffff";
//     }

//     function getDarkerShade(color) {
//         const shades = {
//             "#ffe4e4": "#ffb3b3",
//             "#cfe8ff": "#80c1ff",
//             "#fff9c4": "#ffe066"
//         };
//         return shades[color] || "#cccccc";
//     }

//     // Handle file upload


//     logoInput.addEventListener("change", function (event) {
//         const file = event.target.files[0];

//         if (file) {
//             const reader = new FileReader();

//             uploadIcon.src = "assets/loader_icon.svg";
//             uploadIcon.classList.add("spin");

//             // Update button text with file name
//             uploadBtn.innerHTML = `<img src="assets/loader_icon.svg" class="spin" alt="Loading"> ${file.name}`;

//             umbrella.style.display = "none";
//             loader.classList.remove("hidden");
//             loader.classList.add("spin");

//             setTimeout(() => {
//                 reader.onload = function (e) {
//                     uploadIcon.src = "assets/upload_icon.svg";
//                     uploadIcon.classList.remove("spin");

//                     loader.classList.add("hidden");
//                     loader.classList.remove("spin");
//                     umbrella.style.display = "block";

//                     uploadedLogo = e.target.result; // Store uploaded logo
//                     logoPreview.src = uploadedLogo;
//                     logoPreview.style.display = "block";

//                     // Restore button text with upload icon and file name
//                     uploadBtn.innerHTML = `<img src="assets/upload_icon.svg" alt="Upload Icon"> ${file.name}`;
//                 };

//                 reader.readAsDataURL(file);
//             }, 1000);
//         }
//     });



//     // Set default color to Pink without loader
//     changeColor("Pink", false);
// });




document.addEventListener("DOMContentLoaded", function () {
    // Get elements from the DOM
    const logoInput = document.getElementById("upload-logo");
    const logoPreview = document.getElementById("logo-preview");
    const umbrella = document.getElementById("umbrella");
    const loader = document.getElementById("loader");
    const colorButtons = document.querySelectorAll(".color-btn");
    const customizerContainer = document.querySelector(".customizer-container");
    const uploadBtn = document.querySelector(".upload-btn");
    const uploadIcon = uploadBtn.querySelector("img"); // Upload button icon

    let uploadedLogo = null; // Store uploaded logo

    // Hide logo preview initially
    logoPreview.style.display = "none";
    
    // Define border colors for selected buttons
    const borderColors = {
        Pink: "rgb(245, 31, 159)",
        Blue: "rgb(51, 153, 255)",
        Yellow: "rgb(255, 204, 0)"
    };

    // Define loader colors based on selection
    const loaderColors = {
        Pink: "invert(30%) sepia(99%) saturate(4000%) hue-rotate(300deg)",
        Blue: "invert(20%) sepia(90%) saturate(2000%) hue-rotate(200deg)",
        Yellow: "invert(50%) sepia(90%) saturate(4000%) hue-rotate(50deg)"
    };

    // Hide loader initially
    loader.classList.add("hidden");

    // Function to change umbrella color and UI theme
    function changeColor(selectedColor, showLoader = true) {
        console.log(`Changing color to: ${selectedColor}`); // Debugging log

        if (showLoader) {
            loader.classList.remove("hidden");
            loader.classList.add("spin");
            umbrella.style.display = "none";
            logoPreview.style.display = "none";
            loader.style.filter = loaderColors[selectedColor];
        }

        // Simulate loading effect before applying new color
        setTimeout(() => {
            umbrella.src = `assets/${selectedColor} umbrella.png`; // Update umbrella image

            // Update background colors
            let newColor = getBackgroundColor(selectedColor);
            document.body.style.backgroundColor = newColor;
            customizerContainer.style.backgroundColor = newColor;
            uploadBtn.style.backgroundColor = getDarkerShade(newColor);

            // Apply spinner color change
            document.documentElement.style.setProperty("--spinner-color", loaderColors[selectedColor]);

            // Update button selection UI
            colorButtons.forEach(button => {
                if (button.dataset.color === selectedColor) {
                    button.classList.add("selected");
                    button.style.setProperty("--border-color", borderColors[selectedColor]);
                } else {
                    button.classList.remove("selected");
                }
            });

            // Hide loader and show umbrella/logo after color change
            if (showLoader) {
                loader.classList.add("hidden");
                loader.classList.remove("spin");
                umbrella.style.display = "block";

                if (uploadedLogo) {
                    logoPreview.src = uploadedLogo;
                    logoPreview.style.display = "block";
                }
            }
        }, showLoader ? 1000 : 0);
    }

    // Attach event listener to color buttons
    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            changeColor(this.dataset.color);
        });
    });

    // Function to get background color based on selection
    function getBackgroundColor(color) {
        return {
            Pink: "#ffe4e4",
            Blue: "#cfe8ff",
            Yellow: "#fff9c4"
        }[color] || "#ffffff"; // Default to white if no match
    }

    // Function to get a slightly darker shade for UI contrast
    function getDarkerShade(color) {
        return {
            "#ffe4e4": "#ffb3b3",
            "#cfe8ff": "#80c1ff",
            "#fff9c4": "#ffe066"
        }[color] || "#cccccc"; // Default gray if no match
    }

    // Handle logo upload
    logoInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            // Show loading spinner on the upload button
            uploadBtn.innerHTML = `<img src="assets/loader_icon.svg" class="spin" alt="Loading"> ${file.name}`;

            umbrella.style.display = "none"; // Hide umbrella during loading
            loader.classList.remove("hidden");
            loader.classList.add("spin");

            // Simulate file processing delay
            setTimeout(() => {
                reader.onload = function (e) {
                    uploadedLogo = e.target.result; // Store uploaded logo
                    logoPreview.src = uploadedLogo;
                    logoPreview.style.display = "block";

                    // Restore upload button with uploaded file name
                    uploadBtn.innerHTML = `<img src="assets/upload_icon.svg" alt="Upload Icon"> ${file.name}`;

                    // Hide loader and show umbrella again
                    loader.classList.add("hidden");
                    loader.classList.remove("spin");
                    umbrella.style.display = "block";
                };

                reader.readAsDataURL(file); // Read the uploaded file
            }, 1000);
        }
    });

    // Set default color to Pink without showing loader
    changeColor("Pink", false);
});
