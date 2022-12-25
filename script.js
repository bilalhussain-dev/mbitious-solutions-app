// Sharing Blog Post
const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', () => {
  navigator.share({
    title: '10 tips to become a web developer',
    text: 'Are you interested in becoming a web developer? Check out these 10 tips for improving your skills and getting started in the field.',
    url: 'https://mbitiousolutions.com/10-tips-to-become-a-web-developer.htm'
  })
  .then(() => {
	alert('Thanks for sharing')
  })
  .catch(error => console.log('Error sharing post:', error));
});