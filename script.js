const statusEl = document.getElementById('status');
const boardEl = document.getElementById('board');
const cells = Array.from(document.querySelectorAll('.cell'));
const restartBtn = document.getElementById('restart');

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = 'X';
let board = Array(9).fill('');
let isGameOver = false;

function setStatus(text) {
  statusEl.textContent = text;
}

function getWinnerLine() {
  for (const [a, b, c] of WINNING_LINES) {
    const v = board[a];
    if (v && v === board[b] && v === board[c]) return [a, b, c];
  }
  return null;
}

function isDraw() {
  return board.every((v) => v !== '');
}

function markCell(index, player) {
  board[index] = player;
  const cell = cells[index];
  cell.textContent = player;
  cell.classList.add('filled', player.toLowerCase());
  cell.setAttribute('aria-disabled', 'true');
}

function endGame(message, winnerLine) {
  isGameOver = true;
  setStatus(message);
  boardEl.setAttribute('aria-disabled', 'true');
  if (winnerLine) {
    for (const idx of winnerLine) cells[idx].classList.add('winner');
  }
}

function handleCellClick(e) {
  const cell = e.target.closest('.cell');
  if (!cell) return;
  if (isGameOver) return;

  const index = Number(cell.dataset.index);
  if (!Number.isInteger(index)) return;
  if (board[index] !== '') return;

  markCell(index, currentPlayer);

  const winnerLine = getWinnerLine();
  if (winnerLine) {
    endGame(`Player ${currentPlayer} wins!`, winnerLine);
    return;
  }

  if (isDraw()) {
    endGame("It's a draw!");
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  setStatus(`Player ${currentPlayer}'s turn`);
}

function restartGame() {
  currentPlayer = 'X';
  board = Array(9).fill('');
  isGameOver = false;

  for (const cell of cells) {
    cell.textContent = '';
    cell.classList.remove('filled', 'x', 'o', 'winner');
    cell.removeAttribute('aria-disabled');
  }
  boardEl.removeAttribute('aria-disabled');
  setStatus("Player X's turn");
}

boardEl.addEventListener('click', handleCellClick);
restartBtn.addEventListener('click', restartGame);

restartGame();
