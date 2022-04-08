import "../scripts/node_modules/@chrisoakman/chessboardjs/dist/chessboard-1.0.0.js";
let fenPos;
let changeCount = 0;
let config;
let lastPlayed = false;

let board = Chessboard("board", {
  draggable: true,
  dropOffBoard: "trash",
  sparePieces: true,
});

$("#startBtn").click(board.start);
$("#clearBtn").click(board.clear);

$("#change-theme").click(function () {
  lastPlayed = false;
  let curPos = board.fen();
  board.destroy();
  if (document.getElementById("startBtn") != null) {
    document.getElementById("startBtn").remove();
  }
  if (document.getElementById("clearBtn") == null) {
    const clearBtn = document.createElement("button");
    const clearSpan = document.createElement("span");
    const nodeClear = document.createTextNode("Clear Board");
    clearBtn.appendChild(clearSpan);
    clearSpan.appendChild(nodeClear);
    document.getElementById("buttons").prepend(clearBtn);
    clearBtn.setAttribute("id", "clearBtn");
  }
  const startBtn = document.createElement("button");
  const startSpan = document.createElement("span");
  const nodeStart = document.createTextNode("Default Position");
  startBtn.appendChild(startSpan);
  startSpan.appendChild(nodeStart);
  document.getElementById("buttons").prepend(startBtn);
  startBtn.setAttribute("id", "startBtn");
  if (changeCount == -1) {
    changeCount++;
    board = Chessboard("board", {
      draggable: true,
      dropOffBoard: "trash",
      sparePieces: true,
      position: curPos,
      pieceTheme:
        "https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/alpha/{piece}.svg",
    });
    $("#startBtn").click(board.start);
    $("#clearBtn").click(board.clear);
  } else if (changeCount == 0) {
    changeCount++;
    board = Chessboard("board", {
      draggable: true,
      dropOffBoard: "trash",
      sparePieces: true,
      position: curPos,
      pieceTheme:
        "https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/spatial/{piece}.svg",
    });
    $("#startBtn").click(board.start);
    $("#clearBtn").click(board.clear);
  } else if (changeCount == 1) {
    changeCount++;
    board = Chessboard("board", {
      draggable: true,
      dropOffBoard: "trash",
      sparePieces: true,
      position: curPos,
      pieceTheme:
        "https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/maestro/{piece}.svg",
    });
    $("#startBtn").click(board.start);
    $("#clearBtn").click(board.clear);
  } else if (changeCount == 2) {
    changeCount = -1;
    board = Chessboard("board", {
      draggable: true,
      dropOffBoard: "trash",
      sparePieces: true,
      position: curPos,
      pieceTheme:
        "https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/fantasy/{piece}.svg",
    });
    $("#startBtn").click(board.start);
    $("#clearBtn").click(board.clear);
  }
});

$("#board1-save").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board1save ",
      type: "POST",
      data: {
        name: document.getElementById("board1-save").textContent,
        fen: fenPos,
      },
      success: function (response) {},
    });
  }
});

$("#board2-save").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board2save ",
      type: "POST",
      data: {
        name: document.getElementById("board2-save").textContent,
        fen: fenPos,
      },
      success: function (response) {},
    });
  }
});

$("#board3-save").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board3save ",
      type: "POST",
      data: {
        name: document.getElementById("board3-save").textContent,
        fen: fenPos,
      },
      success: function (response) {},
    });
  }
});

$("#board1-load").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board1load ",
      type: "GET",
      datatype: "text",
      success: function (res) {
        board.position(res);
      },
    });
  }
});

$("#board2-load").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board2load ",
      type: "GET",
      datatype: "text",
      success: function (res) {
        board.position(res);
      },
    });
  }
});

$("#board3-load").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board3load ",
      type: "GET",
      datatype: "text",
      success: function (res) {
        board.position(res);
      },
    });
  }
});

$("#play-bots").click(function () {
  let intervalId;
  let chess;
  clearInterval(intervalId);
  if (board.fen() == "8/8/8/8/8/8/8/8" || lastPlayed == true) {
    board.destroy();
    board = Chessboard("board", "start");
    chess = new Chess();
  } else {
    chess = new Chess(board.fen() + " w" + " -" + " -" + " 0" + " 1");
  }
  if (
    document.getElementById("startBtn") &&
    document.getElementById("clearBtn")
  ) {
    document.getElementById("startBtn").remove();
    document.getElementById("clearBtn").remove();
  }
  function slowMoves() {
    lastPlayed = true;
    const moves = chess.moves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    chess.move(move);
    board.position(chess.fen());
    if (chess.game_over()) {
      clearInterval(intervalId);
    }
    $("#change-theme").click(function () {
      clearInterval(intervalId);
    });
    $("#play-bots").click(function () {
      clearInterval(intervalId);
    });
  }
  intervalId = setInterval(slowMoves, 500);
});

const mousePos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
  mousePos.x = (x / window.innerWidth) - 0.15;
  mousePos.y = (y / window.innerHeight);
  document.documentElement.style.setProperty('--x', mousePos.x);
  document.documentElement.style.setProperty('--y', mousePos.y);
}

document.getElementById("board-create").addEventListener('mousemove', cursor => { saveCursorPosition(cursor.clientX, cursor.clientY); })

$(".name-edit").keypress(function(e){
  if(e.which == 13) {
      $(this).blur();
    }
});