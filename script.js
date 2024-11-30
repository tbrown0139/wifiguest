document.getElementById('view-rules').addEventListener('click', () => {
  document.getElementById('rules-overlay').classList.remove('hidden');
});

document.getElementById('close-overlay').addEventListener('click', () => {
  document.getElementById('rules-overlay').classList.add('hidden');
});

// Offline Detector Simulation
function checkNetworkStatus() {
  if (!navigator.onLine) {
    document.getElementById('offline-banner').classList.remove('hidden');
  } else {
    document.getElementById('offline-banner').classList.add('hidden');
  }
}

window.addEventListener('load', checkNetworkStatus);
window.addEventListener('online', checkNetworkStatus);
window.addEventListener('offline', checkNetworkStatus);
