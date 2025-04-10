/*eslint-disable*/

window.addEventListener('load', () => {
  const handleOpenPage = (url, option) => {
    window.open(url, option);
  };

  const getOption = async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(['targetOption'], (result) => {
        resolve(result.targetOption);
      });
    });
  };

  const handleClick = async (event) => {
    const anchorEl = event.target.closest('a');

    if (anchorEl && anchorEl.href && !anchorEl.href.endsWith('#')) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const option = await getOption();
      handleOpenPage(anchorEl.href, option);
    }
  };

  document.body.addEventListener('click', handleClick, true);
});
