// find the min in the data for setting y-axis min
define(() => {
  const widthRatio = 0.49;
  const heightRatio = 0.51;

  return ($outerContainer, $innerContainer) => {
    const newWidth = $outerContainer.width() * widthRatio;
    const newHeight = 200;

    $innerContainer.width(newWidth);
    $innerContainer.height(newHeight);
  };
});
