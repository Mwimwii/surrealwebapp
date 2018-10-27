$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});
// Function for Toggling Panels
function togglePanel(panelId, buttonId) {
    var p = document.getElementById(panelId);
    var pbutton = document.getElementById(buttonId);
    if (p.classList.contains('visible')) {
        p.classList.replace('visible', 'invisible');
        pbutton.classList.replace('badge-success', 'badge-danger');
        console.log('toggled panel: ' + p);
    } else {
        p.classList.replace('invisible', 'visible');
        pbutton.classList.replace('badge-danger', 'badge-success');
        console.log('toggled pane0: ' + p);
    }
}