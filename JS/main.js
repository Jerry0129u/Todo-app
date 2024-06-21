function checkDevice() {
    const device = document.getElementById("deviceInput").value.toLowerCase();

    switch (device) {
        case "mobile":
            document.getElementById("result").textContent = "You can check only two mobile device: Iphone or Samsung";
            break;
        case "samsung":
            document.getElementById("result").textContent = "Samsung Galaxy: Android device.";
            break;
        case "iphone":
            document.getElementById("result").textContent = "Apple Iphone: iOS device.";
            break;


        case "tablet":
            document.getElementById("result").textContent = "You can check only two tablet device: Ipad or GalaxyTab";
            break;
        case "ipad":
            document.getElementById("result").textContent = "Apple Ipad: iOS Device";
            break;
        case "galaxytab":
            document.getElementById("result").textContent = "Samsung Galaxy Tab: Android Device";
            break;
            

        case "laptop":
            document.getElementById("result").textContent = "You can check only two laptop device: MacBook or Dell";
            break;
        case "macbook":
            document.getElementById("result").textContent = "Apple Macbook: macOS device";
            break;
        case "dell":
            document.getElementById("result").textContent = "Dell XPS: Windows device";
            break;

        default:
            document.getElementById("result").textContent = "Unknown device.";
    }
}

