function fetchGitHubInformation(event) {
    
    var username = $("#gh-username").val();

    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    // display a loader that is an animated gif file that will just keep
    // repeating itself while data has been accessed.
    
    $("#gh-user-data").html(
        `<div id="loader">
            <img scr="assets/css/loader.gif" alt="loading..." />
        </div>`);
}