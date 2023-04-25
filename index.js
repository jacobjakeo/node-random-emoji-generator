// Import the node-emoji library that we installed
import emoji from 'node-emoji';

// Get the emoji name that the user specified on the command line
const emojiName = process.argv[2];

if (!emojiName) {
  // If the user did not choose an emoji,
  // display a random emoji
  const randomEmoji = emoji.random;
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  // If the user did specify an emoji, try
  // to find that emoji
  const foundEmoji = emoji.find(emojiName);

  if (foundEmoji) {
    // If the emoji exists (is valid), print
    // the emoji
    console.log(foundEmoji.emoji);
  } else {
    // If the emoji doesn't exist (is invalid)
    // print an error message
    console.log('Invalid emoji name');
  }
}
