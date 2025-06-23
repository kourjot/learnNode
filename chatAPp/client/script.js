let socket;
let roomId;
let username;

function joinRoom() {
  username = document.getElementById('username').value;
  roomId = document.getElementById('roomId').value;

  if (!username || !roomId) return alert('Enter both username and room ID');

  
  document.getElementById('join-container').style.display = 'none';
  document.getElementById('editor-container').style.display = 'block';
  document.getElementById('room-display').textContent = `Room: ${roomId}`;

  socket = io('http://localhost:4000');

  socket.emit('join-room', { roomId, username });

  socket.on('code-sync', (initialCode) => {
    document.getElementById('code-editor').value = initialCode;
  });

  socket.on('code-change', (newCode) => {
    const editor = document.getElementById('code-editor');
    if (editor.value !== newCode) editor.value = newCode;
  });

  socket.on('user-list', (userList) => {
    document.getElementById('user-list').textContent = userList.join(', ');
  });

  const editor = document.getElementById('code-editor');
  editor.addEventListener('input', () => {
    const newCode = editor.value;
    socket.emit('code-change', { roomId, code: newCode });
  });
}