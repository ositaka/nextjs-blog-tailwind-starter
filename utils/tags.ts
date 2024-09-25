export function extractUniqueTags(tags: any[]) {
  // Collect all tags from all posts
  const allTags = tags.reduce((acc, post) => {
    // Check if the post has tags
    return acc.concat(post.tags || []); // Using `|| []` to handle cases where tags is undefined
  }, []);

  // Remove duplicates by converting to Set and then back to an array
  let uniqueTags = Array.from(new Set(allTags));

  // Remove undefined tags
  uniqueTags = uniqueTags.filter(tag => tag !== undefined);

  // Sort tags alphabetically
  uniqueTags.sort();

  return uniqueTags;
}