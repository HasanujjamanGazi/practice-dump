// Making the input box's height increase on increase of input size.
$(document).ready(function () {
    $("#input-message").on("input", function () {
        $(this).css("height", "auto");
        const scrollHeight = this.scrollHeight;
        const newHeight = Math.min(scrollHeight, 200);
        $(this).css("height", `${newHeight}px`);
    });
});