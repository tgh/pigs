$().ready(function() {
    $('.song-details').hide();
});

function openSongDetails(songNum) {
    songDetailsContainer = $('.song-details[data-song-num=' + songNum + ']');
    if (songDetailsContainer.is(':visible')) {
        songDetailsContainer.hide('fast');
    } else {
        //hide any visible song details containers first
        $('.song-details').hide('fast');
        songDetailsContainer.show('fast');
    }
}
