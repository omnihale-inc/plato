const truncateText = (
  ref: React.RefObject<HTMLHeadingElement | HTMLParagraphElement>,
  numberOfLines: number
) => {
  if (numberOfLines <= 0)
    throw new Error("number of lines must be greater than 1");
  if (ref && ref.current) {
    // Gets the line height
    const lineHeight = getComputedStyle(ref.current).lineHeight;
    // Checks if the current element height is greater than number of lines
    // we want, also using line height of figure out how much height each line
    // takes up.
    if (ref.current?.offsetHeight > parseInt(lineHeight) * numberOfLines) {
      // Gets the current texts in the paragraph
      let text = ref.current.innerText.split(" ");
      while (
        ref.current?.offsetHeight > parseInt(lineHeight) * numberOfLines &&
        text.length > 0
      ) {
        // Removes the last word
        text = text.slice(0, -1);

        // Adds the ellipsis at the end of the words
        ref.current.innerText = `${text.join(" ")} ...`;
      }
    }
  }
};

export default truncateText;
