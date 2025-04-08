window.addEventListener('load', () => {
  const handleOpenPage = (url) => {
    window.open(url, '_blank');
  };

  const handleClick = (event) => {
    const anchorEl = event.target.closest('a');

    if (anchorEl && anchorEl.href) {
      event.preventDefault();
      event.stopImmediatePropagation();
      handleOpenPage(anchorEl.href);
    }
  };

  document.body.addEventListener('click', handleClick, true);
});
