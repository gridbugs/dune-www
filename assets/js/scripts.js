document.addEventListener("DOMContentLoaded", function() {

    var pageWrap = document.getElementsByClassName('page-wrap docs')[0];
    if (pageWrap) {
        document.getElementById('nav-wrapper').addEventListener('click', toggleDocsNav);
    }

    // Add a button that copies the contents of the associated code element to the clipboard.
    for (const codeDiv of document.querySelectorAll('.code-with-copy-button')) {
        const codeText = codeDiv.querySelector('code').innerText.trimEnd();
        const copyButton = document.createElement('button');
        copyButton.classList.add('code-copy-button');
        copyButton.onclick = () => {
          navigator.clipboard.writeText(codeText);
          console.log('Copied to clipboard: ', codeText);
        };
        codeDiv.querySelector('div').appendChild(copyButton);
    }
});

function toggleDocsNav(e) {
    document.getElementsByClassName('page-wrap')[0].classList.toggle('open');
}
