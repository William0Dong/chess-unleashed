let fen_pos;
import "../scripts/node_modules/@chrisoakman/chessboardjs/dist/chessboard-1.0.0.js";
let board = Chessboard("board", {
  draggable: true,
  dropOffBoard: "trash",
  sparePieces: true,
});

$('#startBtn').click(board.start)
$('#clearBtn').click(board.clear)

$("#board1-save").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board1save ',
  type: 'POST',
  data: {
    name: "BOARD1",
    fen: fen_pos
  },
  success: function (response) { 
    
  }
        })
})

$("#board2-save").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board2save ',
  type: 'POST',
  data: {
    name: "BOARD2",
    fen: fen_pos
  },
  success: function (response) { 
    
  }
        })
})

$("#board3-save").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board3save ',
  type: 'POST',
  data: {
    name: "BOARD3",
    fen: fen_pos
  },
  success: function (response) { 
    
  }
        })
})

$("#board1-load").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board1load ',
  type: 'GET',
  datatype: "text",
  success: function (res) { 
    board.position(res)
  }
        })
})

$("#board1-load").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board1load ',
  type: 'GET',
  datatype: "text",
  success: function (res) { 
    board.position(res)
  }
        })
})

$("#board2-load").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board2load ',
  type: 'GET',
  datatype: "text",
  success: function (res) { 
    board.position(res)
  }
        })
})

$("#board3-load").click(function(){
  fen_pos = board.fen(board);
  $.ajax({
  url: ' http://localhost:3000/board3load ',
  type: 'GET',
  datatype: "text",
  success: function (res) { 
    board.position(res)
  }
        })
})