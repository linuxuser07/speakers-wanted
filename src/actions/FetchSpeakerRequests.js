export default function FetchSpeakerRequests() {
    return window.fetch('https://api.github.com/repos/techlahoma/speakers-wanted/issues')
        .then(function(response) {
            return response.json();
        });
}